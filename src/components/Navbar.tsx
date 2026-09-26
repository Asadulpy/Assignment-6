"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-gray-800 bg-[#111216] text-white">

      {/* Main Navbar */}
      <div className="navbar mx-auto max-w-7xl px-6 lg:px-10">

        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="FITLOG logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />

            <span className="text-lg font-black tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden md:flex">
          <nav className="flex items-center gap-8">

            <Link
              href="/"
              className={`text-xs font-bold transition ${
                isWorkoutActive
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                isPlanActive
                  ? "bg-[#172500] text-[#ccff00]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              My Plan
            </Link>

          </nav>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition hover:bg-[#b8e600]"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-black text-[#ccff00]">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-gray-700 px-3 py-1.5 text-xs font-bold text-gray-300 transition hover:border-gray-400 hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-800 px-1 text-[10px] font-black">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-gray-800 px-6 py-3 md:hidden">
        <nav className="flex items-center gap-6">

          <Link
            href="/"
            className={`text-xs font-bold ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-gray-500"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`text-xs font-bold ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-gray-500"
            }`}
          >
            My Plan
          </Link>

        </nav>
      </div>

    </header>
  );
}