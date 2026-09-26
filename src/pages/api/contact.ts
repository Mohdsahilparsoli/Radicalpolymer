import type { APIRoute } from 'astro';
import { SEND_AUTO_REPLY } from 'astro:env/server';
import { isMailConfigured, mailFrom, mailTo, sendMails } from '../../lib/mailer';
import { enquiryAutoReply, enquiryNotification, newsletterNotification, type Enquiry } from '../../lib/email-templates';

// This route runs as a server / serverless function – everything else is static HTML.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

const MAX_BODY_BYTES = 50_000; // a real enquiry is < 10 KB

/* Small in-memory rate limit: 5 submissions per IP per 10 minutes (per server instance). */
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
	const now = Date.now();
	if (hits.size > 5_000) hits.clear(); // never let memory grow unbounded
	const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
	recent.push(now);
	hits.set(ip, recent);
	return recent.length > 5;
}

const clientIp = (request: Request, fallback?: string) =>
	request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || fallback || 'unknown';

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (v: FormDataEntryValue | null, max: number) =>
	String(v ?? '')
		.trim()
		.slice(0, max);

export const POST: APIRoute = async ({ request, clientAddress }) => {
	if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
		return json({ ok: false, message: 'Message is too long.' }, 413);
	}

	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, message: 'Invalid request.' }, 400);
	}

	// Honeypot: real visitors never fill this hidden field.
	if (clean(form.get('company_website'), 200)) return json({ ok: true });

	let ip = 'unknown';
	try {
		ip = clientIp(request, clientAddress);
	} catch {
		ip = clientIp(request);
	}
	if (rateLimited(ip)) {
		return json({ ok: false, message: 'Too many requests. Please try again in a few minutes.' }, 429);
	}

	const type = clean(form.get('form_type'), 20) || 'contact';
	const page = request.headers.get('referer') ?? undefined;
	const submittedAt = new Date();

	if (!isMailConfigured()) {
		console.error('[contact] SMTP is not configured – add SMTP_HOST, SMTP_USER and SMTP_PASS to the environment.');
		return json({ ok: false, message: 'Our contact form is temporarily unavailable. Please call or WhatsApp us.' }, 503);
	}

	try {
		if (type === 'newsletter') {
			const email = clean(form.get('email'), 150);
			if (!EMAIL_RE.test(email)) return json({ ok: false, message: 'Please enter a valid email address.' }, 422);

			const mail = newsletterNotification(email, { submittedAt, page });
			await sendMails({ from: mailFrom(), to: mailTo(), replyTo: email, ...mail });
			return json({ ok: true, message: 'Thank you for subscribing!' });
		}

		const enquiry: Enquiry = {
			name: clean(form.get('name'), 100),
			email: clean(form.get('email'), 150),
			phone: clean(form.get('phone'), 20),
			subject: clean(form.get('subject'), 150),
			message: clean(form.get('message'), 5000),
		};

		const errors: Record<string, string> = {};
		if (enquiry.name.length < 2) errors.name = 'Please enter your name.';
		if (!EMAIL_RE.test(enquiry.email)) errors.email = 'Please enter a valid email address.';
		if (!PHONE_RE.test(enquiry.phone)) errors.phone = 'Please enter a valid phone number.';
		if (enquiry.subject.length < 2) errors.subject = 'Please enter a subject.';
		if (enquiry.message.length < 5) errors.message = 'Please write a short message.';
		if (Object.keys(errors).length) {
			return json({ ok: false, message: 'Please correct the highlighted fields.', errors }, 422);
		}

		const notification = enquiryNotification(enquiry, { submittedAt, page });
		// Enquiry to the company is required; the customer auto-reply is best-effort.
		// Both go over one SMTP connection and finish before the function returns
		// (serverless functions stop running once the response is sent).
		await sendMails(
			{
				from: mailFrom(),
				to: mailTo(),
				replyTo: `"${enquiry.name.replace(/"/g, '')}" <${enquiry.email}>`,
				...notification,
			},
			...(SEND_AUTO_REPLY ? [{ from: mailFrom(), to: enquiry.email, ...enquiryAutoReply(enquiry) }] : []),
		);

		return json({ ok: true, message: 'Thank you! Your message has been sent.' });
	} catch (err) {
		console.error('[contact] sendMail failed:', err);
		return json({ ok: false, message: 'Sorry, your message could not be sent right now. Please call or WhatsApp us.' }, 502);
	}
};
