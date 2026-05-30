export default function StarField() {
  const stars = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: `${((i * 17 + 13) % 97)}%`,
    top: `${((i * 23 + 7) % 93)}%`,
    size: 0.5 + (i % 4) * 0.5,
    delay: `${(i * 0.17) % 5}s`,
    duration: `${2 + (i % 5)}s`,
  }));

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}

