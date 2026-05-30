export default function ParticleField() {
  const particles = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    left: `${(i * 2.9 + (i % 6) * 5) % 100}%`,
    delay: `${(i * 0.27) % 5}s`,
    duration: `${3 + (i % 4)}s`,
    size: 1 + (i % 3),
    opacity: 0.15 + (i % 6) * 0.08,
  }));

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="gravity-particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size * 10,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

