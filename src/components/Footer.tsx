import Link from "next/link";
import { navLinks, services, site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="on-dark border-t border-plaster/10 bg-[#1e1c1a] text-plaster">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="display text-[2rem]">{site.name}</p>
          <p className="mt-3 max-w-[34ch] leading-relaxed text-plaster/65">
            Home and office interiors, custom furniture, and gate and metal works across {site.serviceArea}.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-sm font-semibold text-plaster/55">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-plaster/85 hover:text-brass-light">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className="text-plaster/85 hover:text-brass-light">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-plaster/55">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link href="/#services" className="text-plaster/85 hover:text-brass-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-plaster/55">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-plaster/85">
            <li>
              <a href={`tel:+${site.phoneDigits}`} className="hover:text-brass-light">{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brass-light">
                WhatsApp us
              </a>
            </li>
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brass-light">{site.email}</a>
              </li>
            ) : null}
            <li className="leading-relaxed text-plaster/65">{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-plaster/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-plaster/55 md:px-8">
          &copy; {site.copyrightYear} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
