import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="border-y border-stone bg-plaster-deep/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 id="reviews-title" className="display text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]">
            In our clients&rsquo; words
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 110} className="flex flex-col">
              <span aria-hidden="true" className="display block h-10 text-[5rem] leading-none text-brass">
                &ldquo;
              </span>
              <blockquote className="display mt-4 text-[1.55rem] leading-snug">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-stone pt-4 text-sm">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-muted">{t.detail}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
