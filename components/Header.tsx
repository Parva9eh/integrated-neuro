import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative top-0 z-50 border-b border-border bg-card/95 text-foreground backdrop-blur-md">
      <div className="relative mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <BrandLockup />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="group relative">
                <span className="cursor-default text-sm font-medium text-muted transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <div className="invisible absolute left-0 top-[calc(100%+0.5rem)] z-10 min-w-60 rounded-xl border border-border bg-card py-2 text-foreground opacity-0 shadow-(--shadow-card) transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent-light hover:text-primary"
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
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          <CTAButton href="/contact/" variant="accent" className="px-5! py-2.5!">
            Contact Us
          </CTAButton>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
