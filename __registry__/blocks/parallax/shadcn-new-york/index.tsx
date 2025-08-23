'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  motion,
  HTMLMotionProps,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';

interface ParallaxItemProps extends HTMLMotionProps<'div'> {
  start: number;
  end: number;
}

export function Parallax({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('relative min-h-dvh w-full', className)} {...props} />
  );
}

export function PrallaxContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('px-default min-h-screen', className)} {...props} />
  );
}
export function ParallaxItem({
  start,
  end,
  className,
  style,
  ...props
}: ParallaxItemProps) {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.7]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ transform, opacity, ...style }}
      {...props}
    />
  );
}
