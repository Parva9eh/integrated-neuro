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
  },
  insightLogo: {
    src: "/images/in-sight-logo.png",
    href: "/services/counselling/",
    alt: "IN-Sight Mind Body Wellness",
  },
  sectionImages: {
    about: "/images/about.jpg",
    neuro: "/images/neuro.jpg",
    counselling: "/images/counselling.jpg",
    contact: "/images/contact.jpg",
    footer: "/images/footer.jpg",
  },
  contact: {
    address: "230-181 Keefer PL",
    city: "Vancouver, BC, V6B 6C1",
    phone: "647-693-7520",
    phoneHref: "tel:+16476937520",
    mapsLink: "https://maps.app.goo.gl/bkq1a7x5PgDqSGkdA",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.286!2d-123.1103743!3d49.2805054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717bcbad7507%3A0x2d4805762586e40f!2s181%20Keefer%20Pl%20%23230%2C%20Vancouver%2C%20BC%20V6B%206C1!5e0!3m2!1sen!2sca!4v1749513600000!5m2!1sen!2sca",
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
