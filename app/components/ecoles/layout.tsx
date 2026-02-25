// app/ecoles/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Écoles & Universités — Suivez vos étudiants et vos relations entreprises en temps réel",
  description:
    "Tableau de bord intelligent pour piloter l'insertion professionnelle de vos étudiants. Données exploitables, alertes automatiques, partenariats entreprises facilités.",
  alternates: {
    canonical: "/ecoles",
  },
  openGraph: {
    title: "Écoles & Universités — Pilotez l'insertion professionnelle | Hiry",
    description:
      "Tableau de bord intelligent pour piloter l'insertion professionnelle de vos étudiants. Données exploitables, alertes automatiques, partenariats entreprises facilités.",
    url: "https://hiry.fr/ecoles",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function EcolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
