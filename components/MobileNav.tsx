"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-border px-3 py-2 text-sm font-medium"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-b border-border bg-card px-6 py-4 shadow-lg"
          aria-label="Mobile"
        >
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="block rounded-lg py-2 text-sm font-medium transition-colors hover:bg-accent-muted"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) =>
              "children" in link ? (
                <li key={link.label}>
                  <span className="block py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    {link.label}
                  </span>
                  <ul className="ml-3 space-y-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1 text-sm"
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
                    className="block py-1 text-sm font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li className="pt-2">
              <CTAButton href="/book/" variant="secondary" className="w-full">
                Book Appointment
              </CTAButton>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}