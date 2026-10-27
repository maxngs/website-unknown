import type { EntreprisesContent } from "./types";
import fr from "./fr";
import en from "./en";

export type { EntreprisesContent } from "./types";

const CONTENT: Record<string, EntreprisesContent> = { fr, en };

/** Contenu de la page Entreprises dans la langue demandée (français par défaut). */
export function getEntreprisesContent(locale: string): EntreprisesContent {
  return CONTENT[locale] ?? fr;
}
