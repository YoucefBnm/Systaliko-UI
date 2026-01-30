import { cn } from '@/lib/utils';
import React from 'react';

export function Pulse({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex size-2 [&>*:first-child]:bg-primary/50 [&>*:last-child]:bg-primary',
        className,
      )}
      {...props}
    >
      <span className="animate-ping absolute inline-flex size-full rounded-full" />
      <span className="relative inline-flex rounded-full size-full " />
    </div>
  );
}
