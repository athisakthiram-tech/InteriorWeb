import Image from "next/image";
import { about, images, site } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative aspect-[5/4] overflow-hidden bg-plaster-deep lg:order-2 lg:col-span-6 lg:aspect-[4/5]">
          <Image
            src={images.about}
            alt={`Craftsman working on timber at the ${site.name} workshop`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="lg:order-1 lg:col-span-6">
          <h2 id="about-title" className="display max-w-[16ch] text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem]">
            {about.heading}
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.75] text-muted">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-[58ch]">{p}</p>
            ))}
          </div>
          <p className="display mt-10 text-[1.6rem] italic text-walnut">{about.signoff}</p>
        </Reveal>
      </div>
    </section>
  );
}
