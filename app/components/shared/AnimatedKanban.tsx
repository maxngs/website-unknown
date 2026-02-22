"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const KANBAN_CARDS = [
  { id: "SM", gradient: "from-blue-500 to-indigo-600" },
  { id: "LD", gradient: "from-violet-500 to-purple-600" },
  { id: "AT", gradient: "from-cyan-500 to-blue-600" },
  { id: "ET", gradient: "from-amber-500 to-orange-600" },
  { id: "JR", gradient: "from-rose-500 to-pink-600" },
  { id: "MK", gradient: "from-purple-500 to-indigo-600" },
  { id: "CL", gradient: "from-fuchsia-500 to-purple-600" },
  { id: "SB", gradient: "from-emerald-500 to-teal-600" },
];

const KANBAN_STATES: Record<string, string[]>[] = [
  { "Nouveaux": ["SM", "LD", "AT"], "Entretien": ["ET", "JR"], "Shortlist": ["MK", "CL"], "Offre": ["SB"] },
  { "Nouveaux": ["LD", "AT"], "Entretien": ["SM", "ET", "JR"], "Shortlist": ["MK", "CL"], "Offre": ["SB"] },
  { "Nouveaux": ["LD", "AT"], "Entretien": ["ET", "JR"], "Shortlist": ["SM", "CL"], "Offre": ["MK", "SB"] },
  { "Nouveaux": ["LD", "AT"], "Entretien": ["ET", "JR"], "Shortlist": ["CL"], "Offre": ["SM", "MK", "SB"] },
];

const KANBAN_COLS = [
  { key: "Nouveaux", color: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { key: "Entretien", color: "bg-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
  { key: "Shortlist", color: "bg-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
  { key: "Offre", color: "bg-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
];

export const AnimatedKanban = () => {
  const [stateIdx, setStateIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setStateIdx((prev) => (prev + 1) % KANBAN_STATES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isInView]);

  const currentState = KANBAN_STATES[stateIdx];

  return (
    <div ref={ref} className="grid grid-cols-4 gap-1.5">
      {KANBAN_COLS.map((col) => {
        const cardIds = currentState[col.key] || [];
        return (
          <div key={col.key} className={`${col.bg} border ${col.border} rounded-lg p-1.5`}>
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <div className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                <span className="text-[7px] font-bold text-slate-600">{col.key}</span>
              </div>
              <motion.span key={cardIds.length} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="text-[7px] font-bold text-slate-400">
                {cardIds.length}
              </motion.span>
            </div>
            <div className="space-y-1 min-h-[28px]">
              <AnimatePresence mode="popLayout">
                {cardIds.map((id) => {
                  const card = KANBAN_CARDS.find((c) => c.id === id)!;
                  return (
                    <motion.div
                      key={id}
                      layoutId={`k-${id}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="bg-white rounded-md p-1.5 shadow-sm border border-white flex items-center gap-1.5"
                    >
                      <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${card.gradient} flex items-center justify-center text-[6px] font-bold text-white shrink-0`}>
                        {card.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-[3px] bg-slate-200 rounded-full w-full" />
                        <div className="h-[2px] bg-slate-100 rounded-full w-3/4 mt-0.5" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};
