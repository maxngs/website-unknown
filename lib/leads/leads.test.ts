import { beforeEach, describe, expect, it, vi } from "vitest";
import { demoRequestSchema, toFieldErrors } from "./schema";
import { isFreeEmail, prefillFromChecklist, segmentFromTaille } from "./options";
import { MIN_FILL_MS, processDemoRequest, type LeadDeps, type RequestContext } from "./submit";
import { resetRateLimit } from "./rateLimit";
import { toHubspotProperties } from "./hubspot";
import { LEAD_LABELS_FR } from "./labels";
import { bookingLink, prospectConfirmation } from "./email";
import { toSheetRow } from "./sheets";
import { frenchTypo } from "@/content/entreprises/typo";

const valid = {
  mode: "demo",
  firstName: "Camille",
  lastName: "Durand",
  email: "camille@atelier-nova.fr",
  phone: "06 12 34 56 78",
  company: "Atelier Nova",
  fonction: "dirigeant",
  taille: "11_49",
  recrutements: "6_15",
  typesPostes: ["alternance", "experimente"],
  problematique: "tri_chronophage",
  autresProblematiques: ["tri_chronophage", "marque_employeur"],
  consent: true,
  checklist: ["volume"],
  attribution: { utm_source: "linkedin" },
};

describe("schéma de la demande de démo", () => {
  it("accepte une demande complète et retire la principale des autres problématiques", () => {
    const r = demoRequestSchema.parse(valid);
    expect(r.autresProblematiques).toEqual(["marque_employeur"]);
    expect(r.locale).toBe("fr");
  });

  it("exige les champs requis avec des codes d'erreur", () => {
    const r = demoRequestSchema.safeParse({ mode: "demo", consent: false });
    expect(r.success).toBe(false);
    const errors = toFieldErrors(r.error!);
    expect(errors.firstName).toBe("required");
    expect(errors.email).toBe("required");
    expect(errors.fonction).toBe("required");
    expect(errors.problematique).toBe("required");
    expect(errors.consent).toBe("consent");
  });

  it("valide le format de l'email et du téléphone", () => {
    const r = demoRequestSchema.safeParse({ ...valid, email: "pas-un-email", phone: "12" });
    const errors = toFieldErrors(r.error!);
    expect(errors.email).toBe("email");
    expect(errors.phone).toBe("phone");
    for (const phone of ["+33 6 12 34 56 78", "0033612345678", "01.23.45.67.89"]) {
      expect(demoRequestSchema.safeParse({ ...valid, phone }).success).toBe(true);
    }
  });

  it("exige « Précisez » quand la problématique est « Autre »", () => {
    const r = demoRequestSchema.safeParse({ ...valid, problematique: "autre" });
    expect(toFieldErrors(r.error!).problematiqueAutre).toBe("required");
    const ok = demoRequestSchema.parse({ ...valid, problematique: "autre", problematiqueAutre: "Intérim" });
    expect(ok.problematiqueAutre).toBe("Intérim");
  });

  it("en mode démo, exige les recrutements prévus ; en mode vidéo, ignore les champs (D)", () => {
    const demo = demoRequestSchema.safeParse({ ...valid, recrutements: undefined });
    expect(toFieldErrors(demo.error!).recrutements).toBe("required");

    const video = demoRequestSchema.parse({
      ...valid,
      mode: "video",
      recrutements: undefined,
      outil: "ats",
      echeance: "ce_mois",
    });
    expect(video.phone).toBeUndefined();
    expect(video.outil).toBeUndefined();
    expect(video.echeance).toBeUndefined();
  });

  it("limite le message à 500 caractères", () => {
    const r = demoRequestSchema.safeParse({ ...valid, message: "a".repeat(501) });
    expect(toFieldErrors(r.error!).message).toBe("too_long");
  });
});

describe("bloc « Cochez ce qui vous ressemble »", () => {
  it("la première case devient la problématique principale, les suivantes vont dans les autres", () => {
    expect(prefillFromChecklist(["cv_similaires", "grands_groupes"])).toEqual({
      principale: "cv_insuffisant",
      autres: ["marque_employeur"],
    });
  });

  it("dédoublonne les cases qui mènent à la même problématique", () => {
    expect(prefillFromChecklist(["volume", "hors_sujet", "grands_groupes"])).toEqual({
      principale: "trop_candidatures",
      autres: ["marque_employeur"],
    });
  });

  it("ne pré-remplit rien sans case cochée", () => {
    expect(prefillFromChecklist([])).toEqual({ principale: undefined, autres: [] });
  });
});

describe("règles métier", () => {
  it("segmente à partir de 250 salariés", () => {
    expect(segmentFromTaille("50_249")).toBe("pme");
    expect(segmentFromTaille("250_999")).toBe("grands_comptes");
    expect(segmentFromTaille("1000_plus")).toBe("grands_comptes");
  });

  it("repère les messageries grand public", () => {
    expect(isFreeEmail("a@gmail.com")).toBe(true);
    expect(isFreeEmail("a@Orange.fr")).toBe(true);
    expect(isFreeEmail("a@atelier-nova.fr")).toBe(false);
  });

  it("produit les propriétés HubSpot avec les valeurs internes", () => {
    const lead = demoRequestSchema.parse(valid);
    const { standard, custom } = toHubspotProperties(lead, LEAD_LABELS_FR);
    expect(standard.jobtitle).toBe("Dirigeant·e / fondateur·rice");
    expect(custom.hiry_segment).toBe("pme");
    expect(custom.hiry_types_postes).toBe("alternance;experimente");
    expect(custom.hiry_attribution).toContain("utm_source=linkedin");
  });

  it("produit une ligne de Sheet lisible, une colonne par information", () => {
    const row = toSheetRow(demoRequestSchema.parse(valid), LEAD_LABELS_FR);
    expect(row.Type).toBe("Démo 30 min");
    expect(row.Segment).toBe("PME");
    expect(row.Entreprise).toBe("Atelier Nova");
    expect(row["Autres problématiques"]).not.toContain(row.Problématique);
    expect(row.Source).toBe("linkedin");
    expect(Object.values(row).every((v) => typeof v === "string")).toBe(true);
  });

  it("pré-remplit le lien de réservation", () => {
    const url = bookingLink("https://meetings.hubspot.com/hiry/demo", {
      firstName: "Camille",
      lastName: "Durand",
      email: "camille@atelier-nova.fr",
    });
    expect(url).toContain("email=camille%40atelier-nova.fr");
    expect(url).toContain("firstName=Camille");
  });

  it("adapte l'email de confirmation au mode et à la langue", () => {
    const demo = prospectConfirmation(demoRequestSchema.parse(valid), {});
    expect(demo.text).toContain("24 h ouvrées");
    const video = prospectConfirmation(
      demoRequestSchema.parse({ ...valid, mode: "video", locale: "en" }),
      { video: "https://example.com/v" }
    );
    expect(video.subject).toBe("Your Hiry demo video");
    expect(video.text).toContain("https://example.com/v");
  });

  it("applique la typographie française", () => {
    expect(frenchTypo("Prêt ? 70 % : oui !")).toBe("Prêt ? 70 % : oui !");
    expect(frenchTypo("plus de 3 000 candidats")).toBe("plus de 3 000 candidats");
    expect(frenchTypo("https://hiry.fr")).toBe("https://hiry.fr");
  });
});

describe("processDemoRequest", () => {
  const ctx: RequestContext = { ip: "1.2.3.4", marketingConsent: true, now: 100_000 };
  const meta = { startedAt: 100_000 - MIN_FILL_MS - 1 };

  function deps(overrides: Partial<LeadDeps> = {}): LeadDeps {
    return {
      hubspot: vi.fn().mockResolvedValue("ok"),
      sheet: vi.fn().mockResolvedValue("ok"),
      notifyTeam: vi.fn().mockResolvedValue("ok"),
      confirmProspect: vi.fn().mockResolvedValue("ok"),
      trackLead: vi.fn().mockResolvedValue(true),
      env: { bookingUrl: "https://cal.example.com/hiry" },
      ...overrides,
    };
  }

  beforeEach(() => {
    resetRateLimit();
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("envoie partout et renvoie le lien de réservation en mode démo", async () => {
    const d = deps();
    const r = await processDemoRequest(valid, meta, ctx, d);
    expect(r).toEqual({ ok: true, bookingUrl: expect.stringContaining("cal.example.com") });
    expect(d.hubspot).toHaveBeenCalledOnce();
    expect(d.sheet).toHaveBeenCalledOnce();
    expect(d.notifyTeam).toHaveBeenCalledWith(expect.anything(), "contact à jour");
    expect(d.confirmProspect).toHaveBeenCalledOnce();
    expect(d.trackLead).toHaveBeenCalledOnce();
  });

  it("n'envoie pas l'événement Meta sans consentement", async () => {
    const d = deps();
    await processDemoRequest(valid, meta, { ...ctx, marketingConsent: false }, d);
    expect(d.trackLead).not.toHaveBeenCalled();
  });

  it("si HubSpot échoue, la notification interne part quand même et signale l'échec", async () => {
    const d = deps({ hubspot: vi.fn().mockRejectedValue(new Error("down")) });
    const r = await processDemoRequest(valid, meta, ctx, d);
    expect(r.ok).toBe(true);
    expect(d.notifyTeam).toHaveBeenCalledWith(expect.anything(), expect.stringContaining("ÉCHEC"));
  });

  it("renvoie une erreur serveur si aucun canal interne n'a reçu la demande", async () => {
    const fail = () => vi.fn().mockRejectedValue(new Error("down"));
    const r = await processDemoRequest(valid, meta, ctx, deps({ hubspot: fail(), sheet: fail(), notifyTeam: fail() }));
    expect(r).toEqual({ ok: false, error: "server" });
  });

  it("renvoie les erreurs de champ sans rien envoyer", async () => {
    const d = deps();
    const r = await processDemoRequest({ ...valid, email: "x" }, meta, ctx, d);
    expect(r).toMatchObject({ ok: false, error: "invalid", fieldErrors: { email: "email" } });
    expect(d.hubspot).not.toHaveBeenCalled();
  });

  it("ignore silencieusement le honeypot et les envois trop rapides", async () => {
    const d = deps();
    expect(await processDemoRequest(valid, { ...meta, honeypot: "spam" }, ctx, d)).toEqual({ ok: true });
    expect(await processDemoRequest(valid, { startedAt: ctx.now! - 500 }, ctx, d)).toEqual({ ok: true });
    expect(d.hubspot).not.toHaveBeenCalled();
  });

  it("limite le débit par IP", async () => {
    const d = deps();
    for (let i = 0; i < 5; i++) await processDemoRequest(valid, meta, ctx, d);
    expect(await processDemoRequest(valid, meta, ctx, d)).toEqual({ ok: false, error: "rate_limited" });
  });

  it("ne propose pas de lien de réservation en mode vidéo", async () => {
    const r = await processDemoRequest({ ...valid, mode: "video" }, meta, ctx, deps());
    expect(r).toEqual({ ok: true, bookingUrl: undefined });
  });
});

describe("règles conditionnelles", () => {
  it("signalent recrutements et « Précisez » même quand d'autres champs sont invalides", () => {
    const r = demoRequestSchema.safeParse({ mode: "demo", problematique: "autre", consent: false });
    const errors = toFieldErrors(r.error!);
    expect(errors.recrutements).toBe("required");
    expect(errors.problematiqueAutre).toBe("required");
    expect(errors.firstName).toBe("required");
  });
});
