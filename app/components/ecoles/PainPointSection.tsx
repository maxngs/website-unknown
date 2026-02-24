"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, Eye, BarChart3, Handshake } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    title: "Des étudiants qui passent entre les mailles du filet",
    desc: "Sans outil de détection, vous découvrez trop tard les étudiants en difficulté d'insertion. Résultat : des statistiques qui chutent et une réputation en jeu.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: Eye,
    title: "Aucune visibilité en temps réel",
    desc: "Vos données d'insertion arrivent des mois après la fin de promo. Impossible de piloter ce qu'on ne mesure pas.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: BarChart3,
    title: "Des KPIs impossibles à prouver",
    desc: "Les classements et accréditations exigent des données fiables. Aujourd'hui, vous les collectez à la main avec des taux de réponse décevants.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Handshake,
    title: "Des relations entreprises sous-exploitées",
    desc: "Vos partenaires attendent des profils qualifiés, mais le matching se fait au hasard des événements et des candidatures spontanées.",
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
          <span>Les défis des établissements</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Piloter l&apos;insertion à{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">l&apos;aveugle</span>,
          c&apos;est terminé.
        </h2>
        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          Les écoles font face à des défis structurels que les tableurs et les enquêtes manuelles ne peuvent plus résoudre.
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
