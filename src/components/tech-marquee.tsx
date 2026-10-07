"use client";

import { TECH_MARQUEE } from "@/lib/data";

export function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="relative overflow-hidden border-y border-line bg-card/60 py-3 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div className="flex w-max animate-marquee-x gap-8 px-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-mono text-sm font-semibold tracking-wide text-ink-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
