/** Strip trailing slash so URLs compose consistently in metadata, sitemap, and forms. */
function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Public site URL — baked in at build time (static export).
 * - Development: http://localhost:3000 (default, or set in .env.local)
 * - Production: https://integrated-neuro.pages.dev (Cloudflare Pages env var)
 */
const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const siteConfig = {
  name: "Integrated Neuro",
  tagline: "Integrated Neurological Healthcare",
  description:
    "Holistic, evidence-informed care for brain injury, neurological conditions, and mental wellness in Vancouver, BC.",
  url: siteUrl,
  counsellingBrand: "IN-Sight Mind Body Wellness",
  serviceLines: {
    neuro: "Neuropsychology & neurological care by Integrated Neuro",
    counselling: "Counselling services by IN-Sight Mind Body Wellness",
  },
  logo: {
    src: "/images/logo.png",
    fallback: "/images/logo.svg",
    mark: "/images/logo.png",
    markFallback: "/images/logo.svg",
  },
  insightLogo: {
    src: "/images/in-sight-logo.png",
    href: "/services/counselling/",
    alt: "IN-Sight Mind Body Wellness",
  },
  sectionImages: {
    about: "/images/about.jpg",
    neuro: "/images/neuro.jpg",
    content: "/images/content.jpg",
    counselling: "/images/counselling.jpg",
    contact: "/images/contact.jpg",
  },
  contact: {
    address: "230-181 Keefer PL",
    city: "Vancouver, BC, V6B 6C1",
    phone: "647-693-7520",
    phoneHref: "tel:+16476937520",
  },
  landAcknowledgement:
    "We acknowledge that our office stands on the unceded traditional territory of the Coast Salish Peoples, including the territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) Nations.",
} as const;

export const navLinks = [
  { href: "/about/", label: "About" },
  {
    href: "/services/neuropsychology/",
    label: "Services",
    children: [
      { href: "/services/neuropsychology/", label: "Neuropsychology" },
      { href: "/services/counselling/", label: "Counselling (IN-Sight)" },
    ],
  },
  { href: "/team/", label: "Team" },
  { href: "/fees/", label: "Fees" },
] as const;
