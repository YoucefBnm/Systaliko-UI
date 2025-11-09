'use client';
import { cn } from '@/lib/utils';
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import React from 'react';

interface TimelineProps extends React.ComponentPropsWithRef<'div'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any[];
}
interface TimelineContextValue {
  scrollYProgress: MotionValue<number>;
}
const TimelineContext = React.createContext<TimelineContextValue | undefined>(
  undefined,
);
function useTimelineContext() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error('TimelineContext must be used within a TimelineProvider');
  }
  return context;
}
export function Timeline({
  offset = ['start center', 'end end'],
  className,
  ...props
}: TimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });
  return (
    <TimelineContext.Provider value={{ scrollYProgress }}>
      <div
        ref={containerRef}
        className={cn(
          'relative grid grid-cols-[64px_1fr] [&>*]:col-start-1 [&>*]:row-start-1',
          className,
        )}
        {...props}
      />
    </TimelineContext.Provider>
  );
}
export function TimelineContainer({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={cn('col-span-2', className)} {...props} />;
}
export function TimelineCard({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex relative z-10', className)} {...props} />;
}
export function TimelineCardIndex({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'size-16 *:bg-background flex justify-center items-center',
        className,
      )}
      {...props}
    />
  );
}
export function TimelineCardBody({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex-1 p-4', className)} {...props} />;
}

export function TimelineProgress({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useTimelineContext();
  const springConfig = {
    damping: 50,
    stiffness: 300,
    restDelta: 0.001,
  };
  const scaleYTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleYSpring = useSpring(scaleYTransform, springConfig);
  const scaleY = reducedMotion ? scaleYTransform : scaleYSpring;

  return (
    <div
      className={cn(
        'relative  *:bg-primary justify-self-center h-full min-w-px bg-muted-foreground',
        className,
      )}
      {...props}
    >
      <motion.div className="size-full origin-top" style={{ scaleY }} />
    </div>
  );
}
