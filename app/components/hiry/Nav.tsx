import { getTranslations } from "next-intl/server";
import Link from "./Link";
import { APP } from "./links";
import MobileMenu from "./MobileMenu";
import Wordmark from "./Wordmark";

export type NavLink = { href: string; label: string };

/**
 * Nav collante. Liens centraux, teinte d'accent (point du logo + hover) et
 * libellé du CTA varient d'une page à l'autre — voir chaque page.tsx.
 */
export default async function Nav({
  links,
  ctaKey = "signup",
  ctaLabel,
  ctaHref = APP.signupCandidate,
  accent = "var(--color-blue)",
  loginWeight = 500,
  loginLabel,
  hideLogin = false,
}: {
  links: NavLink[];
  ctaKey?: string;
  /** Libellé déjà traduit, prioritaire sur `ctaKey`. */
  ctaLabel?: string;
  ctaHref?: string;
  accent?: string;
  loginWeight?: number;
  /** Libellé de connexion déjà traduit (ex. « Espace client »). */
  loginLabel?: string;
  /** Masque la connexion dans la barre bureau (elle reste au menu mobile). */
  hideLogin?: boolean;
}) {
  const t = await getTranslations("nav");
  const topbar = await getTranslations("topbar");
  const cta = ctaLabel ?? t(ctaKey);
  const login = loginLabel ?? t("login");

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: 34,
        padding: "14px 44px",
        background: "rgba(247,243,236,.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(15,14,12,.08)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Wordmark height={23} />
      </Link>

      <div
        data-r="hide"
        style={{
          display: "flex",
          gap: "clamp(14px,1.8vw,26px)",
          fontSize: 14,
          fontWeight: 500,
          whiteSpace: "nowrap",
          alignItems: "center",
        }}
      >
        {links.map(({ href, label }) => (
          <Link key={href + label} href={href} className="nav-link">
            {label}
          </Link>
        ))}
      </div>

      <div
        data-r="cta"
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: 14,
          alignItems: "center",
          flex: "none",
        }}
      >
        {!hideLogin && (
          <Link
            href={APP.signin}
            className="nav-link"
            style={{
              fontSize: 14,
              fontWeight: loginWeight,
              whiteSpace: "nowrap",
            }}
          >
            {login}
          </Link>
        )}
        <Link
          href={ctaHref}
          className="btn nav-cta"
          style={{
            fontSize: 14,
            padding: "11px 22px",
            background: "var(--color-ink)",
            color: "#fff",
            ["--nav-accent" as string]: accent,
          }}
        >
          {cta}
        </Link>
      </div>

      <MobileMenu
        links={links}
        topbar={[
          { href: "/candidats", label: topbar("candidates") },
          { href: "/entreprises", label: topbar("companies") },
          { href: "/ecoles", label: topbar("schools") },
          { href: "/mag", label: topbar("mag") },
        ]}
        loginLabel={login}
        loginHref={APP.signin}
        ctaLabel={cta}
        ctaHref={ctaHref}
        accent={accent}
        openLabel={t("openMenu")}
        closeLabel={t("closeMenu")}
      />
    </nav>
  );
}
