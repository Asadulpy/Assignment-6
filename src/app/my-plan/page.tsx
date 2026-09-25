"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFitLog } from "../../context/FitLogContext";

export default function MyPlan() {
  const { plan, saved, removeFromPlan } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  return (
    <main className="min-h-screen bg-[#111] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-4xl font-extrabold uppercase">
            MY PLAN
          </h1>

          <p className="mt-4 text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="border border-gray-800 p-6">
  <p className="text-sm uppercase text-gray-500">
    Exercises
  </p>

  <p className="mt-2 text-3xl font-extrabold">
    {plan.length}
  </p>
</div>

<div className="border border-gray-800 p-6">
  <p className="text-sm uppercase text-gray-500">
    Minutes
  </p>

  <p className="mt-2 text-3xl font-extrabold">
    {plan.reduce(
      (total, workout) => total + workout.duration,
      0
    )}
  </p>
</div>

<div className="border border-gray-800 p-6">
  <p className="text-sm uppercase text-gray-500">
    Calories
  </p>

  <p className="mt-2 text-3xl font-extrabold">
    {plan.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    )}
  </p>
</div>
        </div>

        {/* DaisyUI Tabs */}
        <div
          role="tablist"
          className="tabs tabs-border mt-10"
        >
          <button
            role="tab"
            onClick={() => setActiveTab("plan")}
            className={`tab ${
              activeTab === "plan" ? "tab-active" : ""
            }`}
          >
            TODAY&apos;S PLAN
          </button>

          <button
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab ${
              activeTab === "saved" ? "tab-active" : ""
            }`}
          >
            SAVED
          </button>
        </div>

        {/* Today's Plan */}
        {activeTab === "plan" && (
          <section className="mt-8">

            {plan.length === 0 ? (
              <div className="border border-gray-800 px-6 py-16 text-center">

                <h2 className="text-2xl font-extrabold">
                  NOTHING HERE YET
                </h2>

                <p className="mt-3 text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="btn mt-6 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                >
                  GO TO WORKOUTS
                </Link>

              </div>
            ) : (
              <div className="space-y-4">

                {plan.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-6 border border-gray-800 p-5 md:flex-row"
                  >

                    {/* Image */}
                    <div className="h-48 w-full shrink-0 md:w-64">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={500}
                        height={350}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Information */}
                    <div className="flex flex-1 flex-col justify-between">

                      <div>

                        {/* Muscle groups */}
                        <div className="flex flex-wrap gap-2">
                          {workout.muscleGroups.map((muscle) => (
                            <span
                              key={muscle}
                              className="bg-[#ccff00] px-2 py-1 text-xs font-bold text-black"
                            >
                              {muscle}
                            </span>
                          ))}
                        </div>

                        {/* Name */}
                        <h3 className="mt-3 text-2xl font-extrabold uppercase">
                          {workout.name}
                        </h3>

                        {/* Equipment */}
                        <p className="mt-2 text-gray-500">
                          {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">
                          <span>
                            {workout.duration} min
                          </span>

                          <span>
                            {workout.caloriesBurned} cal
                          </span>

                          <span>
                            ★ {workout.rating}
                          </span>
                        </div>

                      </div>

                      {/* Buttons */}
                      <div className="mt-6 flex flex-wrap gap-3">

                        <Link
                          href={`/workout/${workout.id}`}
                          className="btn border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                        >
                          VIEW DETAILS
                        </Link>

                        <button
                          onClick={() =>
                            removeFromPlan(workout.id)
                          }
                          className="btn btn-outline border-gray-600 text-white"
                        >
                          MARK AS DONE
                        </button>

                        <button
                          onClick={() =>
                            removeFromPlan(workout.id)
                          }
                          className="btn btn-square btn-outline border-gray-600 text-white"
                        >
                          ×
                        </button>

                      </div>

                    </div>
                  </div>
                ))}

              </div>
            )}

          </section>
        )}

        {/* Saved */}
        {activeTab === "saved" && (
          <section className="mt-8">

            {saved.length === 0 ? (
              <div className="border border-gray-800 px-6 py-16 text-center">

                <h2 className="text-2xl font-extrabold">
                  NOTHING SAVED YET
                </h2>

                <p className="mt-3 text-gray-500">
                  Save a workout from the library to find it here later.
                </p>

                <Link
                  href="/"
                  className="btn mt-6 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                >
                  GO TO WORKOUTS
                </Link>

              </div>
            ) : (
              <div className="space-y-4">

                {saved.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-6 border border-gray-800 p-5 md:flex-row"
                  >

                    {/* Image */}
                    <div className="h-48 w-full shrink-0 md:w-64">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={500}
                        height={350}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Information */}
                    <div className="flex flex-1 flex-col justify-between">

                      <div>

                        {/* Muscle groups */}
                        <div className="flex flex-wrap gap-2">
                          {workout.muscleGroups.map((muscle) => (
                            <span
                              key={muscle}
                              className="bg-[#ccff00] px-2 py-1 text-xs font-bold text-black"
                            >
                              {muscle}
                            </span>
                          ))}
                        </div>

                        {/* Name */}
                        <h3 className="mt-3 text-2xl font-extrabold uppercase">
                          {workout.name}
                        </h3>

                        {/* Equipment */}
                        <p className="mt-2 text-gray-500">
                          {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">
                          <span>
                            {workout.duration} min
                          </span>

                          <span>
                            {workout.caloriesBurned} cal
                          </span>

                          <span>
                            ★ {workout.rating}
                          </span>
                        </div>

                      </div>

                      {/* Button */}
                      <div className="mt-6">
                        <Link
                          href={`/workout/${workout.id}`}
                          className="btn border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                        >
                          VIEW DETAILS
                        </Link>
                      </div>

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