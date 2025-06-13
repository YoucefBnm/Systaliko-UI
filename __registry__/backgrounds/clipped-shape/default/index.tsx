'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';

export type ClippedShapeType = 'polygon' | 'polygon2' | 'polygon3' | 'polygon4';

export const clipPathVariants = (clipPathHeight: number) => ({
  polygon: `polygon(${clipPathHeight || 50}px 0, 100% 0, 100% 100%, 0 100%, 0 ${clipPathHeight || 50}px)`,
  polygon2: `polygon(calc(100% - ${clipPathHeight || 50}px) 0, 100% ${clipPathHeight || 50}px, 100% 100%, 0 100%, 0 0)`,
  polygon3: `polygon(100% 0, 100% calc(100% - ${clipPathHeight || 50}px), calc(100% - ${clipPathHeight || 50}px) 100%, 0 100%, 0 0)`,
  polygon4: `polygon(100% 0, 100% 100%, ${clipPathHeight || 50}px 100%, 0 calc(100% - ${clipPathHeight || 50}px), 0 0)`,
  triangle: `polygon(50% 0, 100% 100%, 0 100%)`,
});

interface ClippedShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  clipHeight?: number;
  shape?: ClippedShapeType;
}
const ClippedShapeContext = React.createContext<
  { clipHeight: number; shape: ClippedShapeType } | undefined
>(undefined);
export function useClippedShapeContext() {
  const context = React.useContext(ClippedShapeContext);
  if (!context) {
    throw new Error(
      'useClippedShapeContext must be used within a ClippedShapeContextProvider',
    );
  }
  return context;
}

export const ClippedShape = React.forwardRef<HTMLDivElement, ClippedShapeProps>(
  ({ clipHeight = 50, shape = 'polygon2', className, ...props }, ref) => {
    return (
      <ClippedShapeContext.Provider value={{ clipHeight, shape }}>
        <div className={cn('relative', className)} {...props} ref={ref} />
      </ClippedShapeContext.Provider>
    );
  },
);
ClippedShape.displayName = 'ClippedShapeProps';

export const ClippedShapeBg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => {
  const { clipHeight, shape } = useClippedShapeContext();
  const clipPath = clipPathVariants(clipHeight)[shape];
  return (
    <div
      className={cn('absolute -z-10 inset-0 size-full', className)}
      style={{
        clipPath,
        ...style,
      }}
      {...props}
      ref={ref}
    />
  );
});
ClippedShapeBg.displayName = 'ClippedShapeBg';

export const ClippedShapeBorder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { borderWidth?: number }
>(({ borderWidth = 2, className, style, ...props }, ref) => {
  const { clipHeight, shape } = useClippedShapeContext();
  const clipPath = clipPathVariants(clipHeight)[shape];
  const borderOffset = String(borderWidth * 2);
  return (
    <div
      className={cn('absolute  size-full -z-20', className)}
      style={{
        clipPath,
        width: `calc(100% + ${borderOffset}px)`,
        height: `calc(100% + ${borderOffset}px)`,
        left: `-${borderWidth}px`,
        top: `-${borderWidth}px`,
        ...style,
      }}
      {...props}
      ref={ref}
    />
  );
});
ClippedShapeBorder.displayName = 'ClippedShapeBorder';
