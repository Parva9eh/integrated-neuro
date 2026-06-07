export const siteConfig = {
  name: "Integrated Neuro",
  tagline: "Integrated Neurological Healthcare",
  description:
    "Holistic, evidence-informed care for brain injury, neurological conditions, and mental wellness in Vancouver, BC.",
  url: "https://integratedneuro.ca",
  counsellingBrand: "IN-Sight Mind Body Wellness",
  contact: {
    address: "Suite 300 – 1090 Homer Street",
    city: "Vancouver, BC V6B 2W9",
    phone: "647-693-7520",
    phoneHref: "tel:+16476937520",
    fax: "778-375-2301",
    email: "info@integratedneuro.ca",
  },
  booking: {
    general: "https://integratedneuro.janeapp.com/",
    sonia: "https://integratedneuro.janeapp.com/locations/integrated-neuro/book#/staff_member/1",
    jennifer:
      "https://integratedneuro.janeapp.com/locations/integrated-neuro/book#/staff_member/5",
  },
  landAcknowledgement:
    "We acknowledge that our office stands on the unceded traditional territory of the Coast Salish Peoples, including the territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) Nations.",
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  {
    href: "/services/neuropsychology",
    label: "Services",
    children: [
      { href: "/services/neuropsychology", label: "Neuropsychology" },
      { href: "/services/counselling", label: "Counselling (IN-Sight)" },
    ],
  },
  { href: "/team", label: "Team" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Contact" },
] as const;