"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Plus, Minus } from "lucide-react";

const faq = [
  { q: "Concrètement, c'est quoi Hiry ?", a: "Pas un job board. C'est la première plateforme qui utilise l'IA pour te comprendre et révéler ton potentiel afin de te connecter aux bonnes entreprises." },
  { q: "En quoi c'est différent ?", a: "On analyse ta personnalité et tes valeurs, pas des mots-clés de CV. Chaque match est expliqué en transparence." },
  { q: "Comment évaluez-vous la culture ?", a: "Hiron analyse valeurs, management et ambiance, puis croise avec ton profil de personnalité." },
  { q: "C'est gratuit ?", a: "100% gratuit pour les candidats. Les entreprises paient pour accéder aux talents." },
  { q: "Le CV est-il encore utile ?", a: "Tu peux l'importer pour accélérer, mais Hiry va bien au-delà de ce qu'un CV peut montrer." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="relative z-10 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-5/12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><MessageSquare size={14} /><span>FAQ</span></div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">Tes questions ? <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Nos réponses.</span></h2>
      </motion.div>
      <div className="lg:w-7/12 space-y-3">{faq.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${openIdx === i ? "bg-white border-indigo-200 shadow-lg shadow-indigo-100/30" : "bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white"}`}>
            <div className="flex items-center justify-between gap-4"><h3 className="text-sm md:text-base font-bold text-slate-900">{item.q}</h3><div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIdx === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"}`}>{openIdx === i ? <Minus size={16} /> : <Plus size={16} />}</div></div>
            <AnimatePresence>{openIdx === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="text-sm text-slate-500 font-medium leading-relaxed mt-4 pt-4 border-t border-slate-100">{item.a}</p></motion.div>)}</AnimatePresence>
          </button>
        </motion.div>
      ))}</div>
    </div></div></section>
  );
};


export default FAQSection;
