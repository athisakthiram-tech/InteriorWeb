import Link from "next/link";
import { projects } from "@/data/site";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-stone bg-plaster-deep/50 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="projects-title"
          title="Recent work around the city"
          intro="A few of the homes, offices and gates we have finished recently. Tap any photo to see it larger."
        />
        <Reveal className="mt-12">
          <ProjectGallery projects={featured} />
        </Reveal>
        <div className="mt-14 flex justify-center">
          <Link
            href="/gallery"
            className="rounded-full border border-ink px-7 py-3.5 text-[0.95rem] font-semibold transition-colors hover:bg-charcoal hover:text-plaster"
          >
            See the full gallery ({projects.length} projects)
          </Link>
        </div>
      </div>
    </section>
  );
}
