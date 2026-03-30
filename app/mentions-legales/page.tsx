// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import MentionsLegalesContent from "./content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site hiry.fr — Éditeur, directeur de la publication et hébergement.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
