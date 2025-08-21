export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img src="/onix-logo.svg" alt="ONIX" width={20} height={20} />
            <span className="font-semibold">ONIX</span>
          </div>
          <p className="opacity-80 mt-3">Agence des commissions d’achat international. Sécurité, transparence, efficacité.</p>
        </div>
        <div>
          <p className="font-medium mb-3">Société</p>
          <ul className="space-y-2 opacity-80">
            <li><a className="hover:opacity-100" href="/a-propos">À propos</a></li>
            <li><a className="hover:opacity-100" href="/services">Services</a></li>
            <li><a className="hover:opacity-100" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Légal</p>
          <ul className="space-y-2 opacity-80">
            <li><a className="hover:opacity-100" href="#">Confidentialité</a></li>
            <li><a className="hover:opacity-100" href="#">Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} ONIX. Tous droits réservés.
      </div>
    </footer>
  );
}