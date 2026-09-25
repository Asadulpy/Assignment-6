import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="workout-card">
      <div className="workout-image">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={350}
        />
      </div>

      <div className="workout-content">
        <div className="muscle-tags">
          {workout.muscleGroups.map((muscle) => (
            <span key={muscle}>{muscle}</span>
          ))}
        </div>

        <h3>{workout.name}</h3>

        <p>{workout.equipment}</p>

        <div className="workout-stats">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} cal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}