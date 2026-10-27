"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Onglets accessibles (motif WAI-ARIA « tabs », activation automatique).
 * Tous les panneaux sont rendus : les inactifs portent `hidden`, leur
 * contenu reste dans le HTML servi (indexable).
 */
export default function ModuleTabs({
  label,
  tabs,
}: {
  label: string;
  tabs: { key: string; tab: string; panel: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className="mod-tabs" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${t.key}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.key}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="mod-tab"
          >
            {t.tab}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`panel-${t.key}`}
          aria-labelledby={`tab-${t.key}`}
          hidden={i !== active}
          tabIndex={0}
          className="mod-panel"
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}
