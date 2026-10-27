import { Fragment, type ReactNode } from "react";

/**
 * Rend un texte du contenu (content/entreprises) dont un groupe <em>…</em>
 * passe en Instrument Serif italique. Seule balise reconnue.
 */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/<em>(.*?)<\/em>/);
  return parts.map((part, i) =>
    i % 2 ? (
      <em key={i} className="serif">
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** Même texte, sans balise (attributs, métadonnées, JSON-LD). */
export const plain = (text: string) => text.replace(/<\/?em>/g, "");
