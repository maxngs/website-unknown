// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Anciennes URLs marketing (avant la refonte de 2026) ──
      { source: "/entreprise.html", destination: "/fr/entreprises", permanent: true },
      { source: "/entreprise", destination: "/fr/entreprises", permanent: true },
      { source: "/contact.html", destination: "/fr/contact", permanent: true },
      { source: "/index.html", destination: "/fr", permanent: true },

      // ── Rebranding mai 2026 : /blog/* → /mag/* ──
      { source: "/blog", destination: "/fr/mag", permanent: true },
      { source: "/blog/:path*", destination: "/fr/mag/:path*", permanent: true },

      // ── Bascule v3 : tout le site passe sous /[locale] ──
      // Les pages absorbées par la refonte pointent vers la section qui les remplace.
      { source: "/fonctionnalites", destination: "/fr/entreprises#fonctionnalites", permanent: true },
      { source: "/tarifs", destination: "/fr/entreprises#tarifs", permanent: true },

      // Le Mag : les tags d'abord, puis les silos — le paramètre est contraint
      // à la liste réelle, sans quoi /mag/feed.xml serait pris pour un silo et
      // le flux RSS redirigerait dans le vide.
      { source: "/mag/tag", destination: "/fr/mag/tag", permanent: true },
      { source: "/mag/tag/:tag", destination: "/fr/mag/tag/:tag", permanent: true },
      { source: "/mag", destination: "/fr/mag", permanent: true },
      {
        source: "/mag/:silo(entreprises|candidats|ecoles|etudes)",
        destination: "/fr/mag/:silo",
        permanent: true,
      },
      {
        source: "/mag/:silo(entreprises|candidats|ecoles|etudes)/:slug",
        destination: "/fr/mag/:silo/:slug",
        permanent: true,
      },

      // Pages simples
      { source: "/candidats", destination: "/fr/candidats", permanent: true },
      { source: "/entreprises", destination: "/fr/entreprises", permanent: true },
      { source: "/ecoles", destination: "/fr/ecoles", permanent: true },
      { source: "/a-propos", destination: "/fr/a-propos", permanent: true },
      { source: "/contact", destination: "/fr/contact", permanent: true },
      { source: "/glossaire", destination: "/fr/glossaire", permanent: true },
      { source: "/glossaire/:slug", destination: "/fr/glossaire/:slug", permanent: true },
      { source: "/auteur/:slug", destination: "/fr/auteur/:slug", permanent: true },
      { source: "/cgu", destination: "/fr/cgu", permanent: true },
      { source: "/cgv", destination: "/fr/cgv", permanent: true },
      { source: "/mentions-legales", destination: "/fr/mentions-legales", permanent: true },
      { source: "/politique-confidentialite", destination: "/fr/politique-confidentialite", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
