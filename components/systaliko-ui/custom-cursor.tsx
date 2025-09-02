'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionStyle,
  MotionValue,
} from 'motion/react';
import { useFollowMouse } from '@/components/systaliko-ui/utils/use-follow-mouse';

const springConfig = {
  damping: 25,
  stiffness: 250,
  mass: 1,
  restSpeed: 0.01,
  restDelta: 0.01,
  duration: 0.3,
};

interface CustomCursorContextType {
  cursorRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorXSpring: MotionValue<number>;
  cursorYSpring: MotionValue<number>;
  cursorStyle?: MotionStyle;
  setCursorStyle: React.Dispatch<React.SetStateAction<MotionStyle | undefined>>;
  cursorChildren?: React.ReactNode;
  setCursorChildren: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const CustomCursorContext = React.createContext<CustomCursorContextType | null>(
  null,
);

const Provider = ({
  children,
}: {
  children:
    | React.ReactNode
    | ((context: CustomCursorContextType) => React.ReactNode);
}) => {
  const { cursorRef, containerRef, cursorXSpring, cursorYSpring } =
    useFollowMouse({
      springConfig,
    });
  const [cursorStyle, setCursorStyle] = React.useState<MotionStyle>();
  const [cursorChildren, setCursorChildren] = React.useState<React.ReactNode>();
  const value = {
    cursorRef,
    containerRef,
    cursorXSpring,
    cursorYSpring,
    cursorStyle,
    setCursorStyle,
    cursorChildren,
    setCursorChildren,
  };
  return (
    <CustomCursorContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </CustomCursorContext.Provider>
  );
};

export const useCustomCursor = () => {
  const context = React.useContext(CustomCursorContext);
  if (!context) {
    throw new Error(
      'useCustomCursor must be used within a CustomCursorProvider',
    );
  }
  return context;
};

export function CustomCursor({
  className,
  style,
  ...props
}: HTMLMotionProps<'div'>) {
  const {
    cursorRef,
    cursorXSpring,
    cursorYSpring,
    cursorChildren,
    cursorStyle,
  } = useCustomCursor();
  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none left-0 top-0 z-[999] flex items-center justify-center',
        className,
      )}
      ref={cursorRef}
      layout
      style={{
        y: cursorYSpring,
        x: cursorXSpring,
        ...style,
        ...cursorStyle,
      }}
      exit={{ transition: { duration: 0.3 } }}
      {...props}
    >
      <AnimatePresence mode="sync">
        {cursorChildren && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="flex items-center justify-center"
          >
            {cursorChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
CustomCursor.Provider = Provider;
