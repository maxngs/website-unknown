import { getEntreprisesContent } from "@/content/entreprises";
import { entreprisesOg, OG_SIZE } from "@/app/components/hiry/entreprises/og";

export const alt = "Hiry, l'ATS AI-native";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getEntreprisesContent(locale);
  return entreprisesOg({ eyebrow: "ATS AI-native", title: c.meta.ogTitle, footer: c.hero.subtitle });
}
