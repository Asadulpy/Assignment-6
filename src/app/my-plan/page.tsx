"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFitLog } from "../../context/FitLogContext";

export default function MyPlan() {
  const { plan, saved, removeFromPlan } = useFitLog();

  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.rating - b.rating;
  });

  function handleDone(id: number) {
    removeFromPlan(id);
    toast.success("Workout marked as done.");
  }

  function handleRemove(id: number) {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan.");
  }

  return (
    <main className="min-h-screen bg-[#111111] px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e] sm:grid-cols-3">

          <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.reduce(
                (total, workout) =>
                  total + workout.duration,
                0
              )}
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.reduce(
                (total, workout) =>
                  total + workout.caloriesBurned,
                0
              )}
            </p>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="tablist"
            className="inline-flex w-fit rounded-lg border border-gray-800 bg-[#15181e] p-1"
          >
            <button
              role="tab"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-xs font-bold transition ${activeTab === "plan"
                  ? "bg-[#20242c] text-white"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              TODAY&apos;S PLAN
            </button>

            <button
              role="tab"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs font-bold transition ${activeTab === "saved"
                  ? "bg-[#20242c] text-white"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              SAVED
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs text-gray-500">
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as
                  | "duration"
                  | "calories"
                  | "rating"
                )
              }
              className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-xs text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Today's Plan */}
        {activeTab === "plan" && (
          <section className="mt-4">

            {plan.length === 0 ? (
              <div className="rounded-xl border border-gray-800 bg-[#15181e] px-6 py-16 text-center">

                <h2 className="text-xl font-black">
                  NOTHING HERE YET
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="btn mt-5 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                >
                  GO TO WORKOUTS
                </Link>

              </div>
            ) : (
              <div className="space-y-3">

                {sortedWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15181e] p-3 sm:flex-row sm:items-center"
                  >

                    {/* Thumbnail */}
                    <div className="h-20 w-full shrink-0 overflow-hidden rounded-lg sm:h-14 sm:w-24">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={200}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Workout Info */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-sm font-black uppercase">
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-400">
                        <span>
                          ◷ {workout.duration} min
                        </span>

                        <span>
                          ● {workout.caloriesBurned} kcal
                        </span>

                        <span>
                          ★ {workout.rating}
                        </span>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-2">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-gray-700 px-4 py-2 text-[11px] font-bold text-gray-300 transition hover:border-white hover:text-white"
                      >
                        VIEW DETAILS
                      </Link>

                      <button
                        onClick={() => handleDone(workout.id)}
                        className="rounded-full bg-[#ccff00] px-4 py-2 text-[11px] font-black text-black transition hover:bg-[#b8e600]"
                      >
                        ✓ MARK AS DONE
                      </button>

                      <button
                        onClick={() => handleRemove(workout.id)}
                        className="px-2 text-lg text-gray-500 transition hover:text-white"
                        aria-label={`Remove ${workout.name}`}
                      >
                        ×
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            )}

          </section>
        )}

        {/* Saved */}
        {activeTab === "saved" && (
          <section className="mt-4">

            {saved.length === 0 ? (
              <div className="rounded-xl border border-gray-800 bg-[#15181e] px-6 py-16 text-center">

                <h2 className="text-xl font-black">
                  NOTHING SAVED YET
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Save a workout from the library to find it here later.
                </p>

                <Link
                  href="/"
                  className="btn mt-5 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                >
                  GO TO WORKOUTS
                </Link>

              </div>
            ) : (
              <div className="space-y-3">

                {sortedWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15181e] p-3 sm:flex-row sm:items-center"
                  >

                    {/* Thumbnail */}
                    <div className="h-20 w-full shrink-0 overflow-hidden rounded-lg sm:h-14 sm:w-24">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={200}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Workout Info */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-sm font-black uppercase">
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-400">
                        <span>
                          ◷ {workout.duration} min
                        </span>

                        <span>
                          ● {workout.caloriesBurned} kcal
                        </span>

                        <span>
                          ★ {workout.rating}
                        </span>
                      </div>

                    </div>

                    {/* Action */}
                    <div className="shrink-0">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="inline-flex rounded-full border border-gray-700 px-4 py-2 text-[11px] font-bold text-gray-300 transition hover:border-white hover:text-white"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>

                  </div>
                ))}

              </div>
            )}

          </section>
        )}

      </div>
    </main>
  );
}