'use client';
import { HTMLMotionProps, motion, Transition, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';

const revealMaskVariants = {
  hidden: {
    maskImage: `linear-gradient(to bottom, black 100%, transparent 100%)`,
    maskSize: `100% 4%`,
    maskRepeat: 'repeat-y',
  },
  visible: {
    maskImage: `linear-gradient(to bottom, black 0%, transparent 0%)`,
  },
} satisfies Variants;
const TRANSITION = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
} as Transition;
export function RevealMask({
  className,
  transition = TRANSITION,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      className={cn('pointer-events-none z-50 bg-background', className)}
      variants={revealMaskVariants}
      initial={'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={transition}
      {...props}
    />
  );
}
