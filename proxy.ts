import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next 16 a renommé la convention `middleware` en `proxy` ; le contenu et
// l'API sont inchangés (next-intl fournit toujours createMiddleware).
export default createMiddleware(routing);

export const config = {
  /**
   * `/` est inclus : next-intl négocie la locale (Accept-Language, cookie)
   * et redirige vers /fr ou /en. Les anciennes URLs sans préfixe sont, elles,
   * traitées par les 301 de next.config.ts.
   *
   * Sont exclus : les routes API, les fichiers internes de Next, et tout
   * chemin contenant un point (fichiers statiques, feed.xml, robots.txt…).
   */
  matcher: ["/", "/(fr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
