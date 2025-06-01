import { cn } from '@/lib/utils';
import { GsapTransitions } from '@/__registry__/utils/gsap-transitions/default';
import {
  AnimationT,
  useAnimationVariants,
} from '@/__registry__/utils/use-animation-variants/default';
import { motion } from 'motion/react';

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

export function WordStagger({
  children,
  animation,
  className,
  ...props
}: WordProps) {
  const characters = String(children).split('');
  const animationVariants = useAnimationVariants(animation);
  return (
    <span className={cn('inline-block text-nowrap', className)} {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
          transition={{
            duration: 0.3,
            ease: GsapTransitions['power1.out'],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
