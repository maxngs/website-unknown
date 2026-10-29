"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const NAV_H = 72;
const PINNED = "(min-width: 901px) and (min-height: 640px)";

/**
 * « Comment ça marche » épinglé : sur bureau, la section reste à l'écran
 * pendant que le défilement fait passer les étapes une à une ; l'écran
 * produit à droite change avec l'étape active. La progression est lue
 * en JS (une frame par défilement) et posée en --p (0 → 1) pour la ligne.
 * Sur mobile, rien n'est épinglé : les étapes s'empilent (voir hiry.css).
 */
export default function HowScroller({
  head,
  steps,
  panels,
  stepLabel,
  footnote,
}: {
  head: ReactNode;
  steps: { title: string; text: string; ui: ReactNode }[];
  panels: ReactNode[];
  stepLabel: string;
  footnote: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = steps.length;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const mq = window.matchMedia(PINNED);
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!mq.matches) {
        wrap.style.setProperty("--p", "1");
        return;
      }
      const r = wrap.getBoundingClientRect();
      const travel = r.height - (window.innerHeight - NAV_H);
      const p = Math.min(1, Math.max(0, (NAV_H - r.top) / Math.max(1, travel)));
      wrap.style.setProperty("--p", p.toFixed(3));
      const i = Math.min(n - 1, Math.floor(p * n));
      setActive((prev) => (prev === i ? prev : i));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, [n]);

  /** Clic sur une étape : on défile jusqu'à son segment. */
  function goTo(i: number) {
    const wrap = wrapRef.current;
    if (!wrap || !window.matchMedia(PINNED).matches) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const travel = wrap.offsetHeight - (window.innerHeight - NAV_H);
    window.scrollTo({ top: top - NAV_H + ((i + 0.5) / n) * travel });
  }

  return (
    <div ref={wrapRef} className="how-wrap" style={{ ["--n" as string]: n }}>
      <div className="how-pin">
        <div className="how-grid">
          <div>
            {head}
            <ol className="how-steps">
              {steps.map((s, i) => (
                <li key={s.title} data-active={i === active || undefined} data-done={i < active || undefined}>
                  <h3 className="how-step-h">
                    <button type="button" className="how-step" onClick={() => goTo(i)} aria-current={i === active ? "step" : undefined}>
                      <span aria-hidden className="how-step-num serif">{String(i + 1).padStart(2, "0")}</span>
                      <span>{s.title}</span>
                    </button>
                  </h3>
                  <div className="how-step-body">
                    <div>
                      <p>{s.text}</p>
                      <div className="how-mobile-ui">{s.ui}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div aria-hidden className="how-count">
              {stepLabel} {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </div>
          </div>

          <div aria-hidden className="how-stage">
            {panels.map((panel, i) => (
              <div key={i} className="how-panel" data-active={i === active || undefined}>
                {panel}
              </div>
            ))}
            <div className="how-foot">{footnote}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
