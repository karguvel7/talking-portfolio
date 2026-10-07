"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";
import { INTRO_MP4, INTRO_POSTER } from "@/lib/assets";

export function HeroMedia() {
  const [wrapRef, inView] = useInView<HTMLDivElement>({ threshold: 0.15, once: false });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const reduced = usePrefersReducedMotion();

  const tryPlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v || reduced) return;
    v.muted = muted;
    try {
      await v.play();
    } catch {
      /* autoplay blocked */
    }
  }, [muted, reduced]);

  const toggleSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      try {
        await v.play();
      } catch {
        v.muted = true;
        setMuted(true);
      }
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;
    if (!inView) {
      v.pause();
      return;
    }
    void tryPlay();
  }, [inView, reduced, tryPlay]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;
    const onCanPlay = () => void tryPlay();
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, [reduced, tryPlay]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[min(100%,580px)]"
    >
      <div className="card relative overflow-hidden bg-card p-2 shadow-[0_24px_80px_rgba(13,13,13,0.08)] sm:p-3">
        <div className="relative mx-auto aspect-[768/960] w-full max-h-[min(88svh,720px)]">
          <p
            className="pointer-events-none absolute inset-x-0 top-[9%] z-0 mx-auto w-full max-w-[16ch] text-center text-[clamp(2.2rem,9vw,5.5rem)] font-bold leading-none tracking-[-0.06em] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(13,13,13,.11)" }}
            aria-hidden
          >
            KARGUVEL
          </p>

          {reduced ? (
            <img
              src={INTRO_POSTER}
              alt="Karguvel K, AI Architect"
              width={480}
              height={600}
              className="relative z-10 h-full w-full object-contain mix-blend-multiply"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                className="relative z-10 h-full w-full object-contain mix-blend-multiply"
                src={INTRO_MP4}
                playsInline
                loop
                muted={muted}
                autoPlay
                preload="auto"
                poster={INTRO_POSTER}
                aria-label="Introduction video of Karguvel K"
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 z-20 flex h-[46px] min-w-[46px] items-center justify-center gap-1 rounded-full bg-ink px-3 text-paper shadow-lg"
                aria-label={muted ? "Unmute introduction video" : "Mute introduction video"}
                aria-pressed={!muted}
                onClick={() => void toggleSound()}
              >
                <SoundIcon muted={muted} />
                <span className="text-xs font-semibold">
                  {muted ? "Sound on" : "Mute"}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 5L6 9H3v6h3l5 4V5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {muted ? (
        <path d="M16 9l5 5M21 9l-5 5" stroke="currentColor" strokeWidth="1.8" />
      ) : (
        <>
          <path d="M15.5 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M18 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}
    </svg>
  );
}
