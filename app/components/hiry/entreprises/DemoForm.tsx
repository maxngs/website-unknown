"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { EntreprisesContent } from "@/content/entreprises";
import { submitDemoRequest } from "@/app/[locale]/entreprises/actions";
import {
  ECHEANCES,
  FONCTIONS,
  FORMULES_SOUHAITEES,
  OUTILS,
  PROBLEMATIQUES,
  RECRUTEMENTS,
  TAILLES,
  TYPES_POSTES,
  isFreeEmail,
  type ChecklistKey,
  type DemoMode,
  type FormuleSouhaitee,
} from "@/lib/leads/options";
import {
  MESSAGE_MAX,
  demoRequestSchema,
  toFieldErrors,
  type Attribution,
  type FieldErrors,
} from "@/lib/leads/schema";
import Link from "../Link";
import { LEGAL } from "../links";
import { useDemoPrefill } from "./demoStore";

type Copy = EntreprisesContent["form"];

type Values = {
  mode: DemoMode;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  fonction: string;
  taille: string;
  recrutements: string;
  typesPostes: string[];
  problematique: string;
  problematiqueAutre: string;
  autresProblematiques: string[];
  outil: string;
  echeance: string;
  message: string;
  consent: boolean;
};

const INITIAL: Values = {
  mode: "demo",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  fonction: "",
  taille: "",
  recrutements: "",
  typesPostes: [],
  problematique: "",
  problematiqueAutre: "",
  autresProblematiques: [],
  outil: "",
  echeance: "",
  message: "",
  consent: false,
};

/** Ordre d'affichage : sert à placer le focus sur la première erreur. */
const FIELD_ORDER = [
  "firstName", "lastName", "email", "phone", "company", "fonction",
  "taille", "recrutements", "typesPostes", "problematique", "problematiqueAutre",
  "autresProblematiques", "outil", "echeance", "message", "consent",
] as const;
const STEP1 = new Set(["firstName", "lastName", "email", "phone", "company", "fonction"]);

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const UTM_STORAGE = "hiry-utm";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "error"; message: string }
  | { kind: "success"; mode: DemoMode; bookingUrl?: string };

const oneOf = <T extends string>(list: readonly T[], v: string | null): T | undefined =>
  v && (list as readonly string[]).includes(v) ? (v as T) : undefined;

export default function DemoForm({ c, locale }: { c: Copy; locale: "fr" | "en" }) {
  const [v, setV] = useState<Values>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [step, setStep] = useState<1 | 2>(1);
  const [formule, setFormule] = useState<FormuleSouhaitee>();
  const [checklist, setChecklist] = useState<ChecklistKey[]>([]);
  const [attribution, setAttribution] = useState<Attribution>({});
  const touchedProblem = useRef(false);
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const prefill = useDemoPrefill();

  const video = v.mode === "video";
  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setV((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  // Horodatage anti-robot, attribution (UTM gardés pour la session) et
  // pré-remplissage depuis l'URL (/entreprises/demo?mode=video&formule=…).
  useEffect(() => {
    startedAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    let utm: Attribution = {};
    try {
      utm = JSON.parse(sessionStorage.getItem(UTM_STORAGE) ?? "{}");
    } catch {}
    const fresh = Object.fromEntries(
      UTM_KEYS.flatMap((k) => (params.get(k) ? [[k, params.get(k)!.slice(0, 200)]] : []))
    );
    if (Object.keys(fresh).length) {
      utm = fresh;
      try {
        sessionStorage.setItem(UTM_STORAGE, JSON.stringify(utm));
      } catch {}
    }
    setAttribution({
      ...utm,
      page: window.location.pathname,
      ...(document.referrer ? { referrer: document.referrer.slice(0, 500) } : {}),
    });

    const mode = oneOf(["demo", "video"] as const, params.get("mode"));
    const problematique = oneOf(PROBLEMATIQUES, params.get("problematique"));
    if (mode || problematique) {
      setV((prev) => ({
        ...prev,
        ...(mode ? { mode } : {}),
        ...(problematique ? { problematique } : {}),
      }));
    }
    setFormule(oneOf(FORMULES_SOUHAITEES, params.get("formule")));
  }, []);

  // Pré-remplissage depuis la page (hero, bloc « Cochez », tarifs, volume).
  useEffect(() => {
    if (prefill.version === 0) return;
    if (prefill.formule) setFormule(prefill.formule);
    if (prefill.checklist) setChecklist(prefill.checklist);
    setV((prev) => {
      const next = { ...prev };
      if (prefill.mode) next.mode = prefill.mode;
      // Un choix fait à la main dans le formulaire n'est jamais écrasé.
      if (prefill.problematique && !touchedProblem.current) {
        next.problematique = prefill.problematique;
        next.autresProblematiques = (prefill.autres ?? []).filter((p) => p !== prefill.problematique);
      }
      return next;
    });
    if (status.kind === "success") setStatus({ kind: "idle" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill.version]);

  const input = () => ({
    mode: v.mode,
    firstName: v.firstName,
    lastName: v.lastName,
    email: v.email,
    phone: v.phone || undefined,
    company: v.company,
    fonction: v.fonction || undefined,
    taille: v.taille || undefined,
    recrutements: v.recrutements || undefined,
    typesPostes: v.typesPostes,
    problematique: v.problematique || undefined,
    problematiqueAutre: v.problematiqueAutre || undefined,
    autresProblematiques: v.autresProblematiques,
    outil: v.outil || undefined,
    echeance: v.echeance || undefined,
    message: v.message || undefined,
    consent: v.consent,
    formule,
    checklist,
    attribution,
    locale,
  });

  function focusFirst(errs: FieldErrors) {
    const first = FIELD_ORDER.find((k) => errs[k]);
    if (!first) return;
    setStep(STEP1.has(first) ? 1 : 2);
    window.setTimeout(() => {
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
    }, 0);
  }

  function next() {
    const parsed = demoRequestSchema.safeParse(input());
    const errs = parsed.success ? {} : toFieldErrors(parsed.error);
    const step1 = Object.fromEntries(Object.entries(errs).filter(([k]) => STEP1.has(k)));
    setErrors(step1);
    if (Object.keys(step1).length) return focusFirst(step1);
    setStep(2);
    window.setTimeout(() => formRef.current?.querySelector<HTMLElement>('[data-field="taille"]')?.focus(), 0);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status.kind === "sending") return;

    const parsed = demoRequestSchema.safeParse(input());
    if (!parsed.success) {
      const errs = toFieldErrors(parsed.error);
      setErrors(errs);
      setStatus({ kind: "error", message: c.errors.summary });
      return focusFirst(errs);
    }

    const eventId = crypto.randomUUID();
    setStatus({ kind: "sending" });
    try {
      const res = await submitDemoRequest(
        { ...input(), eventId },
        { honeypot: honeypot.current?.value, startedAt: startedAt.current }
      );
      if (res.ok) {
        setStatus({ kind: "success", mode: v.mode, bookingUrl: res.bookingUrl });
        // Conversion : uniquement avec le consentement cookies (même event_id
        // que l'événement CAPI, pour la déduplication côté Meta).
        if (/(?:^|; )cookie-consent=accepted/.test(document.cookie)) {
          window.dataLayer?.push({
            event: "generate_lead",
            event_id: eventId,
            lead_type: "Entreprise",
            form_name: v.mode === "demo" ? "demo_request" : "demo_video",
          });
        }
        window.setTimeout(() => successRef.current?.focus(), 0);
      } else if (res.error === "invalid") {
        setErrors(res.fieldErrors);
        setStatus({ kind: "error", message: c.errors.summary });
        focusFirst(res.fieldErrors);
      } else {
        setStatus({
          kind: "error",
          message: res.error === "rate_limited" ? c.errors.rateLimited : c.errors.server,
        });
      }
    } catch {
      setStatus({ kind: "error", message: c.errors.server });
    }
  }

  if (status.kind === "success") {
    const isDemo = status.mode === "demo";
    return (
      <div className="demo-success" role="status">
        <h3 ref={successRef} tabIndex={-1} style={{ fontWeight: 700, fontSize: "clamp(24px,2.4vw,32px)", letterSpacing: "-.03em", lineHeight: 1.15, margin: "0 0 12px", outline: "none" }}>
          {isDemo ? c.success.demoTitle : c.success.videoTitle}
        </h3>
        {isDemo ? (
          status.bookingUrl ? (
            <>
              <p style={{ margin: "0 0 20px" }}>{c.success.demoText}</p>
              <a href={status.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ink" style={{ fontSize: 15, padding: "15px 26px" }}>
                {c.success.demoBook}
              </a>
            </>
          ) : (
            <p style={{ margin: 0 }}>{c.success.demoFallback}</p>
          )
        ) : (
          <>
            <p style={{ margin: "0 0 20px" }}>{c.success.videoText}</p>
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setV((prev) => ({ ...prev, mode: "demo" }));
                setStatus({ kind: "idle" });
                setStep(1);
              }}
            >
              {c.success.videoAlso}
            </button>
          </>
        )}
      </div>
    );
  }

  const err = (name: keyof Values) => errors[name];
  const describedBy = (name: string, extra?: string) =>
    [errors[name] ? `${name}-error` : "", extra ?? ""].filter(Boolean).join(" ") || undefined;

  const select = (
    name: "fonction" | "taille" | "recrutements" | "outil" | "echeance" | "problematique",
    options: readonly string[],
    labels: Record<string, string>,
    opts: { required?: boolean; autoComplete?: string } = {}
  ) => (
    <Field name={name} label={c[name]} optional={!opts.required ? c.optional : undefined} error={err(name) && c.errors[err(name)!]}>
      <select
        id={`demo-${name}`}
        data-field={name}
        className="field"
        value={v[name]}
        autoComplete={opts.autoComplete ?? "off"}
        aria-required={opts.required || undefined}
        aria-invalid={Boolean(err(name)) || undefined}
        aria-describedby={describedBy(name)}
        onChange={(e) => {
          if (name === "problematique") touchedProblem.current = true;
          set(name, e.target.value);
        }}
      >
        <option value="">{c.select}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {labels[o]}
          </option>
        ))}
      </select>
    </Field>
  );

  const text = (
    name: "firstName" | "lastName" | "email" | "phone" | "company",
    opts: { type?: string; autoComplete: string; required?: boolean; hint?: ReactNode; focus?: boolean }
  ) => (
    <Field
      name={name}
      label={c[name]}
      optional={!opts.required ? c.optional : undefined}
      error={err(name) && c.errors[err(name)!]}
      hint={opts.hint}
    >
      <input
        id={`demo-${name}`}
        data-field={name}
        data-demo-focus={opts.focus || undefined}
        className="field"
        type={opts.type ?? "text"}
        value={v[name]}
        autoComplete={opts.autoComplete}
        aria-required={opts.required || undefined}
        aria-invalid={Boolean(err(name)) || undefined}
        aria-describedby={describedBy(name, opts.hint ? `${name}-hint` : undefined)}
        onChange={(e) => set(name, e.target.value)}
      />
    </Field>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="demo-form" aria-busy={status.kind === "sending"}>
      <div className="demo-progress">
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>
            <span>{step === 1 ? c.stepContact : c.stepContext}</span>
            <span style={{ color: "rgba(15,14,12,.62)" }}>
              {c.progress.replace("{current}", String(step)).replace("{total}", "2")}
            </span>
          </div>
          <div aria-hidden style={{ height: 4, borderRadius: 2, background: "rgba(15,14,12,.08)" }}>
            <div style={{ height: "100%", width: step === 1 ? "50%" : "100%", borderRadius: 2, background: "var(--color-blue)", transition: "width .3s ease" }} />
          </div>
      </div>

      {status.kind === "error" && (
        <p role="alert" className="demo-alert">
          {status.message}
        </p>
      )}

      {/* Piège à robots : invisible et hors du parcours clavier. */}
      <div aria-hidden style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="demo-website">Website</label>
        <input ref={honeypot} id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div hidden={step !== 1} className="demo-grid">
        <fieldset className="demo-span mode-toggle">
          <legend className="field-label">{c.modeLegend.toUpperCase()}</legend>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {(["demo", "video"] as const).map((m) => (
              <label key={m} className="mode-option" data-on={v.mode === m || undefined}>
                <input type="radio" name="mode" value={m} checked={v.mode === m} onChange={() => set("mode", m)} />
                {c.modes[m]}
              </label>
            ))}
          </div>
        </fieldset>

        {text("firstName", { autoComplete: "given-name", required: true, focus: true })}
        {text("lastName", { autoComplete: "family-name", required: true })}
        {text("email", {
          type: "email",
          autoComplete: "email",
          required: true,
          hint: isFreeEmail(v.email) ? c.freeEmailWarning : undefined,
        })}
        {!video &&
          text("phone", { type: "tel", autoComplete: "tel", hint: c.phoneHint })}
        {text("company", { autoComplete: "organization", required: true })}
        {select("fonction", FONCTIONS, c.options.fonction, { required: true, autoComplete: "organization-title" })}
      </div>

      {step === 1 && (
        <button type="button" className="btn btn-ink" onClick={next} style={{ fontSize: 15, padding: "15px 28px", border: 0, fontFamily: "inherit", justifySelf: "start" }}>
          {c.next}
        </button>
      )}

      <div hidden={step !== 2} className="demo-grid">
        {select("taille", TAILLES, c.options.taille, { required: true })}
        {!video && select("recrutements", RECRUTEMENTS, c.options.recrutements, { required: true })}

        <Chips
          className="demo-span"
          legend={c.typesPostes}
          optional={c.optional}
          options={TYPES_POSTES}
          labels={c.options.typesPostes}
          values={v.typesPostes}
          onChange={(vals) => set("typesPostes", vals)}
        />

        <div className="demo-span">
          {select("problematique", PROBLEMATIQUES, c.options.problematique, { required: true })}
        </div>
        {v.problematique === "autre" && (
          <div className="demo-span">
            <Field name="problematiqueAutre" label={c.problematiqueAutre} error={err("problematiqueAutre") && c.errors[err("problematiqueAutre")!]}>
              <input
                id="demo-problematiqueAutre"
                data-field="problematiqueAutre"
                className="field"
                value={v.problematiqueAutre}
                maxLength={200}
                aria-required
                aria-invalid={Boolean(err("problematiqueAutre")) || undefined}
                aria-describedby={describedBy("problematiqueAutre")}
                onChange={(e) => set("problematiqueAutre", e.target.value)}
              />
            </Field>
          </div>
        )}

        <details className="demo-span demo-more" open={v.autresProblematiques.length > 0 || undefined}>
          <summary>
            {c.otherProblems}
            {v.autresProblematiques.length > 0 && (
              <span className="field-optional"> · {c.selectedCount.replace("{count}", String(v.autresProblematiques.length))}</span>
            )}
          </summary>
        <Chips
                      legend={c.autresProblematiques}
            optional={c.optional}
            options={PROBLEMATIQUES.filter((p) => p !== v.problematique && p !== "autre")}
            labels={c.options.problematique}
            values={v.autresProblematiques}
            onChange={(vals) => set("autresProblematiques", vals)}
            small
          />
        </details>

        {!video && select("outil", OUTILS, c.options.outil)}
        {!video && select("echeance", ECHEANCES, c.options.echeance)}

        <details className="demo-span demo-more" open={Boolean(v.message) || Boolean(err("message")) || undefined}>
          <summary>
            {c.addMessage} <span className="field-optional">&nbsp;({c.optional})</span>
          </summary>
          <div style={{ marginTop: 8 }}>
          <Field
            name="message"
            label={c.message}
            optional={c.optional}
            error={err("message") && c.errors[err("message")!]}
            hint={c.counter.replace("{count}", String(v.message.length)).replace("{max}", String(MESSAGE_MAX))}
          >
            <textarea
              id="demo-message"
              data-field="message"
              className="field"
              rows={3}
              maxLength={MESSAGE_MAX}
              value={v.message}
              style={{ resize: "vertical" }}
              aria-invalid={Boolean(err("message")) || undefined}
              aria-describedby={describedBy("message", "message-hint")}
              onChange={(e) => set("message", e.target.value)}
            />
          </Field>
          </div>
        </details>

        <div className="demo-span">
          <label className="consent-row">
            <input
              type="checkbox"
              data-field="consent"
              checked={v.consent}
              aria-required
              aria-invalid={Boolean(err("consent")) || undefined}
              aria-describedby={describedBy("consent")}
              onChange={(e) => set("consent", e.target.checked)}
            />
            <span>
              {c.consent}{" "}
              <Link href={LEGAL.privacy} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {c.consentLink}
              </Link>
            </span>
          </label>
          {err("consent") && (
            <p id="consent-error" className="field-error">
              {c.errors[err("consent")!]}
            </p>
          )}
        </div>

        <div className="demo-span" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <button type="button" className="link-btn" onClick={() => setStep(1)}>
            {c.back}
          </button>
          <button
            type="submit"
            className="btn btn-ink"
            disabled={status.kind === "sending"}
            style={{ fontSize: 15, padding: "15px 30px", border: 0, fontFamily: "inherit" }}
          >
            {status.kind === "sending" ? c.sending : video ? c.submitVideo : c.submitDemo}
          </button>
        </div>
      </div>

      {/* Champs cachés (lus par l'action serveur via l'état, pas via le DOM) */}
      <input type="hidden" name="checklist" value={checklist.join(",")} />
      <input type="hidden" name="formule_souhaitee" value={formule ?? ""} />
    </form>
  );
}

function Field({
  name,
  label,
  optional,
  error,
  hint,
  children,
}: {
  name: string;
  label: string;
  optional?: string;
  error?: string | false;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={`demo-${name}`}>
        {label.toUpperCase()}
        {optional && <span className="field-optional"> ({optional})</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${name}-hint`} className="field-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${name}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

function Chips({
  legend,
  optional,
  options,
  labels,
  values,
  onChange,
  className,
  small,
}: {
  legend: string;
  optional: string;
  options: readonly string[];
  labels: Record<string, string>;
  values: string[];
  onChange: (values: string[]) => void;
  className?: string;
  small?: boolean;
}) {
  return (
    <fieldset className={className} style={{ border: 0, margin: 0, padding: 0, minWidth: 0 }}>
      <legend className="field-label">
        {legend.toUpperCase()}
        <span className="field-optional"> ({optional})</span>
      </legend>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {options.map((o) => {
          const on = values.includes(o);
          return (
            <label key={o} className="chip" data-on={on || undefined} data-small={small || undefined}>
              <input
                type="checkbox"
                checked={on}
                onChange={() => onChange(on ? values.filter((x) => x !== o) : [...values, o])}
              />
              {labels[o]}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
