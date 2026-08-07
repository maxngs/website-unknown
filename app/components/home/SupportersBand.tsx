// app/components/home/SupportersBand.tsx — Server Component
// Bande « Ils nous soutiennent » (soutiens / écosystème), placée en bas de page.
// Éditez le tableau SUPPORTERS pour ajouter / retirer un soutien.

const SUPPORTERS = [
  "Pépite France",
  "Viva Technology",
  "L'Escalator",
  "Google for Startups",
  "Paris School of Business",
];

const SupportersBand = () => (
  <div className="relative z-10 py-12 md:py-16 border-t border-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
        Ils nous soutiennent
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
        {SUPPORTERS.map((l) => (
          <span
            key={l}
            className="text-sm md:text-base font-extrabold text-slate-900 whitespace-nowrap"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default SupportersBand;
