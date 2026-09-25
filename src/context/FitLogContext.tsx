"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";
import type { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

// -----------------------------
// Cached store values
// -----------------------------

const emptyWorkouts: Workout[] = [];

let planSnapshot: Workout[] = emptyWorkouts;
let savedSnapshot: Workout[] = emptyWorkouts;

// Load localStorage on the client
if (typeof window !== "undefined") {
  try {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    planSnapshot = storedPlan
      ? JSON.parse(storedPlan)
      : emptyWorkouts;

    savedSnapshot = storedSaved
      ? JSON.parse(storedSaved)
      : emptyWorkouts;
  } catch {
    planSnapshot = emptyWorkouts;
    savedSnapshot = emptyWorkouts;
  }
}

// -----------------------------
// Subscribers
// -----------------------------

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function notify() {
  listeners.forEach((listener) => listener());
}

// -----------------------------
// Snapshots
// -----------------------------

function getPlanSnapshot() {
  return planSnapshot;
}

function getSavedSnapshot() {
  return savedSnapshot;
}

function getServerSnapshot() {
  return emptyWorkouts;
}

// -----------------------------
// Provider
// -----------------------------

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const plan = useSyncExternalStore(
    subscribe,
    getPlanSnapshot,
    getServerSnapshot
  );

  const saved = useSyncExternalStore(
    subscribe,
    getSavedSnapshot,
    getServerSnapshot
  );

  function addToPlan(workout: Workout) {
    if (planSnapshot.length >= 5) {
      return;
    }

    if (planSnapshot.some((item) => item.id === workout.id)) {
      return;
    }

    const updatedPlan = [...planSnapshot, workout];

    planSnapshot = updatedPlan;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );

    notify();
  }

  function saveWorkout(workout: Workout) {
    if (savedSnapshot.some((item) => item.id === workout.id)) {
      return;
    }

    const updatedSaved = [...savedSnapshot, workout];

    savedSnapshot = updatedSaved;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updatedSaved)
    );

    notify();
  }

  function removeFromPlan(workoutId: number) {
    const updatedPlan = planSnapshot.filter(
      (workout) => workout.id !== workoutId
    );

    planSnapshot = updatedPlan;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );

    notify();
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

// -----------------------------
// Hook
// -----------------------------

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}