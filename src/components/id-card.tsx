"use client";

import { useEffect, useRef, useState } from "react";
import { PORTRAIT_BUST } from "@/lib/assets";
import { PROFILE } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";

export function IdCard() {
  const reduced = usePrefersReducedMotion();
  const swingRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const angle = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    if (reduced) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    if (!finePointer || !narrow) return;

    let raf = 0;
    let lastX = 0;
    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      velocity.current += dx * 0.002;
    };
    const loop = () => {
      velocity.current *= 0.92;
      angle.current += velocity.current;
      const el = swingRef.current;
      if (el) {
        el.style.transform = `rotate(${angle.current * 5}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const toggleFlip = () => setFlipped((f) => !f);

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        ref={swingRef}
        className="relative origin-top lg:rotate-[-2deg]"
        style={{ transformOrigin: "50% 50%" }}
      >
        <button
          type="button"
          className="group relative mx-auto block w-full border-0 bg-transparent p-0 [perspective:1200px]"
          onClick={toggleFlip}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFlip();
            }
          }}
          aria-pressed={flipped}
          aria-label="Flip ID card"
        >
          <div
            className={`relative h-[404px] w-full transition-transform duration-700 ease-[var(--ease)] [transform-style:preserve-3d] ${
              flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="card absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:translateZ(1px)]">
              <div className="bg-ink px-4 py-2 text-center text-xs font-bold tracking-[0.2em] text-paper">
                ARCHITECT ID
              </div>
              <div className="flex flex-col items-center px-5 pb-5 pt-4">
                <div className="h-[156px] w-[128px] overflow-hidden rounded-full ring-2 ring-line">
                  <img
                    src={PORTRAIT_BUST}
                    alt=""
                    width={128}
                    height={156}
                    className="h-full w-full object-cover"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 text-lg font-bold">{PROFILE.fullName}</p>
                <p className="text-sm text-mute">{PROFILE.role}</p>
                <dl className="mt-4 w-full space-y-2 text-sm">
                  <div className="flex justify-between border-b border-line pb-1">
                    <dt className="text-mute">ID No.</dt>
                    <dd className="font-mono">{PROFILE.idNumber}</dd>
                  </div>
                  <div className="flex justify-between border-b border-line pb-1">
                    <dt className="text-mute">Dept.</dt>
                    <dd>{PROFILE.department}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex w-full items-end justify-between">
                  <div
                    className="h-8 flex-1 bg-[repeating-linear-gradient(90deg,#0d0d0d_0_2px,transparent_2px_4px)] opacity-70"
                    aria-hidden
                  />
                  <div
                    className="ml-3 h-10 w-10 rounded-full bg-[#c8c5be] opacity-80"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
            <div
              className="card absolute inset-0 flex flex-col justify-between p-5 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-mute">
                  What I am
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {PROFILE.aboutBack}
                </p>
              </div>
              <p className="font-serif text-2xl italic text-mute">{PROFILE.name}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
