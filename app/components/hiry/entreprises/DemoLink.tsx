"use client";

import type { CSSProperties, ReactNode } from "react";
import { goToDemo, type DemoPrefill } from "./demoStore";

/**
 * Lien vers le formulaire de démo de la page. Sans JS, l'ancre #demo suffit ;
 * avec JS, il pré-remplit le formulaire (mode, problématique, formule).
 */
export default function DemoLink({
  prefill,
  className = "btn btn-ink",
  style,
  children,
}: {
  prefill?: DemoPrefill;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a
      href="#demo"
      className={className}
      style={style}
      onClick={(e) => {
        if (goToDemo(prefill)) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}
