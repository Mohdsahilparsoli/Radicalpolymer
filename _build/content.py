# -*- coding: utf-8 -*-
"""Site content for Radical Polymers. Edit text here, then run: python3 _build/build.py"""

IMG = {
    # products
    'oring': '1759790475932-ac8c04b17727', 'oring2': '1699466622736-36c7b7893745',
    'seal': '1571909941887-feb831a05338', 'gasket': '1719212752790-fb82dd11de88',
    'washer': '1673833114586-f951168be369', 'sheet': '1464639351491-a172c2aa2911',
    'bush': '1595787142842-7404bc60470d', 'molded': '1606337321936-02d1b1a4d5ef',
    'custom': '1769147339214-076740872485', 'profile': '1543674892-7d64d45df18b',
    'diaphragm': '1682268294094-5c68969ea23a', 'gears': '1711199694531-e982a79ea381',
    'screws': '1703868671123-3deab40f66c4', 'bolts': '1564226591723-659ff3852b2a',
    'engine_mech': '1565377167263-d29b5ac85479',
    # factory
    'floor': '1496247749665-49cf5b1022e9', 'operator': '1598299803204-b73796f43289',
    'machine': '1717386255773-1e3037c81788', 'machine2': '1717386255767-52643970d483',
    'line': '1716191300020-b52dec5b70a8', 'robot': '1716191299980-a6e8827ba10b',
    'orange': '1647427060118-4911c9821b82', 'sparks': '1735494033576-9c882e80504c',
    'grind': '1528953030358-b0c7de371f1f', 'techs': '1695603414685-af28aff0f9d2',
    'engineers': '1581091212991-8891c7d4bd9b', 'assembly': '1589793463357-5fb813435467',
    'lab_student': '1581092160607-ee22621dd758', 'team_ws': '1764114908655-9a26d32750a0',
    # quality / design
    'caliper': '1758873263563-5ba4aa330799', 'measure': '1747999827332-163aa33cd597',
    'lab': '1764835711461-117d67799a7d', 'clipboard': '1700727448575-6f1680cd7d75',
    'blueprint': '1503387837-b154d5074bd2', 'cad': '1581092580497-e0d23cbdf1dc',
    'drafting': '1503387762-592deb58ef4e', 'paper': '1581092160562-40aa08e78837',
    'designteam': '1744627049721-73c27008ad28',
    # logistics / business
    'boxes': '1769355104335-acef3aa4c9b6', 'warehouse': '1721937127582-ed331de95a04',
    'forklift': '1576669801820-a9ab287ac2d1', 'handshake': '1521791136064-7986c2920216',
    'handshake2': '1752159400890-d906038f1b35', 'deal': '1758518730384-be3d205838e8',
    # industries
    'auto': '1615906655593-ad0386982a0f', 'auto2': '1552656967-7a0991a13906',
    'auto3': '1527383418406-f85a3b146499', 'auto4': '1606577924006-27d39b132ae2',
    'pipes': '1620203853151-496c7228306c', 'pipes2': '1513828742140-ccaa28f3eda0',
    'valves': '1759148414485-5f624fe9d1ea', 'valves2': '1698031610493-c19fa20dfeab',
    'gauge': '1761758674188-2b8e4c89c5e2', 'electric': '1544724569-5f546fd6f2b5',
    'electric2': '1758101755915-462eddc23f57', 'breakers': '1576446470246-499c738d1c8e',
    'excavator': '1580901369227-308f6f40bdeb', 'cmach': '1642927778267-4e8b787b325a',
    'hydraulic': '1766157669300-8ade8059b379', 'shipvalves': '1682268294196-8a8dd14c0326',
}

PRODUCT_OPTIONS = ['Rubber O-Rings', 'Rubber Seals', 'Rubber Gaskets', 'Rubber Washers', 'Rubber Sheets', 'Rubber Bushes',
                   'Molded Rubber Products', 'Custom Rubber Parts', 'Rubber Profiles', 'Rubber Diaphragms']

MATERIALS = [
    ('NBR (Nitrile)', 'NBR', 'Oil, fuel & hydraulic systems', '-30°C to 100°C', 90),
    ('EPDM', 'EPDM', 'Water, steam, weather & outdoor', '-40°C to 130°C', 20),
    ('Silicone', 'Si', 'Food-contact, extreme temperatures', '-60°C to 200°C', 40),
    ('Viton (FKM)', 'FKM', 'Chemicals, fuels & high heat', '-20°C to 200°C', 98),
    ('Neoprene', 'CR', 'Refrigerants, general purpose', '-35°C to 110°C', 60),
    ('Natural Rubber', 'NR', 'Anti-vibration, abrasion resistance', '-50°C to 80°C', 15),
]

COMMON_SPECS = [
    ('Hardness', '40 – 90 Shore A (as per application)'),
    ('Colour', 'Black (standard); other colours on request'),
    ('Manufacturing', 'Compression / injection moulding as per part'),
    ('Tolerances', 'As per drawing / agreed sample'),
    ('Order Quantity', 'Small batches to bulk volumes'),
    ('Packing', 'Poly bags, cartons or as required'),
]

PRODUCTS = [
 dict(slug='rubber-o-rings', name='Rubber O-Rings', short='O-Rings', icon='fa-regular fa-circle', cat='seal', img='oring', gal=['oring2', 'caliper', 'operator'],
  tag='Best Seller', tagline='Precision O-rings for leak-proof static and dynamic sealing',
  card='Excellent quality black rubber O-rings in standard and custom sizes.',
  intro=["In order to cater to the variegated demands of our clients, we manufacture an excellent quality range of Rubber O-Rings. Each O-ring is moulded to an accurate inner diameter and cross-section so it seats correctly in the groove and seals reliably under pressure.",
         "We produce O-rings in NBR, Viton (FKM), EPDM, Silicone and Neoprene, in both standard and non-standard sizes. Share a drawing, a sample or simply the ID and cross-section — our team will recommend the right compound and hardness for your application."],
  features=[('fa-solid fa-bullseye', 'Accurate Dimensions', 'Consistent ID and cross-section for a correct groove fit.'),
            ('fa-solid fa-ruler-combined', 'Any Size', 'Standard and non-standard sizes made to order.'),
            ('fa-solid fa-flask', 'Multiple Compounds', 'NBR, Viton, EPDM, Silicone and Neoprene.'),
            ('fa-solid fa-wand-magic-sparkles', 'Clean Finish', 'Trimmed, flash-free parting line for reliable sealing.'),
            ('fa-solid fa-compress', 'Good Compression Set', 'Holds sealing force over long service life.'),
            ('fa-solid fa-palette', 'Colour Options', 'Black as standard; colours on request for identification.')],
  apps=[('fa-solid fa-gears', 'Hydraulic & Pneumatic', 'Cylinders, pistons and rods', 'hydraulic'),
        ('fa-solid fa-faucet', 'Pumps & Valves', 'Static and dynamic sealing', 'valves'),
        ('fa-solid fa-car', 'Automotive', 'Engines, fuel and brake systems', 'auto'),
        ('fa-solid fa-industry', 'Pipe Fittings', 'Couplings and connectors', 'pipes')],
  specs=[('Product', 'Rubber O-Rings'), ('Materials', 'NBR, Viton (FKM), EPDM, Silicone, Neoprene'), ('Sizes', 'Standard & custom ID / cross-section'), ('Temperature', 'Depends on compound (approx. -60°C to 200°C across range)')],
  mats=['NBR', 'Viton (FKM)', 'EPDM', 'Silicone', 'Neoprene'], ind=['automotive', 'machinery', 'industrial'],
  faqs=[('Can you make non-standard O-ring sizes?', 'Yes. Share the inner diameter and cross-section, a drawing or a sample and we will develop the size for you.'),
        ('Which material should I choose for oil applications?', 'NBR (Nitrile) is the usual choice for mineral oils and fuels. For higher temperatures or aggressive chemicals, Viton (FKM) is recommended.'),
        ('How do I measure an O-ring?', 'Measure the inner diameter (ID) and the cross-section (thickness). Our blog has a step-by-step guide.'),
        ('Do you supply small quantities?', 'Yes, we supply small batches as well as bulk quantities. MOQ depends on the size and tooling required.')]),
 dict(slug='rubber-seals', name='Rubber Seals', short='Seals', icon='fa-solid fa-life-ring', cat='seal', img='seal', gal=['hydraulic', 'operator', 'measure'],
  tagline='Oil, hydraulic and pneumatic seals built for demanding duty',
  card='Premium oil, hydraulic and pneumatic seals for demanding duty.',
  intro=["Keeping in mind the ever-evolving requirements of our respected clients, we offer a premium quality range of Rubber Seals. Our seals are designed to keep fluids in and contaminants out across rotating, reciprocating and static applications.",
         "From oil seals and hydraulic seals to dust and wiper seals, every part is moulded in a compound matched to its operating media, pressure and temperature — so you get dependable sealing and longer equipment life."],
  features=[('fa-solid fa-oil-can', 'Oil & Fluid Resistant', 'Compounds selected for oils, water and chemicals.'),
            ('fa-solid fa-gauge-high', 'Pressure Ready', 'Suitable for hydraulic and pneumatic duty.'),
            ('fa-solid fa-rotate', 'Static & Dynamic', 'For rotating, reciprocating and static joints.'),
            ('fa-solid fa-shield-halved', 'Contamination Control', 'Dust and wiper designs protect internals.'),
            ('fa-solid fa-ruler-combined', 'Custom Profiles', 'Developed from your drawing or sample.'),
            ('fa-solid fa-clock-rotate-left', 'Long Service Life', 'Wear-resistant compounds reduce downtime.')],
  apps=[('fa-solid fa-gears', 'Hydraulic Cylinders', 'Rod, piston and wiper seals', 'hydraulic'),
        ('fa-solid fa-car', 'Automotive', 'Oil seals for shafts and hubs', 'auto2'),
        ('fa-solid fa-fan', 'Pumps & Motors', 'Rotary shaft sealing', 'valves2'),
        ('fa-solid fa-tractor', 'Heavy Machinery', 'Dust and weather sealing', 'excavator')],
  specs=[('Product', 'Rubber Seals (oil, hydraulic, pneumatic, dust)'), ('Materials', 'NBR, Viton (FKM), EPDM, Silicone, Neoprene'), ('Sizes', 'Shaft / bore sizes as per requirement'), ('Temperature', 'Depends on compound and duty')],
  mats=['NBR', 'Viton (FKM)', 'EPDM', 'Silicone', 'Neoprene'], ind=['automotive', 'machinery', 'industrial'],
  faqs=[('What types of seals do you make?', 'We manufacture oil seals, hydraulic and pneumatic seals, dust/wiper seals and custom sealing profiles.'),
        ('Can you match an existing seal?', 'Yes. Send us a sample or drawing and we will develop a matching seal in the right compound.'),
        ('Which seal material is best for high temperature?', 'Viton (FKM) and Silicone handle higher temperatures; the final choice depends on the media in contact.'),
        ('Do you supply seals for OEMs?', 'Yes, we supply both OEM and replacement requirements in small and bulk quantities.')]),
 dict(slug='rubber-gaskets', name='Rubber Gaskets', short='Gaskets', icon='fa-regular fa-square', cat='seal', img='gasket', gal=['pipes', 'valves', 'caliper'],
  tagline='Flange and custom-cut gaskets for leak-free joints',
  card='Wide assortment of flange and custom-cut gaskets.',
  intro=["With an objective to fulfil the ever-evolving demands of our clients, we offer a wide assortment of Rubber Gaskets. Our gaskets create a tight, durable seal between mating surfaces in pipelines, pumps, panels and machinery.",
         "We make moulded and cut gaskets in round, square and custom shapes, with or without bolt holes, in compounds selected for the media, pressure and temperature of your application."],
  features=[('fa-solid fa-shapes', 'Any Shape', 'Round, square, rectangular and custom profiles.'),
            ('fa-solid fa-circle-nodes', 'Bolt-Hole Patterns', 'Made to match your flange drawing.'),
            ('fa-solid fa-droplet', 'Leak-Free Joints', 'Fills surface irregularities for a tight seal.'),
            ('fa-solid fa-flask', 'Media Compatible', 'Compounds for water, oil, steam and chemicals.'),
            ('fa-solid fa-layer-group', 'Thickness Options', 'Thickness chosen as per joint design.'),
            ('fa-solid fa-boxes-stacked', 'Batch Consistency', 'Repeatable quality for every order.')],
  apps=[('fa-solid fa-industry', 'Pipelines & Flanges', 'Water, oil and process lines', 'pipes'),
        ('fa-solid fa-faucet', 'Valves & Pumps', 'Body and cover gaskets', 'valves'),
        ('fa-solid fa-bolt', 'Electrical Panels', 'Door and enclosure sealing', 'electric'),
        ('fa-solid fa-car', 'Automotive', 'Covers, housings and lamps', 'auto3')],
  specs=[('Product', 'Rubber Gaskets (moulded & cut)'), ('Materials', 'NBR, EPDM, Neoprene, Silicone, Viton (FKM)'), ('Shapes', 'Round, square, rectangular, custom'), ('Thickness', 'As per drawing / requirement')],
  mats=['NBR', 'EPDM', 'Neoprene', 'Silicone', 'Viton (FKM)'], ind=['industrial', 'electrical', 'automotive'],
  faqs=[('Can you make gaskets with bolt holes?', 'Yes. Share the flange drawing or dimensions and we will make gaskets with the matching hole pattern.'),
        ('Which gasket material is best for water lines?', 'EPDM performs very well with water and steam. For oil lines, NBR is generally preferred.'),
        ('What causes gasket failure?', 'Common causes include wrong material, over-compression and poor surface finish. Read our blog for prevention tips.'),
        ('Do you make large-size gaskets?', 'Yes, size depends on the process and tooling. Contact us with your dimensions.')]),
 dict(slug='rubber-washers', name='Rubber Washers', short='Washers', icon='fa-solid fa-circle-dot', cat='mount', img='washer', gal=['screws', 'bolts', 'caliper'],
  tagline='Flat and shaped washers for sealing, cushioning and insulation',
  card='Flat and shaped washers for sealing and cushioning.',
  intro=["Our Rubber Washers provide a reliable seal and a cushioning layer under bolts, screws and fittings. They prevent leaks, absorb vibration and protect surfaces from damage.",
         "We manufacture flat, shouldered and custom-shaped washers in a range of inner/outer diameters and thicknesses, using compounds suited to water, oil, weather or electrical insulation."],
  features=[('fa-solid fa-droplet', 'Leak Prevention', 'Seals threaded joints and fasteners.'),
            ('fa-solid fa-wave-square', 'Vibration Damping', 'Cushions and reduces noise.'),
            ('fa-solid fa-bolt', 'Insulating', 'Electrical insulation where required.'),
            ('fa-solid fa-ruler-combined', 'Custom ID/OD', 'Any inner/outer diameter and thickness.'),
            ('fa-solid fa-shield-halved', 'Surface Protection', 'Prevents scratches and metal contact.'),
            ('fa-solid fa-boxes-stacked', 'Bulk Supply', 'Consistent quality in large quantities.')],
  apps=[('fa-solid fa-faucet', 'Plumbing & Taps', 'Water-tight fittings', 'valves2'),
        ('fa-solid fa-bolt', 'Electrical', 'Insulating washers', 'breakers'),
        ('fa-solid fa-gear', 'Machinery', 'Fastener cushioning', 'machine'),
        ('fa-solid fa-car', 'Automotive', 'Bolts, sensors & fittings', 'auto4')],
  specs=[('Product', 'Rubber Washers (flat, shouldered, custom)'), ('Materials', 'NBR, EPDM, Neoprene, Silicone, Natural Rubber'), ('Sizes', 'Any ID / OD / thickness'), ('Temperature', 'Depends on compound')],
  mats=['NBR', 'EPDM', 'Neoprene', 'Silicone', 'Natural Rubber'], ind=['electrical', 'machinery', 'industrial'],
  faqs=[('Can you make washers to a specific ID and OD?', 'Yes, we make washers to any inner diameter, outer diameter and thickness you require.'),
        ('Which material is used for insulating washers?', 'Neoprene, EPDM and Silicone are commonly used; we will suggest the right one for your application.'),
        ('Do you supply washers in bulk?', 'Yes, we regularly supply washers in bulk quantities with consistent quality.'),
        ('Can washers be supplied in colours?', 'Black is standard; other colours can be produced on request.')]),
 dict(slug='rubber-sheets', name='Rubber Sheets', short='Sheets', icon='fa-solid fa-layer-group', cat='sheet', img='sheet', gal=['warehouse', 'floor', 'measure'],
  tagline='Industrial rubber sheets in multiple grades and thicknesses',
  card='Industrial rubber sheets in various grades and thicknesses.',
  intro=["Our Rubber Sheets are used across industries for sealing, cushioning, flooring, lining and cutting gaskets. They are produced in a range of compounds, hardness levels and thicknesses to suit general and specialised applications.",
         "Tell us the grade, thickness and size you need and we will supply sheets ready for cutting, or cut parts directly to your drawing."],
  features=[('fa-solid fa-layer-group', 'Multiple Grades', 'General purpose and speciality compounds.'),
            ('fa-solid fa-ruler-vertical', 'Thickness Range', 'Thickness as per requirement.'),
            ('fa-solid fa-scissors', 'Cut-to-Size', 'Sheets or ready-cut parts.'),
            ('fa-solid fa-shield-halved', 'Abrasion Resistant', 'Durable surface for wear applications.'),
            ('fa-solid fa-wave-square', 'Shock Absorbing', 'Cushioning and anti-vibration pads.'),
            ('fa-solid fa-flask', 'Media Options', 'Oil, water and weather resistant grades.')],
  apps=[('fa-solid fa-scissors', 'Gasket Cutting', 'Raw sheet for cut gaskets', 'gasket'),
        ('fa-solid fa-warehouse', 'Flooring & Mats', 'Industrial and utility floors', 'warehouse'),
        ('fa-solid fa-gear', 'Machine Pads', 'Anti-vibration mounting', 'machine'),
        ('fa-solid fa-industry', 'Lining', 'Tanks, chutes and hoppers', 'pipes2')],
  specs=[('Product', 'Rubber Sheets'), ('Materials', 'NBR, EPDM, Neoprene, Silicone, Natural Rubber'), ('Thickness', 'As per requirement'), ('Finish', 'Plain / as required')],
  mats=['NBR', 'EPDM', 'Neoprene', 'Silicone', 'Natural Rubber'], ind=['industrial', 'machinery', 'engineering'],
  faqs=[('Can you cut sheets into gaskets?', 'Yes, we can supply full sheets or cut gaskets and pads directly to your drawing.'),
        ('Which sheet is best for oil resistance?', 'NBR sheets are recommended for oil and fuel contact.'),
        ('Do you supply sheets for flooring?', 'Yes, we supply sheets for industrial flooring, mats and anti-vibration pads.'),
        ('How do I order the right grade?', 'Share the application, thickness and size — our team will recommend the right grade.')]),
 dict(slug='rubber-bushes', name='Rubber Bushes', short='Bushes', icon='fa-solid fa-database', cat='mount', img='bush', gal=['auto', 'excavator', 'engine_mech'],
  tagline='Shock and vibration absorbing bushes for vehicles and machinery',
  card='Shock and vibration absorbing bushes for auto & machinery.',
  intro=["With sincerity and hard work of our professionals, we have carved a niche in manufacturing Rubber Bushes. Our bushes absorb shock, isolate vibration and reduce noise between moving metal parts.",
         "We produce plain rubber bushes and custom designs for suspension, mounting and machinery applications, moulded to your dimensions and hardness requirements."],
  features=[('fa-solid fa-wave-square', 'Vibration Isolation', 'Reduces vibration transfer and noise.'),
            ('fa-solid fa-car-burst', 'Shock Absorption', 'Cushions impact loads.'),
            ('fa-solid fa-dumbbell', 'Load Bearing', 'Hardness tuned to your load.'),
            ('fa-solid fa-ruler-combined', 'Custom Dimensions', 'Made from drawing or sample.'),
            ('fa-solid fa-clock-rotate-left', 'Durable', 'Resists wear and fatigue.'),
            ('fa-solid fa-volume-xmark', 'Noise Reduction', 'Smoother, quieter operation.')],
  apps=[('fa-solid fa-car', 'Suspension', 'Control arms & links', 'auto'),
        ('fa-solid fa-gear', 'Machine Mounts', 'Motors and compressors', 'machine'),
        ('fa-solid fa-tractor', 'Heavy Equipment', 'Pivot and linkage points', 'excavator'),
        ('fa-solid fa-industry', 'Industrial', 'Conveyors and fixtures', 'line')],
  specs=[('Product', 'Rubber Bushes'), ('Materials', 'Natural Rubber, NBR, Neoprene, EPDM'), ('Sizes', 'As per drawing / sample'), ('Temperature', 'Depends on compound')],
  mats=['Natural Rubber', 'NBR', 'Neoprene', 'EPDM'], ind=['automotive', 'machinery', 'engineering'],
  faqs=[('Can you replicate an existing bush?', 'Yes. Send us a sample and we will develop a matching bush with the right hardness.'),
        ('Which material is best for anti-vibration bushes?', 'Natural rubber offers excellent damping; NBR or Neoprene are preferred where oil or weather resistance is needed.'),
        ('Do you make bonded metal-rubber bushes?', 'Please share your drawing and requirement; we will confirm feasibility for your design.'),
        ('Do you supply bushes for automotive use?', 'Yes, we supply bushes for automotive and machinery applications.')]),
 dict(slug='molded-rubber-products', name='Molded Rubber Products', short='Molded Parts', icon='fa-solid fa-cubes', cat='custom', img='molded', gal=['operator', 'machine', 'caliper'],
  tagline='Compression and injection moulded rubber parts to specification',
  card='Compression & injection molded parts to specification.',
  intro=["We manufacture a wide variety of Molded Rubber Products — caps, plugs, boots, grommets, bellows, buffers and other components — produced on our moulding presses to your exact specification.",
         "Our in-house process covers compound selection, mould development, moulding, trimming and inspection, so you get consistent parts from first sample to bulk production."],
  features=[('fa-solid fa-cubes', 'Complex Shapes', 'Caps, boots, grommets, bellows and more.'),
            ('fa-solid fa-industry', 'In-House Moulding', 'Compression and injection moulding.'),
            ('fa-solid fa-pen-ruler', 'Mould Development', 'New moulds made for your part.'),
            ('fa-solid fa-flask', 'Right Compound', 'Material matched to the application.'),
            ('fa-solid fa-scissors', 'Clean Trimming', 'Neat edges and finish.'),
            ('fa-solid fa-boxes-stacked', 'Repeatable Quality', 'Consistent from batch to batch.')],
  apps=[('fa-solid fa-plug', 'Grommets & Boots', 'Cable and wire protection', 'electric2'),
        ('fa-solid fa-car', 'Automotive Parts', 'Buffers, boots and caps', 'auto3'),
        ('fa-solid fa-gear', 'Machinery', 'Bellows and stoppers', 'machine2'),
        ('fa-solid fa-house', 'Appliances', 'Feet, plugs and seals', 'line')],
  specs=[('Product', 'Molded Rubber Products'), ('Process', 'Compression / injection moulding'), ('Materials', 'NBR, EPDM, Silicone, Neoprene, Viton, Natural Rubber'), ('Design', 'As per drawing or sample')],
  mats=['NBR', 'EPDM', 'Silicone', 'Neoprene', 'Viton (FKM)', 'Natural Rubber'], ind=['automotive', 'electrical', 'engineering'],
  faqs=[('What molded parts can you produce?', 'Caps, plugs, grommets, boots, bellows, buffers, feet and many other custom moulded parts.'),
        ('Do you develop new moulds?', 'Yes, we develop moulds for new parts based on your drawing or sample.'),
        ('How long does development take?', 'It depends on part complexity; we confirm a timeline with every quotation.'),
        ('Can you produce small quantities?', 'Yes, we support both small runs and bulk production.')]),
 dict(slug='custom-rubber-parts', name='Custom Rubber Parts', short='Custom Parts', icon='fa-solid fa-gears', cat='custom', img='custom', gal=['blueprint', 'cad', 'measure'],
  tag='On Demand', tagline='Rubber components developed from your drawing or sample',
  card='Developed from your drawing or sample — any size.',
  intro=["Not every requirement fits a catalogue. Our Custom Rubber Parts service develops components exactly to your drawing or sample — in the size, shape, hardness and compound your application needs.",
         "From one-off replacement parts to new OEM components, our team handles compound selection, mould development, sampling and production under one roof."],
  features=[('fa-solid fa-pen-ruler', 'From Drawing', 'We work from 2D/3D drawings.'),
            ('fa-solid fa-clone', 'From Sample', 'Reverse-engineer existing parts.'),
            ('fa-solid fa-flask', 'Compound Selection', 'Material matched to the media and temperature.'),
            ('fa-solid fa-vial-circle-check', 'Sample Approval', 'Samples before bulk production.'),
            ('fa-solid fa-boxes-stacked', 'Small to Bulk', 'Flexible order quantities.'),
            ('fa-solid fa-headset', 'Technical Support', 'Guidance from enquiry to delivery.')],
  apps=[('fa-solid fa-car', 'OEM Components', 'New vehicle & machine parts', 'auto2'),
        ('fa-solid fa-screwdriver-wrench', 'Replacement Parts', 'Hard-to-find spares', 'engine_mech'),
        ('fa-solid fa-gear', 'Machinery', 'Special seals & pads', 'machine'),
        ('fa-solid fa-bolt', 'Electrical', 'Custom grommets & seals', 'electric')],
  specs=[('Product', 'Custom Rubber Parts'), ('Input', 'Drawing, sample or dimensions'), ('Materials', 'NBR, EPDM, Silicone, Neoprene, Viton, Natural Rubber'), ('Process', 'Compound selection → mould → sample → production')],
  mats=['NBR', 'EPDM', 'Silicone', 'Neoprene', 'Viton (FKM)', 'Natural Rubber'], ind=['automotive', 'engineering', 'machinery'],
  faqs=[('What do I need to share for a custom part?', 'A drawing or sample, the application, operating temperature, media in contact and the quantity required.'),
        ('Can you develop a part from a broken sample?', 'Often yes — share the sample and we will check what dimensions can be recovered.'),
        ('Will I get samples before bulk?', 'Yes, samples are provided for approval before bulk production.'),
        ('Is there a minimum order quantity?', 'It depends on the part and tooling. We will suggest the most economical option.')]),
 dict(slug='rubber-profiles', name='Rubber Profiles', short='Profiles', icon='fa-solid fa-grip-lines', cat='sheet', img='profile', gal=['electric', 'line', 'caliper'],
  tagline='Extruded rubber profiles, beadings and channels for sealing',
  card='Extruded rubber profiles, beadings and channels.',
  intro=["Our Rubber Profiles — beadings, channels, cords and edge trims — are used for sealing doors, panels, windows, enclosures and machine covers against dust, water and noise.",
         "Profiles are produced in solid or sponge compounds to your cross-section, and supplied in lengths, coils or cut pieces as required."],
  features=[('fa-solid fa-grip-lines', 'Any Cross-Section', 'D, P, E, U and custom profiles.'),
            ('fa-solid fa-cloud-rain', 'Weather Sealing', 'Keeps out water and dust.'),
            ('fa-solid fa-volume-xmark', 'Noise Reduction', 'Cushions doors and panels.'),
            ('fa-solid fa-sun', 'UV & Ozone Resistant', 'EPDM grades for outdoor use.'),
            ('fa-solid fa-scissors', 'Cut Lengths', 'Coils or cut-to-length supply.'),
            ('fa-solid fa-ruler-combined', 'Made to Drawing', 'Profile developed from your design.')],
  apps=[('fa-solid fa-bolt', 'Panel Doors', 'Electrical enclosure sealing', 'electric'),
        ('fa-solid fa-car', 'Automotive', 'Door and window seals', 'auto4'),
        ('fa-solid fa-gear', 'Machine Covers', 'Guards and hatches', 'machine2'),
        ('fa-solid fa-building', 'Construction', 'Windows and glazing', 'line')],
  specs=[('Product', 'Rubber Profiles / Beadings'), ('Materials', 'EPDM, Neoprene, Silicone, NBR'), ('Types', 'Solid / sponge'), ('Supply', 'Coils or cut lengths')],
  mats=['EPDM', 'Neoprene', 'Silicone', 'NBR'], ind=['electrical', 'automotive', 'engineering'],
  faqs=[('Can you make a custom profile?', 'Yes, share the cross-section drawing or a sample piece and we will develop the profile.'),
        ('Which material is best for outdoor use?', 'EPDM is preferred for outdoor applications thanks to its weather, UV and ozone resistance.'),
        ('Do you supply cut lengths?', 'Yes, profiles can be supplied in coils or cut to your required length.'),
        ('Do you make sponge profiles?', 'Please share your requirement; we will confirm sponge/solid options for your profile.')]),
 dict(slug='rubber-diaphragms', name='Rubber Diaphragms', short='Diaphragms', icon='fa-solid fa-compact-disc', cat='seal', img='diaphragm', gal=['valves', 'gauge', 'caliper'],
  tagline='Flexible nitrile rubber diaphragms for pumps, valves and regulators',
  card='Nitrile rubber diaphragms for pumps and valves.',
  intro=["Riding on our industrial expertise, we provide a broad array of Nitrile Rubber Diaphragms. Diaphragms act as a flexible barrier that transmits pressure while keeping two media separate — critical in pumps, valves and regulators.",
         "We mould flat and convoluted diaphragms to your dimensions, in compounds chosen for flex life and compatibility with the fluids and gases involved."],
  features=[('fa-solid fa-arrows-up-down', 'High Flex Life', 'Withstands repeated flexing cycles.'),
            ('fa-solid fa-gauge-high', 'Pressure Response', 'Accurate pressure transmission.'),
            ('fa-solid fa-droplet-slash', 'Media Separation', 'Keeps fluids or gases apart.'),
            ('fa-solid fa-flask', 'Compatible Compounds', 'NBR as standard; other grades on request.'),
            ('fa-solid fa-ruler-combined', 'Custom Designs', 'Flat or convoluted, to drawing.'),
            ('fa-solid fa-circle-check', 'Consistent Thickness', 'Uniform wall for reliable action.')],
  apps=[('fa-solid fa-faucet', 'Pumps', 'Diaphragm & dosing pumps', 'valves'),
        ('fa-solid fa-gauge', 'Regulators', 'Gas and pressure regulators', 'gauge'),
        ('fa-solid fa-droplet', 'Valves', 'Solenoid & control valves', 'valves2'),
        ('fa-solid fa-industry', 'Process Equipment', 'Instrumentation & controls', 'shipvalves')],
  specs=[('Product', 'Rubber Diaphragms (flat / convoluted)'), ('Materials', 'NBR (standard), EPDM, Silicone, Viton (FKM)'), ('Sizes', 'As per drawing / sample'), ('Temperature', 'Depends on compound')],
  mats=['NBR', 'EPDM', 'Silicone', 'Viton (FKM)'], ind=['industrial', 'machinery', 'engineering'],
  faqs=[('What material are your diaphragms made from?', 'Nitrile (NBR) is standard; EPDM, Silicone and Viton are available depending on the media.'),
        ('Can you match a diaphragm from a sample?', 'Yes, share the sample and we will develop a matching diaphragm.'),
        ('Do you make convoluted diaphragms?', 'Yes, we make flat and convoluted designs to drawing.'),
        ('Do you supply diaphragms for pumps?', 'Yes, our diaphragms are used in pumps, valves and regulators.')]),
]
P = {p['slug']: p for p in PRODUCTS}

INDUSTRIES = [
 dict(slug='automotive', name='Automotive', icon='fa-solid fa-car-side', img='auto', gal=['auto2', 'auto3', 'auto4'],
  tagline='Rubber components that keep vehicles sealed, quiet and safe',
  intro=["Vehicles depend on hundreds of rubber parts — from engine O-rings and oil seals to suspension bushes, grommets and door profiles. Radical Polymers supplies automotive manufacturers, workshops and spare-part dealers with dependable rubber components.",
         "We develop parts from drawings or samples, select compounds for fuel, oil, heat and weather exposure, and supply consistent quality from small batches to bulk volumes."],
  products=['rubber-o-rings', 'rubber-seals', 'rubber-bushes', 'molded-rubber-products', 'rubber-profiles', 'rubber-gaskets'],
  uses=[('fa-solid fa-oil-can', 'Engine & Fuel', 'O-rings and seals resistant to oil and fuel.'), ('fa-solid fa-car-burst', 'Suspension', 'Bushes that absorb shock and vibration.'),
        ('fa-solid fa-plug', 'Wiring', 'Grommets that protect cables.'), ('fa-solid fa-door-closed', 'Body & Doors', 'Profiles for weather sealing.'),
        ('fa-solid fa-circle-stop', 'Brakes', 'Seals and boots for brake systems.'), ('fa-solid fa-snowflake', 'AC & Cooling', 'Seals for coolant and refrigerant lines.')],
  challenges=['Exposure to oil, fuel and coolant', 'Wide temperature swings', 'Constant vibration and movement', 'Tight dimensional tolerances']),
 dict(slug='engineering', name='Engineering', icon='fa-solid fa-compass-drafting', img='drafting', gal=['cad', 'designteam', 'engineers'],
  tagline='Precision rubber components for engineering assemblies and OEMs',
  intro=["Engineering companies and OEMs need rubber parts that fit first time and perform consistently. We work closely with design and purchase teams to develop components that match drawings and tolerances.",
         "From prototype samples to regular production, we support engineering assemblies with O-rings, washers, moulded parts and fully custom components."],
  products=['custom-rubber-parts', 'molded-rubber-products', 'rubber-o-rings', 'rubber-washers', 'rubber-sheets', 'rubber-profiles'],
  uses=[('fa-solid fa-pen-ruler', 'Prototype Parts', 'Samples developed from drawings.'), ('fa-solid fa-cubes', 'Assemblies', 'Moulded parts for sub-assemblies.'),
        ('fa-solid fa-circle-dot', 'Fastening', 'Washers for sealing and cushioning.'), ('fa-solid fa-wave-square', 'Damping', 'Pads and mounts for vibration.'),
        ('fa-solid fa-shield-halved', 'Protection', 'Caps, plugs and covers.'), ('fa-solid fa-ruler-combined', 'Special Sizes', 'Non-standard dimensions.')],
  challenges=['Drawing-accurate dimensions', 'Repeatable batch quality', 'Fast sample development', 'Varied material requirements']),
 dict(slug='industrial', name='Industrial', icon='fa-solid fa-industry', img='pipes', gal=['valves', 'pipes2', 'shipvalves'],
  tagline='Gaskets, seals and sheets for pumps, pipelines and process plants',
  intro=["Process plants, pipelines and utilities rely on rubber to prevent leaks and protect equipment. We supply gaskets, seals, diaphragms and sheets that stand up to water, steam, oils and chemicals.",
         "Our team helps select the right compound for your media, pressure and temperature — reducing leaks, downtime and maintenance costs."],
  products=['rubber-gaskets', 'rubber-seals', 'rubber-diaphragms', 'rubber-sheets', 'rubber-o-rings', 'rubber-washers'],
  uses=[('fa-solid fa-faucet', 'Pumps & Valves', 'Seals, gaskets and diaphragms.'), ('fa-solid fa-grip-lines-vertical', 'Pipelines', 'Flange gaskets for leak-free joints.'),
        ('fa-solid fa-temperature-high', 'Steam & Hot Water', 'EPDM components for heat.'), ('fa-solid fa-flask', 'Chemical Handling', 'Viton and special compounds.'),
        ('fa-solid fa-warehouse', 'Tank Lining', 'Rubber sheets for protection.'), ('fa-solid fa-gauge', 'Instrumentation', 'Diaphragms for regulators.')],
  challenges=['Chemical and media compatibility', 'Pressure and temperature', 'Leak prevention', 'Minimising downtime']),
 dict(slug='electrical', name='Electrical', icon='fa-solid fa-plug-circle-bolt', img='electric', gal=['electric2', 'breakers', 'line'],
  tagline='Grommets, insulating parts and enclosure seals for electrical equipment',
  intro=["Electrical panels, enclosures and appliances need rubber parts that seal out dust and moisture and insulate safely. We supply grommets, gaskets, washers and profiles for electrical manufacturers.",
         "Our compounds are selected for insulation, weather resistance and long life, and every part is made to fit your enclosure or component design."],
  products=['rubber-gaskets', 'rubber-profiles', 'rubber-washers', 'molded-rubber-products', 'rubber-sheets', 'custom-rubber-parts'],
  uses=[('fa-solid fa-plug', 'Cable Grommets', 'Protect wires through panels.'), ('fa-solid fa-door-closed', 'Panel Doors', 'Gaskets and profiles for sealing.'),
        ('fa-solid fa-circle-dot', 'Insulating Washers', 'For terminals and fasteners.'), ('fa-solid fa-cloud-rain', 'Outdoor Boxes', 'Weather-proof sealing.'),
        ('fa-solid fa-lightbulb', 'Lighting', 'Seals for fixtures and housings.'), ('fa-solid fa-house', 'Appliances', 'Feet, seals and buffers.')],
  challenges=['Dust and moisture ingress', 'Insulation requirements', 'Outdoor weathering', 'Exact fit for enclosures']),
 dict(slug='machinery', name='Machinery', icon='fa-solid fa-gear', img='excavator', gal=['cmach', 'hydraulic', 'machine'],
  tagline='Anti-vibration mounts, hydraulic seals and diaphragms for machines',
  intro=["Heavy machinery and industrial equipment work under constant load, vibration and contamination. Our rubber bushes, seals, pads and diaphragms help machines run smoother and last longer.",
         "We supply both OEM components and replacement parts — including hard-to-find spares developed from samples."],
  products=['rubber-bushes', 'rubber-seals', 'rubber-diaphragms', 'rubber-sheets', 'custom-rubber-parts', 'rubber-o-rings'],
  uses=[('fa-solid fa-gears', 'Hydraulics', 'Rod, piston and wiper seals.'), ('fa-solid fa-wave-square', 'Anti-Vibration', 'Bushes and mounts.'),
        ('fa-solid fa-tractor', 'Earth-Moving', 'Seals and bushes for heavy duty.'), ('fa-solid fa-fan', 'Compressors', 'O-rings and gaskets.'),
        ('fa-solid fa-screwdriver-wrench', 'Spares', 'Replacement parts from samples.'), ('fa-solid fa-boxes-packing', 'Conveyors', 'Pads, sheets and buffers.')],
  challenges=['Heavy loads and impact', 'Continuous vibration', 'Dust and contamination', 'Availability of spare parts']),
]
I = {i['slug']: i for i in INDUSTRIES}

TESTIMONIALS = [
    ('M', 'Mohit', 'Customer', 'Amazing products — satisfied, and I recommend using Radical Polymers.'),
    ('R', 'Rohan', 'Customer', 'Unmatched purchasing experience. Quality is as good as the original, and they can develop any size you ask.'),
    ('A', 'Aniket', 'Customer', 'One of the best in terms of sales, service, pricing and delivery. A genuine manufacturer — fully recommended!'),
]

GENERAL_FAQS = [
    ('Can you manufacture custom-size O-rings and gaskets?', 'Yes. We develop any size from your drawing or sample, including non-standard dimensions and special profiles.'),
    ('Which rubber materials do you work with?', 'We work with NBR (Nitrile), EPDM, Silicone, Viton (FKM), Neoprene and Natural Rubber, selected according to temperature, oil and chemical exposure.'),
    ('What is the minimum order quantity (MOQ)?', 'MOQ depends on the part and whether a new mould is needed. Share your requirement and we will suggest the most economical option.'),
    ('Do you deliver across India?', 'Yes, we dispatch pan-India from our Ghaziabad facility within the promised time-frame.'),
    ('How do I get a quotation?', 'Fill the enquiry form, email sales@radicalpolymer.com or call +91 9711114333 — we usually respond within one working day.'),
]

BLOG = [
 dict(slug='blog-how-to-measure-an-o-ring', title='How to Measure an O-Ring Correctly (ID, OD & Cross-Section)', cat='O-Rings', img='oring', mins=5, date='12 Sep 2026',
  excerpt='A simple step-by-step guide to measuring O-rings so your replacement fits perfectly.',
  body="""
<p>Ordering the wrong O-ring size is one of the most common causes of leaks and rework. The good news: measuring an O-ring correctly takes only a couple of minutes once you know what to measure.</p>
<h2>The three dimensions that matter</h2>
<ul><li><b>Inner Diameter (ID)</b> — the distance across the inside of the ring.</li><li><b>Cross-Section (CS)</b> — the thickness of the ring material.</li><li><b>Outer Diameter (OD)</b> — equal to ID + 2 × CS. You only need two of the three.</li></ul>
<p>Most suppliers, including us, specify O-rings by <b>ID × CS</b>. For example, 20 × 2.5 mm means a 20 mm inner diameter and a 2.5 mm cross-section.</p>
<h2>Step-by-step measuring</h2>
<ol><li>Clean the O-ring and place it flat on a table without stretching it.</li><li>Use a vernier caliper to measure the cross-section at three or four points and take the average.</li><li>Measure the inner diameter across the centre. For large rings, measure the OD and subtract twice the cross-section.</li><li>Note the material and hardness if known, along with the application.</li></ol>
<div class="note"><i class="fa-solid fa-lightbulb"></i><p>Used O-rings often swell, shrink or flatten in service. If possible, measure the groove (gland) instead of the old ring — it gives a more reliable size.</p></div>
<h2>Measuring the groove</h2>
<p>For a static seal, measure the groove diameter and groove width. The O-ring cross-section should be slightly larger than the groove depth so the ring is compressed when installed — this squeeze creates the seal.</p>
<h2>Share these details with your supplier</h2>
<ul><li>ID and cross-section (or groove dimensions)</li><li>Operating media — oil, water, fuel, air or chemicals</li><li>Temperature range and pressure</li><li>Quantity required</li></ul>
<p>With these details, our team can recommend the right compound — NBR, Viton, EPDM, Silicone or Neoprene — and supply standard or custom sizes.</p>"""),
 dict(slug='blog-nbr-vs-epdm-vs-viton', title='NBR vs EPDM vs Viton: Which Rubber Should You Choose?', cat='Materials', img='lab', mins=6, date='03 Sep 2026',
  excerpt='Compare the most common rubber compounds by temperature, oil and chemical resistance.',
  body="""
<p>Choosing the right rubber compound matters as much as choosing the right size. A seal in the wrong material can swell, crack or harden within weeks. Here is a practical comparison of the three compounds we are asked about most.</p>
<h2>Quick comparison</h2>
<table><tr><th>Property</th><th>NBR (Nitrile)</th><th>EPDM</th><th>Viton (FKM)</th></tr>
<tr><td>Mineral oil & fuel</td><td>Excellent</td><td>Poor</td><td>Excellent</td></tr>
<tr><td>Water & steam</td><td>Good</td><td>Excellent</td><td>Good</td></tr>
<tr><td>Weather / ozone</td><td>Fair</td><td>Excellent</td><td>Excellent</td></tr>
<tr><td>Approx. temperature</td><td>-30°C to 100°C</td><td>-40°C to 130°C</td><td>-20°C to 200°C</td></tr>
<tr><td>Relative cost</td><td>Low</td><td>Low</td><td>High</td></tr></table>
<h2>NBR (Nitrile) — the oil specialist</h2>
<p>NBR is the go-to compound for hydraulic systems, fuel lines and general machinery where oil is present. It offers good abrasion resistance at an economical price, which is why most standard O-rings and oil seals are made in NBR.</p>
<h2>EPDM — best for water and outdoors</h2>
<p>EPDM handles hot water, steam, weather, UV and ozone extremely well, making it ideal for plumbing, water lines and outdoor profiles. Avoid it wherever mineral oil or fuel is present — it will swell.</p>
<h2>Viton (FKM) — for heat and chemicals</h2>
<p>Viton is chosen when temperatures are high or when aggressive fuels and chemicals are involved. It costs more, but in the right application it lasts far longer than standard compounds.</p>
<blockquote>Rule of thumb: oil → NBR, water/weather → EPDM, heat or chemicals → Viton.</blockquote>
<h2>What about Silicone and Neoprene?</h2>
<p><b>Silicone</b> offers the widest temperature range and is used for food-contact and high/low temperature applications, though it has lower tear strength. <b>Neoprene</b> is a good all-rounder with moderate oil and weather resistance, often used for refrigerants and general-purpose gaskets.</p>
<p>Not sure which one fits your application? Share the media, temperature and pressure with our team and we will recommend the right compound.</p>"""),
 dict(slug='blog-causes-of-gasket-failure', title='5 Common Causes of Gasket Failure — and How to Prevent Them', cat='Gaskets', img='pipes', mins=4, date='22 Aug 2026',
  excerpt='Over-compression, wrong material and poor surface finish — what to watch out for.',
  body="""
<p>A failed gasket means leaks, downtime and sometimes safety risks. Most failures can be traced to a handful of avoidable causes.</p>
<h2>1. Wrong material for the media</h2>
<p>A gasket that is not compatible with the fluid will swell, soften or crack. Always match the compound to the media — for example EPDM for water and steam, NBR for oils.</p>
<h2>2. Over-compression</h2>
<p>Over-tightening bolts crushes the gasket, pushing material out of the joint and destroying its ability to spring back. Follow the recommended bolt torque and tighten in a cross pattern.</p>
<h2>3. Under-compression</h2>
<p>Too little load leaves gaps for leaks. Uneven bolt tightening and warped flanges are common culprits.</p>
<h2>4. Poor surface finish</h2>
<p>Deep scratches, rust or old gasket residue on the flange create leak paths. Clean and inspect both faces before fitting a new gasket.</p>
<h2>5. Temperature beyond the compound's limit</h2>
<p>Heat ages rubber quickly. If the joint runs hot, consider a higher-temperature compound such as Silicone or Viton.</p>
<div class="note"><i class="fa-solid fa-lightbulb"></i><p>Never reuse an old gasket. Once compressed and aged, it will not seal as well as a new one.</p></div>
<h2>Prevention checklist</h2>
<ul><li>Select the right compound and thickness</li><li>Clean flange faces thoroughly</li><li>Tighten bolts evenly in a cross pattern</li><li>Replace gaskets during maintenance instead of reusing them</li></ul>"""),
 dict(slug='blog-rubber-parts-in-vehicles', title='Where Rubber Parts Are Used in a Vehicle — A Complete Guide', cat='Automotive', img='auto', mins=5, date='10 Aug 2026',
  excerpt='From engine O-rings to suspension bushes, a look at rubber parts in modern vehicles.',
  body="""
<p>A typical vehicle contains hundreds of rubber components. They seal fluids, absorb vibration, protect wiring and keep the cabin quiet. Here is where you will find them.</p>
<h2>Engine and fuel system</h2>
<p>O-rings, oil seals and gaskets keep oil, fuel and coolant where they belong. These parts are usually made in NBR or Viton for oil and heat resistance.</p>
<h2>Suspension and chassis</h2>
<p>Rubber bushes at control arms, links and mounts absorb shock and isolate vibration, giving a smoother, quieter ride.</p>
<h2>Brakes</h2>
<p>Seals and boots in brake calipers and cylinders keep hydraulic fluid sealed and dust out.</p>
<h2>Body, doors and windows</h2>
<p>Extruded rubber profiles seal doors, windows and the boot against water, dust and wind noise — typically in weather-resistant EPDM.</p>
<h2>Electrical system</h2>
<p>Grommets protect cables where they pass through metal panels, and rubber boots seal connectors from moisture.</p>
<blockquote>Small rubber parts have a big impact on safety, comfort and reliability.</blockquote>
<h2>Sourcing automotive rubber parts</h2>
<p>We manufacture O-rings, seals, bushes, grommets and profiles for automotive applications — and develop hard-to-find parts from samples.</p>"""),
 dict(slug='blog-hydraulic-cylinder-seal-selection', title='Choosing Seals for Hydraulic Cylinders: A Practical Checklist', cat='Seals', img='hydraulic', mins=5, date='28 Jul 2026',
  excerpt='Pressure, speed, temperature and fluid — key factors for long seal life.',
  body="""
<p>Hydraulic cylinders depend on a set of seals working together. Choosing them correctly prevents leakage, contamination and premature wear.</p>
<h2>The main seals in a cylinder</h2>
<ul><li><b>Rod seal</b> — stops fluid leaking out along the rod.</li><li><b>Piston seal</b> — separates pressure on both sides of the piston.</li><li><b>Wiper / dust seal</b> — keeps dirt out as the rod retracts.</li><li><b>Static seals and O-rings</b> — seal end caps and ports.</li></ul>
<h2>Checklist before you order</h2>
<ol><li><b>Operating pressure</b> — higher pressure needs harder compounds or support rings.</li><li><b>Temperature</b> — NBR suits most hydraulic oils; Viton for higher heat.</li><li><b>Fluid type</b> — mineral oil, water-glycol or synthetic fluids each need compatible compounds.</li><li><b>Speed and stroke</b> — fast movement generates heat and wear.</li><li><b>Environment</b> — dusty or outdoor machines need effective wipers.</li></ol>
<div class="note"><i class="fa-solid fa-lightbulb"></i><p>When replacing seals, also inspect the rod and bore surfaces. A scratched rod will damage new seals quickly.</p></div>
<h2>Replacement seals from samples</h2>
<p>For older or imported machines, original seals can be hard to find. Share a sample or the groove dimensions and we can develop matching seals in the right compound.</p>"""),
 dict(slug='blog-ordering-custom-rubber-parts', title='Getting a Custom Rubber Part Made: What to Share With Your Supplier', cat='Custom Parts', img='blueprint', mins=4, date='15 Jul 2026',
  excerpt='Drawings, samples and operating conditions — the details that speed up development.',
  body="""
<p>Custom rubber parts can be developed quickly when the supplier has the right information from the start. Here is what to prepare.</p>
<h2>1. A drawing or a sample</h2>
<p>A dimensioned drawing (2D or 3D) is ideal. If you do not have one, a good-condition sample works too — we can measure it and develop the part.</p>
<h2>2. Where and how the part is used</h2>
<p>Tell us what the part does — sealing, cushioning, insulating — and what it touches. This decides the compound.</p>
<h2>3. Operating conditions</h2>
<ul><li>Temperature range</li><li>Media in contact (oil, water, chemicals, air)</li><li>Pressure or load</li><li>Indoor or outdoor exposure</li></ul>
<h2>4. Hardness and colour</h2>
<p>If you know the required hardness (Shore A) or colour, share it. Otherwise we will recommend one based on the application.</p>
<h2>5. Quantity and timeline</h2>
<p>Expected quantity helps us choose the most economical tooling and process.</p>
<blockquote>The more we know upfront, the faster we can deliver an approved sample.</blockquote>
<h2>Our development process</h2>
<ol><li>Requirement review and compound selection</li><li>Mould development</li><li>Sample production and your approval</li><li>Bulk production, inspection and dispatch</li></ol>"""),
]
B = {b['slug']: b for b in BLOG}
