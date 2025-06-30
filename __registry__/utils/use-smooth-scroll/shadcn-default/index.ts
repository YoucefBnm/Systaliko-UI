import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface UseSmoothScrollOptions {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  easing?: (t: number) => number;
}
const defaultOptions: UseSmoothScrollOptions = {
  duration: 0.08,
  lerp: 0.1,
  smoothWheel: true,
  touchMultiplier: 2,
  infinite: false,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const mergedOptions = { ...defaultOptions, ...options };

    lenisRef.current = new Lenis({
      duration: mergedOptions.duration,
      lerp: mergedOptions.lerp,
      smoothWheel: mergedOptions.smoothWheel,
      touchMultiplier: mergedOptions.touchMultiplier,
      infinite: mergedOptions.infinite,
      orientation: mergedOptions.orientation,
      gestureOrientation: mergedOptions.gestureOrientation,
      easing: mergedOptions.easing,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return {
    lenis: lenisRef.current,
  };
}
