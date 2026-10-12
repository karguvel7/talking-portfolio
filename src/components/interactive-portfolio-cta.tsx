import { MagneticPill } from "@/components/magnetic-pill";
import { PROFILE } from "@/lib/data";

export function InteractivePortfolioCta() {
  return (
    <section
      className="section-pad border-t border-line"
      aria-labelledby="interactive-portfolio-heading"
    >
      <div className="shell">
        <div className="card spotlight-card rv mx-auto flex max-w-3xl flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="min-w-0 text-left">
            <p className="section-tag">Also explore</p>
            <h2
              id="interactive-portfolio-heading"
              className="mt-3 text-2xl font-bold tracking-[-0.04em] md:text-3xl"
            >
              Interactive portfolio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-2 sm:text-base">
              Visit the main site for interactive topology, case studies, and galaxy/weather
              themes — the cinematic companion to this talking-video experience.
            </p>
          </div>
          <MagneticPill
            className="shrink-0 bg-ink text-paper"
            href={PROFILE.mainPortfolioUrl}
          >
            Open interactive site
          </MagneticPill>
        </div>
      </div>
    </section>
  );
}
