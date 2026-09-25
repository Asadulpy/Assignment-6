"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useFitLog } from "../../context/FitLogContext";

export default function Saved() {
  const { saved } = useFitLog();

  return (
    <main className="min-h-screen bg-[#111] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-4xl font-extrabold uppercase">
            SAVED
          </h1>

          <p className="mt-4 text-gray-400">
            Your saved workouts, ready whenever you are.
          </p>
        </div>

        {/* Saved workouts */}
        <section className="mt-10">
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

                      <h3 className="mt-3 text-2xl font-extrabold uppercase">
                        {workout.name}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">
                        <span>{workout.duration} min</span>
                        <span>{workout.caloriesBurned} cal</span>
                        <span>★ {workout.rating}</span>
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

      </div>
    </main>
  );
}