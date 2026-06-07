import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

const linkClass =
  "text-[#c8d6e3] transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="footer-pattern relative z-10 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="full" linkToHome={false} onDark />
            <p className="mt-4 text-sm leading-relaxed text-[#c8d6e3]">
              Counselling services by {siteConfig.counsellingBrand}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-silver">
              {siteConfig.landAcknowledgement}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-silver">
              Contact
            </h3>
            <address className="mt-4 space-y-1.5 text-sm not-italic text-[#dce4ec]">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.city}</p>
              <p>
                <a href={siteConfig.contact.phoneHref} className={linkClass}>
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.contact.email}`} className={linkClass}>
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-silver">Fax: {siteConfig.contact.fax}</p>
            </address>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-silver">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services/neuropsychology/" className={linkClass}>
                  Neuropsychology
                </Link>
              </li>
              <li>
                <Link href="/services/counselling/" className={linkClass}>
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/fees/" className={linkClass}>
                  Fees & Insurance
                </Link>
              </li>
              <li>
                <Link href="/book/" className={linkClass}>
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/20 pt-8 text-center text-xs text-silver">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}