"use client";

import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-card/50">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 text-sm text-mute md:flex-row">
        <p>© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.role}</p>
        <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Footer">
          <a className="pill" href={`mailto:${PROFILE.email}`}>Email</a>
          <a className="pill" href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <button type="button" className="pill" onClick={() => scrollToTarget("#hero", 0)}>
            Back to top
          </button>
        </nav>
        <p className="font-mono text-xs">Chennai · Innoart Technologies</p>
      </div>
    </footer>
  );
}
