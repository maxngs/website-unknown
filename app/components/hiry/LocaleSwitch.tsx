"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/** Globe filaire — méridiens + parallèle, dessiné pour rester lisible à 16px. */
function Globe({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

/**
 * Sélecteur de langue. Deux locales seulement : le contrôle bascule
 * directement vers l'autre plutôt que d'afficher une liste.
 * `usePathname` de next-intl renvoie le chemin SANS préfixe de locale,
 * on reste donc sur la même page en changeant de langue.
 */
export default function LocaleSwitch({
  className = "",
}: {
  className?: string;
}) {
  const current = useLocale() as Locale;
  const pathname = usePathname();
  const autre = routing.locales.find((l) => l !== current) ?? current;

  return (
    <Link
      href={pathname}
      locale={autre}
      hrefLang={autre}
      className={`locale-switch ${className}`.trim()}
      aria-label={
        autre === "fr" ? "Passer en français" : "Switch to English"
      }
      title={autre === "fr" ? "Français" : "English"}
    >
      <Globe />
      <span>{current.toUpperCase()}</span>
    </Link>
  );
}
