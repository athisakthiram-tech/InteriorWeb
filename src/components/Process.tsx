import { processSteps } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="on-dark bg-charcoal py-24 text-plaster md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="process-title"
          tone="dark"
          title="How your project runs"
          intro="Four stages, the same every time. You approve each one before we move to the next."
        />

        <ol className="mt-16 grid gap-px overflow-hidden bg-plaster/15 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="bg-charcoal p-7 md:p-9">
              <span className="display block text-[4.5rem] leading-none text-brass-light" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="display mt-8 text-[1.75rem] leading-tight">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-plaster/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
