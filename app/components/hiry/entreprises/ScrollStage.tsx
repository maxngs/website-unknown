"use client";

import { useEffect } from "react";
import { scrollToSection } from "./stage";

const NAV_H = 72;
const DESKTOP = "(min-width: 901px) and (min-height: 640px)";
const REDUCE = "(prefers-reduced-motion: reduce)";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Empilement des sections au défilement (bureau). Ne rend rien : il prépare
 * les écrans de la page (hero + sections `.ent-screen`) pour hiry.css.
 *
 * - `.ent-stack` : la section se colle sous la nav, la suivante glisse
 *   par-dessus comme une feuille.
 * - `--stick-top` : une section plus haute que l'écran se colle par le bas,
 *   pour être vue en entier avant d'être recouverte.
 * - Variables de progression (0 → 1), posées à chaque frame de défilement :
 *   `--reveal` (contenu de la feuille qui arrive), `--title` (titre),
 *   `--cover` (feuille recouverte par la suivante, qui recule).
 *   Calculées en JS : les view() timelines CSS sont faussées par
 *   `position: sticky` dans Chrome.
 * - Les ancres internes (#constat, #faq…) passent par scrollToSection,
 *   car une section collée ne « bouge » plus pour le navigateur ; idem
 *   pour le focus clavier qui entre dans une section recouverte.
 */
export default function ScrollStage() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const screens = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > .hero-screen, :scope > .ent-screen")
    );
    if (screens.length < 2) return;

    const desktop = window.matchMedia(DESKTOP);
    const reduce = window.matchMedia(REDUCE);
    let tops: number[] = [];
    let stickTops: number[] = [];
    let frame = 0;

    const measure = () => {
      let top = main.getBoundingClientRect().top + window.scrollY;
      const staticTops = new Map<Element, number>();
      for (const child of Array.from(main.children)) {
        staticTops.set(child, top);
        top += (child as HTMLElement).offsetHeight;
      }
      tops = screens.map((el) => staticTops.get(el) ?? 0);
      stickTops = screens.map((el) => {
        const t = Math.min(NAV_H, window.innerHeight - el.offsetHeight);
        el.style.setProperty("--stick-top", `${t}px`);
        return t;
      });
    };

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;
      // Avancée de chaque feuille : 0 quand son haut touche le bas de
      // l'écran, 1 quand elle se colle.
      const enter = screens.map((_, i) =>
        clamp01((vh - (tops[i] - y)) / Math.max(1, vh - stickTops[i]))
      );
      screens.forEach((el, i) => {
        const e = enter[i];
        el.style.setProperty("--reveal", (i === 0 ? 1 : clamp01((e - 0.15) / 0.8)).toFixed(3));
        el.style.setProperty("--title", (i === 0 ? 1 : clamp01((e - 0.35) / 0.65)).toFixed(3));
        el.style.setProperty("--cover", (enter[i + 1] ?? 0).toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const props = ["--reveal", "--title", "--cover", "--stick-top"];
    let active = false;
    const ro = new ResizeObserver(() => {
      measure();
      update();
    });

    const enable = () => {
      if (active) return;
      active = true;
      main.classList.add("ent-stage");
      if (reduce.matches) main.classList.add("ent-stage-still");
      screens.forEach((el) => {
        el.classList.add("ent-stack");
        ro.observe(el);
      });
      measure();
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };
    const disable = () => {
      if (!active) return;
      active = false;
      main.classList.remove("ent-stage", "ent-stage-still");
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      frame = 0;
      screens.forEach((el) => {
        el.classList.remove("ent-stack");
        props.forEach((p) => el.style.removeProperty(p));
      });
    };
    const sync = () => {
      disable();
      if (desktop.matches) enable();
    };
    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    const onClick = (e: MouseEvent) => {
      if (!active || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link || link.pathname !== window.location.pathname || !link.hash) return;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!target || !target.classList.contains("ent-stack")) return;
      e.preventDefault();
      history.pushState(null, "", link.hash);
      scrollToSection(target);
    };
    document.addEventListener("click", onClick, true);

    // Clavier : le focus qui entre dans une section recouverte (Maj+Tab)
    // y ramène l'écran, sinon l'élément focalisé resterait invisible.
    const onFocus = (e: FocusEvent) => {
      if (!active) return;
      const section = (e.target as Element | null)?.closest?.(".ent-stack") as HTMLElement | null;
      if (section && parseFloat(section.style.getPropertyValue("--cover") || "0") > 0.02) {
        // Après le défilement que le navigateur fait lui-même au focus.
        requestAnimationFrame(() => scrollToSection(section, false));
      }
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      document.removeEventListener("focusin", onFocus);
      disable();
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
