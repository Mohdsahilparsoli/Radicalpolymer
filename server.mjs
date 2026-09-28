// Node server for VPS / Hostinger Node.js app (not used on Vercel).
// Puts the URL rules from redirect-rules.mjs in front of Astro's standalone server, so
// /contact-us, /contact-us.html and /contact-us/index.html all 301 to /contact-us/.
import http from 'node:http';
import { redirectMiddleware } from './redirect-rules.mjs';

process.env.ASTRO_NODE_AUTOSTART = 'disabled';
const { handler } = await import('./dist/server/entry.mjs');

const server = http.createServer((req, res) => redirectMiddleware(req, res, () => handler(req, res)));

const port = Number(process.env.PORT) || 4321;
const host = process.env.HOST || '0.0.0.0';
server.listen(port, host, () => console.log(`Radical Polymers running on http://${host}:${port}`));
