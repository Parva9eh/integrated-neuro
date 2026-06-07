import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Logo variant="full" className="h-9 w-auto max-w-[200px] md:h-10" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="group relative">
                <span className="cursor-default text-sm font-medium text-foreground/90 transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <div className="invisible absolute left-0 top-[calc(100%+0.5rem)] z-10 min-w-[240px] rounded-xl border border-border bg-card py-2 opacity-0 shadow-[var(--shadow-card)] transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent-muted hover:text-primary"
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
                className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
          <CTAButton href="/book/" variant="secondary" className="!px-5 !py-2.5">
            Book Appointment
          </CTAButton>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}