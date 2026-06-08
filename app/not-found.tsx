// app/not-found.tsx — Server Component
// Page 404 personnalisée : redirection douce vers les piliers du site.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Home } from "lucide-react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez votre chemin parmi nos univers.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  {
    label: "Candidats",
    href: "/candidats",
    body: "Révèle ton potentiel avec Hiron, en 7 minutes.",
  },
  {
    label: "Entreprises",
    href: "/entreprises",
    body: "5 profils qualifiés au lieu de 70 CV à trier.",
  },
  {
    label: "Écoles",
    href: "/ecoles",
    body: "Pilotez l'insertion de vos promos avec la data.",
  },
  {
    label: "Le Mag",
    href: "/mag",
    body: "Décryptages, guides et données sur le recrutement.",
  },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <Navbar />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-300/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <header className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
            <Compass size={14} />
            <span>Erreur 404 · Page introuvable</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
            Pas de panique,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              on remet d&apos;équerre.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            La page que vous cherchez n&apos;existe pas, a été déplacée, ou est
            peut-être encore en préparation. Voici par où vous pourriez
            continuer.
          </p>
        </header>

        <section className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-5 block">
            Quatre univers Hiry
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group flex items-start justify-between gap-4 p-7 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight mb-1">
                    {d.label}
                  </p>
                  <p className="text-sm text-slate-500 font-medium leading-snug">
                    {d.body}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-slate-300 group-hover:text-slate-700 group-hover:rotate-12 transition-all"
                />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <Home size={14} />
            Retour à l&apos;accueil
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
