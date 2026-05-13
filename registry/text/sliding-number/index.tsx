'use client';
import React from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

function SlidingCharacter({
  char,
  index,
  valueLength,
  ...props
}: HTMLMotionProps<'span'> & {
  char: string;
  index: number;
  valueLength: number;
}) {
  const isDigit = /\d/.test(char);
  // Rightmost characters animate first — stagger from right to left
  const fromRight = valueLength - 1 - index;

  return (
    <motion.span
      variants={
        isDigit
          ? {
              enter: (d: number) => ({ y: d > 0 ? '110%' : '-110%' }),
              center: { y: '0%' },
              exit: (d: number) => ({ y: d > 0 ? '-110%' : '110%' }),
            }
          : {
              enter: { opacity: 0, scale: 0.5 },
              center: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.5 },
            }
      }
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        mass: 1,
        delay: isDigit ? fromRight * 0.025 : 0,
      }}
      className="inline-block"
      {...props}
    >
      {char}
    </motion.span>
  );
}
export function SlidingNumber({
  value,
  className,
  ...props
}: React.ComponentProps<'span'> & {
  value: number;
}) {
  const prevRef = React.useRef(value);
  const [direction, setDirection] = React.useState(0);

  React.useLayoutEffect(() => {
    if (value !== prevRef.current) {
      setDirection(value > prevRef.current ? 1 : -1);
      prevRef.current = value;
    }
  }, [value]);

  const formatted = `$${value.toLocaleString()}`.split('');

  return (
    <span className={cn('inline-flex tabular-nums', className)} {...props}>
      {formatted.map((char, i) => (
        <span key={i} className="relative inline-flex overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <SlidingCharacter
              char={char}
              custom={direction}
              key={`${i}-${char}`}
              valueLength={formatted.length}
              index={i}
            />
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}
