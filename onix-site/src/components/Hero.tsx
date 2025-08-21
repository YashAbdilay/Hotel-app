import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute left-1/2 top-[-10%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/40 to-cyan-500/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Sécurité et transparence garanties
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Commission d’achat international<br className="hidden sm:block" /> simple, sûre et rapide.
        </h1>
        <p className="mt-5 text-lg opacity-90 max-w-2xl">
          ONIX gère vos achats de marchandises entre le pays et l’étranger: négociation, qualité, logistique et suivi.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link href="/contact" className="px-5 py-2.5 rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-500 hover:to-cyan-400">Demander un devis</Link>
          <a href="#features" className="px-5 py-2.5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5">Nos atouts</a>
        </div>
      </div>
    </section>
  );
}