"use client";

import { useEffect } from "react";

/** Sélecteurs animés au scroll (cf. app/animations.css). */
const SELECTORS = [
  ".rv-up",
  ".rv-scale",
  ".rv-left",
  ".rv-right",
  ".mag-rule",
  ".faq details",
].join(",");

/**
 * Repli pour les navigateurs sans `animation-timeline: view()`
 * (Firefox, Safari < 26). Là où c'est supporté, ce composant ne fait rien :
 * les reveals restent en CSS pur, zéro JS.
 *
 * `data-reveal-js` n'est posé que si le repli s'active : sans JS, aucun
 * contenu n'est masqué.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (CSS.supports("animation-timeline", "view()")) return;

    const root = document.querySelector<HTMLElement>(".hiry-root");
    if (!root) return;
    root.dataset.revealJs = "";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      // se déclenche quand l'élément a franchi ~12% du bas du viewport,
      // pour coller à `animation-range: entry 0% entry 30%`
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    );

    root.querySelectorAll(SELECTORS).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
