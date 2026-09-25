import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">WORKOUT LIBRARY</p>

        <h1>
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="hero-description">
          Twelve lifts covering every major muscle group.
          Build strength, track progress, and train with purpose.
        </p>

        <Link href="#library" className="hero-button">
          BROWSE WORKOUTS <span>→</span>
        </Link>
      </div>

      <div className="hero-image">
        <Image
          src="/banner.png"
          alt="Person working out"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}