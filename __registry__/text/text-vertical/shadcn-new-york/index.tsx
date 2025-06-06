import { cn } from '@/lib/utils';
import * as React from 'react';

type ElementType = React.ElementType;

interface TextVerticalProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const textVerticalStyle = 'size-min -rotate-180 whitespace-nowrap';

export function TextVertical({
  as: Component = 'div',
  className,
  style,
  ...props
}: TextVerticalProps) {
  return (
    <Component
      className={cn(textVerticalStyle, className)}
      style={{
        writingMode: 'vertical-rl',
        ...style,
      }}
      {...props}
    />
  );
}
