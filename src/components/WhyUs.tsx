import Image from "next/image";
import { images, reasons } from "@/data/site";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="why-title" className="display text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]">
              Why families and businesses choose us
            </h2>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-plaster-deep">
              <Image
                src={images.workshop}
                alt="Tools and timber in our workshop"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <ul className="lg:col-span-7 lg:pt-4">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 60}
              className="grid gap-3 border-t border-stone py-8 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-10 md:py-10"
            >
              <h3 className="display text-[1.9rem] leading-tight">{r.title}</h3>
              <p className="max-w-[48ch] leading-relaxed text-muted sm:pt-1.5">{r.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
