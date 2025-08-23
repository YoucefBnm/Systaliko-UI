'use client';

import * as React from 'react';

import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';

import { cn } from '@/lib/utils';

interface CardStickyProps extends HTMLMotionProps<'div'> {
  arrayLength: number;
  index: number;
  incrementY?: number;
  incrementZ?: number;
  incrementRotation?: number;
}
interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined);
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (context === undefined) {
    throw new Error(
      'useContainerScrollContext must be used within a ContainerScrollContextProvider',
    );
  }
  return context;
}

export const ContainerScrollRotatedCards: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, style, className, ...props }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative min-h-svh w-full', className)}
        style={{ perspective: '1000px', ...style }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};
ContainerScrollRotatedCards.displayName = 'ContainerScroll';

export const CardsContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn('stiky top-0 left-0', className)}
      style={{ perspective: '1000px', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};
CardsContainer.displayName = 'CardsContainer';

export const CardTransformed = React.forwardRef<
  HTMLDivElement,
  CardStickyProps
>(
  (
    {
      arrayLength,
      index,
      incrementY = 10,
      incrementZ = 10,
      incrementRotation = -index + 90,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { scrollYProgress } = useContainerScrollContext();

    const start = index / (arrayLength + 1);
    const end = (index + 1) / (arrayLength + 1);
    const range = React.useMemo(() => [start, end], [start, end]);
    const rotateRange = [range[0] - 1.5, range[1] / 1.5];

    const y = useTransform(scrollYProgress, range, ['0%', '-180%']);
    const rotate = useTransform(scrollYProgress, rotateRange, [
      incrementRotation,
      0,
    ]);
    const transform = useMotionTemplate`translateZ(${
      index * incrementZ
    }px) translateY(${y}) rotate(${rotate}deg)`;

    const cardStyle = {
      top: index * incrementY,
      transform,
      backfaceVisibility: 'hidden' as const,
      zIndex: (arrayLength - index) * incrementZ,
      ...style,
    };
    return (
      <motion.div
        layout="position"
        ref={ref}
        style={cardStyle}
        className={cn('absolute will-change-transform', className)}
        {...props}
      />
    );
  },
);
CardTransformed.displayName = 'CardTransformed';
