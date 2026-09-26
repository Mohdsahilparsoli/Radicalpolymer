// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.radicalpolymer.com',
  // Pages are pre-rendered to static HTML; only /api/* runs on the Node server.
  adapter: node({ mode: 'standalone' }),
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

  // SMTP settings are read at runtime from the environment (.env) – never hard-coded.
  env: {
    schema: {
      SMTP_HOST: envField.string({ context: 'server', access: 'secret' }),
      SMTP_PORT: envField.number({ context: 'server', access: 'secret', default: 465 }),
      SMTP_SECURE: envField.boolean({ context: 'server', access: 'secret', default: true }),
      SMTP_USER: envField.string({ context: 'server', access: 'secret' }),
      SMTP_PASS: envField.string({ context: 'server', access: 'secret' }),
      MAIL_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAIL_TO: envField.string({ context: 'server', access: 'secret', default: 'sales@radicalpolymer.com,radicalpolymers.web@gmail.com' }),
      SEND_AUTO_REPLY: envField.boolean({ context: 'server', access: 'secret', default: true }),
    },
  },
});
