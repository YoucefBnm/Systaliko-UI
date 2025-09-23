'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  StaggerDirection,
  setStaggerDirection,
} from '@/__registry__/utils/set-stagger-direction/shadcn-new-york';
import { HTMLMotionProps, motion } from 'motion/react';
import { splitText } from '@/__registry__/utils/split-text/shadcn-new-york';
import {
  AnimationT,
  ANIMATION_VARIANTS,
} from '@/__registry__/utils/animation-variants/shadcn-new-york';

interface TextStaggerHoverProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

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
  as: Component = 'span',
  children,
  className,
  ...props
}: TextStaggerHoverProps) => {
  const [isMouseIn, setIsMouseIn] = React.useState<boolean>(false);
  const handleMouse = () => setIsMouseIn((prevState) => !prevState);

  return (
    <TextStaggerHoverContext.Provider value={{ isMouseIn }}>
      <Component
        className={cn('relative inline-block overflow-hidden', className)}
        {...props}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {children}
      </Component>
    </TextStaggerHoverContext.Provider>
  );
};
interface TextStaggerHoverContentProps extends HTMLMotionProps<'span'> {
  animation?: AnimationT;
  staggerDirection?: StaggerDirection;
}
export const TextStaggerHoverActive = ({
  animation,
  staggerDirection = 'start',
  children,
  className,
  transition,
  ...props
}: TextStaggerHoverContentProps) => {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];
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
            className="inline-block text-nowrap"
            key={`${char}-${index}`}
            variants={animationVariants}
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
  animation,
  staggerDirection = 'start',
  children,
  className,
  transition,
  ...props
}: TextStaggerHoverContentProps) => {
  const { characters, characterCount } = splitText(String(children));
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];
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
            key={`${char}-${index}`}
            variants={animationVariants}
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
