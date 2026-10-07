import { HeroMedia } from "@/components/hero-media";
import { MagneticPill } from "@/components/magnetic-pill";
import { StatCounters } from "@/components/stat-counters";
import { TechMarquee } from "@/components/tech-marquee";
import { PROFILE } from "@/lib/data";

export function HeroSection() {
  return (
    <>
      <section id="hero" className="section-pad pt-28">
        <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,44vw)] lg:gap-12 xl:grid-cols-[1fr_580px] xl:gap-16">
          <div className="order-2 lg:order-1">
            <p className="section-tag rv" style={{ "--i": 0 } as React.CSSProperties}>
              01 — Introduction
            </p>
            <h1
              className="rv mt-4 text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-none tracking-[-0.045em]"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              {PROFILE.role}
              <span className="heading-serif-end">.</span>
            </h1>
            <p
              className="rv mt-6 max-w-xl text-lg text-ink-2"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {PROFILE.summary}
            </p>
            <p
              className="rv mt-3 max-w-xl text-sm text-mute"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {PROFILE.tenureNote}
            </p>
            <div
              className="rv mt-8 flex flex-wrap gap-3"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <MagneticPill className="bg-ink text-paper" href={`mailto:${PROFILE.email}`}>
                Email me
              </MagneticPill>
              <MagneticPill href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </MagneticPill>
              <MagneticPill href="#contact">Contact</MagneticPill>
            </div>
            <div className="rv mt-10 min-w-0" style={{ "--i": 4 } as React.CSSProperties}>
              <StatCounters />
            </div>
          </div>
          <div className="order-1 w-full min-w-0 lg:order-2">
            <HeroMedia />
          </div>
        </div>
      </section>
      <TechMarquee />
    </>
  );
}
