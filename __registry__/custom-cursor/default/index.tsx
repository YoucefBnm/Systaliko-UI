'use client';

import * as React from 'react';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionStyle,
  Variants,
  TargetAndTransition,
} from 'motion/react';

import { cn } from '@/lib/utils';
import { useFollowMouse } from '@/__registry__/utils/use-follow-mouse/default';

const springConfig = {
  damping: 25,
  stiffness: 250,
  mass: 1,
  restSpeed: 0.01,
  restDelta: 0.01,
  duration: 0.3,
};

const customCursorVariants: Variants = {};

type CursorVariant = keyof typeof customCursorVariants;

export function useSetCursorVariant() {
  const [cursorVariant, setCursorVariant] = React.useState<
    CursorVariant | MotionStyle
  >('default');
  const [cursorChildren, setCursorChildren] = React.useState<React.ReactNode>(
    <div className="rounded-full bg-black size-5" />,
  );

  const handleCustomStyle = React.useCallback((style: MotionStyle) => {
    setCursorVariant(style);
  }, []);
  const resetCursorChildren = () =>
    setCursorChildren(<div className="rounded-full bg-black size-5" />);

  const resetStyle = () => setCursorVariant({});
  return {
    cursorVariant,
    setCursorVariant,
    cursorChildren,
    setCursorChildren,
    handleCustomStyle,
    resetCursorChildren,
    resetStyle,
  };
}

interface CustomCursorProps extends HTMLMotionProps<'div'> {
  variant?: CursorVariant | MotionStyle;
  cursorChildren?: React.ReactNode;
}

export function CustomCursor({
  variant = 'default',
  cursorChildren = null,
  className,
  style,
}: CustomCursorProps) {
  const { cursorXSpring, cursroYSpring } = useFollowMouse(springConfig);

  const animate = React.useMemo(() => {
    if (typeof variant === 'string') {
      return variant;
    }
    return variant as TargetAndTransition;
  }, [variant]);

  return (
    <motion.div
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-50 flex min-w-5 min-h-5 items-center justify-center text-center text-xs',
        className,
      )}
      layout={'preserve-aspect'}
      variants={customCursorVariants}
      animate={animate}
      style={{
        y: cursroYSpring,
        x: cursorXSpring,
        ...style,
      }}
      exit={{ transition: { duration: 0.5 } }}
    >
      <AnimatePresence mode="sync">
        {cursorChildren && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 0.8,
              duration: 0.2,
            }}
            className="flex items-center justify-center"
          >
            {cursorChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
