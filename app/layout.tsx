// ============================================================
// app/layout.tsx
// Métadonnées SEO globales + Open Graph + Twitter Cards + GTM
// ============================================================
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Providers from "./components/shared/Providers";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "./components/shared/GoogleTagManager";
import { MicrosoftClarity } from "./components/shared/MicrosoftClarity";
import JsonLd from "./components/shared/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://hiry.fr";

export const metadata: Metadata = {
  // ── Titre avec template ──
  title: {
    default: "Hiry — Le recrutement réinventé | Candidats, Entreprises & Écoles",
    template: "%s | Hiry",
  },

  // ── Description ──
  description:
    "La première plateforme qui utilise l'IA pour révéler le potentiel des talents et simplifier la mise en relation avec les entreprises. Matching intelligent par soft skills, culture d'entreprise et potentiel réel.",

  // ── URL canonique ──
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // ── Mots-clés ──
  keywords: [
    "recrutement IA",
    "matching candidats entreprises",
    "plateforme recrutement intelligente",
    "soft skills",
    "stage alternance emploi",
    "recrutement PME",
    "insertion professionnelle écoles",
    "Hiry",
  ],

  // ── Auteurs ──
  authors: [{ name: "Hiry", url: siteUrl }],
  creator: "Hiry",

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, etc.) ──
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Hiry",
    title: "Hiry — Le recrutement réinventé | Candidats, Entreprises & Écoles",
    description:
      "La première plateforme qui utilise l'IA pour révéler le potentiel des talents et simplifier la mise en relation avec les entreprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hiry — Le recrutement réinventé | Candidats, Entreprises & Écoles",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "Hiry — Le recrutement réinventé | Candidats, Entreprises & Écoles",
    description:
      "La première plateforme qui utilise l'IA pour révéler le potentiel des talents et simplifier la mise en relation avec les entreprises.",
    images: ["/og-image.png"],
  },

  // ── Icônes ──
  icons: {
    icon: "/favicon-hiry.png",
    apple: "/favicon-hiry.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Lien RSS pour la découverte automatique par les lecteurs de flux */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Le Mag Hiry — flux RSS"
          href="/mag/feed.xml"
        />
        {/* Sans JS, Framer Motion laisse les éléments à opacity:0. Ce fix les rend visibles. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }`,
            }}
          />
        </noscript>
      </head>
      <body
        className={`${poppins.className} bg-white text-slate-900 antialiased min-h-screen`}
      >
        <GoogleTagManagerNoScript />
        <GoogleTagManagerHead />
        <MicrosoftClarity />
        <JsonLd />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
