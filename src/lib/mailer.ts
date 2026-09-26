import nodemailer, { type SendMailOptions } from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } from 'astro:env/server';

/** True when all SMTP settings are present (e.g. added in Vercel → Environment Variables). */
export const isMailConfigured = () => Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

/**
 * A fresh, non-pooled SMTP transport per request.
 * Serverless functions (Vercel) freeze between requests, so pooled/idle sockets would break;
 * strict timeouts make sure a slow mail server can never hang the function.
 */
function createTransport() {
	return nodemailer.createTransport({
		host: SMTP_HOST,
		port: SMTP_PORT,
		secure: SMTP_SECURE, // true for 465, false for 587 (STARTTLS)
		auth: { user: SMTP_USER, pass: SMTP_PASS },
		pool: false,
		connectionTimeout: 8_000,
		greetingTimeout: 8_000,
		socketTimeout: 10_000,
	});
}

export const mailFrom = () => MAIL_FROM || `"Radical Polymers Website" <${SMTP_USER}>`;
export const mailTo = () =>
	MAIL_TO.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

/**
 * Sends all messages over one SMTP connection and closes it before the function returns.
 * The first message is required; the others (e.g. auto-reply) are best-effort.
 */
export async function sendMails(required: SendMailOptions, ...optional: SendMailOptions[]) {
	const transport = createTransport();
	try {
		await transport.sendMail(required);
		const results = await Promise.allSettled(optional.map((m) => transport.sendMail(m)));
		results.forEach((r) => {
			if (r.status === 'rejected') console.error('[mail] optional message failed:', r.reason?.message ?? r.reason);
		});
	} finally {
		transport.close();
	}
}
