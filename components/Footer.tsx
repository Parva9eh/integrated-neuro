import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { SectionImage } from "@/components/SectionImage";
import { siteConfig } from "@/lib/site";

const linkClass = "text-muted transition-colors hover:text-primary";

const quickLinks = [
  { href: "/about/", label: "About" },
  { href: "/services/neuropsychology/", label: "Neuropsychology" },
  { href: "/services/counselling/", label: "Counselling" },
  { href: "/team/", label: "Team" },
  { href: "/fees/", label: "Fees & Insurance" },
  { href: "/contact/", label: "Contact Us" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="footer-pattern relative z-10 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="min-w-0 lg:col-span-5">
            <BrandLockup layout="footer" linkToHome={false} />
            <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted">
              <p>{siteConfig.serviceLines.neuro}</p>
              <p>{siteConfig.serviceLines.counselling}</p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-silver">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 md:col-span-2 lg:col-span-4">
            <SectionImage
              src={siteConfig.sectionImages.footer}
              alt="Integrated Neuro office in Vancouver"
              aspect="landscape"
            />
            <p className="mt-4 text-xs leading-relaxed text-silver">
              {siteConfig.landAcknowledgement}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-silver">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}