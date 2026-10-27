"use client";

import { useEffect, useState } from "react";
import { goToDemo } from "./demoStore";

/**
 * Barre « Réserver une démo » collée en bas sur mobile : visible une fois
 * le hero passé, masquée quand le formulaire est à l'écran. Masquée en CSS
 * au-delà de 900px.
 */
export default function StickyDemoBar({ label }: { label: string }) {
  const [heroGone, setHeroGone] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const demo = document.getElementById("demo");
    if (!hero || !demo) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setHeroGone(!e.isIntersecting && e.boundingClientRect.top < 0);
        if (e.target === demo) setFormVisible(e.isIntersecting);
      }
    });
    io.observe(hero);
    io.observe(demo);
    return () => io.disconnect();
  }, []);

  const shown = heroGone && !formVisible;
  return (
    <div className="sticky-demo" data-shown={shown || undefined} aria-hidden={!shown}>
      <a
        href="#demo"
        className="btn btn-ink"
        tabIndex={shown ? 0 : -1}
        onClick={(e) => {
          if (goToDemo()) e.preventDefault();
        }}
      >
        {label}
      </a>
    </div>
  );
}
