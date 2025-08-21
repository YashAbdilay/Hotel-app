"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Contact</h1>
      <p className="opacity-80 mb-6">Expliquez-nous votre besoin, nous reviendrons vers vous rapidement.</p>
      {sent ? (
        <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
          Merci, votre message a été envoyé.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-purple-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-purple-500" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={5} className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-purple-500" required />
          </div>
          <button disabled={loading} className="w-full inline-flex items-center justify-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 font-medium disabled:opacity-60">
            {loading ? "Envoi…" : "Envoyer"}
          </button>
        </form>
      )}
    </div>
  );
}