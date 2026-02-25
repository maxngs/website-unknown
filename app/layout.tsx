// ============================================================
// app/layout.tsx
// Métadonnées SEO globales + Open Graph + Twitter Cards
// ============================================================
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./components/shared/Providers";

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
    title: "Hiry — Le recrutement propulsé par l'IA",
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
      <body
        className={`${poppins.className} bg-white text-slate-900 antialiased min-h-screen`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
