'use client';
import * as React from 'react';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/__registry__/utils/use-smooth-scroll/shadcn-default';

interface ContainerScrollAnimationContextValue {
  scrollYProgress: MotionValue<number>;
}
const ContainerScrollAnimationContext = React.createContext<
  ContainerScrollAnimationContextValue | undefined
>(undefined);

export function useContainerScrollAnimationContext() {
  const context = React.useContext(ContainerScrollAnimationContext);
  if (!context) {
    throw new Error(
      'useContainerScrollAnimationContext must be used within a ContainerScrollAnimationContextProvider',
    );
  }
  return context;
}

export function ContainerScrollAnimation({
  spacerClass,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { spacerClass?: string }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });
  useSmoothScroll();
  return (
    <ContainerScrollAnimationContext.Provider value={{ scrollYProgress }}>
      <div ref={scrollRef} className={cn('relative', className)} {...props}>
        {children}
        <div className={cn('w-full h-96', spacerClass)} />
      </div>
    </ContainerScrollAnimationContext.Provider>
  );
}

export function ContainerScrollInset({
  insetRange = [48, 0],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { insetRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const xInset = useTransform(scrollYProgress, inputRange, insetRange);
  const clipPath = useMotionTemplate`inset(0px ${xInset}px)`;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollTranslate({
  yRange = [0, 384],
  inputRange = [0, 1],
  style,
  className,
  ...props
}: HTMLMotionProps<'div'> & { yRange?: unknown[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const y = useTransform(scrollYProgress, inputRange, yRange);
  return (
    <motion.div
      style={{ y, ...style }}
      className={cn('relative', className)}
      {...props}
    />
  );
}

export function ContainerScrollScale({
  scaleRange = [1.2, 1],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { scaleRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const scale = useTransform(scrollYProgress, inputRange, scaleRange);
  return (
    <motion.div className={className} style={{ scale, ...style }} {...props} />
  );
}
