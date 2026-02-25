// app/candidats/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidats & Étudiants — Trouve le job qui te ressemble",
  description:
    "Stage, alternance ou premier emploi : Hiry utilise l'IA pour révéler ton potentiel et te matcher avec les entreprises qui te correspondent vraiment.",
  alternates: {
    canonical: "/candidats",
  },
  openGraph: {
    title: "Candidats & Étudiants — Trouve le job qui te ressemble | Hiry",
    description:
      "Stage, alternance ou premier emploi : Hiry utilise l'IA pour révéler ton potentiel et te matcher avec les entreprises qui te correspondent vraiment.",
    url: "https://hiry.fr/candidats",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function CandidatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
