// app/components/ecoles/PainPointSection.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, Zap, EyeOff, Building2 } from "lucide-react";

const pains = [
  {
    icon: BookOpen,
    title: "Votre Career Center ? C'est un annuaire.",
    desc: "Vos étudiants ne l'utilisent pas, et c'est normal. Un outil statique où il faut chercher soi-même ne génère ni engagement, ni adoption. Résultat : un investissement sous-exploité.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: Zap,
    title: "Méthode traditonnelle = friction maximale",
    desc: "Vos étudiants décrochent dès la première étape. Rédiger un CV, personnaliser une lettre… la majorité abandonne avant même de postuler. Trop de friction tue l'insertion.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Building2,
    title: "Le marché caché reste… caché",
    desc: "TPE, PME, startups : elles représentent 99% des entreprises mais n'apparaissent jamais sur vos plateformes. Vos étudiants passent à côté de milliers d'opportunités.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: EyeOff,
    title: "Zéro visibilité sur ce qui se passe vraiment",
    desc: "Qui postule ? Où ? Quand ? Pourquoi ? Aujourd'hui vous n'en savez rien. Sans données réelles, impossible de piloter l'insertion ni de prouver vos résultats.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

const PainPointSection = () => (
  <section className="relative z-10 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 text-xs font-bold mb-6">
          <Shield size={14} />
          <span>Le constat</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Vos étudiants n&apos;adoptent pas votre{" "}
          <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Career Center</span> ?
        </h2>
        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          C&apos;est normal. Les outils d&apos;hier ne répondent plus aux attentes des étudiants d&apos;aujourd&apos;hui, ni aux exigences de pilotage de votre établissement.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className={`group relative bg-white rounded-2xl p-6 md:p-8 border ${pain.border} hover:shadow-xl transition-all duration-500`}
          >
            <div className={`w-12 h-12 ${pain.bg} ${pain.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <pain.icon size={22} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{pain.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointSection;
