import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({ title, intro, id, tone = "light", className = "" }: Props) {
  return (
    <Reveal className={`grid gap-5 md:grid-cols-12 md:items-end ${className}`}>
      <h2 id={id} className="display text-[2.6rem] sm:text-[3.4rem] md:col-span-7 lg:text-[4.2rem]">
        {title}
      </h2>
      {intro ? (
        <p
          className={`max-w-[46ch] text-[1.02rem] leading-relaxed md:col-span-5 md:pb-2 ${
            tone === "dark" ? "text-plaster/75" : "text-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
