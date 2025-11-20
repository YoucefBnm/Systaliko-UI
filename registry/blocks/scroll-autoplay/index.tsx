'use client';
import { cn } from '@/lib/utils';
import {
  motion,
  HTMLMotionProps,
  MotionValue,
  MapInputRange,
  useScroll,
  useTransform,
} from 'motion/react';
import React from 'react';

interface ScrollAutoplayProps extends HTMLMotionProps<'div'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any[];
}
interface ScrollAutoPlayItemProps extends HTMLMotionProps<'div'> {
  inputRange: MapInputRange;
  outputRange?: unknown[];
}
interface ScrollAutoplayContextValue {
  scrollYProgress: MotionValue<number>;
}
const ScrollAutoplayContext = React.createContext<
  ScrollAutoplayContextValue | undefined
>(undefined);
function useScrollAutoplayContext() {
  const context = React.useContext(ScrollAutoplayContext);
  if (context === undefined) {
    throw new Error(
      'useScrollAutoplayContext must be used within a ScrollAutoplayContextProvider',
    );
  }
  return context;
}

export function ScrollAutoplay({
  offset = ['0% 50%', '100% 50%'],
  className,
  ...props
}: ScrollAutoplayProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: offset,
  });

  return (
    <ScrollAutoplayContext.Provider value={{ scrollYProgress }}>
      <motion.div
        ref={scrollRef}
        className={cn('relative min-h-screen', className)}
        {...props}
      />
    </ScrollAutoplayContext.Provider>
  );
}

export function ScrollAutoplayContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky top-0 left-0 w-full min-h-fit', className)}
      {...props}
    />
  );
}

export function ScrollAutoplayItem({
  inputRange,
  outputRange = [0, 1],
  className,
  style,
  ...props
}: ScrollAutoPlayItemProps) {
  const { scrollYProgress } = useScrollAutoplayContext();
  const opacity = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <motion.div
      className={cn('absolute inset-0 size-full', className)}
      style={{
        opacity,
        willChange: 'opacity',
        ...style,
      }}
      {...props}
    />
  );
}
