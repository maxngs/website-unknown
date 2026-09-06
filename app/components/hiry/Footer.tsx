import { getTranslations } from "next-intl/server";
import Link from "./Link";
import Wordmark from "./Wordmark";
import { ABOUT, CONTACT, GLOSSARY, PRESS, SOCIAL } from "./links";

/** `raw: true` = page hors arborescence /[locale] (cf. links.ts). */
type Item = { href: string; label: string; raw?: boolean };

function FooterLink({ href, label, raw }: Item) {
  return (
    <Link
      href={href}
      raw={raw}
      className="text-bg/75 transition-colors hover:text-bg"
    >
      {label}
    </Link>
  );
}

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="grid content-start gap-[11px] text-[13.5px]">
      <div className="mb-1 text-[10.5px] font-bold tracking-[0.16em] text-bg/40">
        {title}
      </div>
      {items.map((item) => (
        <FooterLink key={item.href + item.label} {...item} />
      ))}
    </div>
  );
}

export default async function Footer() {
  const t = await getTranslations();

  const product: Item[] = [
    { href: "/candidats", label: t("topbar.candidates") },
    { href: "/entreprises", label: t("topbar.companies") },
    { href: "/ecoles", label: t("topbar.schools") },
    { href: "/entreprises#tarifs", label: t("footer.pricing") },
  ];

  const company: Item[] = [
    { href: ABOUT, label: t("footer.about") },
    { href: "/candidats#manifeste", label: t("nav.manifesto") },
    { href: PRESS, label: t("footer.press") },
    { href: CONTACT, label: t("footer.contact") },
  ];

  const resources: Item[] = [
    { href: "/mag", label: t("topbar.mag") },
    { href: GLOSSARY, label: t("footer.glossary") },
  ];

  // Pages légales migrées sous /[locale] : liens localisés.
  // CGV volontairement absente : la page de l'ancien site n'est qu'un
  // gabarit « en cours de rédaction », on ne la met pas en avant.
  const legal: Item[] = [
    { href: "/mentions-legales", label: t("footer.legalNotice") },
    // Les CGU doivent rester accessibles depuis le site (droit français).
    { href: "/cgu", label: t("footer.terms") },
    { href: "/politique-confidentialite", label: t("footer.privacy") },
    { href: "/politique-confidentialite#11-vos-droits", label: t("footer.gdpr") },
  ];

  return (
    <footer className="overflow-hidden bg-ink px-11 pt-20 text-bg">
      <div className="mx-auto max-w-[1400px]">
        <div
          data-r="g"
          className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10 pb-14"
        >
          <div>
            <div className="mb-3.5">
              <Wordmark height={24} light />
            </div>
            <p className="mb-[18px] max-w-[250px] text-[13.5px] leading-relaxed text-bg/60">
              {t("footer.tagline")}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-bg/25 px-3.5 py-2 text-xs font-semibold">
              {t("footer.market")}
            </div>
          </div>

          <Column title={t("footer.product")} items={product} />
          <Column title={t("footer.company")} items={company} />
          <Column title={t("footer.resources")} items={resources} />
          <Column title={t("footer.legal")} items={legal} />
        </div>

        <div className="flex items-center justify-between border-t border-bg/15 py-[22px] text-[12.5px] text-bg/55">
          <span>{t("footer.rights")}</span>
          <div className="flex gap-5">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-bg/70 hover:text-bg">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-bg/70 hover:text-bg">
              Instagram
            </a>
          </div>
        </div>

        {/* Wordmark géant en pied de page, à fleur du bord bas */}
        <div className="mb-[-1.5%] select-none">
          <Wordmark fluid light alt="Hiry" />
        </div>
      </div>
    </footer>
  );
}
