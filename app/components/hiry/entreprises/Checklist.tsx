"use client";

import { useState } from "react";
import { CHECKLIST, prefillFromChecklist, type ChecklistKey } from "@/lib/leads/options";
import type { EntreprisesContent } from "@/content/entreprises";
import { goToDemo, setDemoPrefill } from "./demoStore";

/**
 * « Cochez ce qui vous ressemble ». Chaque case cochée met à jour le
 * pré-remplissage du formulaire (la première coche = problématique
 * principale) ; le message et le CTA apparaissent dès la première.
 */
export default function Checklist({ c }: { c: EntreprisesContent["constat"]["checklist"] }) {
  // Ordre de coche conservé : il décide de la problématique principale.
  const [checked, setChecked] = useState<ChecklistKey[]>([]);

  function toggle(key: ChecklistKey) {
    const next = checked.includes(key) ? checked.filter((k) => k !== key) : [...checked, key];
    setChecked(next);
    const { principale, autres } = prefillFromChecklist(next);
    setDemoPrefill({ checklist: next, problematique: principale, autres });
  }

  return (
    <div style={{ background: "#fff", borderRadius: 22, padding: "clamp(24px,3vw,36px)", boxShadow: "0 8px 24px rgba(15,14,12,.05)" }}>
      <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
        <legend style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-.02em", marginBottom: 6, padding: 0 }}>
          {c.title}
        </legend>
        <p style={{ fontSize: 13.5, color: "rgba(15,14,12,.62)", margin: "0 0 18px" }}>{c.hint}</p>
        <div style={{ display: "grid", gap: 10 }}>
          {CHECKLIST.map((key) => {
            const on = checked.includes(key);
            return (
              <label key={key} className="check-row" data-on={on || undefined}>
                <input type="checkbox" checked={on} onChange={() => toggle(key)} />
                <span aria-hidden className="check-box">{on ? "✓" : ""}</span>
                <span>{c.items[key]}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite">
        {checked.length > 0 && (
          <div className="rv-pop" style={{ marginTop: 22, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
            <strong style={{ fontSize: 17 }}>{c.success}</strong>
            <a
              href="#demo"
              className="btn btn-ink"
              style={{ fontSize: 14.5, padding: "13px 24px" }}
              onClick={(e) => {
                if (goToDemo()) e.preventDefault();
              }}
            >
              {c.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
