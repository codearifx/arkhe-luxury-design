import { useEffect } from 'react';

export default function useScrollParticles(setScrollFactor) {
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const delta = currentY - lastY;
          const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0;
          const speed = Math.min(Math.abs(delta) * 0.25, 3);

          setScrollFactor({ direction, speed: 1 + speed * 0.6 });
          document.documentElement.style.setProperty('--scroll-speed', String(1 + speed * 0.6));
          document.documentElement.style.setProperty('--scroll-dir', String(direction || 1));
          document.documentElement.classList.toggle('scroll-up', direction < 0);

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrollFactor]);
}

