'use client';
import * as React from 'react';

import { AnimationT } from '@/__registry__/utils/use-animation-variants/default';
import { HTMLMotionProps, motion } from 'motion/react';
import { WordStagger } from '@/__registry__/text/word-stagger/default';

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  animation?: AnimationT;
  as?: React.ElementType;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  stagger = 0.02,
  animation,
  as: Component = 'span',
  ...props
}: TextStaggerProps) {
  const words = String(children).split(' ');
  const MotionComponent = motion.create(Component);
  return (
    <MotionComponent
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
    </MotionComponent>
  );
}
