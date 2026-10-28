import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";
import BeforeAfterToggle from "./BeforeAfterToggle";

/** 07 · Avant / après Hiry. */
export default function BeforeAfter({ c }: { c: EntreprisesContent["beforeAfter"] }) {
  return (
    <section id="avant-apres" aria-labelledby="ba-title" className="ent-screen" style={SECTION}>
      <BeforeAfterToggle c={c} head={<SectionHead id="ba-title" label={c.label} title={c.title} />} />
    </section>
  );
}
