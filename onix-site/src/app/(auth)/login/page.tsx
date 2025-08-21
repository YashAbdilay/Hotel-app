"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      if (res?.error) {
        setError("Identifiants invalides");
      }
    } catch (err) {
      setError("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-white">
      <div className="relative hidden md:flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/20 via-blue-500/10 to-transparent" />
        <div className="relative max-w-md">
          <LogoONIX className="w-28 h-28 mb-6" />
          <h1 className="text-4xl font-semibold tracking-tight">ONIX</h1>
          <p className="text-zinc-300 mt-2">
            Agence de commissions des marchandises: facilitez vos achats entre le pays et l’étranger.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li>• Sécurité renforcée</li>
            <li>• Suivi transparent</li>
            <li>• Experts dédiés</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8 md:hidden">
            <LogoONIX className="w-10 h-10" />
            <span className="text-2xl font-semibold">ONIX</span>
          </div>

          <h2 className="text-2xl font-semibold">Connexion</h2>
          <p className="text-sm text-zinc-400 mt-1">Accédez à votre espace sécurisé</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mot de passe</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
                placeholder="Votre mot de passe"
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 font-medium disabled:opacity-60"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="text-sm text-zinc-400 mt-4">
            Pas encore de compte ? <a href="#" className="text-purple-400 hover:text-purple-300">Contactez-nous</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoONIX({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Logo ONIX">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="url(#g)" opacity="0.15" />
      <path d="M40 75 L75 40 L125 160 L160 125" stroke="url(#g)" strokeWidth="12" fill="none" strokeLinecap="round" />
      <text x="100" y="118" textAnchor="middle" fontSize="48" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">ONIX</text>
    </svg>
  );
}