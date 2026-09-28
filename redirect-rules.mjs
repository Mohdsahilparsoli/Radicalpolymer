// One place for the URL rules. Every page URL ends with "/":
//   /contact-us.html          -> /contact-us/
//   /contact-us               -> /contact-us/
//   /contact-us/index.html    -> /contact-us/
//   /index.html, /index       -> /
// Used by the dev server (astro.config.mjs) and the Node server (server.mjs).
// Vercel gets the same behaviour from `redirects` + `trailingSlash: 'always'` in astro.config.mjs.

// Real files that end in .html and must NOT be redirected (Google Search Console verification).
const KEEP = new Set(['/googlef37250733d352937.html']);

// Old URLs whose clean name is different.
const RENAMED = {
	'/index': '/',
	'/index.php': '/',
	'/home': '/',
	'/thankyou': '/thank-you/',
	'/send.php': '/contact-us/',
};

/** Returns the URL path the visitor should be sent to, or null if the path is already correct. */
export function redirectTarget(pathname) {
	if (KEEP.has(pathname)) return null;
	// Leave internal/dev/asset paths alone.
	if (/^\/(_astro|@|node_modules|src|\.well-known)\b/.test(pathname) || pathname.startsWith('/@')) return null;

	let p = pathname.replace(/\/{2,}/g, '/');
	if (RENAMED[p.toLowerCase()]) return RENAMED[p.toLowerCase()];

	p = p.replace(/\/index\.html$/i, '/'); // /contact-us/index.html -> /contact-us/
	p = p.replace(/\.html$/i, ''); // /contact-us.html -> /contact-us
	if (RENAMED[p.toLowerCase()]) return RENAMED[p.toLowerCase()];

	const last = p.split('/').pop();
	if (!p.endsWith('/') && !last.includes('.')) p += '/'; // /contact-us -> /contact-us/ (not /css/rs6.css)

	return p === pathname ? null : p;
}

/** Connect/Node style middleware: 301 for GET/HEAD requests that need a new URL. */
export function redirectMiddleware(req, res, next) {
	if (req.method === 'GET' || req.method === 'HEAD') {
		const q = req.url.indexOf('?');
		const pathname = q === -1 ? req.url : req.url.slice(0, q);
		const target = redirectTarget(pathname);
		if (target) {
			res.writeHead(301, { Location: target + (q === -1 ? '' : req.url.slice(q)) });
			return res.end();
		}
	}
	next();
}
