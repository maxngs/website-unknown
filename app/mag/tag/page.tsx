// app/mag/tag/page.tsx — Server Component
// Tag cloud : index transversal de tous les tags (toutes audiences confondues).
import type { Metadata } from "next";
import Link from "next/link";
import { Tag } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/blog/Breadcrumb";
import { getAllTags } from "@/lib/blog";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "Tags du Mag — Recherche transversale",
  description:
    "Tous les sujets traités dans Le Mag Hiry. Filtrez les articles par thème — alternance, IA recrutement, soft skills, culture fit, et plus.",
  alternates: { canonical: "/mag/tag" },
  openGraph: {
    type: "website",
    title: "Tags du Mag — Recherche transversale",
    description:
      "Tous les sujets traités dans Le Mag Hiry, classés par fréquence.",
    url: `${SITE_URL}/mag/tag`,
  },
};

export default function TagsIndexPage() {
  const tags = getAllTags();

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Le Mag", href: "/mag" },
              { label: "Tags" },
            ]}
          />
        </div>

        <header className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold mb-6 shadow-sm">
            <Tag size={14} />
            <span>Filtrage transversal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
            Tags du Mag
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            {tags.length} sujets transversaux pour explorer Le Mag autrement
            que par silo. Cliquez sur un tag pour voir tous les articles
            associés.
          </p>
        </header>

        {tags.length === 0 ? (
          <p className="text-sm text-slate-500 font-medium">
            Aucun article publié pour l&apos;instant.
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <Link
                key={t.slug}
                href={`/mag/tag/${t.slug}`}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {t.tag}
                </span>
                <span className="text-xs font-bold text-slate-400 px-1.5 py-0.5 rounded-md bg-slate-50">
                  {t.count}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
