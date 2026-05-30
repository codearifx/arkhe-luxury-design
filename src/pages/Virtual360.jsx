import { useState } from 'react';
import { AntiGravityBuilding } from '../components/Background/BackgroundScene.jsx';

export default function Virtual360() {
  const [gravityFlipped, setGravityFlipped] = useState(false);

  return (
    <section className="virtual360" id="virtual360">
      <div className="container">
        <span className="section-label reveal">Immersive Experience</span>
        <h2 className="section-title reveal">Virtual 360° Tour</h2>
        <p className="section-subtitle reveal" style={{ margin: '0 auto 2rem' }}>
          Step inside our anti-gravity structures. Rotate the view and flip gravity to experience architecture from
          every angle.
        </p>

        <div className="virtual360-stage reveal" data-gravity="1.5">
          <div className="virtual360-ring" />
          <div className={`virtual360-building-wrap ${gravityFlipped ? 'gravity-flipped' : 'gravity-normal'}`}>
            <AntiGravityBuilding />
          </div>
        </div>

        <button
          type="button"
          className={`gravity-toggle ${gravityFlipped ? 'active' : ''}`}
          onClick={() => setGravityFlipped((prev) => !prev)}
        >
          {gravityFlipped ? 'Restore Gravity ↑' : 'Flip Gravity ↓'}
        </button>
      </div>
    </section>
  );
}

