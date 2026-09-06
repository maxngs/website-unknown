// ============================================================
// app/[locale]/layout.tsx — layout RACINE du site.
// Toutes les routes vivent sous /[locale] : ce layout porte donc <html>
// et <body>, ce qui permet enfin un lang correct par langue.
// ============================================================
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { routing } from "@/i18n/routing";
import { SITE_URL, v3Robots } from "@/app/components/hiry/seo";
import Footer from "@/app/components/hiry/Footer";
import ScrollReveal from "@/app/components/hiry/ScrollReveal";
import Providers from "@/app/components/shared/Providers";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/app/components/shared/GoogleTagManager";
import { MicrosoftClarity } from "@/app/components/shared/MicrosoftClarity";
import JsonLd from "@/app/components/shared/JsonLd";

import "@/app/globals.css";
import "@/app/animations.css";
import "./hiry.css";

// Texte / titres — Google Sans (HANDOFF §2), self-hostée depuis
// fonts.gstatic.com. Fichier variable unique : un seul woff2 couvre 400→700.
const googleSans = localFont({
  src: [
    {
      path: "../../public/fonts/GoogleSans-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      // fichier statique (pas de table fvar) : un seul poids, contrairement au
      // romain qui est variable 400→700.
      path: "../../public/fonts/GoogleSans-italic-latin.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-hiry-sans",
  fallback: ["Archivo", "system-ui", "sans-serif"],
});

// Italiques d'accent.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-hiry-serif",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: "%s | Hiry" },
    description: t("description"),
    robots: v3Robots,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      url: `${SITE_URL}/${locale}`,
      siteName: "Hiry",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title"),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    icons: { icon: "/favicon-hiry.png", apple: "/favicon-hiry.png" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Permet le rendu statique des pages sous [locale].
  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Découverte automatique du flux par les lecteurs RSS */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Le Mag Hiry — flux RSS"
          href="/mag/feed.xml"
        />
      </head>
      <body
        className={`hiry-root ${googleSans.variable} ${serif.variable} min-h-screen`}
      >
        <GoogleTagManagerNoScript />
        <GoogleTagManagerHead />
        <MicrosoftClarity />
        <JsonLd />
        <NextIntlClientProvider>
          <ViewTransitions>
            {/* <TopBar /> et <Nav /> sont rendus par chaque page : les liens
                centraux, la teinte d'accent et l'onglet actif diffèrent. */}
            <Providers>{children}</Providers>
            <Footer />
            <ScrollReveal />
          </ViewTransitions>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
