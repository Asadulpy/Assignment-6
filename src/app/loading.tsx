export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#111111] text-white">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}