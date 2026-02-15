'use client';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  motion,
  HTMLMotionProps,
  useScroll,
  UseScrollOptions,
  useTransform,
  MotionValue,
  MapInputRange,
} from 'motion/react';
import React from 'react';

interface CircleCardsContextValue {
  scrollYProgress: MotionValue<number>;
}
interface CircleCardsProps extends React.ComponentPropsWithRef<'div'> {
  offset?: UseScrollOptions['offset'];
  spacerClassName?: ClassValue;
}
interface CircleItem extends HTMLMotionProps<'div'> {
  inputRange?: MapInputRange;
  outputRange?: number[];
}

const CircleCardsContext = React.createContext<
  CircleCardsContextValue | undefined
>(undefined);
export function useCircleCardsContext() {
  const context = React.useContext(CircleCardsContext);
  if (!context) {
    throw new Error(
      'useCircleCardsContext must be used within a CircleCardsContextProvider',
    );
  }
  return context;
}

export function CircleCards({
  offset,
  spacerClassName,
  className,
  children,
  ...props
}: CircleCardsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });
  return (
    <CircleCardsContext.Provider value={{ scrollYProgress }}>
      <div ref={containerRef} className={cn('relative', className)} {...props}>
        {children}
        <div className={cn('h-70', spacerClassName)} />
      </div>
    </CircleCardsContext.Provider>
  );
}

export function CircleItem({
  inputRange = [0, 1],
  outputRange = [30, -30],
  className,
  style,
  ...props
}: CircleItem) {
  const { scrollYProgress } = useCircleCardsContext();
  const rotate = useTransform(scrollYProgress, inputRange, outputRange);
  return (
    <motion.div
      className={cn(
        'absolute top-1/2 -left-full aspect-[1] w-[300%]',
        className,
      )}
      style={{
        rotate,
        ...style,
      }}
      {...props}
    />
  );
}
export function CircleCardsWrapper({
  yOutput = [0, 280],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { yOutput?: number[] }) {
  const { scrollYProgress } = useCircleCardsContext();
  const y = useTransform(scrollYProgress, [0, 1], yOutput);

  return (
    <motion.div
      className={cn('relative min-h-screen w-full overflow-hidden', className)}
      style={{ y, ...style }}
      {...props}
    />
  );
}

export function CircleCard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'absolute top-0 left-1/2 aspect-3/4 max-h-[90vh] w-1/4 max-w-full min-w-2xs origin-top-left -translate-x-1/2 -translate-y-1/2',
        className,
      )}
      {...props}
    />
  );
}
