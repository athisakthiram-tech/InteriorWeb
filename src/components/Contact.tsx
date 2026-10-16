import { mapsLink, site } from "@/data/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  const details: { label: string; value: string; href?: string }[] = [
    { label: "Phone and WhatsApp", value: site.phoneDisplay, href: `tel:+${site.phoneDigits}` },
    ...(site.email ? [{ label: "Email", value: site.email, href: `mailto:${site.email}` }] : []),
    { label: "Workshop and office", value: site.address },
    { label: "Hours", value: site.hours },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-charcoal py-24 text-plaster md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="contact-title" className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.4rem]">
            Get a free quote
          </h2>
          <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-plaster/75">
            Tell us a little about your space. We will call you back, usually the same day, to fix a free
            site visit anywhere in {site.serviceArea}.
          </p>

          <dl className="mt-12 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="border-t border-plaster/15 pt-5">
                <dt className="text-sm text-plaster/60">{d.label}</dt>
                <dd className="mt-1 text-lg">
                  {d.href ? (
                    <a href={d.href} className="underline-offset-4 hover:text-brass-light hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-brass-light pb-1 font-semibold text-brass-light transition-colors hover:text-plaster"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M10 18s6-5.2 6-10A6 6 0 0 0 4 8c0 4.8 6 10 6 10Z" />
              <circle cx="10" cy="8" r="2.2" />
            </svg>
            Open in Google Maps
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
