import { getWorkouts } from "../lib/api";
import Hero from "../components/Hero";
import WorkoutCard from "../components/WorkoutCard";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <main
        id="library"
        className="bg-[#111111] px-6 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* Library heading */}
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
              THE LIBRARY
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              WORKOUTS
            </h2>

            <p className="mt-4 text-white/50">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Workout grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}