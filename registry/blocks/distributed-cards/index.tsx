'use client';
import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';
import {
  motion,
  HTMLMotionProps,
  MotionValue,
  useScroll,
  useTransform,
  MapInputRange,
  useMotionTemplate,
} from 'motion/react';
import React from 'react';

interface DistributedCardsProps extends React.ComponentPropsWithRef<'div'> {
  offset?: any;
  spacerClassName?: ClassValue;
}
interface DistributedCardsContextValue {
  scrollYProgress: MotionValue<number>;
}
interface DistributedCardsContainerProps extends HTMLMotionProps<'div'> {
  yRange?: unknown[];
  inputRange?: MapInputRange;
}
interface DistributedCardCellProps extends HTMLMotionProps<'div'> {
  yRange: unknown[];
  xRange: unknown[];
  inputRange?: MapInputRange;
}

const DistributedCardsContext = React.createContext<
  DistributedCardsContextValue | undefined
>(undefined);
export function useDistributedCardsContext() {
  const context = React.useContext(DistributedCardsContext);
  if (!context) {
    throw new Error(
      'useDistributedCardsContext must be used within a DistributedCardsContextProvider',
    );
  }
  return context;
}
export function DistributedCards({
  offset = ['start start', 'end end'],
  spacerClassName,
  className,
  children,
  ...props
}: DistributedCardsProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  return (
    <DistributedCardsContext.Provider value={{ scrollYProgress }}>
      <div ref={scrollRef} className={cn('relative', className)} {...props}>
        {children}
        <div className={cn('h-96', className)} />
      </div>
    </DistributedCardsContext.Provider>
  );
}

export function DistributedCardsContainer({
  yRange = [0, 384],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: DistributedCardsContainerProps) {
  const { scrollYProgress } = useDistributedCardsContext();
  const y = useTransform(scrollYProgress, inputRange, yRange);
  return (
    <motion.div
      className={cn('w-full', className)}
      style={{ y, ...style }}
      {...props}
    />
  );
}

export function DistributedCardCell({
  yRange,
  xRange,
  inputRange = [0, 1],
  style,
  ...props
}: DistributedCardCellProps) {
  const { scrollYProgress } = useDistributedCardsContext();
  const x = useTransform(scrollYProgress, inputRange, xRange);
  const y = useTransform(scrollYProgress, inputRange, yRange);

  const transform = useMotionTemplate`translateX(${x}) translateY(${y})`;
  return (
    <motion.div
      style={{
        transform,
        ...style,
      }}
      {...props}
    />
  );
}
