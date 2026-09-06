import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import CopyBoiler from "@/app/components/hiry/presse/CopyBoiler";
import Wordmark from "@/app/components/hiry/Wordmark";
import { CONTACT } from "@/app/components/hiry/links";
import { KIT_FILES, KIT_READY } from "@/app/components/hiry/presse/kit";
import { SITE_URL } from "@/app/components/hiry/seo";

/** Une parution réelle : logo du média + lien. Pas de titre inventé — le
 *  champ `kind` décrit factuellement le format (épisode, passage, parution). */
type Media = { outlet: string; logo: string; href: string; kind: string };
type Figure = { value: string; label: string; bg: string };

const COLORS = ["#0F4B70", "#C4F8FF", "#F7F3EC", "#0F0E0C"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/presse`,
      languages: { fr: "/fr/presse", en: "/en/presse" },
    },
  };
}

export default async function PressePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("press");
  const nav = await getTranslations("nav");

  const medias = t.raw("medias.items") as Media[];
  const tags = t.raw("tags") as string[];
  const figures = t.raw("figures.items") as Figure[];
  const em = { em: (c: React.ReactNode) => <em className="serif">{c}</em> };

  const facts = [
    { v: t("fact1"), l: t("fact1Label") },
    { v: t("fact2"), l: t("fact2Label") },
    { v: t("fact3"), l: t("fact3Label") },
  ];

  const kits = [
    { key: "logos", desc: "logosDesc", dl: "dlZip" },
    { key: "photos", desc: "photosDesc", dl: "dlZip" },
    { key: "boiler", desc: "boilerDesc", dl: "dlPdf" },
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${locale}/presse`,
    url: `${SITE_URL}/${locale}/presse`,
    name: t("badge"),
    description: t("subtitle"),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: locale === "fr" ? "fr-FR" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Nav
        links={[
          { href: "/presse#medias", label: nav("pressMedias") },
          { href: "/presse#chiffres", label: nav("pressFigures") },
          { href: "/presse#kit", label: nav("pressKitNav") },
          { href: "/presse#contact", label: nav("pressContact") },
        ]}
        ctaKey={KIT_READY ? "pressKit" : "pressKitNav"}
        ctaHref="/presse#kit"
      />

      <main>
        {/* Hero encre */}
        <header
          className="press-hero"
          style={{ padding: "20px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            style={{
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              borderRadius: 24,
              padding: "clamp(36px,4.5vw,64px)",
              display: "grid",
              gridTemplateColumns: "1.2fr .8fr",
              gap: 44,
              alignItems: "end",
            }}
          >
            <div>
              <div
                data-h="1"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "rgba(247,243,236,.1)",
                  borderRadius: 999,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                  width: "max-content",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--color-cyan)",
                  }}
                />
                {t("badge")}
              </div>
              <h1
                data-h="2"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(40px,4.6vw,72px)",
                  lineHeight: 1,
                  letterSpacing: "-.035em",
                  margin: "0 0 22px",
                  textWrap: "balance",
                }}
              >
                {t.rich("title", em)}
              </h1>
              <p
                data-h="3"
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "rgba(247,243,236,.65)",
                  maxWidth: 520,
                  margin: "0 0 28px",
                }}
              >
                {t("subtitle")}
              </p>
              <div
                data-h="4"
                data-r="wrap"
                style={{ display: "flex", gap: 12 }}
              >
                <a
                  href="#kit"
                  className="btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--color-cyan)",
                    color: "var(--color-ink)",
                    fontSize: 15,
                    padding: "15px 26px",
                  }}
                >
                  {t("ctaKit")}
                  {!KIT_READY && (
                    <span className="soon-badge">{t("kit.soon")}</span>
                  )}
                </a>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="btn"
                  style={{
                    border: "1.5px solid rgba(247,243,236,.4)",
                    color: "var(--color-bg)",
                    fontSize: 15,
                    padding: "13.5px 26px",
                  }}
                >
                  {t("ctaContact")}
                </a>
              </div>
            </div>

            <div data-h="5" style={{ display: "grid", gap: 12 }}>
              {facts.map((f) => (
                <div
                  key={f.v}
                  style={{
                    background: "rgba(247,243,236,.07)",
                    border: "1px solid rgba(247,243,236,.14)",
                    borderRadius: 16,
                    padding: "18px 22px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 26,
                      letterSpacing: "-.02em",
                    }}
                  >
                    {f.v}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(247,243,236,.55)",
                      marginTop: 2,
                    }}
                  >
                    {f.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* 01 · Dans les médias */}
        <section
          id="medias"
          style={{ padding: "90px 44px 70px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div className="rv-up">
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.4)",
                marginBottom: 20,
              }}
            >
              {t("medias.label")}
            </div>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(32px,3.6vw,48px)",
                letterSpacing: "-.035em",
                margin: "0 0 8px",
              }}
            >
              {t("medias.title")}
            </h2>
            <p
              style={{
                fontSize: 15.5,
                color: "rgba(15,14,12,.6)",
                margin: "0 0 36px",
                maxWidth: 560,
              }}
            >
              {medias.length > 0 ? t("medias.subtitle") : t("medias.empty")}
            </p>
          </div>

          {medias.length > 0 && (
            <div
              style={{
                display: "grid",
                borderTop: "1px solid rgba(15,14,12,.15)",
              }}
            >
              {medias.map((m, i) => {
                const inner = (
                  <>
                    <span
                      style={{
                        position: "relative",
                        width: 110,
                        height: 46,
                        flex: "none",
                      }}
                    >
                      <Image
                        src={m.logo}
                        alt={m.outlet}
                        fill
                        sizes="110px"
                        style={{ objectFit: "contain", objectPosition: "left" }}
                      />
                    </span>
                    <span style={{ fontSize: 16.5, fontWeight: 500 }}>
                      <span className="serif" style={{ fontStyle: "normal" }}>
                        {m.outlet}
                      </span>
                      <span style={{ color: "rgba(15,14,12,.55)" }}>
                        {" "}
                        · {m.kind}
                      </span>
                    </span>
                    <span
                      data-r="hide"
                      style={{
                        fontSize: 13,
                        color: "rgba(15,14,12,.5)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.href ? t("medias.watch") : t("medias.noLink")}
                    </span>
                  </>
                );
                const style = {
                  display: "grid" as const,
                  gridTemplateColumns: "150px 1fr auto",
                  gap: 24,
                  alignItems: "center",
                  padding: "24px 12px",
                  borderBottom: "1px solid rgba(15,14,12,.12)",
                  animationRange: `entry ${i * 4}% entry ${35 + i * 4}%`,
                };
                return m.href ? (
                  <a
                    key={m.outlet}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-r="g"
                    className="rv-up press-row"
                    style={style}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={m.outlet}
                    data-r="g"
                    className="rv-up press-row"
                    style={style}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          )}

          <div
            data-r="wrap"
            className="rv-up"
            style={{
              display: "flex",
              gap: 10,
              marginTop: medias.length > 0 ? 28 : 0,
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  border: "1px solid rgba(15,14,12,.2)",
                  borderRadius: 999,
                  padding: "9px 16px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* 02 · Les chiffres */}
        <section
          id="chiffres"
          style={{ padding: "20px 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              gap: 16,
            }}
          >
            {figures.map((f, i) => (
              <div
                key={f.value}
                className="rv-scale"
                style={{
                  background: f.bg,
                  border:
                    f.bg === "#fff" ? "1px solid rgba(15,14,12,.1)" : undefined,
                  borderRadius: 20,
                  padding: "28px 26px",
                  animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 44,
                    letterSpacing: "-.03em",
                  }}
                >
                  {f.value}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(15,14,12,.65)",
                    marginTop: 4,
                  }}
                >
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 · Kit média */}
        <section
          id="kit"
          style={{
            background: "var(--color-ink)",
            color: "var(--color-bg)",
            padding: "90px 44px",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div className="rv-up">
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  color: "rgba(247,243,236,.4)",
                  marginBottom: 20,
                }}
              >
                {t("kit.label")}
              </div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(32px,3.6vw,48px)",
                  letterSpacing: "-.035em",
                  margin: "0 0 8px",
                }}
              >
                {t.rich("kit.title", em)}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  color: "rgba(247,243,236,.6)",
                  margin: "0 0 40px",
                  maxWidth: 560,
                }}
              >
                {KIT_READY ? t("kit.subtitle") : t("kit.soonHint")}
              </p>
            </div>

            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                gap: 16,
              }}
            >
              {kits.map((k, i) => {
                const file = KIT_FILES[k.key];
                const cardStyle = {
                    background: "var(--color-dark-card)",
                    border: "1px solid rgba(247,243,236,.12)",
                    borderRadius: 20,
                    padding: 28,
                    color: "var(--color-bg)",
                  display: "block",
                  animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                } as const;
                const contenu = (
                  <>
                  <div
                    style={{
                      height: 110,
                      borderRadius: 12,
                      marginBottom: 20,
                      overflow: "hidden",
                      position: "relative",
                      background:
                        k.key === "logos"
                          ? "var(--color-bg)"
                          : k.key === "photos"
                            ? "var(--color-blue-p)"
                            : "var(--color-dark-card)",
                      border:
                        k.key === "boiler"
                          ? "1px solid rgba(247,243,236,.14)"
                          : undefined,
                      display: k.key === "logos" ? "grid" : undefined,
                      placeItems: k.key === "logos" ? "center" : undefined,
                      padding: k.key === "boiler" ? 16 : undefined,
                    }}
                  >
                    {k.key === "logos" && (
                      <Wordmark height={34} />
                    )}
                    {k.key === "photos" && (
                      <Image
                        src="/images/hero-entreprises.png"
                        alt={t("kit.photoAlt")}
                        fill
                        sizes="(max-width: 900px) 100vw, 30vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    {k.key === "boiler" && (
                      <div
                        className="serif"
                        style={{
                          fontStyle: "normal",
                          fontSize: 15,
                          lineHeight: 1.45,
                          color: "rgba(247,243,236,.7)",
                        }}
                      >
                        « {t("about.boiler").slice(0, 120)}… »
                      </div>
                    )}
                  </div>
                  <div
                    style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}
                  >
                    {t(`kit.${k.key}`)}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: "rgba(247,243,236,.55)",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(`kit.${k.desc}`)}
                  </div>
                    {file ? (
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--color-cyan)",
                          marginTop: 14,
                        }}
                      >
                        {t(`kit.${k.dl}`)}
                      </div>
                    ) : (
                      <div style={{ marginTop: 14 }}>
                        <span className="soon-badge soon-badge-dark">
                          {t("kit.soon")}
                        </span>
                      </div>
                    )}
                  </>
                );
                // Sans fichier, la carte n'est pas un lien : rien à atteindre.
                return file ? (
                  <a
                    key={k.key}
                    href={file}
                    download
                    className="rv-scale press-kit"
                    style={cardStyle}
                  >
                    {contenu}
                  </a>
                ) : (
                  <div
                    key={k.key}
                    className="rv-scale press-kit press-kit-soon"
                    style={cardStyle}
                    aria-label={`${t(`kit.${k.key}`)} — ${t("kit.soon")}`}
                  >
                    {contenu}
                  </div>
                );
              })}
            </div>

            <div
              data-r="g"
              className="rv-up"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 16,
              }}
            >
              <div
                style={{
                  background: "var(--color-dark-card)",
                  border: "1px solid rgba(247,243,236,.12)",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}
                >
                  {t("kit.colors")}
                </div>
                <div data-r="wrap" style={{ display: "flex", gap: 10 }}>
                  {COLORS.map((c) => (
                    <div key={c} style={{ flex: 1, minWidth: 90 }}>
                      <div
                        style={{
                          height: 52,
                          borderRadius: 10,
                          background: c,
                          border:
                            c === "#0F0E0C"
                              ? "1px solid rgba(247,243,236,.2)"
                              : undefined,
                        }}
                      />
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(247,243,236,.55)",
                          marginTop: 6,
                          fontFamily: "ui-monospace,monospace",
                        }}
                      >
                        {c}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "var(--color-dark-card)",
                  border: "1px solid rgba(247,243,236,.12)",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}
                >
                  {t("kit.rules")}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    gap: 10,
                    fontSize: 13.5,
                    color: "rgba(247,243,236,.65)",
                    lineHeight: 1.5,
                  }}
                >
                  <li>{t("kit.rule1")}</li>
                  <li>{t("kit.rule2")}</li>
                  <li>{t("kit.rule3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 04 · À propos · texte officiel */}
        <section
          id="apropos"
          style={{ padding: "90px 44px 70px", maxWidth: 1000, margin: "0 auto" }}
        >
          <div className="rv-up">
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.4)",
                marginBottom: 20,
              }}
            >
              {t("about.label")}
            </div>
            <p
              className="serif"
              style={{
                fontStyle: "normal",
                fontSize: "clamp(24px,2.6vw,34px)",
                lineHeight: 1.35,
                margin: "0 0 24px",
              }}
            >
              {t("about.boiler")}
            </p>
            <div
              data-r="wrap"
              style={{ display: "flex", gap: 12, alignItems: "center" }}
            >
              <CopyBoiler
                text={t("about.boiler")}
                label={t("about.copy")}
                copiedLabel={t("about.copied")}
              />
              <span style={{ fontSize: 13, color: "rgba(15,14,12,.5)" }}>
                {t("about.free")}
              </span>
            </div>
          </div>
        </section>

        {/* Contact presse */}
        <section
          id="contact"
          style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            className="rv-scale"
            style={{
              background: "var(--color-cyan)",
              borderRadius: 28,
              padding: "clamp(44px,5vw,76px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 56,
              alignItems: "center",
              animationRange: "entry 0% entry 40%",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(38px,4.4vw,62px)",
                  lineHeight: 1.02,
                  letterSpacing: "-.035em",
                  margin: "0 0 18px",
                }}
              >
                {t.rich("contact.title", em)}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: "rgba(15,14,12,.7)",
                  maxWidth: 460,
                  margin: "0 0 30px",
                }}
              >
                {t("contact.subtitle")}
              </p>
              <div data-r="wrap" style={{ display: "flex", gap: 12 }}>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="btn btn-ink"
                  style={{ fontSize: 14.5, padding: "14px 26px" }}
                >
                  {t("contact.email")}
                </a>
                <a
                  href="#kit"
                  className="btn btn-white"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14.5,
                    padding: "14px 26px",
                  }}
                >
                  {t("contact.kit")}
                  {!KIT_READY && (
                    <span className="soon-badge">{t("kit.soon")}</span>
                  )}
                </a>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gap: 12,
                alignContent: "center",
                minWidth: 250,
              }}
            >
              {[t("contact.r1"), t("contact.r2"), t("contact.r3")].map((r) => (
                <div
                  key={r}
                  style={{
                    background: "rgba(255,255,255,.65)",
                    backdropFilter: "blur(4px)",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 13.5,
                    fontWeight: 500,
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
