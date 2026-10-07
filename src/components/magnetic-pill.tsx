"use client";

import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";
import { useRef, type ComponentPropsWithoutRef } from "react";

type MagneticPillProps = ComponentPropsWithoutRef<"a"> & {
  strength?: number;
};

export function MagneticPill({
  className = "",
  strength = 0.35,
  children,
  ...props
}: MagneticPillProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      className={`pill magnetic-pill ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...props}
    >
      {children}
    </a>
  );
}
