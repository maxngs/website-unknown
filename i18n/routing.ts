import { defineRouting } from "next-intl/routing";

/**
 * Locales du site.
 *
 * `localePrefix: "always"` → toutes les pages vivent sous /fr ou /en.
 * `/` est redirigé par le middleware selon l'Accept-Language du visiteur.
 */
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
