// Central place for business details, navigation and product names.
// Change a value here and it updates everywhere on the site.

export const site = {
	name: 'Radical Polymers',
	url: 'https://www.radicalpolymer.com',
	description:
		'Radical Polymers, Ghaziabad – manufacturer of rubber O-rings, gaskets, seals, diaphragms, bushes, grommets, cutless rubber bearings and rubber sheets & strips.',
	phone: '+91 9711114333',
	phoneHref: 'tel:+919711114333',
	whatsappHref: 'https://wa.me/919711114333',
	email: 'sales@radicalpolymer.com',
	address: '155-A Model Town West, Ghaziabad',
	logo: '/images/logo.png',
	footerLogo: '/images/logo.png',
	googleAdsId: 'AW-1037076678',
	gtmId: 'GTM-52ZK657V',
};

export const socials = [
	{
		name: 'Facebook',
		icon: 'pbmit-base-icon-facebook-squared',
		cls: 'pbmit-social-facebook',
		href: 'https://www.facebook.com/profile.php?id=61550014208559',
	},
	{ name: 'Twitter', icon: 'pbmit-base-icon-twitter', cls: 'pbmit-social-twitter', href: 'https://twitter.com/radicalpol67559' },
	{
		name: 'Instagram',
		icon: 'pbmit-base-icon-instagram',
		cls: 'pbmit-social-instagram',
		href: 'https://instagram.com/radi.calpolymers?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
	},
	{
		name: 'LinkedIn',
		icon: 'pbmit-base-icon-linkedin-squared',
		cls: 'pbmit-social-youtube',
		href: 'https://www.linkedin.com/in/sahil-sharma-bb3196241/',
	},
];

export const products = [
	'Rubber O-Rings',
	'Rubber Gaskets',
	'Rubber Seals',
	'Rubber Diaphragm',
	'Rubber Bush',
	'Rubber Grommets',
	'Cutless Rubber Bearing',
	'Rubber Sheet And Strips',
];

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products/', children: products.map((label) => ({ label, href: '/products/' })) },
	{ label: 'About Us', href: '/about-us/' },
	{ label: 'Testimonials', href: '/testimonials/' },
	{ label: 'Contact Us', href: '/contact-us/' },
];

export const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About Us', href: '/about-us/' },
	{ label: 'Products', href: '/products/' },
	{ label: 'Contact Us', href: '/contact-us/' },
	{ label: 'Cookies Policy', href: '/cookies-policy/' },
	{ label: 'Privacy Policy', href: '/privacy-policy/' },
	{ label: 'Disclaimer', href: '/disclaimer/' },
];
