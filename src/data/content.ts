// Site content. Later this can be replaced by WordPress (WPGraphQL) queries.

export type Item = { icon: string; title: string; text: string };
export type Product = { slug: string; name: string; short: string; icon: string; cat: string; img: string; gal: string[]; tag: string; tagline: string; card: string; intro: string[]; features: Item[]; apps: (Item & { img: string })[]; specs: { label: string; value: string }[]; mats: string[]; ind: string[]; faqs: { q: string; a: string }[] };
export type Industry = { slug: string; name: string; icon: string; img: string; gal: string[]; tagline: string; intro: string[]; products: string[]; uses: Item[]; challenges: string[] };
export type Post = { slug: string; title: string; cat: string; img: string; mins: number; date: string; excerpt: string; body: string };

export const IMG: Record<string, string> = {
 "oring": "1759790475932-ac8c04b17727",
 "oring2": "1699466622736-36c7b7893745",
 "seal": "1571909941887-feb831a05338",
 "gasket": "1719212752790-fb82dd11de88",
 "washer": "1673833114586-f951168be369",
 "sheet": "1464639351491-a172c2aa2911",
 "bush": "1595787142842-7404bc60470d",
 "molded": "1606337321936-02d1b1a4d5ef",
 "custom": "1769147339214-076740872485",
 "profile": "1543674892-7d64d45df18b",
 "diaphragm": "1682268294094-5c68969ea23a",
 "gears": "1711199694531-e982a79ea381",
 "screws": "1703868671123-3deab40f66c4",
 "bolts": "1564226591723-659ff3852b2a",
 "engine_mech": "1565377167263-d29b5ac85479",
 "floor": "1496247749665-49cf5b1022e9",
 "operator": "1598299803204-b73796f43289",
 "machine": "1717386255773-1e3037c81788",
 "machine2": "1717386255767-52643970d483",
 "line": "1716191300020-b52dec5b70a8",
 "robot": "1716191299980-a6e8827ba10b",
 "orange": "1647427060118-4911c9821b82",
 "sparks": "1735494033576-9c882e80504c",
 "grind": "1528953030358-b0c7de371f1f",
 "techs": "1695603414685-af28aff0f9d2",
 "engineers": "1581091212991-8891c7d4bd9b",
 "assembly": "1589793463357-5fb813435467",
 "lab_student": "1581092160607-ee22621dd758",
 "team_ws": "1764114908655-9a26d32750a0",
 "caliper": "1758873263563-5ba4aa330799",
 "measure": "1747999827332-163aa33cd597",
 "lab": "1764835711461-117d67799a7d",
 "clipboard": "1700727448575-6f1680cd7d75",
 "blueprint": "1503387837-b154d5074bd2",
 "cad": "1581092580497-e0d23cbdf1dc",
 "drafting": "1503387762-592deb58ef4e",
 "paper": "1581092160562-40aa08e78837",
 "designteam": "1744627049721-73c27008ad28",
 "boxes": "1769355104335-acef3aa4c9b6",
 "warehouse": "1721937127582-ed331de95a04",
 "forklift": "1576669801820-a9ab287ac2d1",
 "handshake": "1521791136064-7986c2920216",
 "handshake2": "1752159400890-d906038f1b35",
 "deal": "1758518730384-be3d205838e8",
 "auto": "1615906655593-ad0386982a0f",
 "auto2": "1552656967-7a0991a13906",
 "auto3": "1527383418406-f85a3b146499",
 "auto4": "1606577924006-27d39b132ae2",
 "pipes": "1620203853151-496c7228306c",
 "pipes2": "1513828742140-ccaa28f3eda0",
 "valves": "1759148414485-5f624fe9d1ea",
 "valves2": "1698031610493-c19fa20dfeab",
 "gauge": "1761758674188-2b8e4c89c5e2",
 "electric": "1544724569-5f546fd6f2b5",
 "electric2": "1758101755915-462eddc23f57",
 "breakers": "1576446470246-499c738d1c8e",
 "excavator": "1580901369227-308f6f40bdeb",
 "cmach": "1642927778267-4e8b787b325a",
 "hydraulic": "1766157669300-8ade8059b379",
 "shipvalves": "1682268294196-8a8dd14c0326",
 "truck": "1635774152029-17bf0a3e1cb4",
 "truck2": "1774013603273-03507c48a0e8"
};

export const PRODUCT_OPTIONS = [
 "Rubber O-Rings",
 "Rubber Seals",
 "Rubber Gaskets",
 "Rubber Washers",
 "Rubber Sheets",
 "Rubber Bushes",
 "Molded Rubber Products",
 "Custom Rubber Parts",
 "Rubber Profiles",
 "Rubber Diaphragms"
];

export const MATERIALS = [
 {
  "name": "NBR (Nitrile)",
  "sym": "NBR",
  "bestFor": "Oil, fuel & hydraulic systems",
  "temp": "-30°C to 100°C",
  "oil": 90
 },
 {
  "name": "EPDM",
  "sym": "EPDM",
  "bestFor": "Water, steam, weather & outdoor",
  "temp": "-40°C to 130°C",
  "oil": 20
 },
 {
  "name": "Silicone",
  "sym": "Si",
  "bestFor": "Food-contact, extreme temperatures",
  "temp": "-60°C to 200°C",
  "oil": 40
 },
 {
  "name": "Viton (FKM)",
  "sym": "FKM",
  "bestFor": "Chemicals, fuels & high heat",
  "temp": "-20°C to 200°C",
  "oil": 98
 },
 {
  "name": "Neoprene",
  "sym": "CR",
  "bestFor": "Refrigerants, general purpose",
  "temp": "-35°C to 110°C",
  "oil": 60
 },
 {
  "name": "Natural Rubber",
  "sym": "NR",
  "bestFor": "Anti-vibration, abrasion resistance",
  "temp": "-50°C to 80°C",
  "oil": 15
 }
];

export const COMMON_SPECS = [
 {
  "label": "Hardness",
  "value": "40 – 90 Shore A (as per application)"
 },
 {
  "label": "Colour",
  "value": "Black (standard); other colours on request"
 },
 {
  "label": "Manufacturing",
  "value": "Compression / injection moulding as per part"
 },
 {
  "label": "Tolerances",
  "value": "As per drawing / agreed sample"
 },
 {
  "label": "Order Quantity",
  "value": "Small batches to bulk volumes"
 },
 {
  "label": "Packing",
  "value": "Poly bags, cartons or as required"
 }
];

export const PRODUCTS: Product[] = [
 {
  "slug": "rubber-o-rings",
  "name": "Rubber O-Rings",
  "short": "O-Rings",
  "icon": "fa-regular fa-circle",
  "cat": "seal",
  "img": "oring",
  "gal": [
   "oring2",
   "caliper",
   "operator"
  ],
  "tag": "Best Seller",
  "tagline": "Precision O-rings for leak-proof static and dynamic sealing",
  "card": "Excellent quality black rubber O-rings in standard and custom sizes.",
  "intro": [
   "In order to cater to the variegated demands of our clients, we manufacture an excellent quality range of Rubber O-Rings. Each O-ring is moulded to an accurate inner diameter and cross-section so it seats correctly in the groove and seals reliably under pressure.",
   "We produce O-rings in NBR, Viton (FKM), EPDM, Silicone and Neoprene, in both standard and non-standard sizes. Share a drawing, a sample or simply the ID and cross-section — our team will recommend the right compound and hardness for your application."
  ],
  "features": [
   {
    "icon": "fa-solid fa-bullseye",
    "title": "Accurate Dimensions",
    "text": "Consistent ID and cross-section for a correct groove fit."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Any Size",
    "text": "Standard and non-standard sizes made to order."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Multiple Compounds",
    "text": "NBR, Viton, EPDM, Silicone and Neoprene."
   },
   {
    "icon": "fa-solid fa-wand-magic-sparkles",
    "title": "Clean Finish",
    "text": "Trimmed, flash-free parting line for reliable sealing."
   },
   {
    "icon": "fa-solid fa-compress",
    "title": "Good Compression Set",
    "text": "Holds sealing force over long service life."
   },
   {
    "icon": "fa-solid fa-palette",
    "title": "Colour Options",
    "text": "Black as standard; colours on request for identification."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-gears",
    "title": "Hydraulic & Pneumatic",
    "text": "Cylinders, pistons and rods",
    "img": "hydraulic"
   },
   {
    "icon": "fa-solid fa-faucet",
    "title": "Pumps & Valves",
    "text": "Static and dynamic sealing",
    "img": "valves"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive",
    "text": "Engines, fuel and brake systems",
    "img": "auto"
   },
   {
    "icon": "fa-solid fa-industry",
    "title": "Pipe Fittings",
    "text": "Couplings and connectors",
    "img": "pipes"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber O-Rings"
   },
   {
    "label": "Materials",
    "value": "NBR, Viton (FKM), EPDM, Silicone, Neoprene"
   },
   {
    "label": "Sizes",
    "value": "Standard & custom ID / cross-section"
   },
   {
    "label": "Temperature",
    "value": "Depends on compound (approx. -60°C to 200°C across range)"
   }
  ],
  "mats": [
   "NBR",
   "Viton (FKM)",
   "EPDM",
   "Silicone",
   "Neoprene"
  ],
  "ind": [
   "automotive",
   "machinery",
   "industrial"
  ],
  "faqs": [
   {
    "q": "Can you make non-standard O-ring sizes?",
    "a": "Yes. Share the inner diameter and cross-section, a drawing or a sample and we will develop the size for you."
   },
   {
    "q": "Which material should I choose for oil applications?",
    "a": "NBR (Nitrile) is the usual choice for mineral oils and fuels. For higher temperatures or aggressive chemicals, Viton (FKM) is recommended."
   },
   {
    "q": "How do I measure an O-ring?",
    "a": "Measure the inner diameter (ID) and the cross-section (thickness). Our blog has a step-by-step guide."
   },
   {
    "q": "Do you supply small quantities?",
    "a": "Yes, we supply small batches as well as bulk quantities. MOQ depends on the size and tooling required."
   }
  ]
 },
 {
  "slug": "rubber-seals",
  "name": "Rubber Seals",
  "short": "Seals",
  "icon": "fa-solid fa-life-ring",
  "cat": "seal",
  "img": "seal",
  "gal": [
   "hydraulic",
   "operator",
   "measure"
  ],
  "tagline": "Oil, hydraulic and pneumatic seals built for demanding duty",
  "card": "Premium oil, hydraulic and pneumatic seals for demanding duty.",
  "intro": [
   "Keeping in mind the ever-evolving requirements of our respected clients, we offer a premium quality range of Rubber Seals. Our seals are designed to keep fluids in and contaminants out across rotating, reciprocating and static applications.",
   "From oil seals and hydraulic seals to dust and wiper seals, every part is moulded in a compound matched to its operating media, pressure and temperature — so you get dependable sealing and longer equipment life."
  ],
  "features": [
   {
    "icon": "fa-solid fa-oil-can",
    "title": "Oil & Fluid Resistant",
    "text": "Compounds selected for oils, water and chemicals."
   },
   {
    "icon": "fa-solid fa-gauge-high",
    "title": "Pressure Ready",
    "text": "Suitable for hydraulic and pneumatic duty."
   },
   {
    "icon": "fa-solid fa-rotate",
    "title": "Static & Dynamic",
    "text": "For rotating, reciprocating and static joints."
   },
   {
    "icon": "fa-solid fa-shield-halved",
    "title": "Contamination Control",
    "text": "Dust and wiper designs protect internals."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Custom Profiles",
    "text": "Developed from your drawing or sample."
   },
   {
    "icon": "fa-solid fa-clock-rotate-left",
    "title": "Long Service Life",
    "text": "Wear-resistant compounds reduce downtime."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-gears",
    "title": "Hydraulic Cylinders",
    "text": "Rod, piston and wiper seals",
    "img": "hydraulic"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive",
    "text": "Oil seals for shafts and hubs",
    "img": "auto2"
   },
   {
    "icon": "fa-solid fa-fan",
    "title": "Pumps & Motors",
    "text": "Rotary shaft sealing",
    "img": "valves2"
   },
   {
    "icon": "fa-solid fa-tractor",
    "title": "Heavy Machinery",
    "text": "Dust and weather sealing",
    "img": "excavator"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Seals (oil, hydraulic, pneumatic, dust)"
   },
   {
    "label": "Materials",
    "value": "NBR, Viton (FKM), EPDM, Silicone, Neoprene"
   },
   {
    "label": "Sizes",
    "value": "Shaft / bore sizes as per requirement"
   },
   {
    "label": "Temperature",
    "value": "Depends on compound and duty"
   }
  ],
  "mats": [
   "NBR",
   "Viton (FKM)",
   "EPDM",
   "Silicone",
   "Neoprene"
  ],
  "ind": [
   "automotive",
   "machinery",
   "industrial"
  ],
  "faqs": [
   {
    "q": "What types of seals do you make?",
    "a": "We manufacture oil seals, hydraulic and pneumatic seals, dust/wiper seals and custom sealing profiles."
   },
   {
    "q": "Can you match an existing seal?",
    "a": "Yes. Send us a sample or drawing and we will develop a matching seal in the right compound."
   },
   {
    "q": "Which seal material is best for high temperature?",
    "a": "Viton (FKM) and Silicone handle higher temperatures; the final choice depends on the media in contact."
   },
   {
    "q": "Do you supply seals for OEMs?",
    "a": "Yes, we supply both OEM and replacement requirements in small and bulk quantities."
   }
  ],
  "tag": ""
 },
 {
  "slug": "rubber-gaskets",
  "name": "Rubber Gaskets",
  "short": "Gaskets",
  "icon": "fa-regular fa-square",
  "cat": "seal",
  "img": "gasket",
  "gal": [
   "pipes",
   "valves",
   "caliper"
  ],
  "tagline": "Flange and custom-cut gaskets for leak-free joints",
  "card": "Wide assortment of flange and custom-cut gaskets.",
  "intro": [
   "With an objective to fulfil the ever-evolving demands of our clients, we offer a wide assortment of Rubber Gaskets. Our gaskets create a tight, durable seal between mating surfaces in pipelines, pumps, panels and machinery.",
   "We make moulded and cut gaskets in round, square and custom shapes, with or without bolt holes, in compounds selected for the media, pressure and temperature of your application."
  ],
  "features": [
   {
    "icon": "fa-solid fa-shapes",
    "title": "Any Shape",
    "text": "Round, square, rectangular and custom profiles."
   },
   {
    "icon": "fa-solid fa-circle-nodes",
    "title": "Bolt-Hole Patterns",
    "text": "Made to match your flange drawing."
   },
   {
    "icon": "fa-solid fa-droplet",
    "title": "Leak-Free Joints",
    "text": "Fills surface irregularities for a tight seal."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Media Compatible",
    "text": "Compounds for water, oil, steam and chemicals."
   },
   {
    "icon": "fa-solid fa-layer-group",
    "title": "Thickness Options",
    "text": "Thickness chosen as per joint design."
   },
   {
    "icon": "fa-solid fa-boxes-stacked",
    "title": "Batch Consistency",
    "text": "Repeatable quality for every order."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-industry",
    "title": "Pipelines & Flanges",
    "text": "Water, oil and process lines",
    "img": "pipes"
   },
   {
    "icon": "fa-solid fa-faucet",
    "title": "Valves & Pumps",
    "text": "Body and cover gaskets",
    "img": "valves"
   },
   {
    "icon": "fa-solid fa-bolt",
    "title": "Electrical Panels",
    "text": "Door and enclosure sealing",
    "img": "electric"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive",
    "text": "Covers, housings and lamps",
    "img": "auto3"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Gaskets (moulded & cut)"
   },
   {
    "label": "Materials",
    "value": "NBR, EPDM, Neoprene, Silicone, Viton (FKM)"
   },
   {
    "label": "Shapes",
    "value": "Round, square, rectangular, custom"
   },
   {
    "label": "Thickness",
    "value": "As per drawing / requirement"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Neoprene",
   "Silicone",
   "Viton (FKM)"
  ],
  "ind": [
   "industrial",
   "electrical",
   "automotive"
  ],
  "faqs": [
   {
    "q": "Can you make gaskets with bolt holes?",
    "a": "Yes. Share the flange drawing or dimensions and we will make gaskets with the matching hole pattern."
   },
   {
    "q": "Which gasket material is best for water lines?",
    "a": "EPDM performs very well with water and steam. For oil lines, NBR is generally preferred."
   },
   {
    "q": "What causes gasket failure?",
    "a": "Common causes include wrong material, over-compression and poor surface finish. Read our blog for prevention tips."
   },
   {
    "q": "Do you make large-size gaskets?",
    "a": "Yes, size depends on the process and tooling. Contact us with your dimensions."
   }
  ],
  "tag": ""
 },
 {
  "slug": "rubber-washers",
  "name": "Rubber Washers",
  "short": "Washers",
  "icon": "fa-solid fa-circle-dot",
  "cat": "mount",
  "img": "washer",
  "gal": [
   "screws",
   "bolts",
   "caliper"
  ],
  "tagline": "Flat and shaped washers for sealing, cushioning and insulation",
  "card": "Flat and shaped washers for sealing and cushioning.",
  "intro": [
   "Our Rubber Washers provide a reliable seal and a cushioning layer under bolts, screws and fittings. They prevent leaks, absorb vibration and protect surfaces from damage.",
   "We manufacture flat, shouldered and custom-shaped washers in a range of inner/outer diameters and thicknesses, using compounds suited to water, oil, weather or electrical insulation."
  ],
  "features": [
   {
    "icon": "fa-solid fa-droplet",
    "title": "Leak Prevention",
    "text": "Seals threaded joints and fasteners."
   },
   {
    "icon": "fa-solid fa-wave-square",
    "title": "Vibration Damping",
    "text": "Cushions and reduces noise."
   },
   {
    "icon": "fa-solid fa-bolt",
    "title": "Insulating",
    "text": "Electrical insulation where required."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Custom ID/OD",
    "text": "Any inner/outer diameter and thickness."
   },
   {
    "icon": "fa-solid fa-shield-halved",
    "title": "Surface Protection",
    "text": "Prevents scratches and metal contact."
   },
   {
    "icon": "fa-solid fa-boxes-stacked",
    "title": "Bulk Supply",
    "text": "Consistent quality in large quantities."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-faucet",
    "title": "Plumbing & Taps",
    "text": "Water-tight fittings",
    "img": "valves2"
   },
   {
    "icon": "fa-solid fa-bolt",
    "title": "Electrical",
    "text": "Insulating washers",
    "img": "breakers"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machinery",
    "text": "Fastener cushioning",
    "img": "machine"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive",
    "text": "Bolts, sensors & fittings",
    "img": "auto4"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Washers (flat, shouldered, custom)"
   },
   {
    "label": "Materials",
    "value": "NBR, EPDM, Neoprene, Silicone, Natural Rubber"
   },
   {
    "label": "Sizes",
    "value": "Any ID / OD / thickness"
   },
   {
    "label": "Temperature",
    "value": "Depends on compound"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Neoprene",
   "Silicone",
   "Natural Rubber"
  ],
  "ind": [
   "electrical",
   "machinery",
   "industrial"
  ],
  "faqs": [
   {
    "q": "Can you make washers to a specific ID and OD?",
    "a": "Yes, we make washers to any inner diameter, outer diameter and thickness you require."
   },
   {
    "q": "Which material is used for insulating washers?",
    "a": "Neoprene, EPDM and Silicone are commonly used; we will suggest the right one for your application."
   },
   {
    "q": "Do you supply washers in bulk?",
    "a": "Yes, we regularly supply washers in bulk quantities with consistent quality."
   },
   {
    "q": "Can washers be supplied in colours?",
    "a": "Black is standard; other colours can be produced on request."
   }
  ],
  "tag": ""
 },
 {
  "slug": "rubber-sheets",
  "name": "Rubber Sheets",
  "short": "Sheets",
  "icon": "fa-solid fa-layer-group",
  "cat": "sheet",
  "img": "sheet",
  "gal": [
   "warehouse",
   "floor",
   "measure"
  ],
  "tagline": "Industrial rubber sheets in multiple grades and thicknesses",
  "card": "Industrial rubber sheets in various grades and thicknesses.",
  "intro": [
   "Our Rubber Sheets are used across industries for sealing, cushioning, flooring, lining and cutting gaskets. They are produced in a range of compounds, hardness levels and thicknesses to suit general and specialised applications.",
   "Tell us the grade, thickness and size you need and we will supply sheets ready for cutting, or cut parts directly to your drawing."
  ],
  "features": [
   {
    "icon": "fa-solid fa-layer-group",
    "title": "Multiple Grades",
    "text": "General purpose and speciality compounds."
   },
   {
    "icon": "fa-solid fa-ruler-vertical",
    "title": "Thickness Range",
    "text": "Thickness as per requirement."
   },
   {
    "icon": "fa-solid fa-scissors",
    "title": "Cut-to-Size",
    "text": "Sheets or ready-cut parts."
   },
   {
    "icon": "fa-solid fa-shield-halved",
    "title": "Abrasion Resistant",
    "text": "Durable surface for wear applications."
   },
   {
    "icon": "fa-solid fa-wave-square",
    "title": "Shock Absorbing",
    "text": "Cushioning and anti-vibration pads."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Media Options",
    "text": "Oil, water and weather resistant grades."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-scissors",
    "title": "Gasket Cutting",
    "text": "Raw sheet for cut gaskets",
    "img": "gasket"
   },
   {
    "icon": "fa-solid fa-warehouse",
    "title": "Flooring & Mats",
    "text": "Industrial and utility floors",
    "img": "warehouse"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machine Pads",
    "text": "Anti-vibration mounting",
    "img": "machine"
   },
   {
    "icon": "fa-solid fa-industry",
    "title": "Lining",
    "text": "Tanks, chutes and hoppers",
    "img": "pipes2"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Sheets"
   },
   {
    "label": "Materials",
    "value": "NBR, EPDM, Neoprene, Silicone, Natural Rubber"
   },
   {
    "label": "Thickness",
    "value": "As per requirement"
   },
   {
    "label": "Finish",
    "value": "Plain / as required"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Neoprene",
   "Silicone",
   "Natural Rubber"
  ],
  "ind": [
   "industrial",
   "machinery",
   "engineering"
  ],
  "faqs": [
   {
    "q": "Can you cut sheets into gaskets?",
    "a": "Yes, we can supply full sheets or cut gaskets and pads directly to your drawing."
   },
   {
    "q": "Which sheet is best for oil resistance?",
    "a": "NBR sheets are recommended for oil and fuel contact."
   },
   {
    "q": "Do you supply sheets for flooring?",
    "a": "Yes, we supply sheets for industrial flooring, mats and anti-vibration pads."
   },
   {
    "q": "How do I order the right grade?",
    "a": "Share the application, thickness and size — our team will recommend the right grade."
   }
  ],
  "tag": ""
 },
 {
  "slug": "rubber-bushes",
  "name": "Rubber Bushes",
  "short": "Bushes",
  "icon": "fa-solid fa-database",
  "cat": "mount",
  "img": "bush",
  "gal": [
   "auto",
   "excavator",
   "engine_mech"
  ],
  "tagline": "Shock and vibration absorbing bushes for vehicles and machinery",
  "card": "Shock and vibration absorbing bushes for auto & machinery.",
  "intro": [
   "With sincerity and hard work of our professionals, we have carved a niche in manufacturing Rubber Bushes. Our bushes absorb shock, isolate vibration and reduce noise between moving metal parts.",
   "We produce plain rubber bushes and custom designs for suspension, mounting and machinery applications, moulded to your dimensions and hardness requirements."
  ],
  "features": [
   {
    "icon": "fa-solid fa-wave-square",
    "title": "Vibration Isolation",
    "text": "Reduces vibration transfer and noise."
   },
   {
    "icon": "fa-solid fa-car-burst",
    "title": "Shock Absorption",
    "text": "Cushions impact loads."
   },
   {
    "icon": "fa-solid fa-dumbbell",
    "title": "Load Bearing",
    "text": "Hardness tuned to your load."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Custom Dimensions",
    "text": "Made from drawing or sample."
   },
   {
    "icon": "fa-solid fa-clock-rotate-left",
    "title": "Durable",
    "text": "Resists wear and fatigue."
   },
   {
    "icon": "fa-solid fa-volume-xmark",
    "title": "Noise Reduction",
    "text": "Smoother, quieter operation."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-car",
    "title": "Suspension",
    "text": "Control arms & links",
    "img": "auto"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machine Mounts",
    "text": "Motors and compressors",
    "img": "machine"
   },
   {
    "icon": "fa-solid fa-tractor",
    "title": "Heavy Equipment",
    "text": "Pivot and linkage points",
    "img": "excavator"
   },
   {
    "icon": "fa-solid fa-industry",
    "title": "Industrial",
    "text": "Conveyors and fixtures",
    "img": "line"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Bushes"
   },
   {
    "label": "Materials",
    "value": "Natural Rubber, NBR, Neoprene, EPDM"
   },
   {
    "label": "Sizes",
    "value": "As per drawing / sample"
   },
   {
    "label": "Temperature",
    "value": "Depends on compound"
   }
  ],
  "mats": [
   "Natural Rubber",
   "NBR",
   "Neoprene",
   "EPDM"
  ],
  "ind": [
   "automotive",
   "machinery",
   "engineering"
  ],
  "faqs": [
   {
    "q": "Can you replicate an existing bush?",
    "a": "Yes. Send us a sample and we will develop a matching bush with the right hardness."
   },
   {
    "q": "Which material is best for anti-vibration bushes?",
    "a": "Natural rubber offers excellent damping; NBR or Neoprene are preferred where oil or weather resistance is needed."
   },
   {
    "q": "Do you make bonded metal-rubber bushes?",
    "a": "Please share your drawing and requirement; we will confirm feasibility for your design."
   },
   {
    "q": "Do you supply bushes for automotive use?",
    "a": "Yes, we supply bushes for automotive and machinery applications."
   }
  ],
  "tag": ""
 },
 {
  "slug": "molded-rubber-products",
  "name": "Molded Rubber Products",
  "short": "Molded Parts",
  "icon": "fa-solid fa-cubes",
  "cat": "custom",
  "img": "molded",
  "gal": [
   "operator",
   "machine",
   "caliper"
  ],
  "tagline": "Compression and injection moulded rubber parts to specification",
  "card": "Compression & injection molded parts to specification.",
  "intro": [
   "We manufacture a wide variety of Molded Rubber Products — caps, plugs, boots, grommets, bellows, buffers and other components — produced on our moulding presses to your exact specification.",
   "Our in-house process covers compound selection, mould development, moulding, trimming and inspection, so you get consistent parts from first sample to bulk production."
  ],
  "features": [
   {
    "icon": "fa-solid fa-cubes",
    "title": "Complex Shapes",
    "text": "Caps, boots, grommets, bellows and more."
   },
   {
    "icon": "fa-solid fa-industry",
    "title": "In-House Moulding",
    "text": "Compression and injection moulding."
   },
   {
    "icon": "fa-solid fa-pen-ruler",
    "title": "Mould Development",
    "text": "New moulds made for your part."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Right Compound",
    "text": "Material matched to the application."
   },
   {
    "icon": "fa-solid fa-scissors",
    "title": "Clean Trimming",
    "text": "Neat edges and finish."
   },
   {
    "icon": "fa-solid fa-boxes-stacked",
    "title": "Repeatable Quality",
    "text": "Consistent from batch to batch."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-plug",
    "title": "Grommets & Boots",
    "text": "Cable and wire protection",
    "img": "electric2"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive Parts",
    "text": "Buffers, boots and caps",
    "img": "auto3"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machinery",
    "text": "Bellows and stoppers",
    "img": "machine2"
   },
   {
    "icon": "fa-solid fa-house",
    "title": "Appliances",
    "text": "Feet, plugs and seals",
    "img": "line"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Molded Rubber Products"
   },
   {
    "label": "Process",
    "value": "Compression / injection moulding"
   },
   {
    "label": "Materials",
    "value": "NBR, EPDM, Silicone, Neoprene, Viton, Natural Rubber"
   },
   {
    "label": "Design",
    "value": "As per drawing or sample"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Silicone",
   "Neoprene",
   "Viton (FKM)",
   "Natural Rubber"
  ],
  "ind": [
   "automotive",
   "electrical",
   "engineering"
  ],
  "faqs": [
   {
    "q": "What molded parts can you produce?",
    "a": "Caps, plugs, grommets, boots, bellows, buffers, feet and many other custom moulded parts."
   },
   {
    "q": "Do you develop new moulds?",
    "a": "Yes, we develop moulds for new parts based on your drawing or sample."
   },
   {
    "q": "How long does development take?",
    "a": "It depends on part complexity; we confirm a timeline with every quotation."
   },
   {
    "q": "Can you produce small quantities?",
    "a": "Yes, we support both small runs and bulk production."
   }
  ],
  "tag": ""
 },
 {
  "slug": "custom-rubber-parts",
  "name": "Custom Rubber Parts",
  "short": "Custom Parts",
  "icon": "fa-solid fa-gears",
  "cat": "custom",
  "img": "custom",
  "gal": [
   "blueprint",
   "cad",
   "measure"
  ],
  "tag": "On Demand",
  "tagline": "Rubber components developed from your drawing or sample",
  "card": "Developed from your drawing or sample — any size.",
  "intro": [
   "Not every requirement fits a catalogue. Our Custom Rubber Parts service develops components exactly to your drawing or sample — in the size, shape, hardness and compound your application needs.",
   "From one-off replacement parts to new OEM components, our team handles compound selection, mould development, sampling and production under one roof."
  ],
  "features": [
   {
    "icon": "fa-solid fa-pen-ruler",
    "title": "From Drawing",
    "text": "We work from 2D/3D drawings."
   },
   {
    "icon": "fa-solid fa-clone",
    "title": "From Sample",
    "text": "Reverse-engineer existing parts."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Compound Selection",
    "text": "Material matched to the media and temperature."
   },
   {
    "icon": "fa-solid fa-vial-circle-check",
    "title": "Sample Approval",
    "text": "Samples before bulk production."
   },
   {
    "icon": "fa-solid fa-boxes-stacked",
    "title": "Small to Bulk",
    "text": "Flexible order quantities."
   },
   {
    "icon": "fa-solid fa-headset",
    "title": "Technical Support",
    "text": "Guidance from enquiry to delivery."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-car",
    "title": "OEM Components",
    "text": "New vehicle & machine parts",
    "img": "auto2"
   },
   {
    "icon": "fa-solid fa-screwdriver-wrench",
    "title": "Replacement Parts",
    "text": "Hard-to-find spares",
    "img": "engine_mech"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machinery",
    "text": "Special seals & pads",
    "img": "machine"
   },
   {
    "icon": "fa-solid fa-bolt",
    "title": "Electrical",
    "text": "Custom grommets & seals",
    "img": "electric"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Custom Rubber Parts"
   },
   {
    "label": "Input",
    "value": "Drawing, sample or dimensions"
   },
   {
    "label": "Materials",
    "value": "NBR, EPDM, Silicone, Neoprene, Viton, Natural Rubber"
   },
   {
    "label": "Process",
    "value": "Compound selection → mould → sample → production"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Silicone",
   "Neoprene",
   "Viton (FKM)",
   "Natural Rubber"
  ],
  "ind": [
   "automotive",
   "engineering",
   "machinery"
  ],
  "faqs": [
   {
    "q": "What do I need to share for a custom part?",
    "a": "A drawing or sample, the application, operating temperature, media in contact and the quantity required."
   },
   {
    "q": "Can you develop a part from a broken sample?",
    "a": "Often yes — share the sample and we will check what dimensions can be recovered."
   },
   {
    "q": "Will I get samples before bulk?",
    "a": "Yes, samples are provided for approval before bulk production."
   },
   {
    "q": "Is there a minimum order quantity?",
    "a": "It depends on the part and tooling. We will suggest the most economical option."
   }
  ]
 },
 {
  "slug": "rubber-profiles",
  "name": "Rubber Profiles",
  "short": "Profiles",
  "icon": "fa-solid fa-grip-lines",
  "cat": "sheet",
  "img": "profile",
  "gal": [
   "electric",
   "line",
   "caliper"
  ],
  "tagline": "Extruded rubber profiles, beadings and channels for sealing",
  "card": "Extruded rubber profiles, beadings and channels.",
  "intro": [
   "Our Rubber Profiles — beadings, channels, cords and edge trims — are used for sealing doors, panels, windows, enclosures and machine covers against dust, water and noise.",
   "Profiles are produced in solid or sponge compounds to your cross-section, and supplied in lengths, coils or cut pieces as required."
  ],
  "features": [
   {
    "icon": "fa-solid fa-grip-lines",
    "title": "Any Cross-Section",
    "text": "D, P, E, U and custom profiles."
   },
   {
    "icon": "fa-solid fa-cloud-rain",
    "title": "Weather Sealing",
    "text": "Keeps out water and dust."
   },
   {
    "icon": "fa-solid fa-volume-xmark",
    "title": "Noise Reduction",
    "text": "Cushions doors and panels."
   },
   {
    "icon": "fa-solid fa-sun",
    "title": "UV & Ozone Resistant",
    "text": "EPDM grades for outdoor use."
   },
   {
    "icon": "fa-solid fa-scissors",
    "title": "Cut Lengths",
    "text": "Coils or cut-to-length supply."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Made to Drawing",
    "text": "Profile developed from your design."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-bolt",
    "title": "Panel Doors",
    "text": "Electrical enclosure sealing",
    "img": "electric"
   },
   {
    "icon": "fa-solid fa-car",
    "title": "Automotive",
    "text": "Door and window seals",
    "img": "auto4"
   },
   {
    "icon": "fa-solid fa-gear",
    "title": "Machine Covers",
    "text": "Guards and hatches",
    "img": "machine2"
   },
   {
    "icon": "fa-solid fa-building",
    "title": "Construction",
    "text": "Windows and glazing",
    "img": "line"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Profiles / Beadings"
   },
   {
    "label": "Materials",
    "value": "EPDM, Neoprene, Silicone, NBR"
   },
   {
    "label": "Types",
    "value": "Solid / sponge"
   },
   {
    "label": "Supply",
    "value": "Coils or cut lengths"
   }
  ],
  "mats": [
   "EPDM",
   "Neoprene",
   "Silicone",
   "NBR"
  ],
  "ind": [
   "electrical",
   "automotive",
   "engineering"
  ],
  "faqs": [
   {
    "q": "Can you make a custom profile?",
    "a": "Yes, share the cross-section drawing or a sample piece and we will develop the profile."
   },
   {
    "q": "Which material is best for outdoor use?",
    "a": "EPDM is preferred for outdoor applications thanks to its weather, UV and ozone resistance."
   },
   {
    "q": "Do you supply cut lengths?",
    "a": "Yes, profiles can be supplied in coils or cut to your required length."
   },
   {
    "q": "Do you make sponge profiles?",
    "a": "Please share your requirement; we will confirm sponge/solid options for your profile."
   }
  ],
  "tag": ""
 },
 {
  "slug": "rubber-diaphragms",
  "name": "Rubber Diaphragms",
  "short": "Diaphragms",
  "icon": "fa-solid fa-compact-disc",
  "cat": "seal",
  "img": "diaphragm",
  "gal": [
   "valves",
   "gauge",
   "caliper"
  ],
  "tagline": "Flexible nitrile rubber diaphragms for pumps, valves and regulators",
  "card": "Nitrile rubber diaphragms for pumps and valves.",
  "intro": [
   "Riding on our industrial expertise, we provide a broad array of Nitrile Rubber Diaphragms. Diaphragms act as a flexible barrier that transmits pressure while keeping two media separate — critical in pumps, valves and regulators.",
   "We mould flat and convoluted diaphragms to your dimensions, in compounds chosen for flex life and compatibility with the fluids and gases involved."
  ],
  "features": [
   {
    "icon": "fa-solid fa-arrows-up-down",
    "title": "High Flex Life",
    "text": "Withstands repeated flexing cycles."
   },
   {
    "icon": "fa-solid fa-gauge-high",
    "title": "Pressure Response",
    "text": "Accurate pressure transmission."
   },
   {
    "icon": "fa-solid fa-droplet-slash",
    "title": "Media Separation",
    "text": "Keeps fluids or gases apart."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Compatible Compounds",
    "text": "NBR as standard; other grades on request."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Custom Designs",
    "text": "Flat or convoluted, to drawing."
   },
   {
    "icon": "fa-solid fa-circle-check",
    "title": "Consistent Thickness",
    "text": "Uniform wall for reliable action."
   }
  ],
  "apps": [
   {
    "icon": "fa-solid fa-faucet",
    "title": "Pumps",
    "text": "Diaphragm & dosing pumps",
    "img": "valves"
   },
   {
    "icon": "fa-solid fa-gauge",
    "title": "Regulators",
    "text": "Gas and pressure regulators",
    "img": "gauge"
   },
   {
    "icon": "fa-solid fa-droplet",
    "title": "Valves",
    "text": "Solenoid & control valves",
    "img": "valves2"
   },
   {
    "icon": "fa-solid fa-industry",
    "title": "Process Equipment",
    "text": "Instrumentation & controls",
    "img": "shipvalves"
   }
  ],
  "specs": [
   {
    "label": "Product",
    "value": "Rubber Diaphragms (flat / convoluted)"
   },
   {
    "label": "Materials",
    "value": "NBR (standard), EPDM, Silicone, Viton (FKM)"
   },
   {
    "label": "Sizes",
    "value": "As per drawing / sample"
   },
   {
    "label": "Temperature",
    "value": "Depends on compound"
   }
  ],
  "mats": [
   "NBR",
   "EPDM",
   "Silicone",
   "Viton (FKM)"
  ],
  "ind": [
   "industrial",
   "machinery",
   "engineering"
  ],
  "faqs": [
   {
    "q": "What material are your diaphragms made from?",
    "a": "Nitrile (NBR) is standard; EPDM, Silicone and Viton are available depending on the media."
   },
   {
    "q": "Can you match a diaphragm from a sample?",
    "a": "Yes, share the sample and we will develop a matching diaphragm."
   },
   {
    "q": "Do you make convoluted diaphragms?",
    "a": "Yes, we make flat and convoluted designs to drawing."
   },
   {
    "q": "Do you supply diaphragms for pumps?",
    "a": "Yes, our diaphragms are used in pumps, valves and regulators."
   }
  ],
  "tag": ""
 }
];

export const INDUSTRIES: Industry[] = [
 {
  "slug": "automotive",
  "name": "Automotive",
  "icon": "fa-solid fa-car-side",
  "img": "auto",
  "gal": [
   "auto2",
   "auto3",
   "auto4"
  ],
  "tagline": "Rubber components that keep vehicles sealed, quiet and safe",
  "intro": [
   "Vehicles depend on hundreds of rubber parts — from engine O-rings and oil seals to suspension bushes, grommets and door profiles. Radical Polymers supplies automotive manufacturers, workshops and spare-part dealers with dependable rubber components.",
   "We develop parts from drawings or samples, select compounds for fuel, oil, heat and weather exposure, and supply consistent quality from small batches to bulk volumes."
  ],
  "products": [
   "rubber-o-rings",
   "rubber-seals",
   "rubber-bushes",
   "molded-rubber-products",
   "rubber-profiles",
   "rubber-gaskets"
  ],
  "uses": [
   {
    "icon": "fa-solid fa-oil-can",
    "title": "Engine & Fuel",
    "text": "O-rings and seals resistant to oil and fuel."
   },
   {
    "icon": "fa-solid fa-car-burst",
    "title": "Suspension",
    "text": "Bushes that absorb shock and vibration."
   },
   {
    "icon": "fa-solid fa-plug",
    "title": "Wiring",
    "text": "Grommets that protect cables."
   },
   {
    "icon": "fa-solid fa-door-closed",
    "title": "Body & Doors",
    "text": "Profiles for weather sealing."
   },
   {
    "icon": "fa-solid fa-circle-stop",
    "title": "Brakes",
    "text": "Seals and boots for brake systems."
   },
   {
    "icon": "fa-solid fa-snowflake",
    "title": "AC & Cooling",
    "text": "Seals for coolant and refrigerant lines."
   }
  ],
  "challenges": [
   "Exposure to oil, fuel and coolant",
   "Wide temperature swings",
   "Constant vibration and movement",
   "Tight dimensional tolerances"
  ]
 },
 {
  "slug": "engineering",
  "name": "Engineering",
  "icon": "fa-solid fa-compass-drafting",
  "img": "drafting",
  "gal": [
   "cad",
   "designteam",
   "engineers"
  ],
  "tagline": "Precision rubber components for engineering assemblies and OEMs",
  "intro": [
   "Engineering companies and OEMs need rubber parts that fit first time and perform consistently. We work closely with design and purchase teams to develop components that match drawings and tolerances.",
   "From prototype samples to regular production, we support engineering assemblies with O-rings, washers, moulded parts and fully custom components."
  ],
  "products": [
   "custom-rubber-parts",
   "molded-rubber-products",
   "rubber-o-rings",
   "rubber-washers",
   "rubber-sheets",
   "rubber-profiles"
  ],
  "uses": [
   {
    "icon": "fa-solid fa-pen-ruler",
    "title": "Prototype Parts",
    "text": "Samples developed from drawings."
   },
   {
    "icon": "fa-solid fa-cubes",
    "title": "Assemblies",
    "text": "Moulded parts for sub-assemblies."
   },
   {
    "icon": "fa-solid fa-circle-dot",
    "title": "Fastening",
    "text": "Washers for sealing and cushioning."
   },
   {
    "icon": "fa-solid fa-wave-square",
    "title": "Damping",
    "text": "Pads and mounts for vibration."
   },
   {
    "icon": "fa-solid fa-shield-halved",
    "title": "Protection",
    "text": "Caps, plugs and covers."
   },
   {
    "icon": "fa-solid fa-ruler-combined",
    "title": "Special Sizes",
    "text": "Non-standard dimensions."
   }
  ],
  "challenges": [
   "Drawing-accurate dimensions",
   "Repeatable batch quality",
   "Fast sample development",
   "Varied material requirements"
  ]
 },
 {
  "slug": "industrial",
  "name": "Industrial",
  "icon": "fa-solid fa-industry",
  "img": "pipes",
  "gal": [
   "valves",
   "pipes2",
   "shipvalves"
  ],
  "tagline": "Gaskets, seals and sheets for pumps, pipelines and process plants",
  "intro": [
   "Process plants, pipelines and utilities rely on rubber to prevent leaks and protect equipment. We supply gaskets, seals, diaphragms and sheets that stand up to water, steam, oils and chemicals.",
   "Our team helps select the right compound for your media, pressure and temperature — reducing leaks, downtime and maintenance costs."
  ],
  "products": [
   "rubber-gaskets",
   "rubber-seals",
   "rubber-diaphragms",
   "rubber-sheets",
   "rubber-o-rings",
   "rubber-washers"
  ],
  "uses": [
   {
    "icon": "fa-solid fa-faucet",
    "title": "Pumps & Valves",
    "text": "Seals, gaskets and diaphragms."
   },
   {
    "icon": "fa-solid fa-grip-lines-vertical",
    "title": "Pipelines",
    "text": "Flange gaskets for leak-free joints."
   },
   {
    "icon": "fa-solid fa-temperature-high",
    "title": "Steam & Hot Water",
    "text": "EPDM components for heat."
   },
   {
    "icon": "fa-solid fa-flask",
    "title": "Chemical Handling",
    "text": "Viton and special compounds."
   },
   {
    "icon": "fa-solid fa-warehouse",
    "title": "Tank Lining",
    "text": "Rubber sheets for protection."
   },
   {
    "icon": "fa-solid fa-gauge",
    "title": "Instrumentation",
    "text": "Diaphragms for regulators."
   }
  ],
  "challenges": [
   "Chemical and media compatibility",
   "Pressure and temperature",
   "Leak prevention",
   "Minimising downtime"
  ]
 },
 {
  "slug": "electrical",
  "name": "Electrical",
  "icon": "fa-solid fa-plug-circle-bolt",
  "img": "electric",
  "gal": [
   "electric2",
   "breakers",
   "line"
  ],
  "tagline": "Grommets, insulating parts and enclosure seals for electrical equipment",
  "intro": [
   "Electrical panels, enclosures and appliances need rubber parts that seal out dust and moisture and insulate safely. We supply grommets, gaskets, washers and profiles for electrical manufacturers.",
   "Our compounds are selected for insulation, weather resistance and long life, and every part is made to fit your enclosure or component design."
  ],
  "products": [
   "rubber-gaskets",
   "rubber-profiles",
   "rubber-washers",
   "molded-rubber-products",
   "rubber-sheets",
   "custom-rubber-parts"
  ],
  "uses": [
   {
    "icon": "fa-solid fa-plug",
    "title": "Cable Grommets",
    "text": "Protect wires through panels."
   },
   {
    "icon": "fa-solid fa-door-closed",
    "title": "Panel Doors",
    "text": "Gaskets and profiles for sealing."
   },
   {
    "icon": "fa-solid fa-circle-dot",
    "title": "Insulating Washers",
    "text": "For terminals and fasteners."
   },
   {
    "icon": "fa-solid fa-cloud-rain",
    "title": "Outdoor Boxes",
    "text": "Weather-proof sealing."
   },
   {
    "icon": "fa-solid fa-lightbulb",
    "title": "Lighting",
    "text": "Seals for fixtures and housings."
   },
   {
    "icon": "fa-solid fa-house",
    "title": "Appliances",
    "text": "Feet, seals and buffers."
   }
  ],
  "challenges": [
   "Dust and moisture ingress",
   "Insulation requirements",
   "Outdoor weathering",
   "Exact fit for enclosures"
  ]
 },
 {
  "slug": "machinery",
  "name": "Machinery",
  "icon": "fa-solid fa-gear",
  "img": "excavator",
  "gal": [
   "cmach",
   "hydraulic",
   "machine"
  ],
  "tagline": "Anti-vibration mounts, hydraulic seals and diaphragms for machines",
  "intro": [
   "Heavy machinery and industrial equipment work under constant load, vibration and contamination. Our rubber bushes, seals, pads and diaphragms help machines run smoother and last longer.",
   "We supply both OEM components and replacement parts — including hard-to-find spares developed from samples."
  ],
  "products": [
   "rubber-bushes",
   "rubber-seals",
   "rubber-diaphragms",
   "rubber-sheets",
   "custom-rubber-parts",
   "rubber-o-rings"
  ],
  "uses": [
   {
    "icon": "fa-solid fa-gears",
    "title": "Hydraulics",
    "text": "Rod, piston and wiper seals."
   },
   {
    "icon": "fa-solid fa-wave-square",
    "title": "Anti-Vibration",
    "text": "Bushes and mounts."
   },
   {
    "icon": "fa-solid fa-tractor",
    "title": "Earth-Moving",
    "text": "Seals and bushes for heavy duty."
   },
   {
    "icon": "fa-solid fa-fan",
    "title": "Compressors",
    "text": "O-rings and gaskets."
   },
   {
    "icon": "fa-solid fa-screwdriver-wrench",
    "title": "Spares",
    "text": "Replacement parts from samples."
   },
   {
    "icon": "fa-solid fa-boxes-packing",
    "title": "Conveyors",
    "text": "Pads, sheets and buffers."
   }
  ],
  "challenges": [
   "Heavy loads and impact",
   "Continuous vibration",
   "Dust and contamination",
   "Availability of spare parts"
  ]
 }
];

export const TESTIMONIALS = [
 {
  "initial": "M",
  "name": "Mohit",
  "role": "Customer",
  "quote": "Amazing products — satisfied, and I recommend using Radical Polymers."
 },
 {
  "initial": "R",
  "name": "Rohan",
  "role": "Customer",
  "quote": "Unmatched purchasing experience. Quality is as good as the original, and they can develop any size you ask."
 },
 {
  "initial": "A",
  "name": "Aniket",
  "role": "Customer",
  "quote": "One of the best in terms of sales, service, pricing and delivery. A genuine manufacturer — fully recommended!"
 }
];

export const GENERAL_FAQS = [
 {
  "q": "Can you manufacture custom-size O-rings and gaskets?",
  "a": "Yes. We develop any size from your drawing or sample, including non-standard dimensions and special profiles."
 },
 {
  "q": "Which rubber materials do you work with?",
  "a": "We work with NBR (Nitrile), EPDM, Silicone, Viton (FKM), Neoprene and Natural Rubber, selected according to temperature, oil and chemical exposure."
 },
 {
  "q": "What is the minimum order quantity (MOQ)?",
  "a": "MOQ depends on the part and whether a new mould is needed. Share your requirement and we will suggest the most economical option."
 },
 {
  "q": "Do you deliver across India?",
  "a": "Yes, we dispatch pan-India from our Ghaziabad facility within the promised time-frame."
 },
 {
  "q": "How do I get a quotation?",
  "a": "Fill the enquiry form, email sales@radicalpolymer.com or call +91 9711114333 — we usually respond within one working day."
 }
];

export const BLOG: Post[] = [
 {
  "slug": "how-to-measure-an-o-ring",
  "title": "How to Measure an O-Ring Correctly (ID, OD & Cross-Section)",
  "cat": "O-Rings",
  "img": "oring",
  "mins": 5,
  "date": "12 Sep 2026",
  "excerpt": "A simple step-by-step guide to measuring O-rings so your replacement fits perfectly.",
  "body": "\n<p>Ordering the wrong O-ring size is one of the most common causes of leaks and rework. The good news: measuring an O-ring correctly takes only a couple of minutes once you know what to measure.</p>\n<h2>The three dimensions that matter</h2>\n<ul><li><b>Inner Diameter (ID)</b> — the distance across the inside of the ring.</li><li><b>Cross-Section (CS)</b> — the thickness of the ring material.</li><li><b>Outer Diameter (OD)</b> — equal to ID + 2 × CS. You only need two of the three.</li></ul>\n<p>Most suppliers, including us, specify O-rings by <b>ID × CS</b>. For example, 20 × 2.5 mm means a 20 mm inner diameter and a 2.5 mm cross-section.</p>\n<h2>Step-by-step measuring</h2>\n<ol><li>Clean the O-ring and place it flat on a table without stretching it.</li><li>Use a vernier caliper to measure the cross-section at three or four points and take the average.</li><li>Measure the inner diameter across the centre. For large rings, measure the OD and subtract twice the cross-section.</li><li>Note the material and hardness if known, along with the application.</li></ol>\n<div class=\"note\"><i class=\"fa-solid fa-lightbulb\"></i><p>Used O-rings often swell, shrink or flatten in service. If possible, measure the groove (gland) instead of the old ring — it gives a more reliable size.</p></div>\n<h2>Measuring the groove</h2>\n<p>For a static seal, measure the groove diameter and groove width. The O-ring cross-section should be slightly larger than the groove depth so the ring is compressed when installed — this squeeze creates the seal.</p>\n<h2>Share these details with your supplier</h2>\n<ul><li>ID and cross-section (or groove dimensions)</li><li>Operating media — oil, water, fuel, air or chemicals</li><li>Temperature range and pressure</li><li>Quantity required</li></ul>\n<p>With these details, our team can recommend the right compound — NBR, Viton, EPDM, Silicone or Neoprene — and supply standard or custom sizes.</p>"
 },
 {
  "slug": "nbr-vs-epdm-vs-viton",
  "title": "NBR vs EPDM vs Viton: Which Rubber Should You Choose?",
  "cat": "Materials",
  "img": "lab",
  "mins": 6,
  "date": "03 Sep 2026",
  "excerpt": "Compare the most common rubber compounds by temperature, oil and chemical resistance.",
  "body": "\n<p>Choosing the right rubber compound matters as much as choosing the right size. A seal in the wrong material can swell, crack or harden within weeks. Here is a practical comparison of the three compounds we are asked about most.</p>\n<h2>Quick comparison</h2>\n<table><tr><th>Property</th><th>NBR (Nitrile)</th><th>EPDM</th><th>Viton (FKM)</th></tr>\n<tr><td>Mineral oil & fuel</td><td>Excellent</td><td>Poor</td><td>Excellent</td></tr>\n<tr><td>Water & steam</td><td>Good</td><td>Excellent</td><td>Good</td></tr>\n<tr><td>Weather / ozone</td><td>Fair</td><td>Excellent</td><td>Excellent</td></tr>\n<tr><td>Approx. temperature</td><td>-30°C to 100°C</td><td>-40°C to 130°C</td><td>-20°C to 200°C</td></tr>\n<tr><td>Relative cost</td><td>Low</td><td>Low</td><td>High</td></tr></table>\n<h2>NBR (Nitrile) — the oil specialist</h2>\n<p>NBR is the go-to compound for hydraulic systems, fuel lines and general machinery where oil is present. It offers good abrasion resistance at an economical price, which is why most standard O-rings and oil seals are made in NBR.</p>\n<h2>EPDM — best for water and outdoors</h2>\n<p>EPDM handles hot water, steam, weather, UV and ozone extremely well, making it ideal for plumbing, water lines and outdoor profiles. Avoid it wherever mineral oil or fuel is present — it will swell.</p>\n<h2>Viton (FKM) — for heat and chemicals</h2>\n<p>Viton is chosen when temperatures are high or when aggressive fuels and chemicals are involved. It costs more, but in the right application it lasts far longer than standard compounds.</p>\n<blockquote>Rule of thumb: oil → NBR, water/weather → EPDM, heat or chemicals → Viton.</blockquote>\n<h2>What about Silicone and Neoprene?</h2>\n<p><b>Silicone</b> offers the widest temperature range and is used for food-contact and high/low temperature applications, though it has lower tear strength. <b>Neoprene</b> is a good all-rounder with moderate oil and weather resistance, often used for refrigerants and general-purpose gaskets.</p>\n<p>Not sure which one fits your application? Share the media, temperature and pressure with our team and we will recommend the right compound.</p>"
 },
 {
  "slug": "causes-of-gasket-failure",
  "title": "5 Common Causes of Gasket Failure — and How to Prevent Them",
  "cat": "Gaskets",
  "img": "pipes",
  "mins": 4,
  "date": "22 Aug 2026",
  "excerpt": "Over-compression, wrong material and poor surface finish — what to watch out for.",
  "body": "\n<p>A failed gasket means leaks, downtime and sometimes safety risks. Most failures can be traced to a handful of avoidable causes.</p>\n<h2>1. Wrong material for the media</h2>\n<p>A gasket that is not compatible with the fluid will swell, soften or crack. Always match the compound to the media — for example EPDM for water and steam, NBR for oils.</p>\n<h2>2. Over-compression</h2>\n<p>Over-tightening bolts crushes the gasket, pushing material out of the joint and destroying its ability to spring back. Follow the recommended bolt torque and tighten in a cross pattern.</p>\n<h2>3. Under-compression</h2>\n<p>Too little load leaves gaps for leaks. Uneven bolt tightening and warped flanges are common culprits.</p>\n<h2>4. Poor surface finish</h2>\n<p>Deep scratches, rust or old gasket residue on the flange create leak paths. Clean and inspect both faces before fitting a new gasket.</p>\n<h2>5. Temperature beyond the compound's limit</h2>\n<p>Heat ages rubber quickly. If the joint runs hot, consider a higher-temperature compound such as Silicone or Viton.</p>\n<div class=\"note\"><i class=\"fa-solid fa-lightbulb\"></i><p>Never reuse an old gasket. Once compressed and aged, it will not seal as well as a new one.</p></div>\n<h2>Prevention checklist</h2>\n<ul><li>Select the right compound and thickness</li><li>Clean flange faces thoroughly</li><li>Tighten bolts evenly in a cross pattern</li><li>Replace gaskets during maintenance instead of reusing them</li></ul>"
 },
 {
  "slug": "rubber-parts-in-vehicles",
  "title": "Where Rubber Parts Are Used in a Vehicle — A Complete Guide",
  "cat": "Automotive",
  "img": "auto",
  "mins": 5,
  "date": "10 Aug 2026",
  "excerpt": "From engine O-rings to suspension bushes, a look at rubber parts in modern vehicles.",
  "body": "\n<p>A typical vehicle contains hundreds of rubber components. They seal fluids, absorb vibration, protect wiring and keep the cabin quiet. Here is where you will find them.</p>\n<h2>Engine and fuel system</h2>\n<p>O-rings, oil seals and gaskets keep oil, fuel and coolant where they belong. These parts are usually made in NBR or Viton for oil and heat resistance.</p>\n<h2>Suspension and chassis</h2>\n<p>Rubber bushes at control arms, links and mounts absorb shock and isolate vibration, giving a smoother, quieter ride.</p>\n<h2>Brakes</h2>\n<p>Seals and boots in brake calipers and cylinders keep hydraulic fluid sealed and dust out.</p>\n<h2>Body, doors and windows</h2>\n<p>Extruded rubber profiles seal doors, windows and the boot against water, dust and wind noise — typically in weather-resistant EPDM.</p>\n<h2>Electrical system</h2>\n<p>Grommets protect cables where they pass through metal panels, and rubber boots seal connectors from moisture.</p>\n<blockquote>Small rubber parts have a big impact on safety, comfort and reliability.</blockquote>\n<h2>Sourcing automotive rubber parts</h2>\n<p>We manufacture O-rings, seals, bushes, grommets and profiles for automotive applications — and develop hard-to-find parts from samples.</p>"
 },
 {
  "slug": "hydraulic-cylinder-seal-selection",
  "title": "Choosing Seals for Hydraulic Cylinders: A Practical Checklist",
  "cat": "Seals",
  "img": "hydraulic",
  "mins": 5,
  "date": "28 Jul 2026",
  "excerpt": "Pressure, speed, temperature and fluid — key factors for long seal life.",
  "body": "\n<p>Hydraulic cylinders depend on a set of seals working together. Choosing them correctly prevents leakage, contamination and premature wear.</p>\n<h2>The main seals in a cylinder</h2>\n<ul><li><b>Rod seal</b> — stops fluid leaking out along the rod.</li><li><b>Piston seal</b> — separates pressure on both sides of the piston.</li><li><b>Wiper / dust seal</b> — keeps dirt out as the rod retracts.</li><li><b>Static seals and O-rings</b> — seal end caps and ports.</li></ul>\n<h2>Checklist before you order</h2>\n<ol><li><b>Operating pressure</b> — higher pressure needs harder compounds or support rings.</li><li><b>Temperature</b> — NBR suits most hydraulic oils; Viton for higher heat.</li><li><b>Fluid type</b> — mineral oil, water-glycol or synthetic fluids each need compatible compounds.</li><li><b>Speed and stroke</b> — fast movement generates heat and wear.</li><li><b>Environment</b> — dusty or outdoor machines need effective wipers.</li></ol>\n<div class=\"note\"><i class=\"fa-solid fa-lightbulb\"></i><p>When replacing seals, also inspect the rod and bore surfaces. A scratched rod will damage new seals quickly.</p></div>\n<h2>Replacement seals from samples</h2>\n<p>For older or imported machines, original seals can be hard to find. Share a sample or the groove dimensions and we can develop matching seals in the right compound.</p>"
 },
 {
  "slug": "ordering-custom-rubber-parts",
  "title": "Getting a Custom Rubber Part Made: What to Share With Your Supplier",
  "cat": "Custom Parts",
  "img": "blueprint",
  "mins": 4,
  "date": "15 Jul 2026",
  "excerpt": "Drawings, samples and operating conditions — the details that speed up development.",
  "body": "\n<p>Custom rubber parts can be developed quickly when the supplier has the right information from the start. Here is what to prepare.</p>\n<h2>1. A drawing or a sample</h2>\n<p>A dimensioned drawing (2D or 3D) is ideal. If you do not have one, a good-condition sample works too — we can measure it and develop the part.</p>\n<h2>2. Where and how the part is used</h2>\n<p>Tell us what the part does — sealing, cushioning, insulating — and what it touches. This decides the compound.</p>\n<h2>3. Operating conditions</h2>\n<ul><li>Temperature range</li><li>Media in contact (oil, water, chemicals, air)</li><li>Pressure or load</li><li>Indoor or outdoor exposure</li></ul>\n<h2>4. Hardness and colour</h2>\n<p>If you know the required hardness (Shore A) or colour, share it. Otherwise we will recommend one based on the application.</p>\n<h2>5. Quantity and timeline</h2>\n<p>Expected quantity helps us choose the most economical tooling and process.</p>\n<blockquote>The more we know upfront, the faster we can deliver an approved sample.</blockquote>\n<h2>Our development process</h2>\n<ol><li>Requirement review and compound selection</li><li>Mould development</li><li>Sample production and your approval</li><li>Bulk production, inspection and dispatch</li></ol>"
 }
];

export const PROCESS = [
 {
  "icon": "fa-solid fa-magnifying-glass",
  "title": "Explore",
  "text": "We understand your application, dimensions, material and volume requirements.",
  "img": "blueprint"
 },
 {
  "icon": "fa-solid fa-pen-ruler",
  "title": "Design",
  "text": "Compound selection, drawing approval and mould development.",
  "img": "cad"
 },
 {
  "icon": "fa-solid fa-gears",
  "title": "Production",
  "text": "Precision moulding on modern machines with in-process quality checks.",
  "img": "operator"
 },
 {
  "icon": "fa-solid fa-truck-ramp-box",
  "title": "Finished",
  "text": "Final inspection, packing and on-time dispatch to your doorstep.",
  "img": "boxes"
 }
];

export const WHY8 = [
 {
  "icon": "fa-solid fa-industry",
  "title": "Genuine Manufacturer",
  "text": "Factory-direct supply with full control over quality and cost."
 },
 {
  "icon": "fa-solid fa-ruler-combined",
  "title": "Any Size Developed",
  "text": "Custom moulds developed from your drawing or sample."
 },
 {
  "icon": "fa-solid fa-flask-vial",
  "title": "Right Compound",
  "text": "NBR, EPDM, Silicone, Viton, Neoprene — matched to your application."
 },
 {
  "icon": "fa-solid fa-microscope",
  "title": "Inspected Quality",
  "text": "Dimensions, hardness and finish checked on every lot."
 },
 {
  "icon": "fa-solid fa-indian-rupee-sign",
  "title": "Reasonable Rates",
  "text": "Competitive pricing for small runs and bulk orders."
 },
 {
  "icon": "fa-solid fa-truck-fast",
  "title": "On-Time Delivery",
  "text": "Dispatched across India within the promised time-frame."
 },
 {
  "icon": "fa-solid fa-boxes-stacked",
  "title": "Flexible Quantities",
  "text": "From sample batches to regular bulk supply."
 },
 {
  "icon": "fa-solid fa-headset",
  "title": "Responsive Support",
  "text": "Quick quotations and direct access to our team."
 }
];

export const CAPS = [
 {
  "icon": "fa-solid fa-compress",
  "title": "Compression Moulding",
  "text": "For O-rings, seals, gaskets and moulded parts."
 },
 {
  "icon": "fa-solid fa-syringe",
  "title": "Injection Moulding",
  "text": "For repeatable, precise components."
 },
 {
  "icon": "fa-solid fa-pen-ruler",
  "title": "Mould Development",
  "text": "New moulds developed for your part."
 },
 {
  "icon": "fa-solid fa-flask",
  "title": "Compound Selection",
  "text": "Material matched to the application."
 },
 {
  "icon": "fa-solid fa-scissors",
  "title": "Trimming & Finishing",
  "text": "Clean edges and flash-free finish."
 },
 {
  "icon": "fa-solid fa-microscope",
  "title": "Inspection",
  "text": "Dimensional, hardness and visual checks."
 },
 {
  "icon": "fa-solid fa-boxes-packing",
  "title": "Packing",
  "text": "Safe packing as per your requirement."
 },
 {
  "icon": "fa-solid fa-truck-fast",
  "title": "Dispatch",
  "text": "Pan-India delivery on schedule."
 }
];

export const MFG3 = [
 {
  "slug": "manufacturing-facility",
  "name": "Manufacturing Facility",
  "icon": "fa-solid fa-warehouse",
  "img": "floor",
  "text": "Modern moulding presses and finishing equipment under one roof."
 },
 {
  "slug": "quality-testing",
  "name": "Quality & Testing",
  "icon": "fa-solid fa-microscope",
  "img": "caliper",
  "text": "Dimensional, hardness and visual checks on every lot."
 },
 {
  "slug": "custom-manufacturing",
  "name": "Custom Manufacturing",
  "icon": "fa-solid fa-pen-ruler",
  "img": "blueprint",
  "text": "Parts developed to your drawing or sample."
 }
];

export const POLICIES = {
 "privacy-policy": {
  "title": "Privacy Policy",
  "icon": "fa-solid fa-user-shield",
  "sections": [
   {
    "icon": "fa-solid fa-circle-info",
    "heading": "Introduction",
    "html": "<p>Radical Polymers (“we”, “us”, “our”) respects your privacy. This policy explains what information we collect through this website, how we use it and the choices you have.</p>"
   },
   {
    "icon": "fa-solid fa-database",
    "heading": "Information We Collect",
    "html": "<p>When you submit an enquiry, quote request or newsletter form, we may collect:</p><ul><li>Your name, phone number and email address</li><li>Company name and city</li><li>Product requirement details you choose to share</li></ul><p>We may also collect basic, non-identifying usage data such as pages visited and browser type.</p>"
   },
   {
    "icon": "fa-solid fa-gears",
    "heading": "How We Use Your Information",
    "html": "<ul><li>To respond to your enquiries and send quotations</li><li>To process and deliver orders</li><li>To share product updates if you have subscribed</li><li>To improve our website and services</li></ul>"
   },
   {
    "icon": "fa-solid fa-share-nodes",
    "heading": "Sharing of Information",
    "html": "<p>We do not sell or rent your personal information. We may share it only with service providers who help us operate our business (for example, courier partners), or where required by law.</p>"
   },
   {
    "icon": "fa-solid fa-lock",
    "heading": "Data Security",
    "html": "<p>We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure.</p>"
   },
   {
    "icon": "fa-solid fa-user-check",
    "heading": "Your Choices",
    "html": "<p>You may ask us to update or delete your information, or unsubscribe from updates at any time, by emailing <a href=\"mailto:sales@radicalpolymer.com\" style=\"color:var(--gold)\">sales@radicalpolymer.com</a>.</p>"
   },
   {
    "icon": "fa-solid fa-envelope",
    "heading": "Contact",
    "html": "<p>For any privacy questions, contact us at 155-A Model Town West, Ghaziabad, Uttar Pradesh, or call +91 9711114333.</p>"
   }
  ]
 },
 "cookies-policy": {
  "title": "Cookies Policy",
  "icon": "fa-solid fa-cookie-bite",
  "sections": [
   {
    "icon": "fa-solid fa-circle-info",
    "heading": "What Are Cookies?",
    "html": "<p>Cookies are small text files stored on your device when you visit a website. They help the site work properly and remember your preferences.</p>"
   },
   {
    "icon": "fa-solid fa-list",
    "heading": "How We Use Cookies",
    "html": "<ul><li><b>Essential:</b> required for basic site functions.</li><li><b>Preference:</b> remember choices such as whether you have already seen our enquiry popup.</li><li><b>Analytics:</b> if enabled, help us understand how visitors use the site.</li></ul>"
   },
   {
    "icon": "fa-solid fa-globe",
    "heading": "Third-Party Services",
    "html": "<p>Our pages load fonts, icons, images and maps from third-party providers (such as Google Fonts, Google Maps, Unsplash and cdnjs). These providers may set their own cookies under their own policies.</p>"
   },
   {
    "icon": "fa-solid fa-sliders",
    "heading": "Managing Cookies",
    "html": "<p>You can block or delete cookies through your browser settings. Some parts of the website may not work as intended if cookies are disabled.</p>"
   },
   {
    "icon": "fa-solid fa-envelope",
    "heading": "Contact",
    "html": "<p>Questions about this policy? Email <a href=\"mailto:sales@radicalpolymer.com\" style=\"color:var(--gold)\">sales@radicalpolymer.com</a>.</p>"
   }
  ]
 },
 "disclaimer": {
  "title": "Disclaimer",
  "icon": "fa-solid fa-scale-balanced",
  "sections": [
   {
    "icon": "fa-solid fa-circle-info",
    "heading": "General Information",
    "html": "<p>The information on this website is provided by Radical Polymers for general information purposes only. While we try to keep it accurate and up to date, we make no warranties about its completeness or suitability for any particular purpose.</p>"
   },
   {
    "icon": "fa-solid fa-table-list",
    "heading": "Technical Data",
    "html": "<p>Specifications, temperature ranges and material properties shown are typical values for guidance. Actual performance depends on the compound, design and operating conditions. Please confirm requirements with our team before ordering.</p>"
   },
   {
    "icon": "fa-solid fa-image",
    "heading": "Images",
    "html": "<p>Some images on this website are representative stock photographs and may not show our actual products or facility.</p>"
   },
   {
    "icon": "fa-solid fa-link",
    "heading": "External Links",
    "html": "<p>Links to other websites are provided for convenience. We are not responsible for the content of external sites.</p>"
   },
   {
    "icon": "fa-solid fa-triangle-exclamation",
    "heading": "Limitation of Liability",
    "html": "<p>Radical Polymers will not be liable for any loss or damage arising from the use of information on this website.</p>"
   },
   {
    "icon": "fa-solid fa-envelope",
    "heading": "Contact",
    "html": "<p>For questions, call +91 9711114333 or email <a href=\"mailto:sales@radicalpolymer.com\" style=\"color:var(--gold)\">sales@radicalpolymer.com</a>.</p>"
   }
  ]
 }
};

export const P = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p])) as Record<string, Product>;
export const I = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i])) as Record<string, Industry>;
