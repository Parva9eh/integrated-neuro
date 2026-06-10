"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";

const linkClass =
  "flex min-h-11 items-center rounded-lg px-2 text-sm font-medium transition-colors hover:bg-accent-light";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="shrink-0 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border px-3 text-sm font-medium text-primary"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-14 z-40 bg-black/40 sm:top-[3.75rem]"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-card px-4 py-4 text-foreground shadow-lg sm:max-h-[calc(100dvh-3.75rem)] sm:px-6"
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) =>
                "children" in link ? (
                  <li key={link.label}>
                    <span className="block px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
                      {link.label}
                    </span>
                    <ul className="ml-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={linkClass}
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={linkClass}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
              <li className="pt-3">
                <CTAButton href="/contact/" variant="accent" className="w-full">
                  Contact Us
                </CTAButton>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
