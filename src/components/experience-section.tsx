"use client";

import { EXPERIENCE } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

function TimelineItem({
  item,
  index,
  total,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
  total: number;
}) {
  const [ref, inView] = useInView<HTMLLIElement>({ threshold: 0.45, once: true });
  const progress = inView ? 1 : 0;

  return (
    <li
      ref={ref}
      className="relative rv"
      style={{ "--i": index } as React.CSSProperties}
    >
      <span
        className={`absolute -left-8 top-1.5 z-10 h-3 w-3 rounded-full border-2 border-ink bg-card transition-all duration-500 ${
          inView ? "scale-110 bg-ink" : ""
        }`}
      />
      <div
        className="absolute -left-[29px] top-5 w-px origin-top bg-ink transition-transform duration-700 ease-[var(--ease)]"
        style={{
          height: index === total - 1 ? 0 : "calc(100% + 2rem)",
          transform: `scaleY(${progress})`,
        }}
        aria-hidden
      />
      <div className="card spotlight-card p-5">
        <p className="font-mono text-xs text-mute">
          {item.start}
          {item.end ? ` — ${item.end}` : ""}
        </p>
        <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
        <p className="text-sm text-ink-2">
          {item.org}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        {item.detail && <p className="mt-2 text-sm text-ink-2">{item.detail}</p>}
      </div>
    </li>
  );
}

export function ExperienceSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.12, once: true });

  return (
    <section id="experience" className="section-pad border-t border-line">
      <div className="shell">
        <p className="section-tag rv">06 — Experience</p>
        <h2 className="rv mt-4 text-4xl font-bold tracking-[-0.045em] md:text-5xl">
          Timeline <span className="heading-serif-end">path</span>
        </h2>
        <p className="rv mt-4 max-w-2xl text-ink-2">
          From Java apprenticeship and MCA through nine-plus years at Innoart — now AI Architect
          owning full-stack SaaS and enterprise platforms.
        </p>
        <div ref={ref} className="relative mt-12 pl-8">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-line" aria-hidden />
          <div
            className="absolute left-[11px] top-0 w-px origin-top bg-ink transition-transform duration-[1.4s] ease-[var(--ease)]"
            style={{ transform: `scaleY(${inView ? 1 : 0})`, height: "100%" }}
            aria-hidden
          />
          <ol className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <TimelineItem
                key={`${item.title}-${item.start}`}
                item={item}
                index={i}
                total={EXPERIENCE.length}
              />
            ))}
            <li className="relative rv">
              <div className="card border-dashed p-5 text-center">
                <p className="font-bold">Next — Your team?</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
