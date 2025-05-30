'use client';

import {
  AnimationT,
  useAnimationVariants,
} from '@/__registry__/utils/use-animation-variants/shadcn-default';
import { HTMLMotionProps, motion } from 'motion/react';
import * as React from 'react';
interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}
interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  animation?: AnimationT;
}
const TRANSITION_CONFIG = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] };

export function Word({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = useAnimationVariants(animation);
  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
          transition={TRANSITION_CONFIG}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
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
          <Word animation={animation}>{word}</Word>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
