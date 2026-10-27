"use client";

import { useEffect, useRef, useState } from "react";
import type { EntreprisesContent } from "@/content/entreprises";

type Props = { c: EntreprisesContent["hiron"]; illustrative: string };

const TYPE_MS = 32;
const STEP_MS = 1100;

/**
 * Hiron montré en action : un besoin tapé, trois étapes, un résultat.
 * Démarre quand le bloc entre à l'écran. Tout le texte est dans le DOM
 * dès le rendu serveur ; seule sa révélation est animée. Avec
 * prefers-reduced-motion, l'état final s'affiche directement.
 */
export default function HironLive({ c, illustrative }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // typed : caractères tapés ; phase : 0 = saisie, 1..n = étapes, n+1 = résultat
  const [typed, setTyped] = useState(c.input.length);
  const [phase, setPhase] = useState(c.steps.length + 1);
  const [run, setRun] = useState(0);
  const done = phase > c.steps.length;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun((r) => r + 1);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (run === 0) return;
    setTyped(0);
    setPhase(0);
    const timers: number[] = [];
    for (let i = 1; i <= c.input.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), i * TYPE_MS));
    }
    const start = c.input.length * TYPE_MS + 400;
    for (let p = 1; p <= c.steps.length + 1; p++) {
      timers.push(window.setTimeout(() => setPhase(p), start + (p - 1) * STEP_MS));
    }
    return () => timers.forEach(clearTimeout);
  }, [run, c.input.length, c.steps.length]);

  return (
    <div ref={ref} style={{ background: "#fff", borderRadius: 22, padding: "clamp(22px,3vw,34px)", boxShadow: "0 8px 24px rgba(15,14,12,.05)" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", color: "rgba(15,14,12,.6)", marginBottom: 10 }}>
        {c.inputLabel.toUpperCase()}
      </div>
      <div style={{ background: "var(--color-bg)", borderRadius: 14, padding: "14px 16px", fontSize: 16, fontWeight: 600, minHeight: 52 }}>
        <span className="sr-only">{c.input}</span>
        <span aria-hidden>
          {c.input.slice(0, typed)}
          {typed < c.input.length && <span className="caret" />}
        </span>
      </div>

      <ol style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 12 }}>
        {c.steps.map((step, i) => {
          const state = phase > i + 1 ? "done" : phase === i + 1 ? "active" : "todo";
          return (
            <li key={step} className="seq-step" data-state={state}>
              <span aria-hidden className="seq-dot">{state === "done" ? "✓" : ""}</span>
              {state === "done" ? step.replace(/…$/, "") : step}
            </li>
          );
        })}
      </ol>

      <div className="seq-result" data-on={done || undefined}>
        <span aria-hidden style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--color-green)" }} />
        {c.result}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, gap: 12 }}>
        <span style={{ fontSize: 11.5, color: "rgba(15,14,12,.6)" }}>{illustrative}</span>
        {done && run > 0 && (
          <button type="button" onClick={() => setRun((r) => r + 1)} className="link-btn">
            {c.replay}
          </button>
        )}
      </div>
    </div>
  );
}
