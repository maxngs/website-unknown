// ============================================================
// Emails transactionnels via l'API Resend (sans SDK).
// RESEND_API_KEY, LEADS_FROM_EMAIL (domaine vérifié dans Resend),
// LEADS_NOTIFY_TO (destinataires internes, séparés par des virgules).
// ============================================================
import type { DemoRequest } from "./schema";
import { segmentFromTaille } from "./options";
import type { LeadLabels } from "./labels";

type Mail = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail(
  mail: Mail,
  env: { apiKey?: string; from?: string } = {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.LEADS_FROM_EMAIL,
  }
): Promise<"ok" | "skipped"> {
  if (!env.apiKey || !env.from || mail.to.length === 0) return "skipped";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.from,
      to: mail.to,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return "ok";
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

function layout(body: string) {
  return `<!doctype html><html><body style="margin:0;background:#F7F3EC;font-family:Arial,Helvetica,sans-serif;color:#0F0E0C">
<div style="max-width:560px;margin:0 auto;padding:32px 24px">
<div style="font-weight:700;font-size:22px;margin-bottom:24px">hiry<span style="color:#0F4B70">.</span></div>
<div style="background:#fff;border-radius:16px;padding:28px">${body}</div>
<p style="font-size:12px;color:rgba(15,14,12,.5);margin-top:20px">Hiry · Le recrutement zéro friction · hiry.fr</p>
</div></body></html>`;
}

/** Notification interne : récapitulatif lisible, toutes les données. */
export function internalNotification(
  lead: DemoRequest,
  labels: LeadLabels,
  hubspot: string
): Omit<Mail, "to"> {
  const segment =
    segmentFromTaille(lead.taille) === "grands_comptes" ? "Grands Comptes" : "PME";
  const list = (vals: string[], dict: Record<string, string>) =>
    vals.map((v) => dict[v] ?? v).join(", ");

  const rows: [string, string | undefined][] = [
    ["Demande", lead.mode === "demo" ? "Démo de 20 min" : "Vidéo de démo"],
    ["Nom", `${lead.firstName} ${lead.lastName}`],
    ["Email", lead.email],
    ["Téléphone", lead.phone],
    ["Entreprise", lead.company],
    ["Fonction", labels.fonction[lead.fonction]],
    ["Taille", `${labels.taille[lead.taille]} (${segment})`],
    ["Recrutements / 12 mois", lead.recrutements && labels.recrutements[lead.recrutements]],
    ["Types de postes", list(lead.typesPostes, labels.typesPostes) || undefined],
    ["Problématique", labels.problematique[lead.problematique]],
    ["Précision", lead.problematiqueAutre],
    ["Autres problématiques", list(lead.autresProblematiques, labels.problematique) || undefined],
    ["Outil actuel", lead.outil && labels.outil[lead.outil]],
    ["Échéance", lead.echeance && labels.echeance[lead.echeance]],
    ["Formule cliquée", lead.formule],
    ["Cases cochées", lead.checklist.join(", ") || undefined],
    ["Message", lead.message],
    ["Langue", lead.locale],
    ...Object.entries(lead.attribution).map(
      ([k, v]) => [k, v] as [string, string | undefined]
    ),
    ["HubSpot", hubspot],
  ];
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));

  const subject = `[${segment}] ${lead.mode === "demo" ? "Démo" : "Vidéo"} : ${lead.company} (${lead.firstName} ${lead.lastName})`;
  const html = layout(
    `<h1 style="font-size:18px;margin:0 0 16px">${escape(subject)}</h1>
<table style="width:100%;border-collapse:collapse;font-size:14px">${filled
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:rgba(15,14,12,.55);vertical-align:top;white-space:nowrap">${escape(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escape(v)}</td></tr>`
      )
      .join("")}</table>`
  );
  const text = filled.map(([k, v]) => `${k} : ${v}`).join("\n");
  return { subject, html, text, replyTo: lead.email };
}

const CONFIRM = {
  fr: {
    demoSubject: "Votre démo Hiry",
    videoSubject: "Votre vidéo de démo Hiry",
    hello: (n: string) => `Bonjour ${n},`,
    demoBook:
      "Merci pour votre demande. Choisissez le créneau qui vous convient pour votre démo de 20 minutes :",
    demoBookCta: "Choisir mon créneau",
    demoFallback:
      "Merci pour votre demande. Nous vous recontactons sous 24 h ouvrées pour fixer un créneau de 20 minutes.",
    video: "Merci pour votre intérêt. Voici la vidéo de démonstration de Hiry :",
    videoCta: "Voir la vidéo",
    videoFallback:
      "Merci pour votre intérêt. Nous vous envoyons la vidéo de démonstration très vite.",
    videoAlso: "Vous préférez en parler de vive voix ? Répondez simplement à cet email.",
    bye: "À très vite,\nL'équipe Hiry",
  },
  en: {
    demoSubject: "Your Hiry demo",
    videoSubject: "Your Hiry demo video",
    hello: (n: string) => `Hello ${n},`,
    demoBook: "Thank you for your request. Pick the time that suits you for your 20-minute demo:",
    demoBookCta: "Choose my slot",
    demoFallback:
      "Thank you for your request. We'll get back to you within 1 business day to set up a 20-minute slot.",
    video: "Thank you for your interest. Here is the Hiry demo video:",
    videoCta: "Watch the video",
    videoFallback: "Thank you for your interest. We'll send you the demo video very soon.",
    videoAlso: "Prefer to talk it through? Just reply to this email.",
    bye: "Speak soon,\nThe Hiry team",
  },
} as const;

/** Lien de prise de créneau pré-rempli (paramètres lus par HubSpot Meetings et Calendly). */
export function bookingLink(base: string, lead: Pick<DemoRequest, "firstName" | "lastName" | "email">) {
  try {
    const url = new URL(base);
    url.searchParams.set("firstName", lead.firstName);
    url.searchParams.set("lastName", lead.lastName);
    url.searchParams.set("name", `${lead.firstName} ${lead.lastName}`);
    url.searchParams.set("email", lead.email);
    return url.toString();
  } catch {
    return base;
  }
}

/** Confirmation au prospect, dans sa langue. */
export function prospectConfirmation(
  lead: DemoRequest,
  links: { booking?: string; video?: string }
): Omit<Mail, "to"> {
  const c = CONFIRM[lead.locale];
  const button = (href: string, label: string) =>
    `<p style="margin:24px 0"><a href="${escape(href)}" style="display:inline-block;background:#0F0E0C;color:#fff;text-decoration:none;font-weight:700;border-radius:999px;padding:14px 26px">${escape(label)} →</a></p>`;

  let body: string;
  let text: string;
  if (lead.mode === "demo") {
    body = links.booking
      ? `<p>${escape(c.demoBook)}</p>${button(links.booking, c.demoBookCta)}`
      : `<p>${escape(c.demoFallback)}</p>`;
    text = links.booking ? `${c.demoBook}\n${links.booking}` : c.demoFallback;
  } else {
    body = links.video
      ? `<p>${escape(c.video)}</p>${button(links.video, c.videoCta)}<p>${escape(c.videoAlso)}</p>`
      : `<p>${escape(c.videoFallback)}</p>`;
    text = links.video
      ? `${c.video}\n${links.video}\n\n${c.videoAlso}`
      : c.videoFallback;
  }

  const hello = c.hello(lead.firstName);
  return {
    subject: lead.mode === "demo" ? c.demoSubject : c.videoSubject,
    html: layout(
      `<p>${escape(hello)}</p>${body}<p style="white-space:pre-line">${escape(c.bye)}</p>`
    ),
    text: `${hello}\n\n${text}\n\n${c.bye}`,
  };
}
