export default function AntiGravityBuilding() {
  const debris = [
    { r: 3, angle: 0, dist: 95, type: 'rock' },
    { r: 2, angle: 45, dist: 88, type: 'shard' },
    { r: 4, angle: 90, dist: 102, type: 'beam' },
    { r: 2.5, angle: 135, dist: 92, type: 'rock' },
    { r: 3.5, angle: 180, dist: 98, type: 'beam' },
    { r: 2, angle: 225, dist: 90, type: 'shard' },
    { r: 3, angle: 270, dist: 96, type: 'rock' },
    { r: 2.8, angle: 315, dist: 94, type: 'beam' },
  ];

  return (
    <svg viewBox="0 0 400 480" className="anti-gravity-building" aria-hidden="true">
      <defs>
        <linearGradient id="towerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="energyGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#7b2fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00f5d4" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="auraGlow">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="200" cy="55" rx="85" ry="14" fill="#7b2fff" opacity="0.12" className="reversed-shadow" />
      <ellipse
        cx="200"
        cy="240"
        rx="130"
        ry="160"
        fill="none"
        stroke="#00f5d4"
        strokeWidth="1"
        opacity="0.25"
        className="building-aura"
        filter="url(#auraGlow)"
      />

      <g className="debris-orbit">
        {debris.map((d, i) => {
          const rad = (d.angle * Math.PI) / 180;
          const cx = 200 + Math.cos(rad) * d.dist;
          const cy = 240 + Math.sin(rad) * d.dist;
          if (d.type === 'beam') {
            return (
              <rect
                key={i}
                x={cx - 8}
                y={cy - 2}
                width="16"
                height="4"
                rx="1"
                fill="#8899aa"
                opacity="0.7"
                transform={`rotate(${d.angle + 30}, ${cx}, ${cy})`}
              />
            );
          }
          if (d.type === 'shard') {
            return (
              <polygon
                key={i}
                points={`${cx},${cy - 5} ${cx + 4},${cy + 3} ${cx - 3},${cy + 4}`}
                fill="#8899aa"
                opacity="0.6"
              />
            );
          }
          return <circle key={i} cx={cx} cy={cy} r={d.r} fill="#8899aa" opacity="0.65" />;
        })}
      </g>

      <ellipse cx="200" cy="400" rx="72" ry="20" fill="url(#energyGrad)" className="energy-field" filter="url(#glow)" />

      <g className="tower-body">
        <polygon
          points="200,80 320,380 80,380"
          fill="url(#towerGrad)"
          stroke="#c9a96e"
          strokeWidth="0.5"
          opacity="0.95"
        />
        {[140, 200, 260, 320].map((y, i) => {
          const w = 30 + i * 35;
          return (
            <line
              key={i}
              x1={200 - w}
              y1={y}
              x2={200 + w}
              y2={y}
              stroke="#c9a96e"
              strokeWidth="0.3"
              opacity="0.4"
            />
          );
        })}
        {[160, 220, 280].map((y, ri) =>
          [-20, 0, 20].map((ox, ci) => (
            <rect
              key={`${ri}-${ci}`}
              x={200 + ox - 6}
              y={y - 8}
              width="12"
              height="16"
              rx="1"
              fill="#00f5d4"
              opacity={0.15 + ri * 0.05}
            />
          ))
        )}
      </g>

      <g className="foundation-debris">
        <polygon points="160,395 175,410 150,415" fill="#8899aa" opacity="0.5" className="crack-piece crack-1" />
        <polygon points="230,390 250,405 235,420" fill="#8899aa" opacity="0.45" className="crack-piece crack-2" />
        <rect
          x="185"
          y="400"
          width="20"
          height="5"
          rx="1"
          fill="#8899aa"
          opacity="0.4"
          transform="rotate(-15, 195, 402)"
          className="crack-piece crack-3"
        />
        <circle cx="210" cy="418" r="4" fill="#8899aa" opacity="0.35" className="crack-piece crack-4" />
      </g>
    </svg>
  );
}

