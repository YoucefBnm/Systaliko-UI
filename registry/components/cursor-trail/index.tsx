'use client';

import React from 'react';
import { HTMLMotionProps, motion, useAnimationControls } from 'motion/react';

import { cn } from '@/lib/utils';
import { useDimensions } from '@/registry/utils/use-dimensions';

export interface CursorTrailProps extends React.ComponentProps<'div'> {
  pixelSize?: number; // px
  fadeDuration?: number; // ms
  delay?: number; // ms
  pixelClassName?: string;
}

export function CursorTrail({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  pixelClassName,
  className,
  children,
  ...props
}: CursorTrailProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);
  const trailId = React.useRef(Math.random().toString(36).substring(2));

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);

      const pixelElement = document.getElementById(
        `${trailId.current}-pixel-${x}-${y}`,
      );
      if (pixelElement) {
        const animatePixel = (pixelElement as any).__animatePixel;
        if (animatePixel) animatePixel();
      }
    },
    [pixelSize],
  );

  const columns = React.useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize],
  );
  const rows = React.useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize],
  );

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-auto', className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            >
              {children}
            </PixelDot>
          ))}
        </div>
      ))}
    </div>
  );
}
interface PixelDotProps extends HTMLMotionProps<'div'> {
  size: number;
  fadeDuration: number;
  delay: number;
}

const PixelDot = React.memo(
  ({
    id,
    size,
    fadeDuration,
    delay,
    className,
    style,
    ...props
  }: PixelDotProps) => {
    const controls = useAnimationControls();

    const animatePixel = React.useCallback(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
      });
    }, [controls, fadeDuration, delay]);

    // Attach the animatePixel function to the DOM element
    const ref = React.useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          (node as any).__animatePixel = animatePixel;
        }
      },
      [animatePixel],
    );

    return (
      <motion.div
        id={id}
        ref={ref}
        className={cn('pointer-events-none', className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        {...props}
      />
    );
  },
);
