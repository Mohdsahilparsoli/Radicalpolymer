import { site } from '../data/site';

/* Brand colours (same as the website) */
const ORANGE = '#ff8200';
const DARK = '#19232b';
const TEXT = '#444b52';
const MUTED = '#8a9199';
const BG = '#f2f3f5';
const LOGO_URL = `${site.url}/images/logo-email.png`;

export const escapeHtml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const nl2br = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br>');

const formatDate = (date: Date) =>
	date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST';

/** Shared, table-based shell that renders well in Gmail, Outlook and mobile mail apps. */
function layout({ preheader, title, body }: { preheader: string; title: string; body: string }) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BG};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
        <!-- Header -->
        <tr>
          <td style="background:${DARK};padding:22px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="56" valign="middle"><img src="${LOGO_URL}" width="48" height="41" alt="${site.name}" style="display:block;border:0;"></td>
                <td valign="middle" style="padding-left:14px;color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:.3px;">${site.name}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="height:4px;background:${ORANGE};font-size:0;line-height:0;">&nbsp;</td></tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;color:${TEXT};font-size:15px;line-height:1.6;">
            ${body}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:${BG};padding:20px 32px;color:${MUTED};font-size:12px;line-height:1.6;text-align:center;">
            <strong style="color:${DARK};">${site.name}</strong><br>
            ${escapeHtml(site.address)}<br>
            <a href="${site.phoneHref}" style="color:${MUTED};text-decoration:none;">${site.phone}</a>
            &nbsp;·&nbsp;
            <a href="mailto:${site.email}" style="color:${MUTED};text-decoration:none;">${site.email}</a>
            &nbsp;·&nbsp;
            <a href="${site.url}" style="color:${MUTED};text-decoration:none;">radicalpolymer.com</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function detailRow(label: string, valueHtml: string) {
	return `<tr>
    <td style="padding:12px 16px;border-bottom:1px solid #e9ecef;width:130px;color:${MUTED};font-size:13px;text-transform:uppercase;letter-spacing:.5px;vertical-align:top;">${label}</td>
    <td style="padding:12px 16px;border-bottom:1px solid #e9ecef;color:${DARK};font-size:15px;vertical-align:top;">${valueHtml}</td>
  </tr>`;
}

function button(href: string, label: string, color = ORANGE) {
	return `<a href="${href}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 22px;border-radius:4px;margin:0 8px 8px 0;">${label}</a>`;
}

export interface Enquiry {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

/** Email sent to Radical Polymers when someone submits the contact form. */
export function enquiryNotification(e: Enquiry, meta: { submittedAt: Date; page?: string }) {
	const subject = `New enquiry: ${e.subject} – ${e.name}`;
	const phoneDigits = e.phone.replace(/[^\d+]/g, '');
	const waNumber = phoneDigits.replace(/^\+/, '').replace(/^(\d{10})$/, '91$1');

	const body = `
    <p style="margin:0 0 6px;color:${ORANGE};font-size:13px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">New website enquiry</p>
    <h1 style="margin:0 0 20px;color:${DARK};font-size:22px;line-height:1.3;">${escapeHtml(e.subject)}</h1>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e9ecef;border-radius:6px;border-collapse:separate;">
      ${detailRow('Name', escapeHtml(e.name))}
      ${detailRow('Email', `<a href="mailto:${escapeHtml(e.email)}" style="color:${ORANGE};text-decoration:none;">${escapeHtml(e.email)}</a>`)}
      ${detailRow('Phone', `<a href="tel:${escapeHtml(phoneDigits)}" style="color:${ORANGE};text-decoration:none;">${escapeHtml(e.phone)}</a>`)}
      ${detailRow('Subject', escapeHtml(e.subject))}
    </table>

    <p style="margin:24px 0 8px;color:${MUTED};font-size:13px;text-transform:uppercase;letter-spacing:.5px;">Message</p>
    <div style="background:${BG};border-left:4px solid ${ORANGE};padding:16px 18px;border-radius:4px;color:${DARK};">${nl2br(e.message)}</div>

    <div style="margin-top:28px;">
      ${button(`mailto:${encodeURIComponent(e.email)}?subject=${encodeURIComponent('Re: ' + e.subject)}`, 'Reply by email')}
      ${button(`tel:${phoneDigits}`, 'Call customer', DARK)}
      ${waNumber.length >= 11 ? button(`https://wa.me/${waNumber}`, 'WhatsApp', '#25d366') : ''}
    </div>

    <p style="margin:24px 0 0;color:${MUTED};font-size:12px;">
      Received ${formatDate(meta.submittedAt)}${meta.page ? ` from <a href="${escapeHtml(meta.page)}" style="color:${MUTED};">${escapeHtml(meta.page)}</a>` : ''}.
    </p>`;

	const text = [
		'New website enquiry',
		'',
		`Name:    ${e.name}`,
		`Email:   ${e.email}`,
		`Phone:   ${e.phone}`,
		`Subject: ${e.subject}`,
		'',
		'Message:',
		e.message,
		'',
		`Received ${formatDate(meta.submittedAt)}`,
	].join('\n');

	return { subject, html: layout({ preheader: `${e.name}: ${e.message.slice(0, 90)}`, title: subject, body }), text };
}

/** Acknowledgement sent to the customer. */
export function enquiryAutoReply(e: Enquiry) {
	const firstName = e.name.trim().split(/\s+/)[0];
	const subject = `We have received your enquiry – ${site.name}`;

	const body = `
    <h1 style="margin:0 0 16px;color:${DARK};font-size:22px;">Thank you, ${escapeHtml(firstName)}!</h1>
    <p style="margin:0 0 16px;">We have received your enquiry and our team will get back to you within <strong>one working day</strong>.</p>
    <p style="margin:0 0 8px;color:${MUTED};font-size:13px;text-transform:uppercase;letter-spacing:.5px;">Your message</p>
    <div style="background:${BG};border-left:4px solid ${ORANGE};padding:14px 18px;border-radius:4px;color:${DARK};">
      <strong>${escapeHtml(e.subject)}</strong><br>${nl2br(e.message)}
    </div>
    <p style="margin:24px 0 16px;">Need a faster answer? Call or WhatsApp us:</p>
    <div>
      ${button(site.phoneHref, `Call ${site.phone}`)}
      ${button(site.whatsappHref, 'WhatsApp us', '#25d366')}
    </div>
    <p style="margin:24px 0 0;">Warm regards,<br><strong style="color:${DARK};">Team ${site.name}</strong><br>
    <span style="color:${MUTED};font-size:13px;">Rubber O-Rings · Gaskets · Seals · Diaphragms · Bushes · Grommets</span></p>`;

	const text = [
		`Thank you, ${firstName}!`,
		'',
		'We have received your enquiry and our team will get back to you within one working day.',
		'',
		`Your message – ${e.subject}:`,
		e.message,
		'',
		`Call / WhatsApp: ${site.phone}`,
		'',
		`Team ${site.name}`,
	].join('\n');

	return { subject, html: layout({ preheader: 'Our team will get back to you within one working day.', title: subject, body }), text };
}

/** Email sent to Radical Polymers when someone subscribes in the footer. */
export function newsletterNotification(email: string, meta: { submittedAt: Date; page?: string }) {
	const subject = `New newsletter sign-up – ${email}`;
	const body = `
    <p style="margin:0 0 6px;color:${ORANGE};font-size:13px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Newsletter</p>
    <h1 style="margin:0 0 20px;color:${DARK};font-size:22px;">New subscriber</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e9ecef;border-radius:6px;border-collapse:separate;">
      ${detailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:${ORANGE};text-decoration:none;">${escapeHtml(email)}</a>`)}
      ${detailRow('Date', formatDate(meta.submittedAt))}
      ${meta.page ? detailRow('Page', escapeHtml(meta.page)) : ''}
    </table>`;
	const text = `New newsletter sign-up: ${email}\nDate: ${formatDate(meta.submittedAt)}`;
	return { subject, html: layout({ preheader: `${email} subscribed to updates`, title: subject, body }), text };
}
