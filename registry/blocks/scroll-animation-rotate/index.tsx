'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

interface ScrollAnimationRotateContextValue {
  scrollProgress: MotionValue<number>;
}
interface ScrollAnimationRotateProps {
  spacerClass?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any;
}
const ScrollAnimationRotateContext = React.createContext<
  ScrollAnimationRotateContextValue | undefined
>(undefined);
export function useScrollAnimationRotateContext() {
  const context = React.useContext(ScrollAnimationRotateContext);
  if (!context) {
    throw new Error(
      'useScrollAnimationRotateContext must be used within a GalleryRotatedScrollContextProvider',
    );
  }
  return context;
}

export const ScrollAnimationRotate = ({
  spacerClass,
  offset,
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & ScrollAnimationRotateProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: offset,
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 400,
    restDelta: 0.001,
  });
  const reducedMotion = useReducedMotion();
  const scrollProgress = reducedMotion ? scrollYProgress : smoothProgress;

  return (
    <ScrollAnimationRotateContext.Provider value={{ scrollProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative ', className)}
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center top',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          ...style,
        }}
        {...props}
      >
        {children}
        <div className={cn('w-full h-96', spacerClass)} />
      </div>
    </ScrollAnimationRotateContext.Provider>
  );
};
ScrollAnimationRotate.displayName = 'ScrollAnimationRotate';

interface ScrollAnimationRotateContainerProps extends HTMLMotionProps<'div'> {
  yRange?: [number, number];
  rotateRange?: [number, number];
  scaleRange?: [number, number];
  rotationDirection?: 'x' | 'y' | 'z';
}
export const ScrollAnimationRotateContainer = React.forwardRef<
  HTMLDivElement,
  ScrollAnimationRotateContainerProps
>(
  (
    {
      yRange = [0, 350],
      rotateRange = [80, 0],
      scaleRange = [1.1, 1],
      className,
      rotationDirection = 'x',
      style,
      ...props
    },
    ref,
  ) => {
    const { scrollProgress } = useScrollAnimationRotateContext();

    const y = useTransform(scrollProgress, [0, 1], yRange);

    const rotate = useTransform(scrollProgress, [0, 0.5], rotateRange);
    const scale = useTransform(scrollProgress, [0.5, 0.9], scaleRange);

    const transform = useMotionTemplate`rotate${rotationDirection.toUpperCase()}(${rotate}deg) scale(${scale}) translateY(${y}px)`;

    return (
      <motion.div
        ref={ref}
        className={cn('flex relative', className)}
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center top',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          top: 0,
          transform,
          ...style,
        }}
        {...props}
      />
    );
  },
);
ScrollAnimationRotateContainer.displayName = 'ScrollAnimationRotateContainer';

export const ScrollAnimationRotateCol = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { yRange?: [string, string] }
>(({ yRange = ['-5%', '1%'], className, style, ...props }, ref) => {
  const { scrollProgress } = useScrollAnimationRotateContext();

  const y = useTransform(scrollProgress, [0.4, 0.8], yRange);

  return (
    <motion.div
      ref={ref}
      className={cn('relative flex flex-col w-full', className)}
      style={{
        y,
        backfaceVisibility: 'hidden',
        ...style,
      }}
      {...props}
    />
  );
});
ScrollAnimationRotateCol.displayName = 'ScrollAnimationRotateCol';
