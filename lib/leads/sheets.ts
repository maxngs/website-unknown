// Copie de chaque demande de démo dans une Google Sheet dédiée aux leads
// entreprise (distincte de celle des contacts du site), via un webhook
// Apps Script : DEMO_LEADS_SHEET_URL, et DEMO_LEADS_SHEET_SECRET partagé
// avec le script. Le script est dans scripts/demo-leads-sheet.gs.
//
// Une colonne par information, dans l'ordre de toSheetRow : le script
// crée l'en-tête au premier envoi et range ensuite chaque valeur
// sous sa colonne, même si l'équipe en ajoute ou en déplace.
import type { DemoRequest } from "./schema";
import { segmentFromTaille } from "./options";
import type { LeadLabels } from "./labels";

export function toSheetRow(
  lead: DemoRequest,
  labels: LeadLabels
): Record<string, string> {
  const list = (vals: string[], dict: Record<string, string>) =>
    vals.map((v) => dict[v] ?? v).join(", ");
  const a = lead.attribution;

  return {
    Type: lead.mode === "demo" ? "Démo 30 min" : "Vidéo",
    Segment:
      segmentFromTaille(lead.taille) === "grands_comptes" ? "Grands Comptes" : "PME",
    Entreprise: lead.company,
    Prénom: lead.firstName,
    Nom: lead.lastName,
    Email: lead.email,
    Téléphone: lead.phone ?? "",
    Fonction: labels.fonction[lead.fonction],
    Taille: labels.taille[lead.taille],
    "Recrutements / 12 mois": lead.recrutements ? labels.recrutements[lead.recrutements] : "",
    "Types de postes": list(lead.typesPostes, labels.typesPostes),
    Problématique: labels.problematique[lead.problematique],
    Précision: lead.problematiqueAutre ?? "",
    "Autres problématiques": list(lead.autresProblematiques, labels.problematique),
    "Outil actuel": lead.outil ? labels.outil[lead.outil] : "",
    Échéance: lead.echeance ? labels.echeance[lead.echeance] : "",
    Message: lead.message ?? "",
    "Formule cliquée": lead.formule ?? "",
    "Cases cochées": lead.checklist.join(", "),
    Langue: lead.locale,
    Source: a.utm_source ?? "",
    Medium: a.utm_medium ?? "",
    Campagne: a.utm_campaign ?? "",
    Page: a.page ?? "",
    Référent: a.referrer ?? "",
  };
}

export async function appendToSheet(
  lead: DemoRequest,
  labels: LeadLabels,
  env: { url?: string; secret?: string } = {
    url: process.env.DEMO_LEADS_SHEET_URL,
    secret: process.env.DEMO_LEADS_SHEET_SECRET,
  }
): Promise<"ok" | "skipped"> {
  if (!env.url) return "skipped";
  const res = await fetch(env.url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({ secret: env.secret ?? "", row: toSheetRow(lead, labels) }),
  });
  // Apps Script répond 200 même en cas d'erreur : on lit sa réponse.
  const body = await res.text();
  if (!res.ok || !body.includes('"ok":true')) {
    throw new Error(`Google Sheets ${res.status}: ${body.slice(0, 200)}`);
  }
  return "ok";
}
