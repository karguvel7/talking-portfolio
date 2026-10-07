"use client";

import { useState } from "react";
import { WorkIllustration } from "@/components/work-illustration";
import { PROJECTS } from "@/lib/data";

export function WorkSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="shell">
        <p className="section-tag rv">05 — Selected work</p>
        <h2 className="rv mt-4 text-4xl font-bold tracking-[-0.045em] md:text-5xl">
          Projects <span className="heading-serif-end">gallery</span>
        </h2>

        <div className="mt-8 hidden min-h-0 gap-2 md:flex">
          {PROJECTS.map((project, i) => {
            const isOpen = open === i;
            return (
              <article
                key={project.id}
                className={`work-panel card spotlight-card relative flex overflow-hidden transition-[flex,box-shadow,transform] duration-700 ease-[var(--ease)] ${
                  isOpen ? "flex-[8] shadow-[0_20px_60px_rgba(13,13,13,0.08)]" : "flex-[1] cursor-pointer hover:flex-[1.15]"
                }`}
                onClick={() => setOpen(i)}
              >
                {!isOpen && (
                  <div className="flex h-full w-full flex-col items-center justify-between py-6 transition-colors hover:bg-soft/40">
                    <span className="font-mono text-sm text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-bold [writing-mode:vertical-rl] rotate-180">
                      {project.title}
                    </p>
                    <span className="text-xl">+</span>
                  </div>
                )}
                {isOpen && (
                  <div className="grid flex-1 gap-6 p-8 lg:grid-cols-2">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-3 text-ink-2">{project.summary}</p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-2">
                        {project.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line px-3 py-1 text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.href && (
                        <a
                          className="pill mt-6 inline-flex transition-transform hover:-translate-y-0.5"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View on GitHub ↗
                        </a>
                      )}
                    </div>
                    <WorkIllustration variant={project.uiVariant} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 space-y-3 md:hidden">
          {PROJECTS.map((project, i) => {
            const isOpen = open === i;
            return (
              <article
                key={project.id}
                className="card spotlight-card overflow-hidden transition-shadow hover:shadow-[0_12px_40px_rgba(13,13,13,0.06)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-bold">{project.title}</span>
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-line px-5 pb-5 pt-3">
                    <p className="text-ink-2">{project.summary}</p>
                    {project.href && (
                      <a className="pill mt-4 inline-flex" href={project.href}>
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

