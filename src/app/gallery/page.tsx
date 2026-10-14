import type { Metadata } from "next";
import Link from "next/link";
import { projects, site } from "@/data/site";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Project gallery",
  description: `Photos of home interiors, office interiors, custom furniture and gate works by ${site.name} in ${site.city}.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="on-dark bg-charcoal pb-16 pt-32 text-plaster md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-plaster/60">
            <Link href="/" className="hover:text-brass-light">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">Gallery</span>
          </nav>
          <h1 className="display mt-6 text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem]">Project gallery</h1>
          <p className="mt-5 max-w-[52ch] text-[1.05rem] leading-relaxed text-plaster/75">
            {projects.length} finished projects across homes, offices, furniture and gate works. Filter by
            type, or tap a photo to see it larger.
          </p>
        </div>
      </section>
      <section aria-label="Projects" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ProjectGallery projects={projects} />
          <div className="mt-20 flex flex-col items-start gap-6 border-t border-stone pt-12 md:flex-row md:items-center md:justify-between">
            <p className="display max-w-[22ch] text-[2.2rem] leading-tight">Planning something similar?</p>
            <Link
              href="/#contact"
              className="rounded-full bg-charcoal px-7 py-3.5 font-semibold text-plaster transition-colors hover:bg-walnut"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
