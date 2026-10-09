"use client";

import { useState, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Label } from "../ui";
import Link from "../Link";
import { APP, LEGAL, SALES } from "../links";

/**
 * Les trois formules : Liberté, Saison, Horizon.
 *
 * ⚠️ Ces montants DOIVENT rester ceux de l'app Hiry (page de paiement
 * Stripe) et ceux des CGV (content/legal/cgv.fr.ts). Un écart ici n'est pas
 * un détail d'affichage : c'est un prix annoncé qui n'est pas celui prélevé.
 *
 * Prix HT. Les trois formules donnent exactement la même chose : seul
 * l'engagement change (aucun, 3 mois, 12 mois). Saison et Horizon se paient
 * chaque mois ou en une fois.
 */
const FORMULES = {
  liberte: { mois: 119 },
  saison: { mois: 89, uneFois: 267 }, // uneFois = 3 mois
  horizon: { mois: 75, uneFois: 890 }, // uneFois = 1 an
} as const;

const BULLETS = ["b1", "b2", "b3", "b4"] as const;

type Plan = {
  key: "liberte" | "saison" | "horizon";
  dark?: boolean;
  monthly: { price: number; terms: string; href: string };
  once?: {
    price: number;
    per: string;
    terms: string;
    href: string;
    equivalent?: number;
    badge?: string;
  };
};

export default function Tarifs() {
  const t = useTranslations("companies.pricing");
  const locale = useLocale();

  const eur = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const plans: Plan[] = [
    {
      key: "liberte",
      monthly: {
        price: FORMULES.liberte.mois,
        terms: t("liberte.terms"),
        href: APP.subscribeLiberte,
      },
    },
    {
      key: "saison",
      monthly: {
        price: FORMULES.saison.mois,
        terms: t("saison.termsMonthly"),
        href: APP.subscribeSaison,
      },
      once: {
        price: FORMULES.saison.uneFois,
        per: t("perQuarter"),
        terms: t("saison.termsOnce"),
        href: APP.subscribeSaisonUneFois,
        equivalent: FORMULES.saison.mois,
      },
    },
    {
      key: "horizon",
      dark: true,
      monthly: {
        price: FORMULES.horizon.mois,
        terms: t("horizon.termsMonthly"),
        href: APP.subscribeHorizon,
      },
      // « 2 mois offerts » : 890 € = 10 × 89 € (Saison). Vrai UNIQUEMENT
      // pour Horizon réglé en une fois — jamais sur le paiement mensuel.
      once: {
        price: FORMULES.horizon.uneFois,
        per: t("perYear"),
        terms: t("horizon.termsOnce"),
        href: APP.subscribeHorizonUneFois,
        badge: t("twoMonthsFree"),
      },
    },
  ];

  return (
    <section
      id="tarifs"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <Label>{t("label")}</Label>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(15,14,12,.6)",
              margin: "0 0 8px",
              maxWidth: 400,
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          data-r="g"
          className="rv-scale"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 16,
            animationRange: "entry 0% entry 35%",
          }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} eur={eur} />
          ))}
        </div>

        <p
          style={{
            margin: "16px 0 0",
            padding: "18px 20px",
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(15,14,12,.1)",
            fontSize: 14,
            lineHeight: 1.55,
            color: "rgba(15,14,12,.7)",
            textAlign: "center",
          }}
        >
          {t("custom")}{" "}
          <Link
            href={SALES}
            style={{
              color: "var(--color-blue)",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {t("customCta")}
          </Link>
        </p>

        <p
          style={{
            fontSize: 13,
            color: "rgba(15,14,12,.5)",
            margin: "20px 0 0",
            textAlign: "center",
          }}
        >
          {t.rich("note", {
            link: (chunks) => (
              <Link
                href={LEGAL.sales}
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </section>
  );
}

/** Une carte de formule, avec sa propre bascule « Chaque mois / En une fois ». */
function PlanCard({
  plan,
  eur,
}: {
  plan: Plan;
  eur: (n: number) => string;
}) {
  const t = useTranslations("companies.pricing");
  const [once, setOnce] = useState(false);
  const dark = plan.dark;
  const opt = once && plan.once ? plan.once : null;

  const muted = dark ? "rgba(247,243,236,.6)" : "rgba(15,14,12,.55)";

  const link = (chunks: ReactNode) => (
    <Link
      href="/entreprises#fonctionnalites"
      style={{
        color: "inherit",
        textDecoration: "underline",
        textUnderlineOffset: 3,
      }}
    >
      {chunks}
    </Link>
  );

  return (
    <div
      style={{
        borderRadius: 24,
        border: dark ? "none" : "1px solid rgba(15,14,12,.1)",
        background: dark ? "var(--color-ink)" : "#fff",
        color: dark ? "var(--color-bg)" : "var(--color-ink)",
        padding: "clamp(26px,3vw,36px)",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        minWidth: 0,
      }}
    >
      <div>
        <h3
          style={{
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "-.03em",
            margin: 0,
          }}
        >
          {t(`${plan.key}.name`)}
        </h3>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: 14,
            lineHeight: 1.5,
            color: muted,
          }}
        >
          {t(`${plan.key}.tagline`)}
        </p>
      </div>

      {/* Chaque mois / En une fois — Saison et Horizon seulement */}
      {plan.once ? (
        <div
          role="group"
          aria-label={`${t("paymentAria")} — ${t(`${plan.key}.name`)}`}
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            gap: 4,
            padding: 4,
            borderRadius: 999,
            background: dark ? "rgba(247,243,236,.08)" : "var(--color-bg)",
            border: dark
              ? "1px solid rgba(247,243,236,.12)"
              : "1px solid rgba(15,14,12,.08)",
          }}
        >
          {[
            { on: false, label: t("payMonthly") },
            { on: true, label: t("payOnce") },
          ].map((o) => {
            const active = once === o.on;
            return (
              <button
                key={String(o.on)}
                type="button"
                aria-pressed={active}
                onClick={() => setOnce(o.on)}
                style={{
                  border: 0,
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "7px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  background: active
                    ? dark
                      ? "var(--color-bg)"
                      : "var(--color-ink)"
                    : "transparent",
                  color: active
                    ? dark
                      ? "var(--color-ink)"
                      : "var(--color-bg)"
                    : muted,
                  transition: "background .2s, color .2s",
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      ) : (
        // Garde l'alignement des prix avec les cartes qui ont une bascule.
        <div aria-hidden data-r="hide" style={{ height: 38 }} />
      )}

      <div style={{ flex: 1 }} aria-live="polite">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: "clamp(48px,4.6vw,64px)",
              lineHeight: 1,
              letterSpacing: "-.05em",
            }}
          >
            {eur(opt ? opt.price : plan.monthly.price)}
          </span>
          <span style={{ fontSize: 14, color: muted }}>
            {opt ? opt.per : t("perMonth")}
          </span>
          {opt?.badge && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "3px 9px",
                borderRadius: 999,
                background: "var(--color-cyan)",
                color: "var(--color-ink)",
                alignSelf: "center",
              }}
            >
              {opt.badge}
            </span>
          )}
        </div>
        {opt?.equivalent !== undefined && (
          <div
            className="serif"
            style={{
              marginTop: 8,
              fontSize: 15,
              color: dark ? "var(--color-cyan)" : "var(--color-blue)",
            }}
          >
            {t("perMonthEquivalent", { amount: eur(opt.equivalent) })}
          </div>
        )}
        <div
          style={{
            marginTop: 12,
            fontSize: 14,
            lineHeight: 1.5,
            color: dark ? "rgba(247,243,236,.75)" : "rgba(15,14,12,.7)",
          }}
        >
          {opt ? opt.terms : plan.monthly.terms}
        </div>
      </div>

      {/* Ce qui est inclus — identique dans les trois formules */}
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "18px 0 0",
          borderTop: dark
            ? "1px solid rgba(247,243,236,.12)"
            : "1px solid rgba(15,14,12,.08)",
          display: "grid",
          gap: 10,
        }}
      >
        {BULLETS.map((k) => (
          <li
            key={k}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "baseline",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-.01em",
            }}
          >
            <span
              aria-hidden
              style={{
                color: dark ? "var(--color-cyan)" : "var(--color-blue)",
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            <span>{t.rich(k, { link })}</span>
          </li>
        ))}
      </ul>

      <Link
        href={opt ? opt.href : plan.monthly.href}
        className="btn"
        style={{
          textAlign: "center",
          padding: "15px 22px",
          fontSize: 15,
          background: dark ? "var(--color-cyan)" : "var(--color-ink)",
          color: dark ? "var(--color-ink)" : "var(--color-bg)",
        }}
      >
        {t(`${plan.key}.cta`)}
      </Link>
    </div>
  );
}
