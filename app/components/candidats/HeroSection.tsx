"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { fadeUp, stagger } from "./animations";
import DashboardMockup from "./DashboardMockup";
import { useLeadModal } from "../shared/Providers";
import Image from "next/image";

const HeroSection = () => {
  const { open } = useLeadModal();

  return (
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
    <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
      <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm"><Sparkles size={14} /><span>Pour les Candidats & Étudiants</span></motion.div>
      <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
        <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Le stage</span><motion.span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200/50 to-purple-200/50 rounded-full -z-10" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} style={{ originX: 0 }} /></span>, <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">l&apos;alternance</span></span>{" "}ou <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">le premier emploi</span></span><br className="hidden sm:block" /> de tes rêves.
      </motion.h1>
      <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">Ton potentiel ne tient pas sur une page. Dis-nous qui tu es, et on te présente les entreprises faites pour toi.</motion.p>
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={open} className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">Révéler mon potentiel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></button>
        <a href="#how" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">Comment ça marche</a>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4">
        <div className="flex -space-x-2">
          {[
            { src: "/avatars/user1.png", alt: "Utilisateur" },
            { src: "/avatars/user2.jpg", alt: "Utilisateur" },
            { src: "/avatars/user3.png", alt: "Utilisateur" },
            { src: "/avatars/user4.png", alt: "Utilisateur" },
          ].map((a, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden relative shrink-0">
              <Image src={a.src} alt={a.alt} width={32} height={32} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <div><div className="flex items-center gap-0.5">{[1,2,3,4,5].map(s=><Star key={s} size={12} className="text-amber-400" fill="currentColor" />)}</div><p className="text-xs text-slate-500 font-medium">Testé par <span className="text-slate-900 font-bold">200+</span> talents</p></div>
      </motion.div>
    </motion.div>
    <div className="mt-14 md:mt-20 max-w-5xl mx-auto"><DashboardMockup /></div>
  </div>
  );
};

export default HeroSection;
