// Service areas. Later: replace AREAS with a WPGraphQL query (e.g. a "service_area" custom post type
// with the same fields) — the listing page and the [slug] template don't need to change.

export type Region = 'Delhi NCR' | 'North India' | 'West India' | 'South India' | 'East India';

export type Area = {
  slug: string;
  name: string;
  state: string;
  region: Region;
  /** Approximate road distance from our Ghaziabad unit, in km. */
  km: number;
  /** Image key from IMG or a raw Unsplash photo id. */
  img: string;
  img2: string;
  /** Industrial areas / clusters we supply to in and around the city. */
  hubs: string[];
  /** Industry slugs from INDUSTRIES that are strongest in this city. */
  industries: string[];
  /** One line that is specific to the city. */
  note: string;
  featured?: boolean;
};

export const REGIONS: { name: Region; icon: string; text: string }[] = [
  { name: 'Delhi NCR', icon: 'fa-solid fa-location-dot', text: 'Our home market — direct road delivery from Ghaziabad.' },
  { name: 'North India', icon: 'fa-solid fa-mountain-sun', text: 'Punjab, Haryana, Rajasthan, Uttar Pradesh & Uttarakhand.' },
  { name: 'West India', icon: 'fa-solid fa-water', text: 'Maharashtra and Gujarat industrial belts.' },
  { name: 'South India', icon: 'fa-solid fa-tree-city', text: 'Karnataka, Tamil Nadu and Telangana.' },
  { name: 'East India', icon: 'fa-solid fa-bridge', text: 'West Bengal and the eastern industrial corridor.' },
];

export const AREAS: Area[] = [
  // ── Delhi NCR ──────────────────────────────────────────
  { slug: 'ghaziabad', name: 'Ghaziabad', state: 'Uttar Pradesh', region: 'Delhi NCR', km: 0, img: 'floor', img2: 'operator', featured: true,
    hubs: ['Sahibabad Industrial Area', 'Meerut Road Industrial Area', 'Loni Industrial Area', 'Bulandshahr Road Industrial Area', 'Kavi Nagar Industrial Area'],
    industries: ['engineering', 'industrial', 'electrical', 'machinery'],
    note: 'Ghaziabad is home — our manufacturing unit is at Model Town West, so local clients can visit, share samples in person and collect urgent orders.' },
  { slug: 'delhi', name: 'Delhi', state: 'Delhi', region: 'Delhi NCR', km: 25, img: '1587474260584-136574528ed5', img2: '1592639296346-560c37a0f711', featured: true,
    hubs: ['Okhla Industrial Area', 'Bawana Industrial Area', 'Narela Industrial Area', 'Mayapuri Industrial Area', 'Naraina Industrial Area', 'Wazirpur Industrial Area'],
    industries: ['automotive', 'engineering', 'industrial', 'electrical', 'machinery'],
    note: 'Delhi’s industrial estates run thousands of small and mid-size units — from auto-part makers in Mayapuri to fabrication shops in Wazirpur — that need reliable rubber spares.' },
  { slug: 'noida', name: 'Noida', state: 'Uttar Pradesh', region: 'Delhi NCR', km: 20, img: '1565600444930-9761b1d1fc01', img2: '1688978022482-00702c9eb83c', featured: true,
    hubs: ['Phase 1 Industrial Area', 'Phase 2 Industrial Area', 'Sector 63 Industrial Area', 'Noida Special Economic Zone (NSEZ)', 'Sector 80–84 Industrial Area'],
    industries: ['electrical', 'automotive', 'engineering', 'industrial'],
    note: 'Noida’s electronics, appliance and auto-component manufacturers rely on precise O-rings, grommets and gaskets for sealing and insulation.' },
  { slug: 'greater-noida', name: 'Greater Noida', state: 'Uttar Pradesh', region: 'Delhi NCR', km: 40, img: '1688978022482-00702c9eb83c', img2: 'line',
    hubs: ['Ecotech-I', 'Ecotech-III', 'Kasna Industrial Area', 'Surajpur Site B & C', 'Udyog Vihar (Greater Noida)'],
    industries: ['automotive', 'electrical', 'machinery', 'industrial'],
    note: 'Greater Noida’s large plants in automotive, appliances and heavy engineering need consistent, repeat-order supply of moulded rubber parts.' },
  { slug: 'gurugram', name: 'Gurugram', state: 'Haryana', region: 'Delhi NCR', km: 55, img: '1514392181188-8f5d54262fa5', img2: '1664283269262-2d65841c4f91', featured: true,
    hubs: ['IMT Manesar', 'Udyog Vihar', 'Sector 37 Industrial Area', 'Pace City', 'Bilaspur–Binola belt'],
    industries: ['automotive', 'engineering', 'machinery', 'electrical'],
    note: 'Gurugram and Manesar form one of India’s biggest automotive clusters, where seals, bushes and grommets are needed in high volumes.' },
  { slug: 'faridabad', name: 'Faridabad', state: 'Haryana', region: 'Delhi NCR', km: 50, img: 'line', img2: 'machine',
    hubs: ['Sector 24 & 25 Industrial Area', 'IMT Faridabad', 'NIT Industrial Area', 'Ballabgarh', 'Sector 58–59 Industrial Area'],
    industries: ['automotive', 'machinery', 'engineering', 'industrial'],
    note: 'Faridabad’s tractor, auto-component and heavy engineering units use our bushes, washers and custom moulded parts.' },
  { slug: 'sonipat', name: 'Sonipat', state: 'Haryana', region: 'Delhi NCR', km: 65, img: 'warehouse', img2: 'robot',
    hubs: ['Kundli Industrial Area', 'Rai Industrial Area', 'Barhi Industrial Area', 'HSIIDC Sonipat'],
    industries: ['industrial', 'machinery', 'engineering'],
    note: 'Kundli and Rai host food processing, packaging and machinery units that need food-grade and oil-resistant rubber parts.' },
  { slug: 'meerut', name: 'Meerut', state: 'Uttar Pradesh', region: 'Delhi NCR', km: 55, img: 'machine', img2: 'grind',
    hubs: ['Partapur Industrial Area', 'Mohkampur Industrial Area', 'Sports Goods Complex', 'Udyog Puram'],
    industries: ['engineering', 'industrial', 'machinery'],
    note: 'Meerut’s engineering, sports goods and transformer units are a short drive from our Ghaziabad unit.' },

  // ── North India ────────────────────────────────────────
  { slug: 'chandigarh', name: 'Chandigarh (Tricity)', state: 'Chandigarh / Punjab / Haryana', region: 'North India', km: 270, img: '1682569295668-eecf20fedf33', img2: '1697306323210-5972e68c622d', featured: true,
    hubs: ['Industrial Area Phase I & II', 'Mohali Industrial Area', 'Panchkula Industrial Area', 'Baddi–Barotiwala (HP)', 'Derabassi'],
    industries: ['engineering', 'machinery', 'industrial', 'electrical'],
    note: 'The Chandigarh tricity and the nearby Baddi belt combine engineering, tractor and pharma units — each with very different sealing needs.' },
  { slug: 'ludhiana', name: 'Ludhiana', state: 'Punjab', region: 'North India', km: 340, img: 'grind', img2: 'screws',
    hubs: ['Focal Point', 'Industrial Area A & B', 'Dhandari Kalan', 'Gill Road', 'Sahnewal'],
    industries: ['automotive', 'machinery', 'engineering'],
    note: 'Ludhiana’s cycle, auto-part, hosiery-machinery and hand-tool makers buy washers, bushes and custom parts in bulk.' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', region: 'North India', km: 290, img: '1477587458883-47145ed94245', img2: '1599661046289-e31897846e41',
    hubs: ['Sitapura Industrial Area', 'Vishwakarma Industrial Area (VKIA)', 'Malviya Nagar Industrial Area', 'Kartarpura', 'Neemrana–Bhiwadi belt'],
    industries: ['engineering', 'electrical', 'industrial', 'automotive'],
    note: 'Jaipur’s bearings, electrical and engineering units — and the Bhiwadi–Neemrana auto belt on the way — are regular buyers of seals and O-rings.' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', region: 'North India', km: 490, img: '1688287580970-70fe8e0f4bef', img2: '1639546218218-4614c6db9609',
    hubs: ['Chinhat Industrial Area', 'Amausi Industrial Area', 'Sarojini Nagar Industrial Area', 'Talkatora Industrial Area', 'Nadarganj'],
    industries: ['industrial', 'electrical', 'engineering'],
    note: 'Lucknow’s engineering, electrical and process-industry units source standard and custom rubber parts from us across Uttar Pradesh.' },
  { slug: 'haridwar', name: 'Haridwar & Dehradun', state: 'Uttarakhand', region: 'North India', km: 200, img: 'robot', img2: 'assembly',
    hubs: ['SIDCUL Haridwar', 'Bahadrabad', 'Roorkee', 'Selaqui Industrial Area (Dehradun)', 'Langha Road'],
    industries: ['automotive', 'electrical', 'industrial'],
    note: 'SIDCUL Haridwar and Selaqui host two-wheeler, FMCG, electrical and pharma plants that need dependable rubber components.' },

  // ── West India ─────────────────────────────────────────
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', region: 'West India', km: 1420, img: '1552133457-ce1d2d33cdfb', img2: '1710582308582-55cc0c461c4e', featured: true,
    hubs: ['MIDC Andheri', 'Thane–Belapur (TTC)', 'Taloja MIDC', 'Bhiwandi', 'Vasai–Virar'],
    industries: ['industrial', 'engineering', 'electrical', 'machinery'],
    note: 'Mumbai’s process, pharma, marine and engineering industries need gaskets and seals for pumps, valves and pipelines.' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra', region: 'West India', km: 1450, img: '1553064483-f10fe837615f', img2: '1705955463252-e3f670e4041b',
    hubs: ['Chakan MIDC', 'Pimpri-Chinchwad (Bhosari MIDC)', 'Ranjangaon MIDC', 'Talegaon MIDC', 'Hinjewadi'],
    industries: ['automotive', 'engineering', 'machinery'],
    note: 'Pune and Chakan form a major auto and engineering hub where precision O-rings, seals and bushes are used on every line.' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', region: 'West India', km: 950, img: 'pipes', img2: 'valves',
    hubs: ['Naroda GIDC', 'Vatva GIDC', 'Odhav GIDC', 'Sanand GIDC', 'Changodar'],
    industries: ['industrial', 'engineering', 'automotive', 'machinery'],
    note: 'Ahmedabad’s chemical, pharma, pump and auto units need chemical-resistant gaskets and seals in EPDM, Viton and Neoprene.' },

  // ── South India ────────────────────────────────────────
  { slug: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', region: 'South India', km: 2150, img: '1596176530529-78163a4f7af2', img2: '1687158266872-fd2773fa76c6', featured: true,
    hubs: ['Peenya Industrial Area', 'Bommasandra', 'Jigani', 'Electronic City', 'Hosur (Tamil Nadu)'],
    industries: ['engineering', 'electrical', 'machinery', 'automotive'],
    note: 'Peenya and Bommasandra are among India’s largest engineering clusters, with machine-tool, aerospace-supplier and electronics units.' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu', region: 'South India', km: 2200, img: '1682420964688-2f422b0421c8', img2: '1582510003544-4d00b7f74220',
    hubs: ['Ambattur Industrial Estate', 'Guindy Industrial Estate', 'Sriperumbudur', 'Oragadam', 'Gummidipoondi'],
    industries: ['automotive', 'engineering', 'electrical', 'machinery'],
    note: 'Chennai’s auto corridor — Sriperumbudur and Oragadam — and Ambattur’s engineering units use large volumes of rubber seals and grommets.' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana', region: 'South India', km: 1580, img: 'engineers', img2: 'lab',
    hubs: ['Jeedimetla IDA', 'Balanagar', 'Patancheru', 'Cherlapally IDA', 'Medchal'],
    industries: ['industrial', 'engineering', 'electrical'],
    note: 'Hyderabad’s pharma, bulk-drug and defence-engineering units need clean, chemical-resistant gaskets and diaphragms.' },

  // ── East India ─────────────────────────────────────────
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', region: 'East India', km: 1500, img: '1697730414399-3d4d9ada98bd', img2: '1536421469767-80559bb6f5e1', featured: true,
    hubs: ['Howrah', 'Dankuni', 'Taratala', 'Kalyani', 'Uluberia'],
    industries: ['engineering', 'machinery', 'industrial', 'electrical'],
    note: 'Howrah’s foundries and engineering works, and the jute, tea and process plants around Kolkata, use our sheets, gaskets and custom parts.' },
];

export const A: Record<string, Area> = Object.fromEntries(AREAS.map((a) => [a.slug, a]));

export const areaUrl = (slug: string) => `/service-areas/${slug}/`;
export const regionSlug = (r: string) => r.toLowerCase().replace(/ /g, '-');

/** How goods reach the city, based on distance from Ghaziabad. */
export const delivery = (a: Area) =>
  a.km === 0 ? { mode: 'Local pickup & delivery', icon: 'fa-solid fa-store', text: 'Collect from our unit or get direct local delivery.' }
  : a.region === 'Delhi NCR' ? { mode: 'Direct road delivery', icon: 'fa-solid fa-truck', text: `Our own delivery from Ghaziabad — about ${a.km} km away.` }
  : a.km < 600 ? { mode: 'Road transport', icon: 'fa-solid fa-truck-fast', text: `Dispatched by road transport — about ${a.km} km from Ghaziabad.` }
  : { mode: 'Transport & courier', icon: 'fa-solid fa-boxes-packing', text: `Dispatched by transport or courier — about ${a.km.toLocaleString('en-IN')} km from Ghaziabad.` };

/** City-specific FAQs built from the area data. */
export const areaFaqs = (a: Area) => [
  { q: `Do you supply rubber parts in ${a.name}?`, a: `Yes. We regularly supply rubber O-rings, seals, gaskets, washers, bushes, sheets and custom moulded parts to clients in ${a.name}${a.hubs.length ? `, including ${a.hubs.slice(0, 3).join(', ')}` : ''}.` },
  { q: `How are orders delivered to ${a.name}?`, a: `${delivery(a).text} Parts are counted, packed lot-wise and labelled before dispatch, and we share dispatch details once the goods leave our facility.` },
  { q: `Can you develop a custom rubber part for my unit in ${a.name}?`, a: 'Yes. Send a drawing or a good-condition sample (by courier, email or WhatsApp photos with dimensions). We select the compound, develop the mould, share samples for approval and then start bulk production.' },
  { q: 'Is there a minimum order quantity?', a: 'It depends on the part. Standard sizes can be supplied in small quantities; custom parts need a minimum quantity to cover mould and setup. Share your requirement and we will advise.' },
  { q: `Can someone from ${a.name} visit your facility?`, a: `Yes — you are welcome to visit our manufacturing unit at 155-A Model Town West, Ghaziabad. Please call +91 9711114333 to fix a time.` },
  { q: 'Which rubber materials do you work with?', a: 'NBR (Nitrile), EPDM, Neoprene, Silicone, Viton (FKM) and Natural Rubber. We recommend the compound based on temperature, oil/chemical contact and pressure.' },
];
