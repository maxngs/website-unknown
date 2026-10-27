import { getEntreprisesContent } from "@/content/entreprises";
import { entreprisesOg, OG_SIZE } from "@/app/components/hiry/entreprises/og";

export const alt = "Démo de Hiry, l'ATS AI-native";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getEntreprisesContent(locale);
  return entreprisesOg({ eyebrow: c.demoPage.badge, title: c.meta.demoOgTitle, footer: c.demo.facts.join(" · ") });
}
