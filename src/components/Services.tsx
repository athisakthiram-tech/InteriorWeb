import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="services-title"
          title="Everything inside the walls, and the gate outside them"
          intro="One team handles design, carpentry, fabrication and finishing, so you deal with one contact and one quote from start to handover."
        />

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={`service-${s.id}`}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden bg-plaster-deep md:col-span-7 ${
                    flip ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 720px, (min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                </Reveal>

                <Reveal delay={120} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <h3 className="display text-[2.3rem] sm:text-[2.8rem]">{s.title}</h3>
                  <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">{s.summary}</p>
                  <ul className="mt-7 grid grid-cols-2 gap-x-6 border-t border-stone">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2.5 border-b border-stone py-2.5 text-[0.93rem]"
                      >
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rotate-45 bg-brass" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className="mt-7 inline-block border-b border-ink pb-1 text-[0.95rem] font-semibold transition-colors hover:border-brass hover:text-brass"
                  >
                    Get a quote for {s.title.toLowerCase()}
                  </Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
