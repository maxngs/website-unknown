// ============================================================
// Typographie française appliquée à tout un fichier de contenu :
// espace insécable avant « ? ! : ; % » et à l'intérieur des guillemets,
// entre un nombre et son unité, et dans les milliers (3 000).
// Le contenu s'écrit donc avec des espaces ordinaires.
// ============================================================

const NBSP = " ";

export function frenchTypo(text: string): string {
  return text
    .replace(/ ([?!:;%»])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/(\d) (?=\d{3}\b)/g, `$1${NBSP}`)
    .replace(
      /(\d) (?=€|(?:h|min|minutes|j|ans?|jours?|mois|salariés)\b)/g,
      `$1${NBSP}`
    );
}

/** Applique `frenchTypo` à toutes les chaînes d'un objet, en profondeur. */
export function withFrenchTypo<T>(value: T): T {
  if (typeof value === "string") return frenchTypo(value) as T;
  if (Array.isArray(value)) return value.map(withFrenchTypo) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [
        k,
        // Les liens ne sont jamais réécrits.
        k === "href" || k === "slugs" ? v : withFrenchTypo(v),
      ])
    ) as T;
  }
  return value;
}
