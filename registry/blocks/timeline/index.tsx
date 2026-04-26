'use client';
import { cn } from '@/lib/utils';
import {
  motion,
  HTMLMotionProps,
  MotionValue,
  useScroll,
  useSpring,
} from 'motion/react';
import React from 'react';

interface TimelineContextT {
  scrollYProgress: MotionValue<number>;
}

const TimelineContext = React.createContext<TimelineContextT | undefined>(
  undefined,
);
function useTimelineContext() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimelineContext must be used within a Timeline');
  }
  return context;
}

export function Timeline({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  return (
    <TimelineContext.Provider value={{ scrollYProgress }}>
      <div
        className={cn('relative', className)}
        ref={scrollRef}
        data-slot="timeline"
        {...props}
      />
    </TimelineContext.Provider>
  );
}
export function TimelineCard({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      data-slot="timeline-card"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      {...props}
    />
  );
}

export function TimelineProgress({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { scrollYProgress } = useTimelineContext();
  const scaleY = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 300,
    restDelta: 0.001,
  });

  return (
    <div
      className={cn('self-stretch w-0.5 bg-muted *:bg-primary', className)}
      data-slot="timeline-progress"
      {...props}
    >
      <motion.div className="origin-top size-full" style={{ scaleY }} />
    </div>
  );
}
