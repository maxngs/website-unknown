"use client";

import { useSyncExternalStore } from "react";
import { scrollToSection } from "./stage";
import type {
  ChecklistKey,
  DemoMode,
  FormuleSouhaitee,
  Problematique,
} from "@/lib/leads/options";

/**
 * Pré-remplissage du formulaire de démo depuis le reste de la page :
 * CTA « vidéo » du hero, cases du bloc « Cochez », cartes tarifaires,
 * encart « volume ». Petit store module, sans contexte React : les
 * sections restent des composants serveur.
 */
export type DemoPrefill = {
  mode?: DemoMode;
  problematique?: Problematique;
  autres?: Problematique[];
  formule?: FormuleSouhaitee;
  checklist?: ChecklistKey[];
};

type State = DemoPrefill & { version: number };

let state: State = { version: 0 };
const listeners = new Set<() => void>();

export function setDemoPrefill(prefill: DemoPrefill) {
  state = { ...state, ...prefill, version: state.version + 1 };
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useDemoPrefill(): State {
  return useSyncExternalStore(subscribe, () => state, () => state);
}

/** Pré-remplit puis amène le visiteur au formulaire (#demo). */
export function goToDemo(prefill: DemoPrefill = {}) {
  setDemoPrefill(prefill);
  const target = document.getElementById("demo");
  if (!target) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  scrollToSection(target);
  history.replaceState(null, "", "#demo");
  // Le focus suit le défilement, pour le clavier et les lecteurs d'écran.
  window.setTimeout(
    () => target.querySelector<HTMLElement>("[data-demo-focus]")?.focus({ preventScroll: true }),
    reduce ? 0 : 600
  );
  return true;
}
