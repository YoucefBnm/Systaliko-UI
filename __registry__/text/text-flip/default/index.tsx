import { cn } from '@/lib/utils';
import * as React from 'react';

interface TextFlipProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function TextFlip({
  as: Component = 'span',
  className,
  style,
  children,
  ...props
}: TextFlipProps) {
  return (
    <Component
      className={cn(
        'group hover:rotate-x-90 relative size-full py-0.5 px-1.5 text-nowrap inline-flex justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.75,0,0.24,1)] backface-hidden',
        className,
      )}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    >
      <span className="group-hover:-translate-y-full group-hover:opacity-0 transition-transform duration-700 ease-[cubic-bezier(0.75,0,0.24,1)]">
        {children}
      </span>
      <span
        className={cn(
          'absolute inset-0 -rotate-x-90 opacity-0',
          'group-hover:opacity-100 group-hover:translate-y-0',
          'transition-transform duration-700 ease-[cubic-bezier(0.75,0,0.24,1)]',
          'flex items-center justify-center',
          'transform-[rotateX(-90deg)_translateY(50%)] origin-[center_bottom]',
        )}
      >
        {children}
      </span>
    </Component>
  );
}
