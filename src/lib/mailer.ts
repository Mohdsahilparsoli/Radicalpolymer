import nodemailer, { type Transporter } from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } from 'astro:env/server';

let transporter: Transporter | undefined;

/** One reusable SMTP connection pool for the whole server. */
export function getTransporter() {
	transporter ??= nodemailer.createTransport({
		host: SMTP_HOST,
		port: SMTP_PORT,
		secure: SMTP_SECURE, // true for 465, false for 587 (STARTTLS)
		auth: { user: SMTP_USER, pass: SMTP_PASS },
		pool: true,
	});
	return transporter;
}

export const mailFrom = () => MAIL_FROM || `"Radical Polymers Website" <${SMTP_USER}>`;
export const mailTo = () =>
	MAIL_TO.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
