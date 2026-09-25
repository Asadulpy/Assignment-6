import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left content */}
        <div className="flex flex-col justify-center px-6 py-20 lg:px-12 lg:py-24">

          <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Twelve lifts covering every major muscle group.
            Build strength, track progress, and train with purpose.
          </p>

          <Link
            href="#library"
            className="mt-10 inline-flex w-fit items-center gap-4 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-[#b8e600]"
          >
            BROWSE WORKOUTS

            <span className="text-xl">
              →
            </span>
          </Link>

        </div>

        {/* Hero image */}
        <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
          <Image
            src="/banner.png"
            alt="Person working out"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}