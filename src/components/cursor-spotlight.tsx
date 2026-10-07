"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";

export function CursorSpotlight() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-multiply blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(13,13,13,0.08) 0%, rgba(13,13,13,0) 70%)",
      }}
      aria-hidden
    />
  );
}
