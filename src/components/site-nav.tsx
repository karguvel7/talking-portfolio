"use client";

import { useEffect, useRef, useState } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { NAV_SCROLL_OFFSET, scrollToTarget } from "@/lib/scroll";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(NAV[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bar = indicatorRef.current;
    const wrap = navRef.current;
    if (!bar || !wrap) return;
    const link = wrap.querySelector<HTMLAnchorElement>(`[data-nav="${active}"]`);
    if (!link) return;
    bar.style.width = `${link.offsetWidth}px`;
    bar.style.transform = `translateX(${link.offsetLeft}px)`;
  }, [active, scrolled]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-soft" aria-hidden>
        <div
          className="h-full origin-left bg-ink transition-transform duration-150"
          style={{ transform: "scaleX(0)" }}
          id="scroll-progress-bar"
        />
      </div>
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-b transition-[background,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-line bg-paper/92 pt-3 pb-3 shadow-[0_8px_30px_rgba(13,13,13,0.06)] backdrop-blur-lg"
            : "border-transparent bg-transparent pt-3 pb-3"
        }`}
      >
        <div className="shell flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="group flex items-center gap-3 no-underline text-ink"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#hero", 0);
            }}
          >
            <span
              className={`grid h-11 w-11 place-items-center rounded-full border border-ink text-sm font-bold transition-all duration-500 ease-[var(--ease)] group-hover:rotate-[360deg] ${
                scrolled ? "bg-ink text-paper" : "bg-transparent"
              }`}
            >
              {PROFILE.initials}
            </span>
            <span
              className={`hidden font-semibold tracking-tight sm:block transition-opacity duration-300 ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {PROFILE.name}
            </span>
          </a>

          <nav
            ref={navRef}
            className={`relative hidden items-center gap-1 rounded-full border px-2 py-1.5 md:flex transition-all duration-500 ${
              scrolled
                ? "border-line bg-white/70 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(13,13,13,.06)]"
                : "border-line bg-card"
            }`}
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                data-nav={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget(item.href, NAV_SCROLL_OFFSET);
                }}
                className={`relative z-10 rounded-full px-3 py-2 text-sm font-semibold no-underline transition-colors ${
                  active === item.id ? "text-ink" : "text-mute hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
            <span
              ref={indicatorRef}
              className="pointer-events-none absolute bottom-1.5 left-0 z-0 h-8 rounded-full bg-soft transition-transform duration-500 ease-[var(--ease)]"
              aria-hidden
            />
          </nav>

          <button
            type="button"
            className="nav-mobile-trigger pill relative z-[80]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[75] bg-paper/95 backdrop-blur-md transition-opacity duration-500 ease-[var(--ease)] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        style={{
          clipPath: open ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)",
          transition: "clip-path 0.7s var(--ease), opacity 0.35s ease",
        }}
      >
        <div className="shell flex h-full flex-col justify-center gap-6 pt-20">
          <button type="button" className="pill absolute right-6 top-6" onClick={closeMenu}>
            Close
          </button>
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              tabIndex={open ? 0 : -1}
              className="rv is-in flex items-baseline gap-4 text-4xl font-bold tracking-tight text-ink no-underline"
              style={{ "--i": i } as React.CSSProperties}
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                scrollToTarget(item.href, NAV_SCROLL_OFFSET);
              }}
            >
              <span className="font-mono text-base text-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <ScrollProgressWire />
    </>
  );
}

function ScrollProgressWire() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
