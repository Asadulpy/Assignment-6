import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h2>FITLOG</h2>
      </div>

      <div>
        <Link href="/">Workout</Link>
        <Link href="/my-plan">My Plan</Link>
      </div>

      <div>
        <Link href="/my-plan">Plan 0</Link>
        <Link href="/my-plan">Saved 0</Link>
      </div>
    </nav>
  );
}