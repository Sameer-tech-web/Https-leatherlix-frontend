/* =========================================================
   BRANDING & SUPPLIER INFO
========================================================= */

export const brand = {
  name: 'Leatherlix',
  tagline: 'Premium B2B Leather Supply',
  email: 'info@leatherlix.com',
  supplierLabel: 'Authorized KTM Leather Supplier',
  phone: '+92-000-0000000',
  manufacturer: 'KTM Leather (Pvt) Limited',
  manufacturerUrl: 'https://ktmleather.com/',
};

/* =========================================================
   NAVIGATION
========================================================= */

export const navLinks = [
  {
    label: 'Home',
    href: '#top',
  },
  {
    label: 'Collections',
    href: '#collections',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Quality',
    href: '#quality',
  },
  {
    label: 'Sustainability',
    href: '#sustainability',
  },
  {
    label: 'Compliance',
    href: '#compliance',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

/* =========================================================
   COMPLETE PRODUCT CATEGORIES (ENRICHED DATA)
========================================================= */

export const categories = [
  {
    id: 'american',
    name: 'American Lifestyles',
    short: 'Cow & River Bison upper leathers',
    description:
      'Upper leathers for dress shoes, casual shoes, Nubuck footwear, boots, work boots, tactical boots and Western boots.',
    image: '/assets/belt-hero.jpg',
    page: '/category/american',
    specifications: [
      { label: 'Origin / Raw Material', value: 'Cow & River Bison Hides' },
      { label: 'Thickness Range', value: '1.2 – 2.0 mm (Customizable)' },
      { label: 'Tannage Type', value: 'Chrome / Semi-Vegetable Re-tanned' },
      { label: 'Surface Finish', value: 'Aniline, Pull-Up, Oil-Wax & Crazy Horse' },
      { label: 'Cutting Yield', value: 'High Cutting Efficiency (B+/A Grade)' },
      { label: 'Substance & Temper', value: 'Firm to Medium Soft Body' },
    ],
    features: [
      'Superior grain structure with distinctive natural character',
      'High tear strength and flex endurance for rugged boot construction',
      'Rich pull-up and oily hand-feel options that age gracefully',
      'Water-resistant and breathable options for outdoor footwear',
      'Compliant with REACH and LWG Gold environmental standards',
    ],
    applicationsList: [
      'Work Boots & Safety Footwear',
      'Western & Cowboy Boots',
      'Tactical & Military Footwear',
      'Casual & Dress Shoes',
      'Outdoor & Hiking Boots',
      'Heavy-duty Leather Goods',
    ],
  },
  {
    id: 'fashion',
    name: 'Fashion Articles',
    short: 'Calf, Kip, Cow, Buffalo & Vachetta',
    description:
      'Leather for wallets, handbags, backpacks, briefcases, portfolios and other premium fashion leather goods.',
    image: '/assets/wallet-hero.jpg',
    page: '/category/fashion',
    specifications: [
      { label: 'Origin / Raw Material', value: 'Calf, Kip, Cow, Buffalo & Vachetta' },
      { label: 'Thickness Range', value: '0.8 – 1.6 mm' },
      { label: 'Tannage Type', value: 'Vegetable / Semi-Aniline' },
      { label: 'Surface Finish', value: 'Smooth, Nappa, Milled & Waxy' },
      { label: 'Cutting Yield', value: 'Premium Grade (A/B)' },
      { label: 'Substance & Temper', value: 'Soft to Medium Firm' },
    ],
    features: [
      'Exceptional hand-feel and smooth grain finish',
      'Ideal for detailed crafting, stitching, and edge-inking',
      'Versatile temper options for flexible bags or structured goods',
      'Vibrant color palette with excellent color-fastness',
    ],
    applicationsList: [
      'Luxury Handbags & Totes',
      'Wallets & Cardholders',
      'Backpacks & Travel Bags',
      'Briefcases & Portfolios',
      'Small Leather Goods & Accessories',
    ],
  },
  {
    id: 'upholstery',
    name: 'Upholstery / Furniture',
    short: 'River Bison whole-hide upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative leather applications, including finished and dyed-crust options.',
    image: '/assets/belt-card.jpg',
    page: '/category/upholstery',
    specifications: [
      { label: 'Origin / Raw Material', value: 'River Bison Whole-Hides' },
      { label: 'Thickness Range', value: '1.1 – 1.4 mm' },
      { label: 'Average Hide Size', value: '45 – 55 sq. ft.' },
      { label: 'Surface Finish', value: 'Pigmented / Semi-Aniline / Dyed-Crust' },
      { label: 'Durability Standard', value: 'High Abrasion & Rub Fastness' },
    ],
    features: [
      'Large hide cutting yields minimizing seams in furniture production',
      'Stain-resistant and easy-care protective topcoats available',
      'Rich, natural pebble grain texture inherent to bison hides',
      'Breathable crust options for custom upholstery finishing',
    ],
    applicationsList: [
      'Residential Sofas & Armchairs',
      'Commercial & Hospitality Seating',
      'Interior Leather Panels & Wall Covering',
      'Custom Decorative Upholstery',
    ],
  },
  {
    id: 'belts',
    name: 'Belts Leather',
    short: 'Single Butts, Double Butts & Doze',
    description:
      'River Bison belting leather with smooth and embossed finishing effects, averaging around 3.5–4.0 mm.',
    image: '/assets/belt-detail.jpg',
    page: '/category/belts',
    specifications: [
      { label: 'Origin / Raw Material', value: 'River Bison Heavy Cuts' },
      { label: 'Thickness Range', value: '3.5 – 4.0 mm (Heavy Substance)' },
      { label: 'Cut Types', value: 'Single Butts, Double Butts & Doze' },
      { label: 'Tannage Type', value: 'Vegetable & Heavy Re-tanned' },
      { label: 'Finish Types', value: 'Smooth, Embossed & Vintage Polish' },
    ],
    features: [
      'Minimal stretch and high tensile strength essential for strap goods',
      'Consistently uniform substance across the entire butt cut',
      'Smooth cut edges suitable for beveling and burnishing',
      'Rugged, rich aging characteristics over prolonged use',
    ],
    applicationsList: [
      'Casual & Dress Belts',
      'Heavy-duty Utility Belts',
      'Straps & Bag Handles',
      'Equestrian & Leather Harness Goods',
    ],
  },
  {
    id: 'printed',
    name: 'Printed Leathers',
    short: 'Printed leather collections',
    description:
      'Printed leather options designed for fashion footwear, bags, accessories and other leather-goods applications.',
    image: '/assets/wallet-card.jpg',
    page: '/category/printed',
    specifications: [
      { label: 'Origin / Raw Material', value: 'Cow & Buffalo Base Hides' },
      { label: 'Thickness Range', value: '1.0 – 1.6 mm' },
      { label: 'Embossing Types', value: 'Exotic (Croc, Snake), Geometric, Floral' },
      { label: 'Surface Finish', value: 'Two-Tone, High Shine, Matte & Metallic' },
    ],
    features: [
      'Uniform grain patterns engineered for seamless batch production',
      'Deep, crisp embossing plate definitions that retain texture',
      'High resistance to scuffing and surface wear',
      'Wide variety of seasonal fashion colors and effect finishes',
    ],
    applicationsList: [
      'Fashion Footwear & Pumps',
      'Statement Handbags & Clutches',
      'Belts & Trim Accents',
      'Small Fashion Accessories',
    ],
  },
  {
    id: 'lining',
    name: 'Lining Leathers',
    short: 'Cow & Buffalo + chrome-free options',
    description:
      'Lining leathers in drum-dyed, semi-aniline and milled finishes, including chrome-free Cow lining options.',
    image: '/assets/wallet-features.jpg',
    page: '/category/lining',
    specifications: [
      { label: 'Origin / Raw Material', value: 'Cow & Buffalo (Chrome-Free available)' },
      { label: 'Thickness Range', value: '0.6 – 1.0 mm (Lightweight)' },
      { label: 'Tannage Type', value: 'Drum-Dyed / Wet-White / Chrome-Free' },
      { label: 'Finishing Options', value: 'Aniline, Semi-Aniline & Soft Milled' },
    ],
    features: [
      'High moisture absorption and breathability for maximum comfort',
      'Ultra-soft temper reducing friction inside shoes and bags',
      'Eco-friendly chrome-free (Wet-White) choices available',
      'Color-fast treatments to prevent color bleed onto socks or interiors',
    ],
    applicationsList: [
      'Shoe & Boot Inner Linings',
      'Luxury Bag Interior Linings',
      'Garment & Glove Accents',
      'Orthopedic Footwear Linings',
    ],
  },
  {
    id: 'auto-aviation',
    name: 'Automotive & Aviation',
    short: 'Automotive & aviation seating leather',
    description:
      'Leather developed for automotive upholstery and aviation seating, including dedicated performance and flame-retardant requirements.',
    image: '/assets/auto-aviation-hero.jpg',
    page: '/category/auto-aviation',
    specifications: [
      { label: 'Origin / Raw Material', value: 'Select Premium Cow Hides' },
      { label: 'Thickness Range', value: '1.1 – 1.4 mm' },
      { label: 'Compliance Standards', value: 'FAR 25.853 (Aviation Flame Resistance)' },
      { label: 'Performance Features', value: 'UV Resistant, Anti-Fading, Cold-Crack Passed' },
    ],
    features: [
      'Engineered to pass rigorous flame-retardant aviation regulations',
      'Exceptional UV stability preventing cracking and fading under sunlight',
      'High resistance to soil, sweat, and daily automotive abrasion',
      'Low fogging values engineered for automotive cabin safety',
    ],
    applicationsList: [
      'Automotive Interior Seating & Door Trim',
      'Private & Commercial Aircraft Cabin Seating',
      'VIP Transport & Luxury Shuttle Interiors',
      'Marine & Yacht Interior Upholstery',
    ],
  },
];

/* =========================================================
   HERO / QUICK FACTS
========================================================= */

export const heroFacts = [
  {
    label: 'KTM Leather incorporated',
    value: '1935',
  },
  {
    label: 'countries / global reach',
    value: '54+',
  },
  {
    label: 'average belt leather thickness',
    value: '3.5–4.0 mm',
  },
  {
    label: 'LWG environmental rating',
    value: 'Gold',
  },
];

/* =========================================================
   PRODUCTION PROCESS
========================================================= */

export const processSteps = [
  'Raw Hide',
  'Liming',
  'Wet Blue',
  'Crust',
  'Finish',
  'Final QC',
];

/* =========================================================
   QUALITY TESTING
========================================================= */

export const qualityTests = [
  'Physical Inspection',
  'Physical Testing',
  'Chemical Testing',
  'Performance Testing',
  'Eco-sensitive chemical screening',
];

/* =========================================================
   SUSTAINABILITY
========================================================= */

export const sustainability = [
  {
    title: 'Water Reuse',
    text:
      'KTM describes a wastewater treatment system with reuse of treated water within production and reports substantial daily water savings.',
  },
  {
    title: 'Energy & Process Efficiency',
    text:
      'Automated dosing and controlled processes are described as part of the effort to lower water, energy and chemical loads.',
  },
  {
    title: 'Traceability & Cleaner Chemistry',
    text:
      'KTM highlights hide traceability, cleaner production, chrome-free development and ZDHC-aligned chemical management.',
  },
];

/* =========================================================
   MANAGEMENT CERTIFICATIONS
========================================================= */

export const managementCertifications = [
  'ISO 9001:2015 — Quality Management',
  'ISO 45001:2018 — Health & Safety',
];

/* =========================================================
   ENVIRONMENTAL CERTIFICATIONS
========================================================= */

export const environmentalCertifications = [
  'LWG Environmental Stewardship Protocol — Gold',
  'ISO 14001:2015 — Environmental Management',
  'Higg Index FEM',
];

/* =========================================================
   SOCIAL CERTIFICATIONS
========================================================= */

export const socialCertifications = [
  'BSCI',
  'SA 8000 — Social Accountability',
  'Inditex Social',
];

/* =========================================================
   CUSTOMER STANDARDS
========================================================= */

export const customerStandards = [
  'Inditex GTW — Green to Wear',
  'ZDHC — Chemical & Waste Water',
];

/* =========================================================
   MEMBERSHIPS
========================================================= */

export const memberships = [
  'Leather Naturally',
  'SATRA',
  'BLC',
];

/* =========================================================
   COMPANY HISTORY
========================================================= */

export const history = [
  {
    year: '1935',
    detail:
      'KTM Leather incorporated and established its roots in Pakistan’s leather industry.',
  },
  {
    year: '1985',
    detail:
      'Started producing upholstery leather.',
  },
  {
    year: '1991',
    detail:
      'Started producing belts leather.',
  },
  {
    year: '1994',
    detail:
      'New leather and environmental testing laboratory constructed.',
  },
  {
    year: '1999',
    detail:
      'Started producing automotive leather.',
  },
  {
    year: '2010',
    detail:
      'Started producing eco-friendly Wet White / Chrome Free leathers.',
  },
  {
    year: '2012',
    detail:
      'Started producing aviation leather.',
  },
  {
    year: '2019',
    detail:
      'Achieved LWG Silver certification milestone.',
  },
];

/* =========================================================
   PRODUCT APPLICATIONS
========================================================= */

export const applications = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    category: 'american',
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    category: 'fashion',
  },
  {
    id: 'belting',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    category: 'belts',
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    category: 'lining',
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    category: 'upholstery',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    category: 'auto-aviation',
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    category: 'auto-aviation',
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    category: 'printed',
  },
];

/* =========================================================
   PRODUCT CATALOGUE LINKS
========================================================= */

export const catalogLinks = [
  {
    group: 'American Lifestyle',
    items: [
      {
        title: 'American Lifestyle Vol. 1',
        url: 'https://ktmleather.com/american-lifestyle-vol-1/',
      },
      {
        title: 'American Lifestyle Vol. 2',
        url: 'https://ktmleather.com/american-lifestyle-vol-2/',
      },
      {
        title: 'American Lifestyle Vol. 3',
        url: 'https://ktmleather.com/american-lifestyle-vol-3/',
      },
      {
        title: 'American Lifestyle Vol. 4',
        url: 'https://ktmleather.com/american-lifestyle-vol-4/',
      },
    ],
  },
  {
    group: 'Fashion Articles',
    items: [
      {
        title: 'Fashion Catalogue 24/25',
        url: 'https://ktmleather.com/fashion-catalogue-24-25/',
      },
      {
        title: 'Spring / Summer 2022–23',
        url: 'https://ktmleather.com/spring-summer-2022-23/',
      },
      {
        title: 'Fall / Winter 2023–24',
        url: 'https://ktmleather.com/fall-winter-2023-24/',
      },
    ],
  },
  {
    group: 'Belts',
    items: [
      {
        title: 'Belts Leather',
        url: 'https://ktmleather.com/belts-leather/',
      },
      {
        title: 'Belt Leather Vol. 3',
        url: 'https://ktmleather.com/belt-leather-volume-3/',
      },
      {
        title: 'Belt Leather Vol. 4',
        url: 'https://ktmleather.com/belt-leather-volume-4/',
      },
    ],
  },
  {
    group: 'Upholstery',
    items: [
      {
        title: 'Upholstery Vol. 1',
        url: 'https://ktmleather.com/upholstery-leather-catalogue-volume-1/',
      },
      {
        title: 'Upholstery Vol. 2',
        url: 'https://ktmleather.com/upholstery-leather-catalogue-volume-2/',
      },
    ],
  },
  {
    group: 'Other Collections',
    items: [
      {
        title: 'Lining Collection',
        url: 'https://ktmleather.com/lining-leathers/',
      },
      {
        title: 'Printopia',
        url: 'https://ktmleather.com/printed-leathers/',
      },
      {
        title: 'Automotive & Aviation',
        url: 'https://ktmleather.com/automotive-aviation/',
      },
    ],
  },
];

/* =========================================================
   SOURCE / BRANDING NOTE
========================================================= */

export const sourceNote =
  'KTM Leather product, manufacturing, history and compliance information is presented as manufacturer-sourced reference content. Leatherlix is presented as an authorized supplier and is not represented as KTM Leather itself.';
