// @ts-check
import { defineConfig } from 'astro/config';

// Fully static build. Every page is pre-rendered to dist/<page>/index.html.
// When WordPress is connected, data is fetched at build time and a deploy hook rebuilds on publish.
export default defineConfig({
  site: 'https://www.radicalpolymer.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Old .html URL redirects live in vercel.json (static build can't create both /x.html and /x/).
});
