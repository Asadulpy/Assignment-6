import Image from "next/image";
import Link from "next/link";
import type { Workout } from "../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden border border-white/10 bg-[#151515] transition hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-4 text-lg font-black uppercase leading-tight">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-white/40">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-white/50">
          <span>{workout.duration} MIN</span>

          <span>{workout.caloriesBurned} CAL</span>

          <span>★ {workout.rating}</span>
        </div>

      </div>
    </Link>
  );
}