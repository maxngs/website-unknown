"use client";

import { useState, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Label } from "../ui";
import Link from "../Link";
import { APP, LEGAL, SALES } from "../links";

/**
 * L'abonnement unique.
 *
 * ⚠️ Ces montants DOIVENT rester ceux de l'app Hiry (page de paiement
 * Stripe) et ceux des CGV (content/legal/cgv.fr.ts). Un écart ici n'est pas
 * un détail d'affichage : c'est un prix annoncé qui n'est pas celui prélevé.
 *
 * Prix HT par mois. L'annuel est prélevé chaque mois, avec un engagement
 * de 12 mois.
 */
const PRICE = { monthly: 89, yearly: 75 } as const;

const BULLETS = ["b1", "b2", "b3", "b4"] as const;

export default function Tarifs() {
  const t = useTranslations("companies.pricing");
  const locale = useLocale();
  const [yearly, setYearly] = useState(false);

  const eur = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

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
            gridTemplateColumns: "minmax(0,.95fr) minmax(0,1.05fr)",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(15,14,12,.1)",
            background: "#fff",
            animationRange: "entry 0% entry 35%",
          }}
        >
          {/* Prix */}
          <div
            style={{
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              padding: "clamp(30px,4vw,48px)",
              display: "flex",
              flexDirection: "column",
              gap: 26,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: ".16em",
                  color: "rgba(247,243,236,.55)",
                }}
              >
                {t("plan")}
              </span>

              {/* Mensuel / Annuel */}
              <div
                role="group"
                aria-label={t("billingAria")}
                style={{
                  display: "inline-flex",
                  gap: 4,
                  padding: 4,
                  borderRadius: 999,
                  background: "rgba(247,243,236,.08)",
                  border: "1px solid rgba(247,243,236,.12)",
                }}
              >
                {[
                  { on: false, label: t("monthly") },
                  { on: true, label: t("yearly") },
                ].map((o) => {
                  const active = yearly === o.on;
                  return (
                    <button
                      key={String(o.on)}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setYearly(o.on)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        border: 0,
                        cursor: "pointer",
                        borderRadius: 999,
                        padding: "8px 15px",
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "inherit",
                        background: active ? "var(--color-bg)" : "transparent",
                        color: active
                          ? "var(--color-ink)"
                          : "rgba(247,243,236,.6)",
                        transition: "background .2s, color .2s",
                      }}
                    >
                      {o.label}
                      {o.on && (
                        <span
                          style={{
                            fontSize: 11,
                            padding: "2px 7px",
                            borderRadius: 999,
                            background: "var(--color-cyan)",
                            color: "var(--color-ink)",
                          }}
                        >
                          {t("yearlyDiscount")}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <span
                  aria-live="polite"
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(64px,7vw,96px)",
                    lineHeight: 1,
                    letterSpacing: "-.05em",
                  }}
                >
                  {eur(yearly ? PRICE.yearly : PRICE.monthly)}
                </span>
                <span style={{ fontSize: 15, color: "rgba(247,243,236,.6)" }}>
                  {t("perMonth")}
                </span>
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "rgba(247,243,236,.7)",
                }}
              >
                {yearly ? t("yearlyTerms") : t("monthlyTerms")}
                {yearly && (
                  <span
                    className="serif"
                    style={{ color: "var(--color-cyan)", marginLeft: 8 }}
                  >
                    {t("insteadOf", { amount: eur(PRICE.monthly) })}
                  </span>
                )}
              </div>
            </div>

            <Link
              href={yearly ? APP.subscribeYearly : APP.subscribeMonthly}
              className="btn"
              style={{
                textAlign: "center",
                padding: "16px 24px",
                fontSize: 15,
                background: "var(--color-cyan)",
                color: "var(--color-ink)",
              }}
            >
              {t("cta")}
            </Link>
          </div>

          {/* Ce qui est inclus */}
          <div
            style={{
              padding: "clamp(30px,4vw,48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {BULLETS.map((k, i) => (
                <li
                  key={k}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "baseline",
                    padding: "16px 0",
                    borderTop: i ? "1px solid rgba(15,14,12,.08)" : undefined,
                    fontSize: "clamp(16px,1.5vw,19px)",
                    fontWeight: 600,
                    letterSpacing: "-.01em",
                  }}
                >
                  <span
                    aria-hidden
                    style={{ color: "var(--color-blue)", fontWeight: 700 }}
                  >
                    ✓
                  </span>
                  <span>{t.rich(k, { link })}</span>
                </li>
              ))}
            </ul>

            <p
              style={{
                margin: 0,
                padding: "18px 20px",
                borderRadius: 14,
                background: "var(--color-bg)",
                fontSize: 14,
                lineHeight: 1.55,
                color: "rgba(15,14,12,.7)",
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
          </div>
        </div>

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
