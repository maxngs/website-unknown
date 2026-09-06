import { getLocale, getTranslations } from "next-intl/server";
import type { LegalSection } from "@/app/components/shared/LegalContent";
import TopBar from "./TopBar";
import Nav from "./Nav";
import Link from "./Link";
import { slugify } from "./mag/mdx";

/**
 * Gabarit des pages légales à la charte v3 : masthead éditorial, sommaire
 * collant, colonne de lecture. Le texte vient de content/legal/*.
 */
export default async function LegalPage({
  title,
  updated,
  version,
  intro,
  outro,
  sections,
  disclaimer,
}: {
  title: string;
  updated?: string;
  /** Numéro de version, affiché après la date. */
  version?: string;
  /** Chapô sous le titre. */
  intro?: string;
  /** Ligne de contact fermant le document. */
  outro?: string;
  sections: LegalSection[];
  /** Mention affichée pour les traductions non contractuelles. */
  disclaimer?: string;
}) {
  const t = await getTranslations("article");
  const locale = await getLocale();
  const nav = await getTranslations("nav");

  const toc = sections
    .filter((s) => (s.level ?? 1) === 1)
    .map((s) => ({ id: slugify(s.title), label: s.title }));

  return (
    <>
      <TopBar />
      <Nav links={[{ href: "/", label: nav("solutions") }]} />
      <main>
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "44px 0 40px", maxWidth: 780 }}>
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(34px,4.4vw,60px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: "0 0 18px",
                textWrap: "balance",
              }}
            >
              {title}
            </h1>
            {updated && (
              <div style={{ fontSize: 12.5, color: "rgba(15,14,12,.5)" }}>
                {t("updated")}{" "}
                {new Intl.DateTimeFormat(locale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(updated))}
                {version ? ` — Version ${version}` : ""}
              </div>
            )}
            {intro && (
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "rgba(15,14,12,.72)",
                  maxWidth: 660,
                }}
              >
                {intro}
              </p>
            )}
            {disclaimer && (
              <p
                style={{
                  marginTop: 22,
                  padding: "14px 18px",
                  background: "var(--color-cyan)",
                  borderRadius: 14,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(15,14,12,.8)",
                  maxWidth: 640,
                }}
              >
                {disclaimer}
              </p>
            )}
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,240px) minmax(0,1fr)",
            gap: "clamp(32px,5vw,72px)",
            maxWidth: 1150,
            margin: "0 auto",
            padding: "48px 44px 90px",
            alignItems: "start",
          }}
        >
          <aside data-r="hide" style={{ position: "relative" }}>
            <div style={{ position: "sticky", top: 110 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  color: "rgba(15,14,12,.45)",
                  marginBottom: 14,
                }}
              >
                {t("toc")}
              </div>
              <nav className="mag-toc">
                {toc.map((s) => (
                  <a key={s.id} href={`#${s.id}`}>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="mag-prose" style={{ maxWidth: 720 }}>
            {sections.map((section) => {
              const level = section.level ?? 1;
              const Heading = level === 1 ? "h2" : level === 2 ? "h3" : "h4";
              return (
                <section key={section.title}>
                  <Heading id={level === 1 ? slugify(section.title) : undefined}>
                    {section.title}
                  </Heading>
                  {section.content?.split("\n\n").map((para) => (
                    <p key={para.slice(0, 30)}>{para}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.after && <p>{section.after}</p>}
                </section>
              );
            })}

            {outro && (
              <p
                style={{
                  marginTop: "2.4em",
                  paddingTop: "1.6em",
                  borderTop: "1px solid rgba(15,14,12,.15)",
                  fontWeight: 600,
                }}
              >
                {outro}
              </p>
            )}
          </div>
        </div>

        <section
          style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" style={{ marginBottom: 30 }} />
          <Link
            href="/"
            className="mag-link"
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".12em",
              color: "rgba(15,14,12,.5)",
            }}
          >
            ← HIRY
          </Link>
        </section>
      </main>
    </>
  );
}
