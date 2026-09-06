"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FormState = "idle" | "loading" | "success" | "error";

/**
 * Formulaire de contact — même contrat que l'ancien : POST /api/lead avec un
 * `profile` préfixé « [Contact] », puis événement generate_lead au dataLayer.
 * Seule la présentation change.
 */
export default function ContactForm() {
  const t = useTranslations("contact");
  const subjectKeys = ["candidate", "company", "school", "press", "other"];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: "",
          profile: `[Contact] ${form.subject}`,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      const data = await res.json().catch(() => ({}));
      setState("success");
      // `dataLayer` est déjà typé globalement par l'ancien site
      window.dataLayer?.push({
        event: "generate_lead",
        event_id: data.event_id || undefined,
      });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        style={{
          background: "var(--color-cyan)",
          borderRadius: 24,
          padding: "clamp(36px,4vw,56px)",
        }}
      >
        <h2
          className="serif"
          style={{
            fontStyle: "normal",
            fontSize: "clamp(28px,3vw,42px)",
            lineHeight: 1.08,
            margin: "0 0 14px",
          }}
        >
          {t("successTitle")}
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(15,14,12,.7)",
            margin: 0,
          }}
        >
          {t("successText")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "var(--color-card-warm)",
        border: "1px solid rgba(15,14,12,.08)",
        borderRadius: 24,
        padding: "clamp(28px,3vw,40px)",
        display: "grid",
        gap: 20,
      }}
    >
      <div
        data-r="g"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <div>
          <label className="field-label" htmlFor="firstName">
            {t("firstName")}
          </label>
          <input
            id="firstName"
            className="field"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => set("firstName")(e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="lastName">
            {t("lastName")}
          </label>
          <input
            id="lastName"
            className="field"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => set("lastName")(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="email">
          {t("email")}
        </label>
        <input
          id="email"
          className="field"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => set("email")(e.target.value)}
        />
      </div>

      <div>
        <label className="field-label" htmlFor="subject">
          {t("subject")}
        </label>
        <select
          id="subject"
          className="field"
          required
          value={form.subject}
          onChange={(e) => set("subject")(e.target.value)}
        >
          <option value="" disabled>
            {t("subjectPlaceholder")}
          </option>
          {subjectKeys.map((k) => (
            <option key={k} value={t(`subjects.${k}`)}>
              {t(`subjects.${k}`)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          {t("message")}
        </label>
        <textarea
          id="message"
          className="field"
          required
          rows={5}
          style={{ resize: "vertical" }}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
        />
      </div>

      {state === "error" && (
        <p
          role="alert"
          style={{ fontSize: 14, color: "#B4472B", margin: 0 }}
        >
          {t("error")}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-ink"
        disabled={state === "loading"}
        style={{
          fontSize: 15,
          padding: "15px 30px",
          border: 0,
          justifySelf: "start",
          fontFamily: "inherit",
        }}
      >
        {state === "loading" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
