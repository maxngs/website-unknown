import { getTranslations } from "next-intl/server";

/**
 * Y a-t-il des témoignages réels à afficher ?
 * Tant que non, la section de la home est masquée — et les liens qui la
 * visent (nav « Témoignages », footer « Études de cas ») doivent l'être aussi,
 * sans quoi ils pointent vers une ancre inexistante.
 */
export async function hasTestimonials(): Promise<boolean> {
  const t = await getTranslations("testimonials");
  return (t.raw("items") as unknown[]).length > 0;
}
