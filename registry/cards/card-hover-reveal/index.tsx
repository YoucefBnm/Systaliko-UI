'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

export function CardHoverReveal({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('group relative overflow-hidden', className)}
      {...props}
    />
  );
}

export function CardHoverRevealMain({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'size-full transition-transform duration-300 group-hover:scale-105 scale-100',
        className,
      )}
      {...props}
    />
  );
}

export function CardHoverRevealContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'absolute inset-[auto_1.5rem_1.5rem] p-6 backdrop-blur-lg transition-transform duration-500 ease-in-out translate-y-[120%] group-hover:translate-y-0',
        className,
      )}
      {...props}
    />
  );
}
