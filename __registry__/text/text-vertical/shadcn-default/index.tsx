import { cn } from '@/lib/utils';
import * as React from 'react';

type ElementType = React.ElementType;

interface TextVerticalProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function TextVertical({
  as: Component = 'div',
  className,
  style,
  ...props
}: TextVerticalProps) {
  return (
    <Component
      className={cn('size-min -rotate-180 whitespace-nowrap', className)}
      style={{
        writingMode: 'vertical-rl',
        ...style,
      }}
      {...props}
    />
  );
}
