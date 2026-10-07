import type Lenis from "lenis";

/** Sticky header offset for in-page anchor targets */
export const NAV_SCROLL_OFFSET = -88;

let lenisRef: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisRef = instance;
}

export function scrollToTarget(target: string | HTMLElement, offset = NAV_SCROLL_OFFSET) {
  const el =
    typeof target === "string"
      ? document.querySelector<HTMLElement>(target)
      : target;
  if (!el) return;
  if (lenisRef) {
    lenisRef.scrollTo(el, { offset });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
