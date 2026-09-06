"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "./Link";
import LocaleSwitch from "./LocaleSwitch";
import type { NavLink } from "./Nav";

/**
 * Menu mobile (< 900px). Les maquettes se contentaient de masquer les liens
 * centraux : sur téléphone, aucune section n'était atteignable depuis la nav.
 * Le bouton reprend les mêmes liens que la nav bureau, plus les quatre
 * publics de la TopBar.
 */
export default function MobileMenu({
  links,
  topbar,
  loginLabel,
  loginHref,
  ctaLabel,
  ctaHref,
  accent,
  closeLabel,
  openLabel,
}: {
  links: NavLink[];
  topbar: NavLink[];
  loginLabel: string;
  loginHref: string;
  ctaLabel: string;
  ctaHref: string;
  accent: string;
  closeLabel: string;
  openLabel: string;
}) {
  const [open, setOpen] = useState(false);
  // Le panneau est monté sur <body> : la nav porte un `backdrop-filter`, qui
  // crée un bloc conteneur et emprisonnerait un `position: fixed` enfant.
  const [monte, setMonte] = useState(false);
  useEffect(() => setMonte(true), []);

  // La nav de certaines pages contient déjà « Le Mag » : on évite le doublon.
  const secondaires = topbar.filter(
    (t) => !links.some((l) => l.href === t.href)
  );

  // Fermeture à l'Échap + blocage du défilement de fond
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-burger"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(true)}
      >
        <span className="nav-burger-bars" aria-hidden>
          <span />
          <span />
        </span>
        {openLabel}
      </button>

      {open &&
        monte &&
        createPortal(
          <div id="menu-mobile" className="nav-sheet" role="dialog" aria-modal="true">
            <button
              type="button"
              className="nav-sheet-close"
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>
                <span />
                <span />
              </span>
            </button>
            <div className="nav-sheet-inner">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-.02em" }}
              >
                {l.label}
              </Link>
            ))}

            <div className="nav-sheet-rule" />

            {secondaires.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 16, color: "rgba(15,14,12,.62)" }}
              >
                {l.label}
              </Link>
            ))}

            <div className="nav-sheet-rule" />

            <Link
              href={loginHref}
              onClick={() => setOpen(false)}
              style={{ fontSize: 16, fontWeight: 600 }}
            >
              {loginLabel}
            </Link>
            <div className="nav-sheet-rule" />
            <LocaleSwitch />

            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="btn"
              style={{
                background: "var(--color-ink)",
                color: "#fff",
                fontSize: 15,
                padding: "15px 26px",
                textAlign: "center",
                marginTop: 6,
                borderBottom: `3px solid ${accent}`,
              }}
            >
              {ctaLabel}
            </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
