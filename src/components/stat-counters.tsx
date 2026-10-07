"use client";

import { useEffect, useState } from "react";
import { HIGHLIGHT_STATS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";

function useCountUp(target: number, active: boolean, reduced: boolean) {
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let frame = 0;
    const total = 36;
    const tick = () => {
      frame += 1;
      const t = Math.min(1, frame / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, reduced, target]);

  return value;
}

function StatCard({
  stat,
  index,
  active,
  reduced,
}: {
  stat: (typeof HIGHLIGHT_STATS)[number];
  index: number;
  active: boolean;
  reduced: boolean;
}) {
  const count = useCountUp(stat.value, active, reduced);
  return (
    <div
      className="card spotlight-card rv px-4 py-5 text-center sm:px-5"
      style={{ "--i": index } as React.CSSProperties}
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-mute">{stat.label}</p>
      <p className="mt-2 text-4xl font-bold tracking-tight tabular-nums">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs text-ink-2">{stat.detail}</p>
    </div>
  );
}

export function StatCounters() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35, once: true });
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {HIGHLIGHT_STATS.map((stat, i) => (
        <StatCard key={stat.id} stat={stat} index={i} active={inView} reduced={reduced} />
      ))}
    </div>
  );
}
