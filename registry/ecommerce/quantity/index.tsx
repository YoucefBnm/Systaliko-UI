'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button, ButtonProps } from '@/registry/shadcn/button';
import { motion, AnimatePresence } from 'motion/react';
import { MinusIcon, PlusIcon } from 'lucide-react';

const MotionButton = motion.create(
  Button,
) as typeof motion.button extends React.ComponentType<infer P>
  ? React.ComponentType<
      Omit<
        ButtonProps,
        'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
      > &
        Omit<P, keyof ButtonProps>
    >
  : never;
const buttonSpring = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
} as const;
export interface QuantityIncreaseProps extends ButtonProps {
  max?: number;
  value?: number;
}

export function QuantityIncrease({
  children = <PlusIcon className="size-4" />,
  className,
  max,
  value,
  ...props
}: QuantityIncreaseProps) {
  const isDisabled = max !== undefined && value !== undefined && value >= max;

  return (
    <MotionButton
      variant={'ghost'}
      aria-label="increase quantity"
      className={cn(
        'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
        className,
      )}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.05 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      transition={buttonSpring}
      {...props}
    >
      {children as React.ReactElement}
    </MotionButton>
  );
}

export interface QuantityDecreaseProps extends ButtonProps {
  value?: number;
  min?: number;
}

export function QuantityDecrease({
  children = <MinusIcon className="size-4" />,
  className,
  value,
  min = 1,
  ...props
}: QuantityDecreaseProps) {
  const isDisabled = value !== undefined && value <= min;

  return (
    <MotionButton
      variant={'ghost'}
      aria-label="decrease quantity"
      className={cn(
        'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.05 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      transition={buttonSpring}
      {...props}
    >
      {children as React.ReactElement}
    </MotionButton>
  );
}

export function QuantityValue({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center tabular-nums px-2 relative overflow-hidden',
        className,
      )}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={String(children)}
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -6, opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
