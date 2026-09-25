"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-gray-800 bg-[#111111] text-white">
      <div className="navbar mx-auto max-w-7xl px-6 lg:px-10">

        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
          

            <span className="text-xl font-black tracking-[0.15em]">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden md:flex">
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-bold uppercase tracking-wide transition ${
                isWorkoutActive
                  ? "text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`text-sm font-bold uppercase tracking-wide transition ${
                isPlanActive
                  ? "text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="bg-[#ccff00] px-3 py-2 text-xs font-black uppercase text-black transition hover:bg-[#b8e600]"
          >
            Plan {plan.length}
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="border border-gray-600 px-3 py-2 text-xs font-black uppercase text-white transition hover:border-white"
          >
            Saved {saved.length}
          </Link>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-gray-800 px-6 py-3 md:hidden">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-bold uppercase ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}