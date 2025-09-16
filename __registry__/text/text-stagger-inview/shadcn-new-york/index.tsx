'use client';
import * as React from 'react';

import { AnimationT } from '@/__registry__/utils/use-animation-variants/shadcn-new-york';
import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  Transition,
} from 'motion/react';
import { WordStagger } from '@/__registry__/text/word-stagger/shadcn-new-york';
import { TRANSITIONS } from '@/__registry__/utils/transitions/shadcn-new-york';

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  staggerDirection?: 1 | -1;
  animation?: AnimationT;
  characterTransition?: Transition;
  as?: React.ElementType;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  stagger = 0.02,
  staggerDirection,
  animation,
  characterTransition = TRANSITIONS,
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
      transition={{
        staggerChildren: stagger,
        staggerDirection: staggerDirection,
        ...transition,
      }}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <MotionConfig transition={characterTransition}>
            <WordStagger data-word={word} animation={animation}>
              {word}
            </WordStagger>
          </MotionConfig>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </MotionComponent>
  );
}
