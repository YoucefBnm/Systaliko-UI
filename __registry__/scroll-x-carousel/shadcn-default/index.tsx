'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);
function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}
export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
  });
  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn('relative max-w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky overflow-hidden w-full top-0 left-0', className)}
      {...props}
    />
  );
}
export function ScrollXCarouselWrap({
  className,
  style,
  xRagnge = ['-0%', '-80%'],
  ...props
}: HTMLMotionProps<'div'> & { xRagnge?: unknown[] }) {
  const { scrollYProgress } = useScrollXCarousel();
  const reducedMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 400,
    restDelta: 0.001, // Important for stopping micro-animations
  });

  const scrollProgress = reducedMotion ? scrollYProgress : smoothProgress;

  const x = useTransform(scrollProgress, [0, 1], xRagnge);

  return (
    <motion.div
      className={cn('w-fit', className)}
      style={{ x, willChange: 'transform', ...style }}
      {...props}
    />
  );
}
export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progressStyle?: string }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className={cn('max-w-screen overflow-hidden', className)} {...props}>
      <motion.div
        className={cn('origin-left', progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}
