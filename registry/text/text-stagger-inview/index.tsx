'use client';
import * as React from 'react';

import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  stagger,
  StaggerOrigin,
} from 'motion/react';
import {
  animation_variants,
  AnimationVariantsT,
} from '@/registry/utils/animation-variants';
interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationVariantsT;
}

export function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = animation_variants[animation || 'opacity'];
  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  staggerValue?: number;
  staggerStart?: StaggerOrigin;
  animation?: AnimationVariantsT;
}

export function TextStaggerInview({
  children,
  transition,
  viewport = { once: true, amount: 0.25 },
  staggerValue = 0.02,
  staggerStart = 'first',
  animation,
  ...props
}: TextStaggerProps) {
  const words = String(children).split(' ');
  return (
    <motion.span
      initial="hidden"
      whileInView={'visible'}
      viewport={viewport}
      transition={{
        delayChildren: stagger(staggerValue, { from: staggerStart }),
      }}
      {...props}
    >
      <MotionConfig
        transition={{
          ease: transition?.ease || 'easeOut',
          ...transition,
        }}
      >
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <WordStagger data-word={word} animation={animation}>
              {word}
            </WordStagger>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </MotionConfig>
    </motion.span>
  );
}
