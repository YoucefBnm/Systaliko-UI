'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'motion/react';

import { cn } from '@/lib/utils';

const TRANSITION_CONFIG = {
  duration: 0.7,
  ease: [0.4, 0.2, 0.2, 1],
} as const;

const TRANSFORM_STYLES: React.CSSProperties = {
  transformStyle: 'preserve-3d',
  perspective: '1000px',
  backfaceVisibility: 'hidden',
};

type FlipDirection = 'horizontal' | 'vertical';
interface CardFlipProps extends React.HTMLAttributes<HTMLDivElement> {
  flipDirection?: FlipDirection;
  initialFlipped?: boolean;
  onFlip?: (isFlipped: boolean) => void;
  disabled?: boolean;
}
interface CardFlipContextValue {
  isFlipped: boolean;
  flipDirection: FlipDirection;
  disabled?: boolean;
}

const CardFlipContext = React.createContext<CardFlipContextValue | undefined>(
  undefined,
);
function useCardFlipContext() {
  const context = React.useContext(CardFlipContext);
  if (!context) {
    throw new Error('useCardFlipContext must be used within a CardFlip');
  }
  return context;
}

const CardFlip = React.memo(
  React.forwardRef<HTMLDivElement, CardFlipProps>(
    (
      {
        className,
        flipDirection = 'horizontal',
        initialFlipped = false,
        onFlip,
        disabled,
        ...props
      },
      ref,
    ) => {
      const [isFlipped, setIsFlipped] = React.useState(initialFlipped);

      const handleMouseEnter = React.useCallback(() => {
        if (!disabled) {
          setIsFlipped(true);
          onFlip?.(true);
        }
      }, [disabled, onFlip]);

      const handleMouseLeave = React.useCallback(() => {
        if (!disabled) {
          setIsFlipped(false);
          onFlip?.(false);
        }
      }, [disabled, onFlip]);

      const contextValue = React.useMemo(
        () => ({ isFlipped, flipDirection, disabled }),
        [isFlipped, flipDirection, disabled],
      );

      return (
        <CardFlipContext.Provider value={contextValue}>
          <div
            ref={ref}
            className={cn(
              'relative border-none bg-none shadow-none',
              disabled && 'pointer-events-none',
              className,
            )}
            style={{
              ...TRANSFORM_STYLES,
              ...props.style,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={isFlipped}
            {...props}
          />
        </CardFlipContext.Provider>
      );
    },
  ),
);
CardFlip.displayName = 'CardFlip';

const CardFlipFront = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useCardFlipContext();

      const rotation = React.useMemo(() => {
        if (!isFlipped) return { rotateX: 0, rotateY: 0 };
        return flipDirection === 'horizontal'
          ? { rotateY: -180, rotateX: 0 }
          : { rotateX: -180, rotateY: 0 };
      }, [isFlipped, flipDirection]);

      return (
        <motion.div
          ref={ref}
          className={cn(
            'absolute inset-0 z-20 size-full overflow-hidden',
            className,
          )}
          initial={false}
          animate={rotation}
          transition={TRANSITION_CONFIG}
          style={{
            ...TRANSFORM_STYLES,
            ...props.style,
          }}
          {...props}
        />
      );
    },
  ),
);
CardFlipFront.displayName = 'CardFlipFront';

const CardFlipBack = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useCardFlipContext();

      const rotation = React.useMemo(() => {
        if (isFlipped) return { rotateX: 0, rotateY: 0 };
        return flipDirection === 'horizontal'
          ? { rotateY: 180, rotateX: 0 }
          : { rotateX: 180, rotateY: 0 };
      }, [isFlipped, flipDirection]);

      return (
        <motion.div
          ref={ref}
          className={cn('absolute inset-0 z-10 size-full', className)}
          initial={false}
          animate={rotation}
          transition={TRANSITION_CONFIG}
          style={{
            ...TRANSFORM_STYLES,
            ...props.style,
          }}
          {...props}
        />
      );
    },
  ),
);
CardFlipBack.displayName = 'CardFlipBack';

export { CardFlip, CardFlipFront, CardFlipBack };
