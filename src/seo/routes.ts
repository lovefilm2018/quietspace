export const SITE_URL = "https://yourquietspace.co.uk";
export const BUSINESS_EMAIL = "quietspace.chichester@gmail.com";
export const BUSINESS_PHONE_E164 = "+447455020140";
export const BUSINESS_PHONE_DISPLAY = "07455 020140";
export const WHATSAPP_URL =
  "https://wa.me/447455020140?text=Hello%20Magda%2C%20I%27d%20like%20to%20enquire%20about%20Quiet%20Space%20and%20share%20a%20few%20room%20photos.";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
};

export const SERVICES_FAQS: FaqItem[] = [
  {
    question: "Do I need to tidy or clean before you arrive?",
    answer:
      "No—please never tidy before I arrive. Seeing how your home works day-to-day helps me design realistic, sustainable systems with zero judgement.",
  },
  {
    question: "How much do home organising and decluttering sessions cost?",
    answer:
      "A Short Session (3–4 hours) is £120–£160, and a Full Day (6–10 hours) is £240–£400. Occupied Property Staging starts from £160–£450+ depending on hours and scope.",
  },
  {
    question: "How does the consultation work and is there a fee?",
    answer:
      "You can start with a free WhatsApp photo or short video review. For larger projects, an in-person home assessment is £50 to measure spaces and build a tailored plan—and 100% of that £50 is deducted from your invoice when you book.",
  },
  {
    question: "Which areas around Chichester do you cover, and what are travel charges?",
    answer:
      "Travel is free within 15 miles of Chichester—covering Arundel, Emsworth, Havant, Bosham, West Wittering, Midhurst, Bognor Regis, and Littlehampton. Beyond 15 miles across West Sussex, Hampshire, and South Surrey, mileage is 45p per excess mile one-way.",
  },
  {
    question: "Will you make me throw away sentimental possessions?",
    answer:
      "Never. Every decision stays yours at your own pace. My role is to support you gently and help you create space for what truly matters.",
  },
  {
    question: "What happens to unwanted items—do you handle charity or Vinted?",
    answer:
      "We sort belongings cleanly into keep, charity, Vinted resale, recycling, and refuse. Where agreed, I can drop off clean charity-shop donations locally or help you prepare items to list on Vinted, and coordinate a licensed clearance partner if bulky waste removal is needed.",
  },
  {
    question: "How is occupied property staging different from vacant furniture hire?",
    answer:
      "Vacant staging hires warehouse furniture for £3,000+. Quiet Space edits, declutters, and restyles your home using the furniture and accessories you already own—typically £160–£450+—so rooms look spacious and welcoming for estate agent photos, rentals, or holiday lets.",
  },
  {
    question: "Will I have to spend hundreds on plastic storage boxes?",
    answer:
      "No. I always aim to use what you already have at home first, only suggesting practical, durable storage solutions where they genuinely make daily life easier.",
  },
  {
    question: "Can you help unpack right after a house move?",
    answer:
      "Yes. I offer pre-move decluttering so you don't pay to move clutter, plus day-one move-in unpacking to get kitchens, wardrobes, and bedrooms organised quickly.",
  },
  {
    question: "Is Quiet Space discreet and reliable?",
    answer:
      "Yes. Alongside 10 years of hands-on experience in private homes, holiday homes, hotels, and offices, I also work at St Richard's Hospital in Chichester—bringing strict discretion, cleanliness, and calm under pressure to every home.",
  },
];

export const SEO_ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Home Organising, Decluttering & Staging | Chichester",
    description:
      "Calm, non-judgemental home organising, decluttering & occupied property staging in Chichester, West Sussex, Hampshire & Surrey. Free photo review.",
    ogImage: `${SITE_URL}/images/redesign/hero-wardrobe-empty.webp`,
  },
  {
    path: "/about/",
    title: "About Magda | Chichester Home Organiser & Property Stager",
    description:
      "Meet Magda of Quiet Space. 10 years' home & boutique hotel organising experience plus St Richard's Hospital discretion across Chichester, Sussex & Hants.",
    ogImage: `${SITE_URL}/images/redesign/magda-kitchen-portrait.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Me", path: "/about/" },
    ],
  },
  {
    path: "/services/",
    title: "Home Organising & Staging Prices | Quiet Space Chichester",
    description:
      "Transparent UK pricing for decluttering, home organising & property staging from £120. Free travel within 15 miles of Chichester. Book a free review.",
    ogImage: `${SITE_URL}/images/redesign/card-price-full-day.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
    ],
    faqs: SERVICES_FAQS,
  },
  {
    path: "/services/organising/",
    title: "Home Organising Chichester & West Sussex | Quiet Space",
    description:
      "Sustainable kitchen, pantry, wardrobe, playroom & move-in unpacking systems across Chichester, West Sussex, Hampshire & Surrey. Calm, lasting order.",
    ogImage: `${SITE_URL}/images/redesign/hero-kitchen-shelves.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
      { name: "Home Organising", path: "/services/organising/" },
    ],
  },
  {
    path: "/services/decluttering/",
    title: "Decluttering Service Chichester & Sussex | Quiet Space",
    description:
      "Empathetic, judgement-free decluttering for overwhelmed rooms, downsizing & life transitions in Chichester, West Sussex & Hampshire. Charity rehoming.",
    ogImage: `${SITE_URL}/images/redesign/hero-declutter-bedroom.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
      { name: "Decluttering", path: "/services/decluttering/" },
    ],
  },
  {
    path: "/services/staging/",
    title: "Property & Home Staging Chichester | From £160",
    description:
      "Affordable occupied home staging & Airbnb styling using your existing furniture across Chichester, West Sussex, Hampshire & South Surrey. Sell faster.",
    ogImage: `${SITE_URL}/images/redesign/hero-staging-room.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
      { name: "Property Staging", path: "/services/staging/" },
    ],
  },
  {
    path: "/services/move-in-unpacking/",
    title: "Move-In Unpacking & Packing Help | Chichester & Sussex",
    description:
      "Stress-free pre-move decluttering & move-in unpacking across Chichester, West Sussex, Hampshire & Surrey. Settle into organised rooms from day one.",
    ogImage: `${SITE_URL}/images/redesign/ill-moving-boxes.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
      { name: "Move-In Unpacking", path: "/services/move-in-unpacking/" },
    ],
  },
  {
    path: "/services/downsizing-bereavement/",
    title: "Downsizing & Bereavement Decluttering | West Sussex",
    description:
      "Gentle, discreet downsizing & bereavement house sorting in Chichester, Emsworth, Arundel & Petersfield. Respectful charity & family rehoming.",
    ogImage: `${SITE_URL}/images/redesign/card-price-short-session.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services & Prices", path: "/services/" },
      { name: "Downsizing & Bereavement", path: "/services/downsizing-bereavement/" },
    ],
  },
  {
    path: "/areas/hampshire/",
    title: "Home Organiser & Property Stager Hampshire | Quiet Space",
    description:
      "Calm decluttering, home organising & occupied staging in Emsworth, Petersfield, Havant, Southsea & Portsmouth. Free travel within 15mi of Chichester.",
    ogImage: `${SITE_URL}/images/redesign/hero-staging-room.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Hampshire", path: "/areas/hampshire/" },
    ],
  },
  {
    path: "/areas/south-surrey/",
    title: "Home Organiser & Home Staging Haslemere & Guildford",
    description:
      "Minimalist home organising, decluttering & photo-ready property staging in Haslemere, Farnham & Guildford. Discreet, sustainable systems from £120.",
    ogImage: `${SITE_URL}/images/redesign/hero-wardrobe-empty.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "South Surrey", path: "/areas/south-surrey/" },
    ],
  },
  {
    path: "/gallery/",
    title: "Before & After Gallery | Quiet Space Home Organising",
    description:
      "See real kitchen, wardrobe & room transformations across Chichester, West Sussex & Hampshire. Calm minimalist organising without excess plastic bins.",
    ogImage: `${SITE_URL}/images/quiet-space-real-crockery.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery/" },
    ],
  },
  {
    path: "/contact/",
    title: "Contact Quiet Space | Book a Chichester Home Assessment",
    description:
      "Get in touch with Magda by WhatsApp, phone or email for a free photo/video review or £50 refundable in-person home assessment in Chichester & Sussex.",
    ogImage: `${SITE_URL}/images/redesign/hero-bedroom-desk.webp`,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact/" },
    ],
  },
];

export function normalizeRoutePath(rawPath: string): string {
  const clean = (rawPath || "/").split("?")[0].split("#")[0];
  if (clean === "/" || clean === "") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function getRouteSeo(rawPath: string): RouteSeo | undefined {
  const norm = normalizeRoutePath(rawPath);
  return SEO_ROUTES.find((r) => r.path === norm);
}

export function buildJsonLd(route: RouteSeo) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Quiet Space",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/redesign/hero-wardrobe-empty.webp`,
      description:
        "Calm, non-judgemental home organising, decluttering, and occupied property staging in Chichester, West Sussex, Hampshire, and South Surrey.",
      telephone: BUSINESS_PHONE_E164,
      email: BUSINESS_EMAIL,
      priceRange: "££",
      currenciesAccepted: "GBP",
      founder: { "@id": `${SITE_URL}/#magda` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chichester",
        addressRegion: "West Sussex",
        postalCode: "PO19",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "City", name: "Chichester" },
        { "@type": "City", name: "Worthing" },
        { "@type": "City", name: "Arundel" },
        { "@type": "City", name: "Bognor Regis" },
        { "@type": "City", name: "Littlehampton" },
        { "@type": "City", name: "Midhurst" },
        { "@type": "City", name: "Emsworth" },
        { "@type": "City", name: "Havant" },
        { "@type": "City", name: "Petersfield" },
        { "@type": "City", name: "Portsmouth" },
        { "@type": "City", name: "Southsea" },
        { "@type": "City", name: "Fareham" },
        { "@type": "City", name: "Haslemere" },
        { "@type": "City", name: "Guildford" },
        { "@type": "City", name: "Farnham" },
        { "@type": "AdministrativeArea", name: "West Sussex" },
        { "@type": "AdministrativeArea", name: "Hampshire" },
        { "@type": "AdministrativeArea", name: "Surrey" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Quiet Space Home Organising, Decluttering & Staging Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Home Organising",
              url: `${SITE_URL}/services/organising/`,
              description:
                "Sustainable home organising for kitchens, pantries, wardrobes, playrooms, living rooms, home offices, and move-in unpacking.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "120",
              maxPrice: "400",
              priceCurrency: "GBP",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Decluttering Service",
              url: `${SITE_URL}/services/decluttering/`,
              description:
                "Empathetic, judgement-free decluttering for overwhelmed spaces, downsizing, and life transitions with charity and Vinted rehoming.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "120",
              maxPrice: "400",
              priceCurrency: "GBP",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Occupied Property & Home Staging",
              url: `${SITE_URL}/services/staging/`,
              description:
                "Affordable pre-sale property staging and Airbnb or holiday-let styling using existing furniture for photo-ready presentation.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "160",
              maxPrice: "450",
              priceCurrency: "GBP",
            },
          },
        ],
      },
      sameAs: ["https://www.instagram.com/quietspace.organising/"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#magda`,
      name: "Magdalena",
      alternateName: "Magda",
      jobTitle: "Founder, Home Organiser & Property Stager",
      worksFor: { "@id": `${SITE_URL}/#business` },
      knowsAbout: [
        "Home Organising",
        "Decluttering",
        "Occupied Home Staging",
        "Holiday Let Styling",
        "Minimalist Living Systems",
        "Downsizing Support",
      ],
    },
  ];

  if (route.breadcrumbs && route.breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: route.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: `${SITE_URL}${b.path}`,
      })),
    });
  }

  if (route.faqs && route.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: route.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildHeadTagsHtml(route: RouteSeo): string {
  const canonicalUrl = `${SITE_URL}${route.path}`;
  const jsonLd = JSON.stringify(buildJsonLd(route));
  const esc = (v: string) =>
    v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${esc(canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Quiet Space" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${esc(canonicalUrl)}" />`,
    `<meta property="og:image" content="${esc(route.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(route.ogImage)}" />`,
    `<script id="qs-jsonld" type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
}
