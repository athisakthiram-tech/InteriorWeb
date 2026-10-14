"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
        solid
          ? "bg-plaster/95 text-ink shadow-[0_1px_0_var(--color-stone)] backdrop-blur-md"
          : "on-dark bg-transparent text-plaster"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        <Link href="/#home" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="display text-[1.55rem] md:text-[1.75rem]">{site.name}</span>
          <span
            className={`mt-1 text-[0.68rem] tracking-[0.08em] ${solid ? "text-muted" : "text-plaster/75"}`}
          >
            Interiors, furniture &amp; metal works
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative py-2 text-[0.92rem] font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-block ${
              solid
                ? "bg-charcoal text-plaster hover:bg-walnut"
                : "bg-plaster text-charcoal hover:bg-brass-light"
            }`}
          >
            Get Free Quote
          </Link>
          <button
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-stone bg-plaster px-5 pb-10 pt-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-stone/70">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block py-4 text-[2rem] text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-8 block rounded-full bg-charcoal px-6 py-4 text-center font-semibold text-plaster"
        >
          Get Free Quote
        </Link>
        <a href={`tel:+${site.phoneDigits}`} className="mt-4 block text-center text-muted">
          or call {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
