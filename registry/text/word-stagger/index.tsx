import { cn } from '@/lib/utils';
import { GSAP_TRANSITIONS } from '@/registry/utils/gsap-transitions';
import {
  AnimationT,
  useAnimationVariants,
} from '@/registry/utils/use-animation-variants';
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
            ease: GSAP_TRANSITIONS['power1.out'],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
