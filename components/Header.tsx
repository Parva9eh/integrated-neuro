import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative top-0 z-50 border-b border-white/15 bg-hero-dark/98 text-white backdrop-blur-md">
      <div className="relative mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <Logo variant="full" onDark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="group relative">
                <span className="cursor-default text-sm font-medium text-white/85 transition-colors group-hover:text-white">
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
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
          <CTAButton
            href="/book/"
            variant="accent"
            className="border-white/50! px-5! py-2.5! tracking-wider!"
          >
            Book Appointment
          </CTAButton>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
