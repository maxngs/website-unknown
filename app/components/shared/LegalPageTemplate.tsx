// ============================================================
// app/components/shared/LegalPageTemplate.tsx
// Template réutilisable pour toutes les pages légales
// ============================================================
"use client";

import { motion } from "framer-motion";
import { FileText, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface LegalPageTemplateProps {
  title: string;
  description?: string;
}

export default function LegalPageTemplate({
  title,
  description = "Ce document est actuellement en cours de rédaction et sera disponible prochainement. N'hésitez pas à nous contacter pour toute question.",
}: LegalPageTemplateProps) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        className="max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 15 }}
        >
          <FileText size={28} className="text-white/40" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h1>

        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        />

        <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8">
          {description}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
        >
          <ChevronLeft size={16} />
          Retour à l&apos;accueil
        </Link>
      </motion.div>
    </section>
  );
}
