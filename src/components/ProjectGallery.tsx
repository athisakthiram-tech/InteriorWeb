"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projectFilters, type Project, type ProjectCategory } from "@/data/site";

type Filter = ProjectCategory | "all";

const categoryLabel: Record<ProjectCategory, string> = {
  home: "Home",
  office: "Office",
  furniture: "Furniture",
  gates: "Gates",
};

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setActive(null);
    d.addEventListener("keydown", onKey);
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("keydown", onKey);
      d.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = active !== null ? visible[active] : null;

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
        {projectFilters.map((f) => {
          const count =
            f.value === "all" ? projects.length : projects.filter((p) => p.category === f.value).length;
          const selected = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f.value)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                selected
                  ? "border-charcoal bg-charcoal text-plaster"
                  : "border-stone text-ink hover:border-ink"
              }`}
            >
              {f.label}
              <span className={`ml-2 tabular-nums ${selected ? "text-plaster/60" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((p, i) => (
          <li key={p.title}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full text-left"
              aria-label={`View larger photo: ${p.title}, ${p.location}`}
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-plaster-deep">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.045]"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />
                <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-plaster/90 text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M8 3H3v5M12 17h5v-5M3 3l6 6M17 17l-6-6" />
                  </svg>
                </span>
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="display text-[1.55rem] leading-tight">{p.title}</span>
                <span className="shrink-0 text-sm text-muted">{categoryLabel[p.category]}</span>
              </span>
              <span className="mt-1 block text-sm text-muted">{p.location}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current ? `${current.title}, ${current.location}` : "Project photo"}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="on-dark m-0 h-full max-h-none w-full max-w-none bg-[#1a1816] p-0 text-plaster"
      >
        {current ? (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <p className="text-sm text-plaster/70 tabular-nums">
                {active! + 1} of {visible.length}
              </p>
              <button
                type="button"
                onClick={close}
                autoFocus
                className="grid h-11 w-11 place-items-center rounded-full border border-plaster/30 hover:bg-plaster/10"
                aria-label="Close"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>

            <div className="relative mx-5 flex-1 md:mx-24">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-5 md:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-plaster/30 hover:bg-plaster/10"
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>
              <div className="text-center">
                <p className="display text-[1.6rem] leading-tight md:text-[2rem]">{current.title}</p>
                <p className="text-sm text-plaster/70">
                  {current.location}, {categoryLabel[current.category].toLowerCase()} project
                </p>
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-plaster/30 hover:bg-plaster/10"
                aria-label="Next photo"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
