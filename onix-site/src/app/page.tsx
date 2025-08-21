import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/40 dark:bg-white/5 backdrop-blur">
            <div className="text-lg font-medium mb-2">Sécurité renforcée</div>
            <p className="opacity-80">Contrats clairs, vérification fournisseurs et suivi de paiement sécurisé.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/40 dark:bg-white/5 backdrop-blur">
            <div className="text-lg font-medium mb-2">Transparence totale</div>
            <p className="opacity-80">Suivez chaque étape: devis, qualité, expédition, livraison.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/40 dark:bg-white/5 backdrop-blur">
            <div className="text-lg font-medium mb-2">Vitesse & efficacité</div>
            <p className="opacity-80">Réseau international et process optimisés pour agir vite.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
