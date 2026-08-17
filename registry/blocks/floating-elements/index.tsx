'use client';

import { cn } from '@/lib/utils';
import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  type MotionValue,
} from 'motion/react';
import React from 'react';

interface FloatingElementsContextValue {
  pointerX: MotionValue<number> /** Cursor X relative to the container's left edge */;
  pointerY: MotionValue<number> /** Cursor Y relative to the container's top edge */;
  containerWidth: React.RefObject<number> /** Container width (updated via ResizeObserver) */;
  containerHeight: React.RefObject<number> /** Container height (updated via ResizeObserver) */;
  isInside: React.RefObject<boolean> /** Whether the pointer is currently inside the container */;
}

const FloatingElementsContext = React.createContext<
  FloatingElementsContextValue | undefined
>(undefined);

function useFloatingElements() {
  const ctx = React.useContext(FloatingElementsContext);
  if (!ctx) {
    throw new Error(
      'useFloatingElements must be used within a <FloatingElements> provider',
    );
  }
  return ctx;
}

export function FloatingElements({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // MotionValues — mutated directly, no setState, no re-renders
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const containerWidth = React.useRef(0);
  const containerHeight = React.useRef(0);
  const isInside = React.useRef(false);

  // Keep container dimensions up-to-date without re-renders
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      containerWidth.current = width;
      containerHeight.current = height;
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pointerX.set(e.clientX - rect.left);
      pointerY.set(e.clientY - rect.top);
    },
    [pointerX, pointerY],
  );

  const handlePointerEnter = React.useCallback(() => {
    isInside.current = true;
  }, []);

  const handlePointerLeave = React.useCallback(() => {
    isInside.current = false;
  }, []);

  const ctxValue = React.useMemo<FloatingElementsContextValue>(
    () => ({ pointerX, pointerY, containerWidth, containerHeight, isInside }),
    [pointerX, pointerY],
  );

  return (
    <FloatingElementsContext.Provider value={ctxValue}>
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className={cn('relative', className)}
        {...props}
      />
    </FloatingElementsContext.Provider>
  );
}

interface FloatingElementItemProps extends HTMLMotionProps<'div'> {
  intensity?: number /** Maximum pixel displacement when the cursor is right on top. Default 50 */;
  stiffness?: number /** Spring stiffness. Default 150 */;
  damping?: number /** Spring damping. Default 15 */;
}

export function FloatingElementItem({
  style,
  intensity = 50,
  stiffness = 150,
  damping = 15,
  ...props
}: FloatingElementItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { pointerX, pointerY, containerWidth, containerHeight, isInside } =
    useFloatingElements();

  // Cached center position (relative to container)
  const centerX = React.useRef(0);
  const centerY = React.useRef(0);

  // Cache position on mount & resize
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cachePosition = () => {
      const parent = el.offsetParent as HTMLElement | null;
      if (!parent) return;
      centerX.current = el.offsetLeft + el.offsetWidth / 2;
      centerY.current = el.offsetTop + el.offsetHeight / 2;
    };

    cachePosition();

    const observer = new ResizeObserver(() => cachePosition());
    observer.observe(el);
    if (el.offsetParent) observer.observe(el.offsetParent);

    return () => observer.disconnect();
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  useAnimationFrame(() => {
    if (!isInside.current) {
      // Smoothly return to origin when cursor leaves the container
      x.set(0);
      y.set(0);
      return;
    }

    const mx = pointerX.get();
    const my = pointerY.get();

    const dx = mx - centerX.current;
    const dy = my - centerY.current;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Max possible distance is the diagonal of the container
    const maxDist = Math.sqrt(
      containerWidth.current ** 2 + containerHeight.current ** 2,
    );
    if (maxDist === 0) return;

    // Normalized proximity: 1 when on top, 0 at farthest corner
    const proximity = 1 - Math.min(distance / maxDist, 1);

    // Ease the proximity for a more natural curve (quadratic ease-in)
    const easedProximity = proximity * proximity;

    // Direction: repel away from cursor
    const angle = Math.atan2(dy, dx);
    const force = easedProximity * intensity;

    x.set(-Math.cos(angle) * force);
    y.set(-Math.sin(angle) * force);
  });

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        ...style,
      }}
      {...props}
    />
  );
}

interface InfiniteFloatingItemProps extends HTMLMotionProps<'div'> {
  depth?: number /** Parallax depth factor. Higher = more mouse response. Default 0.03 */;
  amplitude?: number /** Amplitude of the infinite bob in px. Default 12 */;
  speed?: number /** Speed of the infinite bob (radians/sec). Default 1 */;
  phase?: number /** Phase offset in radians so items don't move in unison. Default 0 */;
  stiffness?: number /** Spring stiffness for parallax response. Default 80 */;
  damping?: number /** Spring damping for parallax response. Default 20 */;
}

export function InfiniteFloatingItem({
  style,
  depth = 0.03,
  amplitude = 12,
  speed = 1,
  phase = 0,
  stiffness = 80,
  damping = 20,
  ...props
}: InfiniteFloatingItemProps) {
  const { pointerX, pointerY, containerWidth, containerHeight, isInside } =
    useFloatingElements();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  useAnimationFrame((time) => {
    // time is in ms — convert to seconds
    const t = time / 1000;

    // Infinite floating bob (Lissajous-like)
    const bobX = Math.sin(t * speed + phase) * amplitude;
    const bobY = Math.cos(t * speed * 0.7 + phase + 1) * amplitude * 0.8;

    // Parallax offset based on mouse position relative to container center
    let parallaxX = 0;
    let parallaxY = 0;

    if (isInside.current && containerWidth.current > 0) {
      // Normalize pointer to -1…1 range from container center
      const normX =
        (pointerX.get() - containerWidth.current / 2) /
        (containerWidth.current / 2);
      const normY =
        (pointerY.get() - containerHeight.current / 2) /
        (containerHeight.current / 2);

      parallaxX = normX * depth * containerWidth.current;
      parallaxY = normY * depth * containerHeight.current;
    }

    x.set(bobX + parallaxX);
    y.set(bobY + parallaxY);
  });

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        ...style,
      }}
      {...props}
    />
  );
}
