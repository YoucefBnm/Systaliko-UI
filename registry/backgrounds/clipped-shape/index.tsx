import { cn } from '@/lib/utils';
import * as React from 'react';

interface PolygonProps extends React.HTMLAttributes<HTMLDivElement> {
  withBorder?: boolean;
  clipHeight?: number;
  borderColor?: string;
}
export const Polygon = React.forwardRef<HTMLDivElement, PolygonProps>(
  (
    {
      withBorder = false,
      clipHeight = 50,
      borderColor,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const getBorderColor = borderColor && borderColor.substring(6); // returns 'red-500'
    return (
      <div
        className={cn(
          `${withBorder ? 'border-2' : 'border-none'}`,
          borderColor,
          '!rounded-none',
          className,
        )}
        style={{
          clipPath: `polygon(${clipHeight}px 0%, calc(100% - ${clipHeight}px) 0%, 100% ${clipHeight}px, 100% 100%, calc(100% - ${clipHeight}px) 100%, ${clipHeight}px 100%, 0 100%, 0 0)`,
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {withBorder && (
          <div
            className={cn(
              'absolute rounded-[inherit] origin-top-right h-0.5 rotate-45 object-cover right-[-2px]',
              `bg${getBorderColor}`,
            )}
            style={{
              top: `${clipHeight - 2}px`,
              width: `calc(100% + ${clipHeight}px)`,
            }}
          />
        )}
        {children}
      </div>
    );
  },
);
Polygon.displayName = 'ClippedShape';
