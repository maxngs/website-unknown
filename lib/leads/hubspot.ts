// ============================================================
// HubSpot (CRM gratuit) — création ou mise à jour d'un contact.
// Authentification par jeton d'application privée : HUBSPOT_ACCESS_TOKEN.
//
// Propriétés standard : email, firstname, lastname, phone, company,
// jobtitle, company_size, message, lifecyclestage.
// Propriétés personnalisées (à créer dans HubSpot, groupe « Hiry ») :
// voir HUBSPOT_CUSTOM_PROPERTIES. Si elles n'existent pas encore, HubSpot
// refuse la requête : on renvoie alors les seules propriétés standard
// pour ne pas perdre le contact.
// ============================================================
import type { DemoRequest } from "./schema";
import { segmentFromTaille } from "./options";
import type { LeadLabels } from "./labels";

const API = "https://api.hubapi.com/crm/v3/objects/contacts";

export const HUBSPOT_CUSTOM_PROPERTIES = [
  "hiry_type_demande",
  "hiry_segment",
  "hiry_recrutements_12_mois",
  "hiry_types_postes",
  "hiry_problematique",
  "hiry_autres_problematiques",
  "hiry_outil_actuel",
  "hiry_echeance",
  "hiry_formule_souhaitee",
  "hiry_attribution",
] as const;

type Properties = Record<string, string>;

/** Propriétés HubSpot d'une demande : valeurs internes pour les listes. */
export function toHubspotProperties(
  lead: DemoRequest,
  labels: LeadLabels
): { standard: Properties; custom: Properties } {
  const message = [
    lead.problematiqueAutre && `Précision : ${lead.problematiqueAutre}`,
    lead.message,
  ]
    .filter(Boolean)
    .join("\n\n");

  const standard: Properties = {
    email: lead.email,
    firstname: lead.firstName,
    lastname: lead.lastName,
    company: lead.company,
    jobtitle: labels.fonction[lead.fonction],
    company_size: labels.taille[lead.taille],
    ...(lead.phone ? { phone: lead.phone } : {}),
    ...(message ? { message } : {}),
  };

  const attribution = [
    ...Object.entries(lead.attribution).map(([k, v]) => `${k}=${v}`),
    lead.checklist.length ? `checklist=${lead.checklist.join(",")}` : "",
    `locale=${lead.locale}`,
  ]
    .filter(Boolean)
    .join(" | ");

  const custom: Properties = {
    hiry_type_demande: lead.mode,
    hiry_segment: segmentFromTaille(lead.taille),
    hiry_problematique: lead.problematique,
    hiry_attribution: attribution,
    // Cases à cocher multiples : valeurs séparées par « ; »
    ...(lead.typesPostes.length
      ? { hiry_types_postes: lead.typesPostes.join(";") }
      : {}),
    ...(lead.autresProblematiques.length
      ? { hiry_autres_problematiques: lead.autresProblematiques.join(";") }
      : {}),
    ...(lead.recrutements ? { hiry_recrutements_12_mois: lead.recrutements } : {}),
    ...(lead.outil ? { hiry_outil_actuel: lead.outil } : {}),
    ...(lead.echeance ? { hiry_echeance: lead.echeance } : {}),
    ...(lead.formule ? { hiry_formule_souhaitee: lead.formule } : {}),
  };

  return { standard, custom };
}

async function call(
  token: string,
  url: string,
  method: "POST" | "PATCH",
  properties: Properties
) {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });
}

/** Crée le contact ; s'il existe déjà (409), le met à jour par email. */
async function upsert(token: string, email: string, properties: Properties) {
  const created = await call(token, API, "POST", {
    ...properties,
    lifecyclestage: "lead",
  });
  if (created.status !== 409) return created;
  return call(
    token,
    `${API}/${encodeURIComponent(email)}?idProperty=email`,
    "PATCH",
    properties
  );
}

export async function upsertHubspotContact(
  lead: DemoRequest,
  labels: LeadLabels,
  token = process.env.HUBSPOT_ACCESS_TOKEN
): Promise<"ok" | "partial" | "skipped"> {
  if (!token) return "skipped";

  const { standard, custom } = toHubspotProperties(lead, labels);
  const res = await upsert(token, lead.email, { ...standard, ...custom });
  if (res.ok) return "ok";

  const body = await res.text();
  // Propriétés personnalisées pas encore créées : on garde au moins le contact.
  if (res.status === 400 && body.includes("PROPERTY_DOESNT_EXIST")) {
    const retry = await upsert(token, lead.email, standard);
    if (retry.ok) {
      console.error("HubSpot : propriétés personnalisées manquantes", body);
      return "partial";
    }
    throw new Error(`HubSpot ${retry.status}: ${await retry.text()}`);
  }
  throw new Error(`HubSpot ${res.status}: ${body}`);
}
