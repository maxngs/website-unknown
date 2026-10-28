"use client";

import { useEffect } from "react";

const TARGETS = ".rv-up, .rv-scale, .rv-left, .rv-right";

/**
 * Apparitions de la page Entreprises : chaque élément .rv-* passe en fondu
 * (avec une légère montée) la première fois qu'il entre à l'écran. Les
 * styles sont dans hiry.css (main.ent-reveal). Ce qui est déjà visible au
 * chargement est affiché tout de suite, sans clignotement.
 *
 * Les éléments ajoutés ou remplacés après coup (rendu client, rechargement
 * à chaud en développement) sont pris en charge aussi : sans cela, ils
 * resteraient masqués.
 */
export default function RevealObserver() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (el: HTMLElement) => {
      el.dataset.shown = "";
      // Fin de transition : l'élément retrouve ses styles normaux (survols).
      window.setTimeout(() => (el.dataset.done = ""), 1100);
    };

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

    // Déjà à l'écran : affiché d'emblée ; sinon, en attente d'apparition.
    const track = (els: HTMLElement[]) => {
      for (const el of els) {
        if ("shown" in el.dataset) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.dataset.shown = "";
          el.dataset.done = "";
        } else {
          io.observe(el);
        }
      }
    };
    track(Array.from(main.querySelectorAll<HTMLElement>(TARGETS)));
    main.classList.add("ent-reveal");

    const mo = new MutationObserver((records) => {
      const added: HTMLElement[] = [];
      for (const rec of records) {
        rec.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(TARGETS)) added.push(node);
          added.push(...Array.from(node.querySelectorAll<HTMLElement>(TARGETS)));
        });
      }
      if (added.length) track(added);
    });
    mo.observe(main, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      main.classList.remove("ent-reveal");
    };
  }, []);

  return null;
}
