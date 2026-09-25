"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Label } from "../ui";
import Link from "../Link";
import { APP, LEGAL } from "../links";

/**
 * Les trois abonnements.
 *
 * ⚠️ Ces montants DOIVENT rester ceux de functions/config/plans.config.js
 * (app Hiry), qui fait foi côté caisse, et ceux des CGV
 * (content/legal/cgv.fr.ts). Un écart ici n'est pas un détail
 * d'affichage : c'est un prix annoncé qui n'est pas celui prélevé.
 *
 * Prix HT. L'annuel est payé en une fois, d'avance.
 */
const PLANS = [
  { key: "essential", monthly: 49, yearly: 470, featured: false },
  { key: "growth", monthly: 149, yearly: 1430, featured: true },
  { key: "enterprise", monthly: 399, yearly: 3830, featured: false },
] as const;

const BULLETS = 6;

export default function Tarifs() {
  const t = useTranslations("companies.pricing");
  const locale = useLocale();
  // Mensuel par défaut : les prix de référence sont 49, 149 et 399 € HT / mois.
  const [yearly, setYearly] = useState(false);

  const eur = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

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
            marginBottom: 32,
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
              fontSize: 14,
              color: "rgba(15,14,12,.55)",
              margin: "0 0 8px",
              maxWidth: 340,
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Mensuel / Annuel */}
        <div
          role="group"
          aria-label={t("billingAria")}
          style={{
            display: "inline-flex",
            gap: 4,
            padding: 4,
            marginBottom: 32,
            borderRadius: 999,
            background: "#fff",
            border: "1px solid rgba(15,14,12,.1)",
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
                  gap: 8,
                  border: 0,
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "9px 18px",
                  fontSize: 13.5,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  background: active ? "var(--color-ink)" : "transparent",
                  color: active ? "var(--color-bg)" : "rgba(15,14,12,.55)",
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

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {PLANS.map((p, i) => {
            const dark = p.featured;
            const muted = dark ? "rgba(247,243,236,.55)" : "rgba(15,14,12,.55)";
            // L'annuel s'affiche ramené au mois, arrondi à l'euro inférieur.
            const shown = yearly ? Math.floor(p.yearly / 12) : p.monthly;
            return (
              <div
                key={p.key}
                className="rv-scale"
                style={{
                  background: dark ? "var(--color-ink)" : "#fff",
                  color: dark ? "var(--color-bg)" : undefined,
                  border: dark ? undefined : "1px solid rgba(15,14,12,.1)",
                  borderRadius: 20,
                  padding: 34,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  position: "relative",
                  animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                }}
              >
                {dark && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      right: 22,
                      background: "var(--color-cyan)",
                      color: "var(--color-ink)",
                      fontSize: 11.5,
                      fontWeight: 700,
                      padding: "6px 13px",
                      borderRadius: 999,
                    }}
                  >
                    {t("badge")}
                  </span>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: ".08em",
                      color: dark
                        ? "rgba(247,243,236,.6)"
                        : "rgba(15,14,12,.5)",
                    }}
                  >
                    {t(`${p.key}.name`)}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: dark
                        ? "rgba(247,243,236,.1)"
                        : "var(--color-blue-p)",
                      color: dark ? "var(--color-cyan)" : "var(--color-blue)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t(`${p.key}.quota`)}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 42,
                      letterSpacing: "-.03em",
                    }}
                  >
                    {eur(shown)}
                  </span>
                  <span style={{ fontSize: 14, color: muted }}>
                    {" "}
                    {t("perMonth")}
                  </span>
                  <div style={{ fontSize: 12.5, color: muted, marginTop: 6 }}>
                    {yearly
                      ? t("billedYearly", { amount: eur(p.yearly) })
                      : t("billedMonthly")}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: dark
                      ? "rgba(247,243,236,.65)"
                      : "rgba(15,14,12,.65)",
                    margin: 0,
                  }}
                >
                  {t(`${p.key}.desc`)}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    gap: 10,
                    fontSize: 14,
                    color: dark
                      ? "rgba(247,243,236,.85)"
                      : "rgba(15,14,12,.8)",
                    flex: 1,
                  }}
                >
                  {Array.from({ length: BULLETS }, (_, n) => (
                      <li
                        key={n}
                        style={{ display: "flex", gap: 10, alignItems: "baseline" }}
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
                        {t.rich(`${p.key}.b${n + 1}`, {
                          // Renvoi vers la grille bento des fonctionnalités.
                          link: (chunks) => (
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
                          ),
                        })}
                      </li>
                  ))}
                </ul>

                <Link
                  href={APP.signupCompany}
                  className={dark ? "btn" : "btn btn-outline"}
                  style={{
                    textAlign: "center",
                    padding: "13px 22px",
                    fontSize: 14,
                    borderWidth: dark ? undefined : 1.5,
                    background: dark ? "var(--color-cyan)" : undefined,
                    color: dark ? "var(--color-ink)" : undefined,
                  }}
                >
                  {t(`${p.key}.cta`)}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Ce qui est vrai pour tout le monde */}
        <ul
          style={{
            listStyle: "none",
            margin: "30px 0 0",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px 32px",
            fontSize: 13.5,
            fontWeight: 500,
            color: "rgba(15,14,12,.7)",
          }}
        >
          {(["trust1", "trust2", "trust3"] as const).map((k) => (
            <li key={k} style={{ display: "flex", gap: 8 }}>
              <span aria-hidden style={{ color: "var(--color-blue)", fontWeight: 700 }}>
                ✓
              </span>
              {t(k)}
            </li>
          ))}
        </ul>

        <p
          style={{
            fontSize: 13,
            color: "rgba(15,14,12,.5)",
            margin: "16px 0 0",
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
