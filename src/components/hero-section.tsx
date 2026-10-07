import { HeroMedia } from "@/components/hero-media";
import { MagneticPill } from "@/components/magnetic-pill";
import { StatCounters } from "@/components/stat-counters";
import { TechMarquee } from "@/components/tech-marquee";
import { PROFILE } from "@/lib/data";

export function HeroSection() {
  return (
    <>
      <section id="hero" className="section-pad pt-28">
        <div className="shell grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_clamp(280px,38vw,520px)] lg:gap-10 xl:gap-14">
          <div className="order-2 lg:order-1 lg:pb-10 xl:pb-14">
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
              <MagneticPill className="bg-ink text-paper" href="#work">
                Explore work
              </MagneticPill>
              <MagneticPill href="#contact">Let&apos;s talk</MagneticPill>
            </div>
            <div className="rv mt-10" style={{ "--i": 4 } as React.CSSProperties}>
              <StatCounters />
            </div>
          </div>
          <div className="order-1 w-full lg:order-2 lg:justify-self-end">
            <HeroMedia />
          </div>
        </div>
      </section>
      <TechMarquee />
    </>
  );
}
