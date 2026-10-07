import { useEffect, useRef } from 'react';

/**
 * Spring-based mouse parallax. Attach the returned ref to a stage element.
 * Any descendant marked `data-parallax` with a numeric `data-depth` gets a
 * smooth translate + 3D rotate driven by the pointer position over the stage.
 * Disabled for touch pointers and reduced-motion users (idle state stays still).
 */
export function useParallax({ rotate = 10, translate = 40, ease = 0.06 } = {}) {
  const stageRef = useRef(null);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    if (window.matchMedia('(pointer:coarse)').matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const layers = () => stage.querySelectorAll('[data-parallax]');

    const move = (e) => {
      const r = stage.getBoundingClientRect();
      if (!r.width || !r.height) return;
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const leave = () => { tx = 0; ty = 0; };

    const loop = () => {
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      const els = layers();
      els.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '1');
        const rx = -cy * rotate * depth;
        const ry = cx * rotate * depth;
        const px = cx * translate * depth;
        const py = cy * translate * depth;
        el.style.transform = `translate3d(${px.toFixed(2)}px,${py.toFixed(2)}px,0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
      raf = requestAnimationFrame(loop);
    };

    stage.addEventListener('pointermove', move, { passive: true });
    stage.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerleave', leave);
    };
  }, [rotate, translate, ease]);
  return stageRef;
}