import { useEffect } from 'react';

export default function useScrollParallax(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      container.querySelectorAll('[data-scroll-depth]').forEach((el) => {
        const depth = parseFloat(el.dataset.scrollDepth) || 1;
        const tilt = el.dataset.tilt || '0deg';
        const offset = scrollY * 0.04 * depth;
        el.dataset.basetransform = `rotate(${tilt}) translateY(${offset}px)`;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [containerRef]);
}

