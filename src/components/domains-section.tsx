import { DOMAINS } from "@/lib/data";
import { TiltCard } from "@/components/tilt-card";

export function DomainsSection() {
  return (
    <section id="domains" className="section-pad border-t border-line">
      <div className="shell">
        <p className="section-tag rv">04 — Domains</p>
        <h2 className="rv mt-4 text-4xl font-bold tracking-[-0.045em] md:text-5xl">
          Industries <span className="heading-serif-end">served</span>
        </h2>
        <p className="rv mt-4 max-w-2xl text-ink-2" style={{ "--i": 1 } as React.CSSProperties}>
          Enterprise programs across EduTech, healthcare, FinTech, manufacturing, HCM, digital
          payments, and marketplaces — delivered with the same full-stack and platform stack.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((domain, i) => (
            <TiltCard key={domain.id} className="h-full">
              <article
                className="card spotlight-card rv h-full p-5"
                style={{ "--i": i } as React.CSSProperties}
              >
                <p className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-bold">{domain.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{domain.blurb}</p>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
