# Radical Polymers – Astro website

Static Astro site (fast HTML pages) + one small Node API route that sends the
contact / newsletter forms with **Nodemailer**.

## Requirements
- Node.js **22.12 or newer**
- An SMTP email account (Gmail, Zoho, Hostinger, GoDaddy mail …)

## Setup
```bash
npm install
cp .env.example .env      # then fill in your SMTP details
npm run dev               # http://localhost:4321
```

### Gmail SMTP
1. Turn on 2-Step Verification on the Google account.
2. Google Account → Security → **App passwords** → create one.
3. In `.env`: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`,
   `SMTP_USER=<gmail address>`, `SMTP_PASS=<16-letter app password>`.

## Build & run in production
```bash
npm run build
npm start                 # = node --env-file=.env ./dist/server/entry.mjs
```
Change host/port with `HOST=0.0.0.0 PORT=3000 npm start`.
Keep it running with PM2: `pm2 start npm --name radicalpolymer -- start`.

Behind Nginx/Apache, proxy to the Node port and pass the `Host` header
(`proxy_set_header Host $host;`) – Astro rejects form posts whose origin does not match.

> The site now needs **Node.js hosting** (VPS, Hostinger/Cloud Node.js app, Render, Railway …).
> Plain PHP shared hosting cannot run the Nodemailer API.

## Project structure
```
src/
  data/site.ts            phone, email, address, social links, menu, product names – edit here
  layouts/BaseLayout.astro  <head>, CDN libraries, header/footer, scripts
  components/             Header, Footer, TitleBar, FloatingContact, ContactForm,
                          NewsletterForm, HeroSlider
  pages/                  one file per page (+ api/contact.ts = Nodemailer endpoint)
  lib/mailer.ts           SMTP transport (reads .env)
  lib/email-templates.ts  HTML email templates (enquiry, auto-reply, newsletter)
  scripts/forms.ts        AJAX form submit + validation
  styles/                 style.css, responsive.css, icons.css
public/
  images/  fonts/  js/ (theme + Slider Revolution)  css/rs6.css
```

## Forms
- **Contact Us** → email to `MAIL_TO` with a branded HTML template (reply-to = customer),
  plus an optional auto-reply to the customer (`SEND_AUTO_REPLY=true`), then redirects to `/thank-you`.
- **Footer "Sign Up"** → notification email to `MAIL_TO`.
- Spam protection: hidden honeypot field + 5 submissions / 10 min per IP; all input is validated and HTML-escaped.

## URLs
Pages use clean URLs (`/about-us`). Old links such as `/about-us.html` redirect (301) automatically.
