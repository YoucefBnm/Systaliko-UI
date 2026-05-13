'use client';
import * as React from 'react';

import { AnimatePresence, motion, MotionConfig, Variants } from 'motion/react';
import {
  ANIMATION_VARIANTS,
  AnimationT,
} from '@/registry/utils/animation-variants';

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

export function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];

  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function buildContainerVariants(staggerValue: number): Variants {
  return {
    hidden: {
      transition: {
        staggerChildren: staggerValue,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: staggerValue,
        staggerDirection: 1,
      },
    },
  };
}

export interface TextStaggerIntervalProps extends React.ComponentProps<'span'> {
  words: string[];
  /**
   * Time in milliseconds each word is fully visible before transitioning
   * to the next one.
   * @default 2000
   */
  interval?: number;
  /**
   * Per-character stagger delay in seconds.
   * @default 0.03
   */
  staggerValue?: number;
  animation?: AnimationT;
  /**
   * Pause the interval while the user hovers over the element.
   * @default true
   */
  pauseOnHover?: boolean;
  /** Extra class names applied to the outer wrapper. */
}

export function TextStaggerInterval({
  words,
  interval = 2000,
  staggerValue = 0.03,
  animation,
  pauseOnHover = true,
  ...props
}: TextStaggerIntervalProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval, isPaused]);

  const containerVariants = React.useMemo(
    () => buildContainerVariants(staggerValue),
    [staggerValue],
  );

  return (
    <span
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-block"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <MotionConfig transition={{ ease: 'easeOut' }}>
            <WordStagger animation={animation}>
              {words[currentIndex]}
            </WordStagger>
          </MotionConfig>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
