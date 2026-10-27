// ============================================================
// Schéma du formulaire de démo — partagé client / serveur.
// Les messages d'erreur sont des CODES : le formulaire les traduit
// (content/entreprises/*.ts → form.errors), le serveur les renvoie tels quels.
// ============================================================
import { z } from "zod";
import {
  CHECKLIST,
  ECHEANCES,
  FONCTIONS,
  FORMULES_SOUHAITEES,
  MODES,
  OUTILS,
  PROBLEMATIQUES,
  RECRUTEMENTS,
  TAILLES,
  TYPES_POSTES,
} from "./options";

export const ERROR_CODES = [
  "required",
  "email",
  "phone",
  "too_long",
  "consent",
] as const;
export type ErrorCode = (typeof ERROR_CODES)[number];

export const MESSAGE_MAX = 500;

/** Numéro français, indicatif +33 / 0033 facultatif, séparateurs libres. */
const PHONE_FR = /^(?:(?:\+|00)33[\s.-]?(?:\(0\)[\s.-]?)?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

const required = (max: number) =>
  z
    .string({ error: "required" })
    .trim()
    .min(1, { error: "required" })
    .max(max, { error: "too_long" });

const optionalText = (max: number) =>
  z.string().trim().max(max, { error: "too_long" }).optional();

const attributionSchema = z
  .object({
    utm_source: z.string().max(200),
    utm_medium: z.string().max(200),
    utm_campaign: z.string().max(200),
    utm_term: z.string().max(200),
    utm_content: z.string().max(200),
    page: z.string().max(500),
    referrer: z.string().max(500),
  })
  .partial();
export type Attribution = z.infer<typeof attributionSchema>;

export const demoRequestSchema = z
  .object({
    mode: z.enum(MODES),
    firstName: required(80),
    lastName: required(80),
    email: z
      .string({ error: "required" })
      .trim()
      .min(1, { error: "required" })
      .pipe(z.email({ error: "email" }).max(160, { error: "too_long" })),
    phone: z
      .string()
      .trim()
      .optional()
      .refine((v) => !v || PHONE_FR.test(v), { error: "phone" }),
    company: required(120),
    fonction: z.enum(FONCTIONS, { error: "required" }),
    taille: z.enum(TAILLES, { error: "required" }),
    recrutements: z.enum(RECRUTEMENTS).optional(),
    typesPostes: z.array(z.enum(TYPES_POSTES)).default([]),
    problematique: z.enum(PROBLEMATIQUES, { error: "required" }),
    problematiqueAutre: optionalText(200),
    autresProblematiques: z.array(z.enum(PROBLEMATIQUES)).default([]),
    outil: z.enum(OUTILS).optional(),
    echeance: z.enum(ECHEANCES).optional(),
    message: optionalText(MESSAGE_MAX),
    consent: z.literal(true, { error: "consent" }),

    // Champs cachés, capturés automatiquement
    formule: z.enum(FORMULES_SOUHAITEES).optional(),
    checklist: z.array(z.enum(CHECKLIST)).default([]),
    attribution: attributionSchema.default({}),
    locale: z.enum(["fr", "en"]).default("fr"),
    /** event_id partagé avec le pixel Meta (déduplication) */
    eventId: z.string().max(80).optional(),
  })
  // `when` : ces règles tournent même si d'autres champs sont invalides,
  // pour que toutes les erreurs s'affichent dès le premier envoi.
  .refine((d) => d.mode !== "demo" || Boolean(d.recrutements), {
    path: ["recrutements"],
    message: "required",
    when: () => true,
  })
  .refine((d) => d.problematique !== "autre" || Boolean(d.problematiqueAutre), {
    path: ["problematiqueAutre"],
    message: "required",
    when: () => true,
  })
  .transform((d) => ({
    ...d,
    // Les champs (D) ne sont pas envoyés en mode vidéo, même s'ils ont été
    // remplis avant de basculer.
    ...(d.mode === "video"
      ? { recrutements: undefined, outil: undefined, echeance: undefined }
      : {}),
    phone: d.mode === "video" ? undefined : d.phone || undefined,
    problematiqueAutre:
      d.problematique === "autre" ? d.problematiqueAutre : undefined,
    autresProblematiques: [...new Set(d.autresProblematiques)].filter(
      (p) => p !== d.problematique
    ),
  }));

export type DemoRequestInput = z.input<typeof demoRequestSchema>;
export type DemoRequest = z.output<typeof demoRequestSchema>;

/** Erreurs par champ (premier code rencontré), pour l'affichage inline. */
export type FieldErrors = Partial<Record<string, ErrorCode>>;

export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (out[key]) continue;
    const code = (ERROR_CODES as readonly string[]).includes(issue.message)
      ? (issue.message as ErrorCode)
      : "required";
    out[key] = code;
  }
  return out;
}
