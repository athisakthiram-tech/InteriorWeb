import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/data/site";

const stats = [
  { value: site.yearsExperience, label: "years in the trade" },
  { value: site.projectsCompleted, label: "projects completed" },
  { value: site.happyClients, label: "happy clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[640px] flex-col overflow-hidden bg-charcoal text-plaster h-svh"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-photo object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(38_35_32/0.55)_0%,rgb(38_35_32/0.15)_35%,rgb(38_35_32/0.55)_65%,rgb(38_35_32/0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(38_35_32/0.6)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-24 pt-28 md:px-8 md:pb-12">
        <h1 id="hero-title" className="display max-w-[12ch] text-[3.6rem] leading-[0.95] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.75rem]">
          <span className="hero-line">Interiors</span>
          <span className="hero-line">crafted to last</span>
        </h1>

        <div className="hero-fade mt-7 flex flex-col gap-8 md:mt-9 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[44ch] text-[1.05rem] leading-relaxed text-plaster/85 md:text-lg">
            Homes, offices, made-to-measure furniture and gate works across {site.serviceArea}.
            Built by our own team, with a premium finish at a fair price.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-plaster px-7 py-3.5 text-[0.95rem] font-semibold text-charcoal transition-colors hover:bg-brass-light"
            >
              Get Free Quote
            </Link>
            <Link
              href="/#projects"
              className="rounded-full border border-plaster/50 px-7 py-3.5 text-[0.95rem] font-semibold text-plaster transition-colors hover:border-plaster hover:bg-plaster/10"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <dl className="hero-fade mt-10 grid grid-cols-3 border-t border-plaster/25 pt-6 md:mt-14">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse ${i > 0 ? "border-l border-plaster/25 pl-4 sm:pl-8" : "pr-4"}`}
            >
              <dt className="mt-1 text-[0.8rem] leading-snug text-plaster/75 sm:text-sm">{s.label}</dt>
              <dd className="display text-[2.2rem] text-brass-light sm:text-[2.8rem] md:text-[3.4rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
