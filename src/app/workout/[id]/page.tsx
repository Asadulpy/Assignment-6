import Image from "next/image";
import { getWorkout } from "../../../lib/api";
import WorkoutActions from "../../../components/WorkoutActions";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetails({
  params,
}: WorkoutDetailsProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main workout information */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[450px] overflow-hidden">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            {/* Label */}
            <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
              WORKOUT DETAILS
            </p>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl leading-7 text-white/60">
              {workout.description}
            </p>

            {/* Muscle groups */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout information */}
            <div className="mt-8 grid grid-cols-2 border border-white/10">

              <div className="border-b border-r border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Equipment
                </p>

                <p className="mt-2 font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-b border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Difficulty
                </p>

                <p className="mt-2 font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Sets
                </p>

                <p className="mt-2 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="border-b border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Reps
                </p>

                <p className="mt-2 font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="border-r border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Duration
                </p>

                <p className="mt-2 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Calories
                </p>

                <p className="mt-2 font-bold">
                  {workout.caloriesBurned} cal
                </p>
              </div>

              <div className="col-span-2 border-t border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Rating
                </p>

                <p className="mt-2 font-bold">
                  ★ {workout.rating}
                </p>
              </div>

            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />

          </div>
        </div>

        {/* Instructions */}
        <section className="mt-20">

          <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            HOW TO PERFORM
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Instructions
          </h2>

          <div className="mt-8 border-t border-white/10">

            {workout.instructions.map((instruction, index) => (
              <div
                key={index}
                className="flex gap-6 border-b border-white/10 py-6"
              >
                <span className="text-lg font-black text-[#ccff00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-white/60">
                  {instruction}
                </p>
              </div>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}