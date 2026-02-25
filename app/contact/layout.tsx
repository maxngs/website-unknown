// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet",
  description:
    "Une question sur Hiry ? Contactez notre équipe. Candidats, entreprises ou écoles, nous sommes là pour vous accompagner.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez Hiry — Parlons de votre projet",
    description:
      "Une question sur Hiry ? Contactez notre équipe. Candidats, entreprises ou écoles, nous sommes là pour vous accompagner.",
    url: "https://hiry.fr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
