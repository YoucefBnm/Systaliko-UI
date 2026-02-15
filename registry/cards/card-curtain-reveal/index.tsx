'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

const clipPathVariants: ClassValue =
  'delay-[0.1] duration-400 ease-out transition-[clip-path] [clip-path:polygon(50%_0,50%_0,50%_100%,50%_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]';

export function CardCurtainReveal({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group relative flex flex-col gap-2 overflow-hidden  ',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardCurtainRevealFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn(clipPathVariants, className)} {...props} />;
}

export function CardCurtainRevealBody({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex-1 p-6', className)} {...props} />;
}

export function CardCurtainRevealTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <h2
      className={cn(
        'group-hover:translate-y-0 translate-y-[170px] duration-300 ease-out transition-transform',
        className,
      )}
      {...props}
    />
  );
}

export function CardCurtain({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 size-full mix-blend-difference',
        clipPathVariants,
        className,
      )}
      {...props}
    />
  );
}

export function CardCurtainRevealDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn(clipPathVariants, className)} {...props} />;
}
