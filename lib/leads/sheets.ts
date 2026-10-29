// Copie de sauvegarde dans la Google Sheet des leads (même webhook Apps
// Script que /api/lead, même forme de données) : si HubSpot tombe, la
// demande reste consultable.
import type { DemoRequest } from "./schema";
import type { LeadLabels } from "./labels";

export async function appendToSheet(
  lead: DemoRequest,
  labels: LeadLabels,
  url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL
): Promise<"ok" | "skipped"> {
  if (!url) return "skipped";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone ?? "",
      profile: `[Démo ${lead.mode === "demo" ? "30 min" : "vidéo"}] ${lead.company}`,
      message: [
        `Problématique : ${labels.problematique[lead.problematique]}`,
        lead.problematiqueAutre && `Précision : ${lead.problematiqueAutre}`,
        `Taille : ${labels.taille[lead.taille]}`,
        lead.message,
      ]
        .filter(Boolean)
        .join(" · "),
    }),
  });
  if (!res.ok) throw new Error(`Google Sheets ${res.status}`);
  return "ok";
}
