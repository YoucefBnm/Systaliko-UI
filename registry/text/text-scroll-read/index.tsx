'use client';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import * as React from 'react';

interface TextScrollReadProps extends React.HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any;
  yRange?: number[];
  wrapperClassName?: string;
  spaceClass?: string;
}
interface TextScrollReadContextValue {
  scrollYProgress: MotionValue<number>;
}
const TextScrollReadContext = React.createContext<
  TextScrollReadContextValue | undefined
>(undefined);
export function useTextScrollReadContext() {
  const context = React.useContext(TextScrollReadContext);
  if (!context) {
    throw new Error(
      'useTextScrollReadContext must be used within a TextScrollReadContextProvider',
    );
  }
  return context;
}
export function TextScrollRead({
  spaceClass,
  offset = ['start end', 'center start'],
  children,
  className,
  ...props
}: TextScrollReadProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });
  return (
    <TextScrollReadContext.Provider value={{ scrollYProgress }}>
      <div ref={ref} className={cn('relative', className)} {...props}>
        {children}
        <div className={cn('h-60', spaceClass)} />
      </div>
    </TextScrollReadContext.Provider>
  );
}

export function TextScrollReadWrap({
  yInput = [0, 1],
  yRange = [0, 240],
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  yInput?: number[];
  yRange?: number[];
  style?: React.CSSProperties;
}) {
  const { scrollYProgress } = useTextScrollReadContext();
  const y = useTransform(scrollYProgress, yInput, yRange);

  return (
    <motion.div
      style={{
        y,
        willChange: 'transform',
        ...style,
      }}
      {...props}
    />
  );
}

export function ClipText({
  className,
  style,
  ...props
}: HTMLMotionProps<'span'>) {
  const { scrollYProgress } = useTextScrollReadContext();
  const backgroundPositionX = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%'],
  );
  return (
    <motion.span
      className={cn(
        'bg-[length:200%_100%] text-transparent bg-clip-text bg-no-repeat bg-scroll',
        'bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)]',
        className,
      )}
      style={{
        backgroundPositionX,
        ...style,
      }}
      {...props}
    />
  );
}
