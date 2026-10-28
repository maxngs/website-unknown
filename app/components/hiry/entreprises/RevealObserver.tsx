"use client";

import { useEffect } from "react";

const TARGETS = ".rv-up, .rv-scale, .rv-left, .rv-right";

/**
 * Apparitions de la page Entreprises : chaque élément .rv-* passe en fondu
 * (avec une légère montée) la première fois qu'il entre à l'écran. Les
 * styles sont dans hiry.css (main.ent-reveal). Ce qui est déjà visible au
 * chargement est affiché tout de suite, sans clignotement.
 */
export default function RevealObserver() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(main.querySelectorAll<HTMLElement>(TARGETS));
    const show = (el: HTMLElement) => {
      el.dataset.shown = "";
      // Fin de transition : l'élément retrouve ses styles normaux (survols).
      window.setTimeout(() => (el.dataset.done = ""), 1100);
    };

    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.dataset.shown = "";
        el.dataset.done = "";
      }
    }
    main.classList.add("ent-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          show(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.filter((el) => !("shown" in el.dataset)).forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      main.classList.remove("ent-reveal");
    };
  }, []);

  return null;
}
