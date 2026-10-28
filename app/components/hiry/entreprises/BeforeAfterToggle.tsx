"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { EntreprisesContent } from "@/content/entreprises";

type Mode = "sans" | "avec";

/**
 * Comparatif interactif : un vrai <table> (critère, sans Hiry, avec Hiry)
 * dont une seule colonne de valeurs est affichée à la fois. La section
 * bascule seule vers « Avec Hiry » quand elle arrive à l'écran, puis le
 * visiteur compare à volonté.
 */
export default function BeforeAfterToggle({
  c,
  head,
}: {
  c: EntreprisesContent["beforeAfter"];
  head: ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("sans");
  const touched = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => !touched.current && setMode("avec"), 1400);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const choose = (m: Mode) => {
    touched.current = true;
    setMode(m);
  };

  return (
    <div ref={ref} data-r="g" className="ba-grid" data-mode={mode}>
      <div>
        {head}
        <div role="group" aria-label={c.toggleLabel} className="ba-switch">
          <span aria-hidden className="ba-knob" />
          {(["sans", "avec"] as const).map((m) => (
            <button key={m} type="button" aria-pressed={mode === m} onClick={() => choose(m)}>
              {m === "sans" ? c.colWithout : c.colWith}
            </button>
          ))}
        </div>
      </div>

      <div className="ba-panel">
        <table className="ba-table2">
          <caption className="sr-only">{c.caption}</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">{c.colCriterion}</th>
              <th scope="col" className="ba-sans">{c.colWithout}</th>
              <th scope="col" className="ba-avec">{c.colWith}</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r.criterion}>
                <th scope="row">{r.criterion}</th>
                <td className="ba-sans">{r.without}</td>
                <td className="ba-avec">{r.with}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
