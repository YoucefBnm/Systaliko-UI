import { cn } from '@/lib/utils';
import React from 'react';

export function Pulse({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex h-2 w-2 [&>*:first-child]:bg-indigo-300 [&>*:last-child]:bg-indigo-500',
        className,
      )}
      {...props}
    >
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full" />
      <span className="relative inline-flex rounded-full size-full " />
    </div>
  );
}
