// ============================================================
// Valeurs du formulaire de démo — source unique, en snake_case.
// Les libellés affichés vivent dans content/entreprises/{fr,en}.ts ;
// les valeurs ci-dessous sont celles envoyées à HubSpot (propriétés de
// type « liste déroulante » : les valeurs internes doivent correspondre).
// ============================================================

export const MODES = ["demo", "video"] as const;
export type DemoMode = (typeof MODES)[number];

export const FONCTIONS = [
  "dirigeant",
  "rh",
  "recruteur",
  "manager",
  "autre",
] as const;

export const TAILLES = [
  "1_10",
  "11_49",
  "50_249",
  "250_999",
  "1000_plus",
] as const;
export type Taille = (typeof TAILLES)[number];

export const RECRUTEMENTS = ["1_5", "6_15", "16_50", "50_plus"] as const;

export const TYPES_POSTES = [
  "stage",
  "alternance",
  "premier_emploi",
  "experimente",
] as const;

export const OUTILS = [
  "aucun",
  "jobboards",
  "ats",
  "cabinet",
  "autre",
] as const;

export const ECHEANCES = [
  "ce_mois",
  "1_3_mois",
  "plus_tard",
  "renseigne",
] as const;

/** Problématique principale (dropdown) et « autres problématiques ». */
export const PROBLEMATIQUES = [
  "trop_candidatures",
  "tri_chronophage",
  "cv_insuffisant",
  "erreurs_casting",
  "redaction_offre",
  "visibilite_offre",
  "marque_employeur",
  "site_carrieres",
  "suivi_process",
  "ats_insatisfaisant",
  "campagnes_volume",
  "salons",
  "autre",
] as const;
export type Problematique = (typeof PROBLEMATIQUES)[number];

/** Formule cliquée dans la grille tarifaire (champ caché). */
export const FORMULES_SOUHAITEES = [
  "liberte",
  "saison",
  "horizon",
  "sur_mesure",
] as const;
export type FormuleSouhaitee = (typeof FORMULES_SOUHAITEES)[number];

/** Cases du bloc « Cochez ce qui vous ressemble ». */
export const CHECKLIST = [
  "volume",
  "hors_sujet",
  "cv_similaires",
  "grands_groupes",
] as const;
export type ChecklistKey = (typeof CHECKLIST)[number];

export const CHECKLIST_TO_PROBLEMATIQUE: Record<ChecklistKey, Problematique> = {
  volume: "trop_candidatures",
  hors_sujet: "trop_candidatures",
  cv_similaires: "cv_insuffisant",
  grands_groupes: "marque_employeur",
};

/**
 * Cases cochées (dans l'ordre où elles l'ont été) → pré-remplissage du
 * formulaire : la première devient la problématique principale, les
 * suivantes vont dans « Autres problématiques », sans doublon.
 */
export function prefillFromChecklist(checked: readonly ChecklistKey[]): {
  principale?: Problematique;
  autres: Problematique[];
} {
  const mapped = checked.map((k) => CHECKLIST_TO_PROBLEMATIQUE[k]);
  const unique = [...new Set(mapped)];
  const [principale, ...autres] = unique;
  return { principale, autres };
}

/** 250 salariés et plus : segment Grands Comptes, sinon PME. */
export function segmentFromTaille(taille: Taille): "pme" | "grands_comptes" {
  return taille === "250_999" || taille === "1000_plus"
    ? "grands_comptes"
    : "pme";
}

/** Domaines de messagerie grand public : avertissement non bloquant. */
const FREE_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.fr",
  "hotmail.com",
  "hotmail.fr",
  "outlook.com",
  "outlook.fr",
  "live.com",
  "live.fr",
  "msn.com",
  "orange.fr",
  "wanadoo.fr",
  "free.fr",
  "sfr.fr",
  "neuf.fr",
  "laposte.net",
  "bbox.fr",
  "icloud.com",
  "me.com",
  "aol.com",
  "gmx.fr",
  "gmx.com",
  "protonmail.com",
  "proton.me",
]);

export function isFreeEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split("@")[1];
  return Boolean(domain && FREE_DOMAINS.has(domain));
}
