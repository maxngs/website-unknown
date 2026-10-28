"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";

const STEP_MS = 7000;

const REDUCE = "(prefers-reduced-motion: reduce)";
/** prefers-reduced-motion, lu sans setState dans un effet (vrai côté serveur). */
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(REDUCE);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(REDUCE).matches,
    () => true
  );
}

/**
 * Sélecteur de modules : liste verticale numérotée (onglets WAI-ARIA,
 * orientation verticale) et panneau à droite. Défilement automatique tant
 * que la section est à l'écran, avec barre de progression ; il s'arrête au
 * premier clic, se met en pause au survol ou au focus, et ne démarre pas
 * avec prefers-reduced-motion. Tous les panneaux restent dans le HTML.
 */
export default function ModuleTabs({
  label,
  pauseLabel,
  playLabel,
  head,
  tabs,
}: {
  label: string;
  pauseLabel: string;
  playLabel: string;
  head: ReactNode;
  tabs: { key: string; tab: string; caption: string; panel: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  // null : le visiteur n'a pas encore choisi ; le défilement suit alors
  // sa préférence d'animation.
  const [userAuto, setUserAuto] = useState<boolean | null>(null);
  const reduced = useReducedMotion();
  const auto = userAuto ?? !reduced;
  const [hold, setHold] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && inView && !hold;

  function select(i: number, focus = false) {
    setActive(i);
    setUserAuto(false);
    if (focus) refs.current[i]?.focus();
  }

  function onKey(e: KeyboardEvent) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  }

  return (
    <div
      ref={rootRef}
      className="mod-grid"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocusCapture={() => setHold(true)}
      onBlurCapture={() => setHold(false)}
    >
      <div>
        {head}
        <div role="tablist" aria-label={label} aria-orientation="vertical" className="mod-list" onKeyDown={onKey}>
          {tabs.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.key}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${t.key}`}
                aria-selected={on}
                aria-controls={`panel-${t.key}`}
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
                className="mod-item"
              >
                <span aria-hidden className="mod-bar">
                  {on && (
                    <span
                      key={`${active}-${auto}`}
                      className="mod-bar-fill"
                      data-running={running || undefined}
                      data-static={!auto || undefined}
                      style={{ animationDuration: `${STEP_MS}ms` }}
                      onAnimationEnd={() => setActive((a) => (a + 1) % tabs.length)}
                    />
                  )}
                </span>
                <span aria-hidden className="mod-num serif">{String(i + 1).padStart(2, "0")}</span>
                <span className="mod-text">
                  <span className="mod-name">{t.tab}</span>
                  <span className="mod-caption">{t.caption}</span>
                </span>
              </button>
            );
          })}
        </div>
        <button type="button" className="link-btn mod-toggle" onClick={() => setUserAuto(!auto)}>
          {auto ? `❚❚ ${pauseLabel}` : `▶ ${playLabel}`}
        </button>
      </div>

      <div className="mod-stage">
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
    </div>
  );
}
