import { cn } from '@/lib/utils';
import {
  setStaggerDirection,
  StaggerDirection,
} from '@/registry/utils/set-stagger-direction';
import { splitText } from '@/registry/utils/split-text';
import React from 'react';

const ANIMATION_VARIANTS_CLASSES = {
  left: {
    hidden: '-translate-x-full',
    visible: 'group-hover:translate-x-0',
  },
  right: {
    hidden: 'translate-x-full',
    visible: 'group-hover:translate-x-0',
  },
  top: {
    hidden: '-translate-y-full',
    visible: 'group-hover:translate-y-0',
  },
  bottom: {
    hidden: 'translate-y-full',
    visible: 'group-hover:translate-y-0',
  },
};

export function TextStaggerHover({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

interface TextStaggerHoverElementT extends React.ComponentProps<'span'> {
  // characters: string[];
  animation?: keyof typeof ANIMATION_VARIANTS_CLASSES;
  staggerDirection?: StaggerDirection;
}
export function TextStaggerHoverActive({
  animation = 'bottom',
  staggerDirection = 'first',
  className,
  children,
  ...props
}: TextStaggerHoverElementT) {
  const { characters, characterCount } = splitText(String(children));
  const { hidden, visible } = ANIMATION_VARIANTS_CLASSES[animation];

  return (
    <span className={cn('inline-block', className)}>
      {characters.map((char, index) => {
        const staggerDelay = setStaggerDirection({
          direction: staggerDirection,
          totalItems: characterCount,
          index,
        });
        return (
          <span
            className={cn(
              'inline-block transition-transform duration-500 ease-out',
              hidden,
              visible,
            )}
            key={index}
            style={{
              transitionDelay: `${staggerDelay}s`,
            }}
            {...props}
          >
            {char === ' ' ? <>&nbsp;</> : char}
          </span>
        );
      })}
    </span>
  );
}

export function TextStaggerHoverHidden({
  animation = 'top',
  staggerDirection = 'first',
  className,
  children,
  ...props
}: TextStaggerHoverElementT) {
  const { characters, characterCount } = splitText(String(children));
  const { hidden, visible } = ANIMATION_VARIANTS_CLASSES[animation];
  return (
    <span className={cn('inline-block', className)}>
      {characters.map((char, index) => {
        const staggerDelay = setStaggerDirection({
          direction: staggerDirection,
          totalItems: characterCount,
          index,
        });
        return (
          <span
            className={cn(
              'inline-block transition-transform duration-500 ease-out',
              hidden,
              visible,
            )}
            key={index}
            style={{
              transitionDelay: `${staggerDelay}s`,
            }}
            {...props}
          >
            {char === ' ' ? <>&nbsp;</> : char}
          </span>
        );
      })}
    </span>
  );
}
