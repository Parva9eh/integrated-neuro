import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo
              variant="full"
              linkToHome={false}
              className="h-8 w-auto max-w-[200px] opacity-95"
            />
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Counselling services by {siteConfig.counsellingBrand}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-white/55">
              {siteConfig.landAcknowledgement}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Contact
            </h3>
            <address className="mt-4 space-y-1.5 text-sm not-italic text-white/80">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.city}</p>
              <p>
                <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-white/60">Fax: {siteConfig.contact.fax}</p>
            </address>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/services/neuropsychology/" className="transition-colors hover:text-white">
                  Neuropsychology
                </Link>
              </li>
              <li>
                <Link href="/services/counselling/" className="transition-colors hover:text-white">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/fees/" className="transition-colors hover:text-white">
                  Fees & Insurance
                </Link>
              </li>
              <li>
                <Link href="/book/" className="transition-colors hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}