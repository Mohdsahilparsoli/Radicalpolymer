// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

// On Vercel (VERCEL=1 during the build) use the Vercel adapter – the /api route becomes a
// serverless function. Everywhere else (VPS, Hostinger Node app, local) use the Node server.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  site: 'https://www.radicalpolymer.com',
  // Pages are pre-rendered to static HTML; only /api/* runs on the server.
  // Vercel: 15 s limit keeps usage low on the free (Hobby) plan – sending mail takes 1–3 s.
  adapter: isVercel ? vercel({ maxDuration: 15 }) : node({ mode: 'standalone' }),
  trailingSlash: 'ignore',
  // Keep whitespace between inline elements exactly like the original theme markup.
  compressHTML: false,

  // Old .html URLs keep working (Google, bookmarks, ads).
  redirects: {
    '/index.html': '/',
    '/about-us.html': '/about-us',
    '/products.html': '/products',
    '/testimonials.html': '/testimonials',
    '/blog.html': '/blog',
    '/contact-us.html': '/contact-us',
    '/privacy-policy.html': '/privacy-policy',
    '/cookies-policy.html': '/cookies-policy',
    '/disclaimer.html': '/disclaimer',
    '/thankyou.html': '/thank-you',
  },

  // SMTP settings are optional at build time (the site still builds and serves pages without them)
  // and are read at runtime from the environment (.env) – never hard-coded.
  env: {
    schema: {
      SMTP_HOST: envField.string({ context: 'server', access: 'secret', optional: true }),
      SMTP_PORT: envField.number({ context: 'server', access: 'secret', default: 465 }),
      SMTP_SECURE: envField.boolean({ context: 'server', access: 'secret', default: true }),
      SMTP_USER: envField.string({ context: 'server', access: 'secret', optional: true }),
      SMTP_PASS: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAIL_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAIL_TO: envField.string({ context: 'server', access: 'secret', default: 'sales@radicalpolymer.com,radicalpolymers.web@gmail.com' }),
      SEND_AUTO_REPLY: envField.boolean({ context: 'server', access: 'secret', default: true }),
    },
  },
});
