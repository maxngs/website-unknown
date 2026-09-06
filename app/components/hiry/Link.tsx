"use client";

import type { ComponentProps, MouseEvent, ReactNode, CSSProperties } from "react";
import { useLocale } from "next-intl";
import { useTransitionRouter } from "next-view-transitions";
import { Link as IntlLink, usePathname } from "@/i18n/navigation";
import { isExternal, isLegacyPath } from "./links";

type IntlProps = ComponentProps<typeof IntlLink>;

type Props = Omit<IntlProps, "href"> & {
  href: string;
  /**
   * Rend un <a> brut, sans préfixe de locale ni transition de page.
   * Pour les pages de l'ancien site encore hors /[locale] (cf. links.ts).
   */
  raw?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Lien de navigation du site v3.
 *
 * - href externe (http, mailto, tel) → <a> brut, nouvel onglet pour le web
 * - `raw` → <a> brut, chemin inchangé (pages legacy non localisées)
 * - sinon → Link next-intl (préfixe de locale) + View Transition
 *
 * La transition passe par `document.startViewTransition`, sans quoi les
 * keyframes vtOut/vtIn ne se déclencheraient jamais : `@view-transition
 * { navigation: auto }` ne couvre que les navigations cross-document, alors
 * que l'App Router navigue côté client.
 */
export default function Link({ href, raw, onClick, ...rest }: Props) {
  const router = useTransitionRouter();
  const locale = useLocale();
  const pathname = usePathname();

  if (isExternal(href)) {
    const web = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={onClick}
        {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      />
    );
  }

  // Filet de sécurité : un chemin legacy est toujours rendu brut, même si
  // l'appelant a oublié `raw` — sinon next-intl le préfixerait (/fr/contact).
  if (raw || isLegacyPath(href))
    return <a href={href} onClick={onClick} {...rest} />;

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      !document.startViewTransition
    ) {
      return;
    }

    const [path, hash] = href.split("#");
    const target = path === "" ? pathname : path;

    // Ancre interne à la page affichée : on laisse le navigateur défiler.
    if (target === pathname) return;

    e.preventDefault();
    // localePrefix vaut "always" et aucun pathname n'est traduit : préfixer
    // suffit (cf. i18n/routing.ts).
    const prefixed = `/${locale}${target === "/" ? "" : target}`;
    router.push(hash ? `${prefixed}#${hash}` : prefixed);
  }

  return <IntlLink href={href} onClick={handleClick} {...rest} />;
}
