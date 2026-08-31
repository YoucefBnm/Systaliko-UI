import { cn } from '@/lib/utils';
import React from 'react';

export function AnimatedBorder({
  className,
  style,
  color = 'var(--primary)',
  ...props
}: React.ComponentProps<'div'> & { color?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none touch-none z-0 rounded-[inherit] border border-border/5 bg-transparent',
        className,
      )}
      style={{
        WebkitMask:
          'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000) border-box',
        mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000) border-box',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        ...style,
      }}
      data-slot="animated-border"
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="size-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,var(--color)_10%,transparent_20%)] will-change-transform"
          style={{ '--color': color } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
