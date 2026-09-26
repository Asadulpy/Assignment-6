"use client";

import { toast } from "react-toastify";
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
    const result = addToPlan(workout);

    if (result === "success") {
      toast.success("Workout added to today's plan.");
    }

    if (result === "duplicate") {
      toast.error("This workout is already in today's plan.");
    }

    if (result === "full") {
      toast.error("Today's plan is full. Maximum 5 workouts.");
    }
  }

  function handleSave() {
    const result = saveWorkout(workout);

    if (result === "success") {
      toast.success("Workout saved for later.");
    }

    if (result === "duplicate") {
      toast.error("This workout is already saved.");
    }
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