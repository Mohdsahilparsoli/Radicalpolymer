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

## Deploy on Vercel (recommended)
The project detects Vercel automatically (`@astrojs/vercel` adapter): pages are served as static
files and `/api/contact` runs as a serverless function. `vercel.json` already sets the framework to Astro.

1. Push this folder to GitHub (`package.json` must be at the **root** of the repo –
   otherwise set **Settings → General → Root Directory** to the folder that contains it).
2. Vercel → **Add New Project** → import the repo. Framework Preset: **Astro**.
   Leave Build Command / Output Directory **empty** (do not override them).
3. **Settings → Environment Variables** → add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`,
   `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`, `SEND_AUTO_REPLY` (same values as `.env`).
4. **Deployments → Redeploy** (env variables apply only to new deployments).

### Free (Hobby) plan – already tuned
- All pages, images, CSS and JS are static files on Vercel's CDN – they use **no function time**.
- Only `/api/contact` is a function: `maxDuration` 15 s, runs in Mumbai (`bom1`, set in `vercel.json`).
- SMTP uses one short connection per request with 8–10 s timeouts – a slow mail server returns a
  friendly error instead of hanging or crashing the function. The auto-reply is sent before the
  function finishes (serverless functions stop once the response is sent).
- If the SMTP variables are missing the site still builds and works; the form shows
  "temporarily unavailable – please call or WhatsApp us" and the reason is in **Vercel → Logs**.
- Requests larger than 50 KB are rejected; 5 submissions / 10 min per IP.
- Images are compressed (~5.3 MB → 1.5 MB) to save bandwidth (Hobby includes 100 GB/month).

## Build & run on your own Node server (VPS / Hostinger Node.js app)
```bash
npm run build
npm start                 # = node --env-file-if-exists=.env ./server.mjs
```
Change host/port with `HOST=0.0.0.0 PORT=3000 npm start`.
Keep it running with PM2: `pm2 start npm --name radicalpolymer -- start`.

Behind Nginx/Apache, proxy to the Node port and pass the `Host` header
(`proxy_set_header Host $host;`) – Astro rejects form posts whose origin does not match.

> Needs Vercel or any Node.js hosting. Plain PHP shared hosting cannot run the Nodemailer API.

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
Every page URL ends with `/` (e.g. `/contact-us/`). Other versions redirect permanently:

| Visitor opens | Goes to |
|---|---|
| `/contact-us`, `/contact-us.html`, `/contact-us/index.html` | `/contact-us/` (same for every page) |
| `/index.html` | `/` |
| `/thankyou.html`, `/thank-you.html` | `/thank-you/` |
| `/send.php` | `/contact-us/` |

- **`npm run dev` (localhost:4321):** rules in `redirect-rules.mjs`, hooked in via `astro.config.mjs`.
- **Node server (VPS/Hostinger, `npm start`):** `server.mjs` uses the same `redirect-rules.mjs`.
- **Vercel:** `trailingSlash: 'always'` + `redirects` in `astro.config.mjs`.
- `googlef37250733d352937.html` (Google verification) is never redirected.
- New internal links must end with `/` (e.g. `href="/blog/"`).
