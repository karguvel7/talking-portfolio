"use client";

import { useState } from "react";
import { MagneticPill } from "@/components/magnetic-pill";
import { PROFILE } from "@/lib/data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="shell text-center">
        <p className="section-tag rv">07 — Contact</p>
        <h2 className="rv mt-6 text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-[-0.045em]">
          Let&apos;s build something together.
        </h2>
        <p className="rv mt-4 max-w-xl mx-auto text-ink-2">
          Reach out for AI architecture, full-stack platform work, or open-source collaboration.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="rv mt-8 inline-block text-[clamp(1.4rem,4vw,2.4rem)] font-bold text-ink underline decoration-1 underline-offset-8 hover:text-ink-2"
        >
          {PROFILE.email}
        </a>
        <div className="rv mt-6 flex flex-wrap items-center justify-center gap-3">
          <MagneticPill className="bg-ink text-paper" href={`mailto:${PROFILE.email}`}>
            Send email
          </MagneticPill>
          <MagneticPill href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </MagneticPill>
          <button type="button" className="pill" onClick={copyEmail}>
            <span aria-live="polite">{copied ? "Copied ✓" : "Copy email"}</span>
          </button>
          <a className="pill" href={`tel:${PROFILE.phoneTel}`}>{PROFILE.phone}</a>
        </div>
        <div
          className="mx-auto mt-12 grid h-24 w-24 place-items-center rounded-full border border-line bg-card text-xs font-mono uppercase tracking-widest text-mute animate-spin-slow"
          aria-hidden
        >
          say hello
        </div>
      </div>
    </section>
  );
}
