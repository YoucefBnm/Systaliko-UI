'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';

export const clipPathVariants = {
  default: 'polygon(60% 0, 100% 40%, 100% 100%, 0 100%, 0 0)',
  reversed: 'polygon(0 0, 100% 0, 100% 100%, 40% 100%, 0 60%)',
} as const;

export const ContainerClipped = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex relative h-full flex-col md:grid md:grid-cols-12 md:grid-rows-[10%_80%_10%]',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
ContainerClipped.displayName = 'ContainerClipped';

export const ContainerClippedColLg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'md:col-span-9 md:row-span-3 md:col-start-1 md:row-start-1 relative',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
ContainerClippedColLg.displayName = 'ContainerClippedColLg';

export const ContainerClippedColMd = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'relative md:row-start-2 md:row-end-3 md:col-start-7 md:col-end-13',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
ContainerClippedColMd.displayName = 'ContainerClippedColMd';

export const ContainerClippedBg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: keyof typeof clipPathVariants;
  }
>(({ variant = 'default', className, style, ...props }, ref) => {
  return (
    <div
      className={className}
      ref={ref}
      style={{
        clipPath: clipPathVariants[variant],
        ...style,
      }}
      {...props}
    />
  );
});
ContainerClippedBg.displayName = 'ContainerClippedBg';
