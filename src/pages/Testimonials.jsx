import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    quote: 'Meridian transformed our vision into a structure that seems to float above the city skyline. Their anti-gravity design philosophy is unmatched.',
    name: 'Elena Vasquez',
    role: 'CEO, Aurora Development Group',
  },
  {
    quote: 'The attention to detail and innovative structural solutions exceeded every expectation. A true partnership in pushing architectural boundaries.',
    name: 'James Okonkwo',
    role: 'Director, Horizon Capital',
  },
  {
    quote: 'From concept to completion, Meridian delivered a building that defies convention. Our visitors are mesmerized by the levitating form.',
    name: 'Dr. Yuki Tanaka',
    role: 'Curator, Orbital Arts Foundation',
  },
  {
    quote: 'Sustainable, stunning, and structurally brilliant. Meridian is the future of architecture — today.',
    name: 'Sophie Laurent',
    role: 'Principal, Nebula Estates',
  },
];

function getTestimonialPosition(index, active, total) {
  if (index === active) return 'active';
  if (index === (active - 1 + total) % total) return 'prev';
  if (index === (active + 1) % total) return 'next';
  return '';
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <span className="section-label reveal">Client Voices</span>
        <h2 className="section-title reveal">What They Say</h2>

        <div className="testimonial-orbit reveal">
          <div className="testimonial-orbit-track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card ${getTestimonialPosition(i, activeTestimonial, TESTIMONIALS.length)}`}
              >
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

