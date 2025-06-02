'use client';

import {
  AnimationConfig,
  AnimationSelector,
  useSetAnimationConfig,
} from '@/registry/animation-config';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { motion } from 'motion/react';

export const AnimationVariantsDemo = () => {
  return (
    <AnimationConfig>
      <AnimationVariantsDemoContent />
    </AnimationConfig>
  );
};

const AnimationVariantsDemoContent = () => {
  const { animation } = useSetAnimationConfig();
  const animationVariants = useAnimationVariants(animation);

  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <AnimationSelector />

      <motion.h2
        key={animation}
        variants={animationVariants}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-4xl tracking-tight font-bold"
      >
        Animation variants demo
      </motion.h2>
    </div>
  );
};
