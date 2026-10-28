"use client";

/**
 * Défilement vers une section de la page Entreprises.
 *
 * Les sections empilées sont `position: sticky` : une section déjà passée
 * reste collée en haut, sous les suivantes. `scrollIntoView` la croirait
 * visible et ne bougerait pas. On calcule donc sa position « dans le flux »
 * (haut du parent + hauteur des éléments qui la précèdent).
 */
export function scrollToSection(target: HTMLElement, smooth = true) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // "instant" et non "auto" : le <html> porte scroll-behavior: smooth.
  const behavior: ScrollBehavior = smooth && !reduce ? "smooth" : "instant";
  const parent = target.parentElement;
  if (!parent || getComputedStyle(target).position !== "sticky") {
    target.scrollIntoView({ behavior, block: "start" });
    return;
  }
  let top = parent.getBoundingClientRect().top + window.scrollY;
  for (const sibling of Array.from(parent.children)) {
    if (sibling === target) break;
    top += (sibling as HTMLElement).offsetHeight;
  }
  window.scrollTo({ top: top - 72, behavior });
}
