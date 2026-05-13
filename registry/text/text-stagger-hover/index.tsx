'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';
import {
  ANIMATION_VARIANTS,
  AnimationT,
} from '@/registry/utils/animation-variants';
import {
  setStaggerDirection,
  StaggerDirection,
} from '@/registry/utils/set-stagger-direction';
import { splitText } from '@/registry/utils/split-text';

type NewVariants = {
  hovered: {
    x?: string | number;
    y?: string | number;
    opacity: number;
    scale?: number;
    filter?: string;
  };
  initial: {
    x?: string | number;
    y?: string | number;
    opacity: number;
    scale?: number;
    filter?: string;
  };
};

const animation_variants_text_active = Object.entries(
  ANIMATION_VARIANTS,
).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof ANIMATION_VARIANTS] = {
      hovered: value.hidden,
      initial: value.visible,
    };
    return acc;
  },
  {} as Record<keyof typeof ANIMATION_VARIANTS, NewVariants>,
);
const animation_variants_text_hidden = Object.entries(
  ANIMATION_VARIANTS,
).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof ANIMATION_VARIANTS] = {
      initial: value.hidden,
      hovered: value.visible,
    };
    return acc;
  },
  {} as Record<keyof typeof ANIMATION_VARIANTS, NewVariants>,
);

export function TextStaggerHover({
  className,
  ...props
}: HTMLMotionProps<'span'>) {
  return (
    <motion.span
      className={cn(
        'grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 place-content-center relative overflow-hidden',
        className,
      )}
      initial={'initial'}
      whileHover={'hovered'}
      data-slot="text-stagger-hover"
      {...props}
    />
  );
}
interface CharacterProps extends HTMLMotionProps<'span'> {
  char: string;
  index: number;
  wordLength: number;
  staggerDirection?: StaggerDirection;
}
function Character({
  char,
  index,
  wordLength,
  staggerDirection = 'first',
  transition,
  ...props
}: CharacterProps) {
  const staggerDelay = setStaggerDirection({
    direction: staggerDirection,
    totalItems: wordLength,
    index,
  });
  return (
    <motion.span
      className="inline-block"
      transition={{
        delay: staggerDelay,
        ...transition,
      }}
      {...props}
    >
      {char}
      {char === ' ' && index < wordLength - 1 && <>&nbsp;</>}
    </motion.span>
  );
}
interface TextStaggerHoverContentProps extends HTMLMotionProps<'span'> {
  animation?: AnimationT;
  staggerDirection?: StaggerDirection;
}
export function TextStaggerHoverActive({
  animation = 'bottom',
  staggerDirection = 'first',
  className,
  children,
  transition,
  ...props
}: TextStaggerHoverContentProps) {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = animation_variants_text_active[animation];

  return (
    <span
      data-slot="text-stagger-hover-active"
      className={cn('inline-block', className)}
    >
      {characters.map((char, index) => (
        <Character
          className="inline-block"
          char={char}
          index={index}
          wordLength={characterCount}
          staggerDirection={staggerDirection}
          key={`${char}-${index}-hidden`}
          variants={animationVariants}
          transition={{
            ...transition,
          }}
          {...props}
        />
      ))}
    </span>
  );
}

export function TextStaggerHoverHidden({
  animation = 'top',
  staggerDirection = 'first',
  children,
  className,
  transition,
  ...props
}: TextStaggerHoverContentProps) {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = animation_variants_text_hidden[animation];
  return (
    <span className={cn('inline-block ', className)}>
      {characters.map((char, index) => (
        <Character
          className="inline-block"
          index={index}
          char={char}
          wordLength={characterCount}
          staggerDirection={staggerDirection}
          key={`${char}-${index}-hidden`}
          variants={animationVariants}
          transition={{
            ...transition,
          }}
          {...props}
        />
      ))}
    </span>
  );
}
