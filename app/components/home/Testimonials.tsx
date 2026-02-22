"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camille Moreau",
      role: "Diplômée Marketing Digital",
      avatar: "C",
      avatarColor: "bg-pink-500",
      rating: 5,
      text: "En 2 semaines, j'avais 3 entretiens pour des postes qui me correspondent vraiment. Le matching par soft skills, c'est un game-changer.",
      tag: "Candidate",
      tagColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      name: "Thomas Lefèvre",
      role: "DRH · Nextera Solutions",
      avatar: "T",
      avatarColor: "bg-indigo-500",
      rating: 5,
      text: "On a divisé par 3 notre temps de sourcing. Les profils proposés par l'IA sont d'une pertinence remarquable. Nos managers sont ravis.",
      tag: "Entreprise",
      tagColor: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      name: "Sophie Durand",
      role: "Directrice des Relations Entreprises · ESSCA",
      avatar: "S",
      avatarColor: "bg-emerald-500",
      rating: 5,
      text: "Le tableau de bord école est une révolution. On suit l'insertion de nos promos en temps réel avec des données exploitables.",
      tag: "École",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-100 text-amber-600 text-xs font-bold mb-5 shadow-sm">
            <Star size={14} fill="currentColor" />
            <span>Ils nous font confiance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Ce qu&apos;ils disent de{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hiry</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} />
              </div>

              {/* Tag */}
              <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold border mb-6 ${t.tagColor}`}>
                {t.tag}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-sm font-bold text-white shadow-inner`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

