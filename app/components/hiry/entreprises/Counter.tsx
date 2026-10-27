"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé à l'entrée dans l'écran. Le rendu serveur affiche la
 * valeur finale (lisible sans JS, indexable) ; l'animation part de 0.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  locale,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  locale: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1200, 1);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setShown(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const fmt = new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR").format;
  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {/* valeur finale pour les lecteurs d'écran, sans compter à voix haute */}
      <span className="sr-only">{`${prefix}${fmt(value)}${suffix}`}</span>
      <span aria-hidden>{`${prefix}${fmt(shown)}${suffix}`}</span>
    </span>
  );
}
