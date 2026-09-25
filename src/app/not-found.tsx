import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#111111] px-6 text-white">
      <div className="text-center">

        <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          404
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          PAGE NOT FOUND
        </h1>

        <p className="mt-4 text-white/50">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn mt-8 border-none bg-[#ccff00] font-black text-black hover:bg-[#b8e600]"
        >
          GO TO WORKOUTS
        </Link>

      </div>
    </main>
  );
}