'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const cardVariants = cva('rounded-xl  flex flex-col border gap-6 p-6', {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground shadow-sm',
      glass:
        'bg-gradient-to-b from-card/10 to-card/5 border-secondary/15 shadow-lg backdrop-blur-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  );
}
