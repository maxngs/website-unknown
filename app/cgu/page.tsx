// app/cgu/page.tsx
import type { Metadata } from "next";
import CGUContent from "./content";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions Générales d'Utilisation du Service Hiry — Version 1.0, en vigueur depuis le 24 mars 2026.",
  alternates: { canonical: "/cgu" },
};

export default function CGUPage() {
  return <CGUContent />;
}
