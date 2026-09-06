"use client";

import { useEffect, useRef, useState } from "react";

/** Bouton « Copier le texte » du boilerplate (navigator.clipboard). */
export default function CopyBoiler({
  text,
  label,
  copiedLabel,
}: {
  text: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text).catch(() => {});
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2000);
      }}
      className="btn"
      style={{
        border: "1.5px solid var(--color-ink)",
        background: "transparent",
        fontFamily: "inherit",
        fontSize: 14,
        padding: "12px 24px",
        cursor: "pointer",
      }}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
