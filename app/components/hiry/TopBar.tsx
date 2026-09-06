import { getTranslations } from "next-intl/server";
import Link from "./Link";
import LocaleSwitch from "./LocaleSwitch";

const LINKS = [
  { href: "/candidats", key: "candidates" },
  { href: "/entreprises", key: "companies" },
  { href: "/ecoles", key: "schools" },
  { href: "/mag", key: "mag" },
] as const;

/** `active` = href de la page courante, souligné comme dans la référence. */
export default async function TopBar({ active }: { active?: string }) {
  const t = await getTranslations("topbar");

  return (
    <div
      data-r="pad hide"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        padding: "9px 44px",
        fontSize: 12.5,
        fontWeight: 500,
        borderBottom: "1px solid rgba(15,14,12,.08)",
        background: "var(--color-bg)",
      }}
    >
      {LINKS.map(({ href, key }) => {
        const isActive = href === active;
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "topbar-active" : "nav-link"}
            aria-current={isActive ? "page" : undefined}
            style={isActive ? undefined : { color: "rgba(15,14,12,.55)" }}
          >
            {t(key)}
          </Link>
        );
      })}
      <LocaleSwitch />
    </div>
  );
}
