// ============================================================
// app/components/shared/LegalContent.tsx
// Composant réutilisable pour les pages légales avec contenu complet
// ============================================================
"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface LegalSection {
  title: string;
  level?: 1 | 2 | 3;
  content?: string;
  list?: string[];
  after?: string;
}

interface LegalContentProps {
  icon: ReactNode;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
  contactEmail?: string;
  contactLabel?: string;
}

export default function LegalContent({
  icon,
  title,
  lastUpdated,
  intro,
  sections,
  contactEmail,
  contactLabel,
}: LegalContentProps) {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-indigo-50/80 to-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-600 transition-colors mb-8 font-medium"
            >
              <ChevronLeft size={16} />
              Retour à l&apos;accueil
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                {icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {title}
              </h1>
            </div>

            <p className="text-sm text-slate-400 font-medium">
              Dernière mise à jour : {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-10"
        >
          {intro && (
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              {intro}
            </p>
          )}

          {sections.map((section, i) => {
            const level = section.level ?? 1;
            const headingClass =
              level === 3
                ? "text-base font-semibold text-slate-800"
                : level === 2
                  ? "text-[17px] font-bold text-slate-800"
                  : "text-lg md:text-xl font-bold text-slate-900";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.05 }}
                className="space-y-4"
              >
                {level === 1 && (
                  <h2 className={headingClass}>{section.title}</h2>
                )}
                {level === 2 && (
                  <h3 className={headingClass}>{section.title}</h3>
                )}
                {level === 3 && (
                  <h4 className={headingClass}>{section.title}</h4>
                )}

                {section.content?.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-sm md:text-[15px] text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2.5 pl-1">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 text-sm md:text-[15px] text-slate-600 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.after?.split("\n\n").map((paragraph, j) => (
                  <p
                    key={`after-${j}`}
                    className="text-sm md:text-[15px] text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            );
          })}

          {contactEmail && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 leading-relaxed">
                {contactLabel ||
                  "Pour toute question concernant ce document, contactez-nous à"}{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
