# Radical Polymers – Astro website (redesign, staging)

Astro version of the final "Clean Corporate" design: home page plus every inner page,
built as plain static HTML. **The site is currently set to noindex** so search engines
don't pick up the staging copy.

## Run it
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```
Node.js 22.12 or newer.

## Structure
```
src/
  data/site.ts        NOINDEX flag, phone/email/address, menu, image helper, URL helpers
  data/content.ts     products, industries, blog posts, FAQs, testimonials, policies …
  data/areas.ts       service areas (cities, hubs, distance, region) + area FAQs
  layouts/BaseLayout.astro   <head>, header, footer, popup, shared script
  components/         reusable sections (PageHero, Split, Faq, Testimonials, Cta, Enquiry …)
  pages/              one file per page; products/, industries/, blog/ and service-areas/ use [slug] templates
  styles/style.css    all site CSS
  scripts/main.js     menu, sliders, tabs, filters, FAQ, lightbox, enquiry popup, forms
public/               logo, robots.txt, images, Google verification file
vercel.json           redirects from the old *.html URLs + X-Robots-Tag header
```

### URLs
| Page | URL |
|---|---|
| Product | `/products/{slug}/` |
| Industry | `/industries/{slug}/` |
| Blog post | `/blog/{slug}/` |
| Service area | `/service-areas/{slug}/` (listing: `/service-areas/`) |
| Other pages | `/{name}/` e.g. `/about-us/`, `/contact-us/` |

Old links such as `/rubber-o-rings.html` or `/blog-nbr-vs-epdm-vs-viton.html`
redirect permanently to the new URLs (see `vercel.json`).

## Noindex – remove before launch
Noindex is applied in three places. When the site goes live, change all three:
1. `src/data/site.ts` → `export const NOINDEX = false;` (removes the robots meta tag)
2. `public/robots.txt` → replace `Disallow: /` with `Allow: /` and add a sitemap line
3. `vercel.json` → delete the `X-Robots-Tag` header block

## Ready for WordPress (headless)
All content comes from `src/data/*.ts`, and pages only read those exports. To move to
WordPress + WPGraphQL later, replace each export with a GraphQL query that returns
the same shape. For example, `getStaticPaths()` in `pages/products/[slug].astro`
would fetch products from WordPress instead of `PRODUCTS`. The page templates
don't need to change.

## Forms
The enquiry and popup forms validate and show a success message, but nothing is
sent yet. See the `TODO` in `src/scripts/main.js`, and connect it to a form backend
(WordPress / Contact Form 7 REST, an API route, or a form service).

## Adding a service area
Add one object to `AREAS` in `src/data/areas.ts` (slug, name, state, region, km, images,
hubs, industries, note). The city page, listing card, region list and menu (when
`featured: true`) update automatically on the next build.
