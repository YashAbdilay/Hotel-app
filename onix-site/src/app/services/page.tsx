import { prisma } from "@/lib/prisma";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { title: "asc" } });
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">Nos services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.length === 0 && (
          <p className="opacity-80">Aucun service pour le moment.</p>
        )}
        {services.map((s) => (
          <article key={s.id} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/40 dark:bg-white/5 backdrop-blur">
            <h2 className="text-lg font-medium mb-1">{s.title}</h2>
            {s.summary && <p className="text-sm opacity-80">{s.summary}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}