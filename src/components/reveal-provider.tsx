"use client";

import { useEffect } from "react";

function observeRevealNodes(observer: IntersectionObserver) {
  document.querySelectorAll<HTMLElement>(".rv:not(.is-in), .rv-mask:not(.is-in)").forEach((node) => {
    observer.observe(node);
  });
}

export function RevealProvider() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "120px 0px -4% 0px" },
    );

    observeRevealNodes(observer);

    const mutation = new MutationObserver(() => observeRevealNodes(observer));
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
