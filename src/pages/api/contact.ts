import type { APIRoute } from 'astro';
import { SEND_AUTO_REPLY } from 'astro:env/server';
import { getTransporter, mailFrom, mailTo } from '../../lib/mailer';
import { enquiryAutoReply, enquiryNotification, newsletterNotification, type Enquiry } from '../../lib/email-templates';

// This route runs on the server (Node) – everything else is static HTML.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

/* Very small in-memory rate limit: 5 submissions per IP per 10 minutes. */
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
	recent.push(now);
	hits.set(ip, recent);
	return recent.length > 5;
}

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (v: FormDataEntryValue | null, max: number) =>
	String(v ?? '')
		.trim()
		.slice(0, max);

export const POST: APIRoute = async ({ request, clientAddress }) => {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, message: 'Invalid request.' }, 400);
	}

	// Honeypot: real visitors never fill this hidden field.
	if (clean(form.get('company_website'), 200)) return json({ ok: true });

	if (rateLimited(clientAddress ?? 'unknown')) {
		return json({ ok: false, message: 'Too many requests. Please try again in a few minutes.' }, 429);
	}

	const type = clean(form.get('form_type'), 20) || 'contact';
	const page = request.headers.get('referer') ?? undefined;
	const submittedAt = new Date();
	const transporter = getTransporter();

	try {
		if (type === 'newsletter') {
			const email = clean(form.get('email'), 150);
			if (!EMAIL_RE.test(email)) return json({ ok: false, message: 'Please enter a valid email address.' }, 422);

			const mail = newsletterNotification(email, { submittedAt, page });
			await transporter.sendMail({ from: mailFrom(), to: mailTo(), replyTo: email, ...mail });
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
		await transporter.sendMail({
			from: mailFrom(),
			to: mailTo(),
			replyTo: `"${enquiry.name.replace(/"/g, '')}" <${enquiry.email}>`,
			...notification,
		});

		if (SEND_AUTO_REPLY) {
			// The enquiry is already delivered – a failed auto-reply must not fail the request.
			const reply = enquiryAutoReply(enquiry);
			transporter.sendMail({ from: mailFrom(), to: enquiry.email, ...reply }).catch((err) => {
				console.error('[contact] auto-reply failed:', err?.message ?? err);
			});
		}

		return json({ ok: true, message: 'Thank you! Your message has been sent.' });
	} catch (err) {
		console.error('[contact] sendMail failed:', err);
		return json({ ok: false, message: 'Sorry, your message could not be sent right now. Please call or WhatsApp us.' }, 502);
	}
};
