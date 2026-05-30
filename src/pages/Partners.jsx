const PARTNERS = ['Foster+Partners', 'Gensler', 'AECOM', 'Arup', 'HOK', 'SOM', 'Perkins&Will', 'BIG'];

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners-track reveal">
          {PARTNERS.map((name, i) => (
            <span key={name} className="partner-name" style={{ animationDelay: `${i * 0.5}s` }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

