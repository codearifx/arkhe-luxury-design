import { useEffect } from 'react';

export default function useMouseGravity(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;

      container.querySelectorAll('[data-gravity]').forEach((el) => {
        const depth = parseFloat(el.dataset.gravity) || 1;
        const base = el.dataset.basetransform || '';
        const dx = mx * 0.012 * depth;
        const dy = my * 0.012 * depth;
        el.style.transform = `${base} translate(${dx}px, ${dy}px)`.trim();
      });
    };

    container.addEventListener('mousemove', handleMove);
    return () => container.removeEventListener('mousemove', handleMove);
  }, [containerRef]);
}

