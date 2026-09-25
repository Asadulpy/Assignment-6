import { getWorkouts } from "../lib/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkoutCard from "../components/WorkoutCard";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Navbar />

      <Hero />

      <main id="library" className="library">
        <div className="library-header">
          <p>THE LIBRARY</p>

          <h2>THE LIBRARY</h2>

          <p>
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="workout-grid">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </main>
    </>
  );
}