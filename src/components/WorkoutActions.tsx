"use client";

import type { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  function handleAddToPlan() {
    addToPlan(workout);
  }

  function handleSave() {
    saveWorkout(workout);
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="btn border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
      >
        ADD TO TODAY&apos;S PLAN
      </button>

      <button
        onClick={handleSave}
        className="btn btn-outline border-gray-600 text-white hover:bg-white hover:text-black"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
}