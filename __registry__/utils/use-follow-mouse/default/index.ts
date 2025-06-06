'use client';
import { SpringOptions, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function useFollowMouse(springConfig: SpringOptions) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursroYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const followMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    window.addEventListener('mousemove', followMouse);

    return () => {
      window.removeEventListener('mousemove', followMouse);
    };
  }, []);

  return {
    cursorXSpring,
    cursroYSpring,
  };
}
