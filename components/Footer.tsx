import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-lg font-semibold">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Counselling services by {siteConfig.counsellingBrand}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.landAcknowledgement}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic text-white/80">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.city}</p>
              <p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>Fax: {siteConfig.contact.fax}</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <Link href="/services/neuropsychology" className="hover:text-white">
                  Neuropsychology
                </Link>
              </li>
              <li>
                <Link href="/services/counselling" className="hover:text-white">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/fees" className="hover:text-white">
                  Fees & Insurance
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}