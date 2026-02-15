'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { SVG_GLOBE_PATH } from '@/registry/utils/svg-globe-path';

interface GlobePinProps extends React.ComponentProps<'g'> {
  x: number;
  y: number;
}

export function GlobeGlow({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('absolute inset-0 rounded-full blur-3xl', className)}
      {...props}
    />
  );
}
export function GlobeSvg({
  className,
  children,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 1259 477"
      className={cn('size-full', className)}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <linearGradient
          id="paint0_linear_255_765"
          x1="629.21"
          y1="-67.3351"
          x2="629.21"
          y2="627.144"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.274038" stopColor="var(--primary)" />
          <stop offset="0.735577" stopColor="var(--background)" />
        </linearGradient>
      </defs>

      <path
        d={SVG_GLOBE_PATH.p15b69c00}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#paint0_linear_255_765)"
        fillOpacity="0.15"
      />

      {children}
    </svg>
  );
}
export function Globe({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex aspect-2/1 w-full items-center justify-center',
        className,
      )}
      {...props}
    />
  );
}

export function GlobePin({ x, y, ...props }: GlobePinProps) {
  return (
    <g {...props}>
      <circle cx={x} cy={y} r="4" className="fill-primary" />
      <circle cx={x} cy={y} r="12" className="fill-primary/20 animate-pulse" />
    </g>
  );
}
