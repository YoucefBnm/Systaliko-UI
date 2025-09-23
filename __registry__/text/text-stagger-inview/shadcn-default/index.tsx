'use client';
import * as React from 'react';

import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  Transition,
  Variants,
} from 'motion/react';
import { cn } from '@/lib/utils';
import {
  ANIMATION_VARIANTS,
  AnimationT,
} from '@/__registry__/utils/animation-variants/shadcn-default';
interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  staggerDirection?: 1 | -1;
  animation?: AnimationT;
  characterTransition?: Transition;
  as?: React.ElementType;
}
function useParseText(text: React.ReactNode) {
  return React.useMemo(() => {
    const stringText = String(text);
    return {
      words: stringText.split(' '),
      characters: stringText.split(''),
    };
  }, [text]);
}

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
  word: string;
  wordIndex: number;
}

const Character = React.memo(
  ({
    char,
    variants,
  }: {
    char: string;
    index: number;
    variants?: Variants;
  }) => (
    <motion.span
      className="inline-block"
      variants={variants}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ),
);
Character.displayName = 'Character';

export const WordStagger = React.memo(
  ({ word, wordIndex, animation, className, ...props }: WordProps) => {
    const characters = React.useMemo(() => word.split(''), [word]);
    const animationVariants = ANIMATION_VARIANTS[animation || 'default'];

    return (
      <span
        className={cn('inline-block text-nowrap', className)}
        data-word={word}
        {...props}
      >
        {characters.map((char, index) => (
          <Character
            key={`${wordIndex}-${index}`}
            char={char}
            index={index}
            variants={animationVariants}
          />
        ))}
      </span>
    );
  },
);
WordStagger.displayName = 'WordStagger';

const WordWrapper = React.memo(
  ({
    word,
    index,
    animation,
    characterTransition,
    showSpace,
  }: {
    word: string;
    index: number;
    animation?: AnimationT;
    characterTransition: Transition;
    showSpace: boolean;
  }) => (
    <>
      <MotionConfig transition={characterTransition}>
        <WordStagger word={word} wordIndex={index} animation={animation} />
      </MotionConfig>
      {showSpace && ' '}
    </>
  ),
);
WordWrapper.displayName = 'WordWrapper';

export const TextStaggerInview = React.memo(
  ({
    children,
    transition,
    className,
    viewport = { once: true, amount: 0.4 },
    stagger = 0.02,
    staggerDirection = 1,
    animation,
    characterTransition = { ease: 'easeOut', duration: 0.25 },
    as: Component = 'span',
    ...props
  }: TextStaggerProps) => {
    const { words } = useParseText(children as React.ReactNode);

    const MotionComponent = React.useMemo(() => motion(Component), [Component]);

    const containerTransition = React.useMemo(
      () => ({
        staggerChildren: stagger,
        staggerDirection,
        ...transition,
      }),
      [stagger, staggerDirection, transition],
    );

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={className}
        transition={containerTransition}
        {...props}
      >
        {words.map((word, index) => (
          <WordWrapper
            key={`${index}-${word.slice(0, 3)}`} // Better key strategy
            word={word}
            index={index}
            animation={animation}
            characterTransition={characterTransition}
            showSpace={index < words.length - 1}
          />
        ))}
      </MotionComponent>
    );
  },
);
TextStaggerInview.displayName = 'TextStaggerInview';
