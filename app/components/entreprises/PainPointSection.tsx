"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  {
    stat: "8 740 €",
    title: "Le coût d'un échec",
    desc: "Un recrutement raté vous coûte jusqu'à 8 740 €. Pour les TPE/PME, 43% des contrats d'alternance sont rompus avant la fin, souvent à cause d'une inadéquation culturelle.",
    highlight: "43% des contrats rompus",
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-600",
  },
  {
    stat: "76%",
    title: "Le temps, c'est de l'argent",
    desc: "Vous perdez des jours à trier des CV non pertinents. La difficulté N°1 pour 76% des entreprises est le 'profil inadéquat' des candidats.",
    highlight: "Profil inadéquat = difficulté N°1",
    color: "from-rose-500 to-pink-500",
    textColor: "text-rose-600",
  },
  {
    stat: "80%",
    title: "Le CV ne dit pas tout",
    desc: "80% des employeurs jugent les soft skills plus importantes, mais le CV est un mauvais outil pour les évaluer. Vous recrutez sur le passé, pas sur le potentiel.",
    highlight: "Passé ≠ Potentiel",
    color: "from-violet-500 to-purple-500",
    textColor: "text-violet-600",
  },
];

const PainPointSection = () => (
  <section className="relative z-10 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header — left aligned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 text-xs font-bold mb-5">
          <AlertTriangle size={14} />
          <span>Le constat est sans appel</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
          Recruter un jeune talent :{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            un pari coûteux
          </span>
        </h2>
        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
          Un recrutement n&apos;est jamais anodin. C&apos;est un investissement vital pour votre équipe. Mais les outils traditionnels transforment cette opportunité en un processus long, inefficace et terriblement risqué.
        </p>
      </motion.div>

      {/* Staggered editorial rows */}
      <div className="space-y-6 md:space-y-0">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-8 md:py-12 ${
              i < painPoints.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            {/* Big stat — alternating position */}
            <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-last md:text-right" : ""}`}>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                className={`text-5xl md:text-7xl font-extrabold bg-gradient-to-r ${point.color} bg-clip-text text-transparent leading-none block`}
              >
                {point.stat}
              </motion.span>
            </div>

            {/* Content */}
            <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-first" : ""}`}>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{point.desc}</p>
            </div>

            {/* Highlight badge */}
            <div className={`md:col-span-3 ${i % 2 === 1 ? "" : "md:text-right"}`}>
              <span className={`inline-block px-4 py-2 rounded-xl text-xs font-bold ${point.textColor} bg-gradient-to-r ${point.color} bg-clip-text text-transparent border border-slate-200`}>
                {point.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointSection;
