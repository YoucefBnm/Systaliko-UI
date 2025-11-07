'use client';
import {
  motion,
  useReducedMotion,
  ValueKeyframesDefinition,
  Variants,
} from 'motion/react';

interface PropsTextWave extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  text: string;
  as?: React.ElementType;
  colors?: ValueKeyframesDefinition[];
  fontSizes?: ValueKeyframesDefinition[];
  fontWeights?: ValueKeyframesDefinition[];
  delayTime?: number;
}

export const TextWavy = ({
  text,
  as: Component = 'span',
  colors = ['var(--foreground)', 'var(--primary)', 'var(--foreground)'],
  fontSizes = ['12px', '14px', '12px'],
  fontWeights = [400, 600, 400],
  delayTime = 5,
  ...props
}: PropsTextWave) => {
  const letters = text.split('');
  const reducedMotion = useReducedMotion();
  const perspective = {
    initial: {
      fontSize: fontSizes[0],
      fontWeight: fontWeights[0],
      color: colors[0],
    },
    enter: (i: number) => ({
      fontSize: fontSizes,
      fontWeight: fontWeights,
      color: colors,
      transition: {
        delay: delayTime + i * 0.05,
        duration: 0.7,
        ease: 'easeIn',
        repeat: reducedMotion ? 0 : Infinity, // Repeat the animation infinitely
        repeatDelay: 5, // Delay of 5 seconds between repeats
      },
    }),
  } as Variants;

  return (
    <Component {...props}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={perspective}
          initial="initial"
          animate="enter"
        >
          {letter}
        </motion.span>
      ))}
    </Component>
  );
};
