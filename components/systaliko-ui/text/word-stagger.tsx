import { cn } from '@/lib/utils';
import {
  AnimationT,
  useAnimationVariants,
} from '@/components/systaliko-ui/utils/use-animation-variants';
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
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
