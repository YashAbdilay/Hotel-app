export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-black text-white">
      <div className="animate-pulse text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-purple-600/30" />
        <p className="text-zinc-300">Chargement…</p>
      </div>
    </div>
  );
}