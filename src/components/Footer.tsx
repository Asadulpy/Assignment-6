import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="FITLOG logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          <span className="text-lg font-black tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}