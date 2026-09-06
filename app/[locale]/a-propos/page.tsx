import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import { APP, CONTACT } from "@/app/components/hiry/links";
import { SITE_URL } from "@/app/components/hiry/seo";
import { Label } from "@/app/components/hiry/ui";
import { AUTHORS } from "@/lib/authors";

const PARTNERS = [
  { name: "Google for Startups", role: "Accelerator" },
  { name: "L'Escalator", role: "Incubation" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/a-propos`,
      languages: { fr: "/fr/a-propos", en: "/en/a-propos" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const nav = await getTranslations("nav");

  const founders = [AUTHORS["maxime-nogues"], AUTHORS["stephanie-nogues"]];
  const values = t.raw("values") as { title: string; body: string }[];

  // JSON-LD AboutPage + Person (E-E-A-T), repris de l'ancienne page
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/${locale}/a-propos`,
        url: `${SITE_URL}/${locale}/a-propos`,
        name: t("badge"),
        description: t("subtitle"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: locale === "fr" ? "fr-FR" : "en",
      },
      ...founders.map((f) => ({
        "@type": "Person",
        "@id": `${SITE_URL}/${locale}/a-propos#${f.slug}`,
        name: f.name,
        jobTitle: f.role,
        url: `${SITE_URL}/${locale}/a-propos`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        alumniOf: f.education?.map((e) => ({
          "@type": "EducationalOrganization",
          name: e,
        })),
        ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
      })),
    ],
  };

  const em = { em: (c: React.ReactNode) => <em className="serif">{c}</em> };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Nav
        links={[
          { href: "/#eco", label: nav("solutions") },
          { href: "/entreprises#tarifs", label: nav("pricing") },
          { href: "/mag", label: nav("mag") },
        ]}
      />

      <main>
        {/* Hero */}
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "50px 0 44px", maxWidth: 860 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "var(--color-cyan)",
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 26,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--color-blue)",
                }}
              />
              {t("badge")}
            </div>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "clamp(40px,5vw,72px)",
                lineHeight: 1.02,
                letterSpacing: "-.035em",
                margin: "0 0 22px",
                textWrap: "balance",
              }}
            >
              {t.rich("title", em)}
            </h1>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.6,
                color: "rgba(15,14,12,.7)",
                margin: "0 0 16px",
                maxWidth: 700,
              }}
            >
              {t("subtitle")}
            </p>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "rgba(15,14,12,.55)",
                margin: 0,
                maxWidth: 620,
              }}
            >
              {t("founded")}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        {/* Manifeste */}
        <section
          style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            className="rv-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: "clamp(32px,5vw,72px)",
              alignItems: "start",
            }}
          >
            <div>
              <Label>{t("manifestoLabel")}</Label>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(30px,3.4vw,48px)",
                  lineHeight: 1.06,
                  letterSpacing: "-.03em",
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                {t.rich("manifestoTitle", em)}
              </h2>
            </div>
            <div style={{ display: "grid", gap: 18 }}>
              {[t("manifestoP1"), t("manifestoP2")].map((p) => (
                <p
                  key={p.slice(0, 24)}
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.7,
                    color: "rgba(15,14,12,.7)",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Soutiens */}
        <section
          style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div className="rv-up">
            <Label>{t("partnersLabel")}</Label>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(26px,2.8vw,40px)",
                letterSpacing: "-.03em",
                margin: "0 0 32px",
              }}
            >
              {t("partnersTitle")}
            </h2>
            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: 18,
              }}
            >
              {PARTNERS.map((p, i) => (
                <div
                  key={p.name}
                  className="rv-scale"
                  style={{
                    background: "var(--color-card-warm)",
                    border: "1px solid rgba(15,14,12,.08)",
                    borderRadius: 18,
                    padding: "30px 32px",
                    animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 21 }}>{p.name}</div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: "rgba(15,14,12,.55)",
                      marginTop: 4,
                    }}
                  >
                    {p.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fondateurs */}
        <section
          style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div className="rv-up">
            <Label>{t("foundersLabel")}</Label>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(28px,3.2vw,46px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                margin: "0 0 14px",
                textWrap: "balance",
              }}
            >
              {t.rich("foundersTitle", em)}
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "rgba(15,14,12,.65)",
                margin: "0 0 32px",
                maxWidth: 640,
              }}
            >
              {t("foundersIntro")}
            </p>

            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: 18,
              }}
            >
              {founders.map((f, i) => (
                <div
                  key={f.slug}
                  id={f.slug}
                  className="rv-scale"
                  style={{
                    background: i === 0 ? "var(--color-cyan)" : "var(--color-blue-p)",
                    borderRadius: 22,
                    padding: "clamp(28px,3vw,38px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: "50%",
                      background: "var(--color-ink)",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    {f.name.charAt(0)}
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 21 }}>{f.name}</div>
                    <div
                      style={{ fontSize: 13.5, color: "rgba(15,14,12,.6)" }}
                    >
                      {f.role}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "rgba(15,14,12,.72)",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {f.bio}
                  </p>
                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--color-blue)",
                      }}
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principes */}
        <section
          style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div className="rv-up">
            <Label>{t("valuesLabel")}</Label>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(26px,2.8vw,40px)",
                letterSpacing: "-.03em",
                margin: "0 0 32px",
              }}
            >
              {t("valuesTitle")}
            </h2>
            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                gap: 18,
              }}
            >
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="rv-scale"
                  style={{
                    borderTop: "2px solid var(--color-ink)",
                    paddingTop: 22,
                    animationRange: `entry ${i * 6}% entry ${30 + i * 6}%`,
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}
                  >
                    {v.title}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "rgba(15,14,12,.65)",
                      margin: 0,
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            className="rv-scale"
            style={{
              background: "var(--color-cyan)",
              borderRadius: 28,
              padding: "clamp(40px,4.5vw,68px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
              animationRange: "entry 0% entry 40%",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(30px,3.4vw,50px)",
                  lineHeight: 1.04,
                  letterSpacing: "-.03em",
                  margin: "0 0 16px",
                }}
              >
                {t.rich("ctaTitle", em)}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "rgba(15,14,12,.7)",
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                {t("ctaText")}
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href={APP.signup}
                className="btn btn-ink-alt"
                style={{ fontSize: 15, padding: "15px 28px" }}
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href={CONTACT}
                className="btn btn-white"
                style={{ fontSize: 15, padding: "15px 28px" }}
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
