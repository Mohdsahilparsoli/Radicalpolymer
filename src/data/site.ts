// Global site settings (later: WordPress "Site Settings" options page).
import { IMG, PRODUCTS, INDUSTRIES } from './content';
import { AREAS, areaUrl } from './areas';

/** Staging switch: true = whole site is noindex (meta robots + robots.txt + X-Robots-Tag header). */
export const NOINDEX = true;

export const SITE = {
  name: 'Radical Polymers',
  url: 'https://www.radicalpolymer.com',
  phone: '+91 9711114333',
  phoneHref: 'tel:+919711114333',
  whatsapp: 'https://wa.me/919711114333',
  email: 'sales@radicalpolymer.com',
  address: '155-A Model Town West, Ghaziabad, Uttar Pradesh',
  addressShort: '155-A Model Town West, Ghaziabad',
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM',
  mapEmbed: 'https://www.google.com/maps?q=155-A+Model+Town+West,+Ghaziabad,+Uttar+Pradesh&output=embed',
  social: [
    { icon: 'fa-brands fa-facebook-f', label: 'Facebook', href: '#' },
    { icon: 'fa-brands fa-instagram', label: 'Instagram', href: '#' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: '#' },
    { icon: 'fa-brands fa-youtube', label: 'YouTube', href: '#' },
  ],
  about: '“Radical Polymers” are a leading Manufacturer of a wide range of Rubber Gaskets, Rubber O-Rings, Rubber Seals, etc.',
};

/** Unsplash image URL from a key in IMG (or a raw photo id). */
export const img = (key: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${IMG[key] ?? key}?auto=format&fit=crop&w=${w}&q=${q}`;

export const url = {
  product: (slug: string) => `/products/${slug}/`,
  industry: (slug: string) => `/industries/${slug}/`,
  post: (slug: string) => `/blog/${slug}/`,
  area: (slug: string) => `/service-areas/${slug}/`,
};

export type NavItem = {
  label: string; href: string; key: string;
  children?: { label: string; href: string; icon: string }[];
  /** Optional image card shown on the right of a wide (mega) dropdown. */
  feat?: { href: string; img: string; title: string; sub: string };
};

export const NAV: NavItem[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About Us', href: '/about-us/', key: 'about' },
  {
    label: 'Products', href: '/products/', key: 'products', children: PRODUCTS.map((p) => ({ label: p.name, href: url.product(p.slug), icon: p.icon })),
    feat: { href: '/products/custom-rubber-parts/', img: 'custom', title: 'Need a Custom Part?', sub: 'Developed from your drawing or sample →' },
  },
  { label: 'Industries', href: '/industries/', key: 'industries', children: INDUSTRIES.map((i) => ({ label: i.name, href: url.industry(i.slug), icon: i.icon })) },
  {
    label: 'Manufacturing', href: '/manufacturing/', key: 'manufacturing', children: [
      { label: 'Manufacturing Facility', href: '/manufacturing-facility/', icon: 'fa-solid fa-warehouse' },
      { label: 'Quality & Testing', href: '/quality-testing/', icon: 'fa-solid fa-microscope' },
      { label: 'Custom Manufacturing', href: '/custom-manufacturing/', icon: 'fa-solid fa-pen-ruler' },
    ],
  },
  {
    label: 'Service Areas', href: '/service-areas/', key: 'areas',
    children: AREAS.filter((a) => a.featured).map((a) => ({ label: a.name, href: areaUrl(a.slug), icon: 'fa-solid fa-location-dot' })),
    feat: { href: '/service-areas/', img: 'truck', title: 'Supplying Across India', sub: `View all ${AREAS.length} service areas →` },
  },
  { label: 'Why Choose Us', href: '/why-choose-us/', key: 'why' },
  { label: 'Testimonials', href: '/testimonials/', key: 'testimonials' },
  { label: 'Blog', href: '/blog/', key: 'blog' },
  { label: 'Contact Us', href: '/contact-us/', key: 'contact' },
];
