'use client';
import * as React from 'react';

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

interface TextStaggerHoverContextValue {
  isMouseIn: boolean;
}
const TextStaggerHoverContext = React.createContext<
  TextStaggerHoverContextValue | undefined
>(undefined);
function useTextStaggerHoverContext() {
  const context = React.useContext(TextStaggerHoverContext);
  if (!context) {
    throw new Error(
      'useTextStaggerHoverContext must be used within an TextStaggerHoverContextProvider',
    );
  }
  return context;
}

export const TextStaggerHover = ({
  children,
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  const [isMouseIn, setIsMouseIn] = React.useState<boolean>(false);
  const handleMouse = () => setIsMouseIn((prevState) => !prevState);

  return (
    <TextStaggerHoverContext.Provider value={{ isMouseIn }}>
      <span
        className={cn('inline-block relative overflow-hidden', className)}
        {...props}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {children}
      </span>
    </TextStaggerHoverContext.Provider>
  );
};

interface TextStaggerHoverContentProps extends HTMLMotionProps<'span'> {
  animation?: AnimationT;
  staggerDirection?: StaggerDirection;
}
export const TextStaggerHoverActive = ({
  animation = 'bottom',
  staggerDirection = 'first',
  className,
  children,
  transition,
  ...props
}: TextStaggerHoverContentProps) => {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = ANIMATION_VARIANTS[animation];

  const { isMouseIn } = useTextStaggerHoverContext();
  return (
    <span className={cn('inline-block', className)}>
      {characters.map((char, index) => {
        const staggerDelay = setStaggerDirection({
          direction: staggerDirection,
          totalItems: characterCount,
          index,
        });
        return (
          <motion.span
            className="inline-block"
            key={`${char}-${index}-hidden`}
            variants={animationVariants}
            initial="visible"
            animate={isMouseIn ? 'hidden' : 'visible'}
            transition={{
              delay: staggerDelay,
              ...transition,
            }}
            {...props}
          >
            {char}
            {char === ' ' && index < characters.length - 1 && <>&nbsp;</>}
          </motion.span>
        );
      })}
    </span>
  );
};

export const TextStaggerHoverHidden = ({
  animation = 'top',
  staggerDirection = 'first',
  children,
  className,
  transition,
  ...props
}: TextStaggerHoverContentProps) => {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = ANIMATION_VARIANTS[animation];
  const { isMouseIn } = useTextStaggerHoverContext();
  return (
    <span className={cn('inline-block absolute left-0 top-0', className)}>
      {characters.map((char, index) => {
        const staggerDelay = setStaggerDirection({
          direction: staggerDirection,
          totalItems: characterCount,
          index,
        });
        return (
          <motion.span
            className="inline-block"
            key={`${char}-${index}-hidden`}
            variants={animationVariants}
            initial="hidden"
            animate={isMouseIn ? 'visible' : 'hidden'}
            transition={{
              delay: staggerDelay,
              ...transition,
            }}
            {...props}
          >
            {char}
            {char === ' ' && index < characters.length - 1 && <>&nbsp;</>}
          </motion.span>
        );
      })}
    </span>
  );
};
