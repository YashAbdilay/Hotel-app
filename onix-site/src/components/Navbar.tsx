import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 bg-white/60 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <img src="/onix-logo.svg" alt="ONIX" width={28} height={28} className="select-none" />
          <span className="font-semibold tracking-tight">ONIX</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="opacity-80 hover:opacity-100">Accueil</Link>
          <Link href="/services" className="opacity-80 hover:opacity-100">Services</Link>
          <Link href="/a-propos" className="opacity-80 hover:opacity-100">À propos</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link href="/login" className="text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5">Connexion</Link>
          <Link href="/contact" className="text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-500 hover:to-cyan-400">Demander un devis</Link>
        </div>
      </div>
    </nav>
  );
}