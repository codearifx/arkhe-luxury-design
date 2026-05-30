const TIMELINE = [
  {
    year: '2026',
    title: 'Lunar Habitat Prototype',
    desc: 'First modular off-world construction system enters testing phase.',
    side: 'left',
  },
  {
    year: '2027',
    title: 'Anti-Gravity Facades',
    desc: 'Magnetic levitation cladding panels for seismic-free skyscrapers.',
    side: 'right',
  },
  {
    year: '2028',
    title: 'Orbital Construction Hub',
    desc: 'Zero-G assembly platform for space station modules.',
    side: 'left',
  },
  {
    year: '2029',
    title: 'Bio-Luminescent Cities',
    desc: 'Self-illuminating urban networks powered by organic photonics.',
    side: 'right',
  },
  {
    year: '2030',
    title: 'Gravity-Defying Metropolis',
    desc: 'First fully floating district — no ground contact, pure levitation.',
    side: 'left',
  },
];

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="container">
        <span className="section-label reveal">Future Vision</span>
        <h2 className="section-title reveal">The Road to Zero Gravity</h2>
        <p className="section-subtitle reveal">
          Our roadmap toward a built environment free from terrestrial constraints — where cities float and
          foundations become obsolete.
        </p>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`timeline-item ${item.side} reveal`}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <span className="timeline-tether" />
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

