import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: "/fr/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const nav = await getTranslations("nav");

  return (
    <>
      <TopBar />
      <Nav
        links={[
          { href: "/candidats", label: nav("features") },
          { href: "/entreprises#tarifs", label: nav("pricing") },
          { href: "/mag", label: nav("mag") },
        ]}
      />
      <main>
        <section
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div
            className="rv-up"
            style={{ padding: "44px 0 40px", maxWidth: 720 }}
          >
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.45)",
                marginBottom: 18,
              }}
            >
              {t("badge").toUpperCase()}
            </div>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "clamp(38px,4.6vw,64px)",
                lineHeight: 1.03,
                letterSpacing: "-.035em",
                margin: "0 0 18px",
                textWrap: "balance",
              }}
            >
              {t.rich("title", {
                em: (chunks) => <em className="serif">{chunks}</em>,
              })}
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(15,14,12,.7)",
                margin: 0,
              }}
            >
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.35fr) minmax(0,.65fr)",
            gap: "clamp(28px,4vw,56px)",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 44px 90px",
            alignItems: "start",
          }}
        >
          <div className="rv-up">
            <ContactForm />
          </div>

          <aside className="rv-right" style={{ display: "grid", gap: 26 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".16em",
                color: "rgba(15,14,12,.45)",
              }}
            >
              {t("asideTitle").toUpperCase()}
            </div>
            {[
              { label: t("emailLabel"), value: "contact@hiry.fr", href: "mailto:contact@hiry.fr" },
              { label: t("dpoLabel"), value: "dataprotection@hiry.fr", href: "mailto:dataprotection@hiry.fr" },
              { label: t("addressLabel"), value: t("address") },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: "1px solid rgba(15,14,12,.15)",
                  paddingTop: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    color: "rgba(15,14,12,.5)",
                    marginBottom: 6,
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontSize: 15.5,
                      fontWeight: 600,
                      color: "var(--color-blue)",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </aside>
        </section>
      </main>
    </>
  );
}
