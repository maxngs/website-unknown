// ============================================================
// Grille tarifaire — source unique (page Entreprises, FAQ, JSON-LD).
//
// ⚠️ Ces montants DOIVENT rester ceux de l'app Hiry (page de paiement
// Stripe) et ceux des CGV (content/legal/cgv.fr.ts). Un écart ici n'est pas
// un détail d'affichage : c'est un prix annoncé qui n'est pas celui prélevé.
//
// Prix HT. Les trois formules donnent exactement la même chose : seul
// l'engagement change (aucun, 3 mois, 12 mois). Saison et Horizon se paient
// chaque mois ou en une fois. Grille de lancement, appelée à évoluer vers
// des paliers (effectif, offres actives).
// ============================================================

export const FORMULES = {
  liberte: { mois: 119 },
  saison: { mois: 89, uneFois: 267 }, // uneFois = 3 mois
  horizon: { mois: 75, uneFois: 890 }, // uneFois = 1 an
} as const;

export type FormuleKey = keyof typeof FORMULES;

/** Montant réglé en une fois, quand la formule le propose. */
export function prixUneFois(key: FormuleKey): number | undefined {
  const f = FORMULES[key];
  return "uneFois" in f ? f.uneFois : undefined;
}
