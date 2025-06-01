'use client';
import * as React from 'react';

import { AnimationT } from '@/__registry__/utils/use-animation-variants/shadcn-new-york';
import { HTMLMotionProps, motion } from 'motion/react';
import { WordStagger } from '@/__registry__/text/word-stagger/shadcn-new-york';

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  animation?: AnimationT;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  stagger = 0.02,
  animation,
  ...props
}: TextStaggerProps) {
  const words = String(children).split(' ');
  return (
    <motion.span
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: true }}
      className={className}
      transition={{ staggerChildren: stagger, ...transition }}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <WordStagger animation={animation}>{word}</WordStagger>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
