import WorkoutActions from "../../../components/WorkoutActions";
import Image from "next/image";
import { getWorkout } from "../../../lib/api";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetails({
  params,
}: WorkoutDetailsProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#111] px-6 py-12 text-white lg:px-16">
      
      {/* Main workout details */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Image */}
        <div className="overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={500}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="text-4xl font-extrabold uppercase lg:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-6 leading-7 text-gray-400">
            {workout.description}
          </p>

          {/* Muscle groups */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge badge-accent font-bold"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specifications */}
          <div className="mt-8 grid grid-cols-2 border border-gray-800">

            {/* Equipment */}
            <div className="border-b border-r border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Equipment
              </p>

              <p className="mt-1 font-semibold">
                {workout.equipment}
              </p>
            </div>

            {/* Difficulty */}
            <div className="border-b border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Difficulty
              </p>

              <p className="mt-1 font-semibold">
                {workout.difficulty}
              </p>
            </div>

            {/* Sets */}
            <div className="border-b border-r border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Sets
              </p>

              <p className="mt-1 font-semibold">
                {workout.sets}
              </p>
            </div>

            {/* Reps */}
            <div className="border-b border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Reps
              </p>

              <p className="mt-1 font-semibold">
                {workout.reps}
              </p>
            </div>

            {/* Duration */}
            <div className="border-r border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Duration
              </p>

              <p className="mt-1 font-semibold">
                {workout.duration} min
              </p>
            </div>

            {/* Calories */}
            <div className="p-4">
              <p className="text-xs uppercase text-gray-500">
                Calories
              </p>

              <p className="mt-1 font-semibold">
                {workout.caloriesBurned} cal
              </p>
            </div>

            {/* Rating */}
            <div className="col-span-2 border-t border-gray-800 p-4">
              <p className="text-xs uppercase text-gray-500">
                Rating
              </p>

              <p className="mt-1 font-semibold">
                ★ {workout.rating}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <WorkoutActions workout={workout} />

        </div>
      </div>

      {/* Instructions */}
      <section className="mx-auto mt-16 max-w-6xl">

        <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
          HOW TO PERFORM
        </p>

        <h2 className="mt-2 text-3xl font-extrabold uppercase">
          Instructions
        </h2>

        <div className="mt-8">
          {workout.instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex gap-6 border-t border-gray-800 py-6"
            >
              <span className="text-xl font-bold text-[#ccff00]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="leading-7 text-gray-300">
                {instruction}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}