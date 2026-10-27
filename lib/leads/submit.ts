// ============================================================
// Traitement d'une demande de démo : anti-spam, validation, puis envoi
// en parallèle vers HubSpot, la Google Sheet, l'équipe, le prospect et
// Meta CAPI, chacun avec sa propre gestion d'erreur.
//
// Les dépendances sont injectables pour les tests (lib/leads/*.test.ts).
// ============================================================
import { sendMetaEvent } from "@/lib/meta-capi";
import { demoRequestSchema, toFieldErrors, type DemoRequest, type FieldErrors } from "./schema";
import { isRateLimited } from "./rateLimit";
import { upsertHubspotContact } from "./hubspot";
import { appendToSheet } from "./sheets";
import { bookingLink, internalNotification, prospectConfirmation, sendMail } from "./email";
import { LEAD_LABELS_FR } from "./labels";

/** En dessous, le formulaire a été rempli par un robot. */
export const MIN_FILL_MS = 3000;

export type DemoResult =
  | { ok: true; bookingUrl?: string }
  | { ok: false; error: "invalid"; fieldErrors: FieldErrors }
  | { ok: false; error: "rate_limited" | "server" };

export type RequestContext = {
  ip?: string;
  userAgent?: string;
  sourceUrl?: string;
  fbc?: string;
  fbp?: string;
  /** Cookie de consentement « accepted » (bandeau cookies du site). */
  marketingConsent: boolean;
  now?: number;
};

export type SubmitMeta = {
  /** Champ piège, invisible pour un humain. */
  honeypot?: string;
  /** Horodatage (ms) de l'affichage du formulaire. */
  startedAt?: number;
};

type Outcome = "ok" | "partial" | "skipped";

export type LeadDeps = {
  hubspot: (lead: DemoRequest) => Promise<Outcome>;
  sheet: (lead: DemoRequest) => Promise<Outcome>;
  notifyTeam: (lead: DemoRequest, hubspot: string) => Promise<Outcome>;
  confirmProspect: (lead: DemoRequest, booking?: string) => Promise<Outcome>;
  trackLead: (lead: DemoRequest, ctx: RequestContext) => Promise<unknown>;
  env: { bookingUrl?: string };
};

const recipients = () =>
  (process.env.LEADS_NOTIFY_TO ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const defaultDeps: LeadDeps = {
  hubspot: (lead) => upsertHubspotContact(lead, LEAD_LABELS_FR),
  sheet: (lead) => appendToSheet(lead, LEAD_LABELS_FR),
  notifyTeam: (lead, hubspot) =>
    sendMail({ to: recipients(), ...internalNotification(lead, LEAD_LABELS_FR, hubspot) }),
  confirmProspect: (lead, booking) =>
    sendMail({
      to: [lead.email],
      ...prospectConfirmation(lead, {
        booking,
        video: process.env.DEMO_VIDEO_URL || undefined,
      }),
    }),
  trackLead: (lead, ctx) =>
    sendMetaEvent({
      eventName: "Lead",
      eventId: lead.eventId,
      sourceUrl: ctx.sourceUrl,
      userData: {
        email: lead.email,
        phone: lead.phone,
        firstName: lead.firstName,
        lastName: lead.lastName,
        fbc: ctx.fbc,
        fbp: ctx.fbp,
      },
      customData: {
        lead_type: "Entreprise",
        content_name: lead.mode === "demo" ? "demo_request" : "demo_video",
        content_category: "Entreprise",
        source: "demo_form",
      },
      clientIp: ctx.ip,
      clientUserAgent: ctx.userAgent,
    }),
  env: { bookingUrl: process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || undefined },
};

export async function processDemoRequest(
  input: unknown,
  meta: SubmitMeta,
  ctx: RequestContext,
  deps: LeadDeps = defaultDeps
): Promise<DemoResult> {
  const now = ctx.now ?? Date.now();

  // Robots : on répond « succès » sans rien envoyer, pour ne pas les renseigner.
  if (meta.honeypot) return { ok: true };
  if (!meta.startedAt || now - meta.startedAt < MIN_FILL_MS) return { ok: true };

  if (isRateLimited(ctx.ip ?? "unknown", now)) {
    return { ok: false, error: "rate_limited" };
  }

  const parsed = demoRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "invalid", fieldErrors: toFieldErrors(parsed.error) };
  }
  const lead = parsed.data;

  const booking =
    lead.mode === "demo" && deps.env.bookingUrl
      ? bookingLink(deps.env.bookingUrl, lead)
      : undefined;

  // HubSpot d'abord en parallèle des autres envois ; la notification
  // interne attend son issue pour la signaler, et part quoi qu'il arrive.
  const hubspotP = deps.hubspot(lead);
  const hubspotLabel = hubspotP.then(
    (r) => (r === "ok" ? "contact à jour" : r === "partial" ? "contact créé, propriétés Hiry manquantes" : "non configuré"),
    () => "ÉCHEC : créer le contact à la main"
  );

  const [hubspot, sheet, team, prospect, track] = await Promise.allSettled([
    hubspotP,
    deps.sheet(lead),
    hubspotLabel.then((label) => deps.notifyTeam(lead, label)),
    deps.confirmProspect(lead, booking),
    ctx.marketingConsent ? deps.trackLead(lead, ctx) : Promise.resolve("skipped"),
  ]);

  const failures = { hubspot, sheet, team, prospect, track };
  for (const [name, r] of Object.entries(failures)) {
    if (r.status === "rejected") {
      console.error(`Demande de démo (${lead.email}) : échec ${name}`, r.reason);
    }
  }

  // La demande est sauve si au moins un canal interne l'a reçue, ou si
  // aucun n'est configuré (développement local : rien n'est perdu, on logue).
  const internal = [hubspot, sheet, team];
  const delivered = internal.some((r) => r.status === "fulfilled" && r.value !== "skipped");
  const configured = internal.some((r) => r.status === "rejected" || r.value !== "skipped");
  if (!configured) console.warn("Demande de démo : aucun canal configuré", lead);
  if (configured && !delivered) return { ok: false, error: "server" };

  return { ok: true, bookingUrl: booking };
}
