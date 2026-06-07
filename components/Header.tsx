import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <span className="block font-serif text-xl font-semibold text-primary">
            {siteConfig.name}
          </span>
          <span className="block text-xs text-muted group-hover:text-foreground">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="group relative">
                <span className="cursor-default text-sm font-medium text-foreground">
                  {link.label}
                </span>
                <div className="invisible absolute left-0 top-full z-10 min-w-[220px] rounded-lg border border-border bg-card py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent-light"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          <CTAButton href="/book" variant="secondary">
            Book Appointment
          </CTAButton>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}