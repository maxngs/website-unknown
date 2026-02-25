// app/entreprises/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprises & Recruteurs — Recrutez les bons talents, sans erreur",
  description:
    "Hiry décode les attentes de la nouvelle génération pour vous connecter aux talents qui partagent votre culture d'entreprise. Matching augmenté, gain de temps garanti.",
  alternates: {
    canonical: "/entreprises",
  },
  openGraph: {
    title: "Entreprises & Recruteurs — Recrutez les bons talents | Hiry",
    description:
      "Hiry décode les attentes de la nouvelle génération pour vous connecter aux talents qui partagent votre culture d'entreprise. Matching augmenté, gain de temps garanti.",
    url: "https://hiry.fr/entreprises",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function EntreprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
