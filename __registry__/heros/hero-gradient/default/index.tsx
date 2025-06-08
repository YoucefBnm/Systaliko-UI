'use client';
import { cn } from '@/lib/utils';
import { gradientStyle } from '@/__registry__/backgrounds/background-gradient/default';
import { TextStaggerInview } from '@/__registry__/text/text-stagger-inview/default';
import {
  AnimationT,
  useAnimationVariants,
} from '@/__registry__/utils/use-animation-variants/default';
import { motion, HTMLMotionProps } from 'motion/react';
import * as React from 'react';

export const GRADIENT_COLORS = {
  blue: [
    { color: 'rgb(180, 176, 254)', start: '0%' },
    { color: 'rgb(54, 50, 133)', start: '22.92%' },
    { color: 'rgb(17, 13, 91)', start: '42.71%' },
    { color: 'rgb(5, 3, 39)', start: '88.54%' },
  ],
  black: [
    { color: '#333333', start: '0%' },
    { color: '#292929', start: '22.92%' },
    { color: '#1F1F1F', start: '42.71%' },
    { color: '#0A0A0A', start: '88.54%' },
  ],
  purple: [
    { color: '#342456', start: '0%' },
    { color: '#2B1E48', start: '22.92%' },
    { color: '#22183A', start: '42.71%' },
    { color: '#110C1D', start: '88.54%' },
  ],
  green: [
    { color: '#116A67', start: '0%' },
    { color: '#0E5856', start: '22.92%' },
    { color: '#0B4745', start: '42.71%' },
    { color: '#062726', start: '88.54%' },
  ],
  skyblue: [
    { color: '#70D9FF', start: '0%' },
    { color: '#5CD3FF', start: '22.92%' },
    { color: '#47CEFF', start: '42.71%' },
    { color: '#0096CC', start: '88.54%' },
  ],
  red: [
    { color: '#931020', start: '0%' },
    { color: '#810E1C', start: '22.92%' },
    { color: '#6E0C18', start: '42.71%' },
    { color: '#37060C', start: '88.54%' },
  ],
  orange: [
    { color: '#B04007', start: '0%' },
    { color: '#893206', start: '22.92%' },
    { color: '#622304', start: '42.71%' },
    { color: '#3B1502', start: '88.54%' },
  ],
};
const GRADIENT_SIZES = {
  default: { width: '70%', height: '55%' },
  sm: { width: '50%', height: '35%' },
  lg: { width: '85%', height: '70%' },
};
const GRADIENT_POSITIONS = {
  top: { x: '50%', y: '-10%' },
  center: { x: '50%', y: '50%' },
  bottom: { x: '50%', y: '110%' },
  left: { x: '-10%', y: '0%' },
  right: { x: '110%', y: '0%' },
};

export const HeroTextBadge = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { animation?: AnimationT }
>(({ animation, className, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  return (
    <motion.div
      className={cn(
        'text-sm flex justify-center items-center px-4 py-2 rounded',
        className,
      )}
      variants={animationVariants}
      ref={ref}
      {...props}
    />
  );
});
HeroTextBadge.displayName = 'HeroTextBadge';

export const HeroHeading = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { animation?: AnimationT }
>(({ children, animation, className, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  return (
    <TextStaggerInview
      className={className}
      as="h1"
      variants={animationVariants}
      ref={ref}
      {...props}
    >
      {children}
    </TextStaggerInview>
  );
});
HeroHeading.displayName = 'HeroHeading';

export const HeroDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'p'> & { animation?: AnimationT }
>(({ animation, className, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  return (
    <motion.p
      className={className}
      variants={animationVariants}
      ref={ref}
      {...props}
    />
  );
});
HeroDescription.displayName = 'HeroDescription';
export const HeroGradientCta = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { animation?: AnimationT }
>(({ animation, className, ...props }, ref) => {
  const variants = useAnimationVariants(animation);
  return (
    <motion.div
      ref={ref}
      className={cn('flex gap-4 items-center', className)}
      variants={variants}
      {...props}
    />
  );
});
HeroGradientCta.displayName = 'HeroGradientCta';

export const HeroGradientText = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>(({ className, transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ...transition,
      }}
      {...props}
    />
  );
});
HeroGradientText.displayName = 'HeroGradientText';
interface HeroGradientBgProps {
  gradientColors?:
    | { color: string; start: string }[]
    | keyof typeof GRADIENT_COLORS;
  gradientSize?: { width: string; height: string };
  gradientPosition?: { x: string; y: string };
}
export const HeroGradient = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement> & HeroGradientBgProps
>(
  (
    {
      gradientColors = GRADIENT_COLORS['blue'],
      gradientSize = GRADIENT_SIZES['default'],
      gradientPosition = GRADIENT_POSITIONS['center'],
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { gradientBg } = gradientStyle({
      gradientColors:
        typeof gradientColors === 'string'
          ? GRADIENT_COLORS[gradientColors as keyof typeof GRADIENT_COLORS]
          : gradientColors,
      gradientSize,
      gradientPosition,
    });

    return (
      <section
        style={{ backgroundImage: gradientBg, ...style }}
        className={cn('relative', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
HeroGradient.displayName = 'HeroGradient';
