'use client';

import {
  ClipPathAnimationConfig,
  useSetClipPathAnimationConfig,
  ClipPathAnimationSelector,
} from '@/components/docs/clip-path-animation-config';
import { clip_path_animation_variants } from '@/registry/utils/clip-path-animation-variants';

import { motion } from 'motion/react';

export const ClipPathAnimationVariantsDemo = () => {
  return (
    <ClipPathAnimationConfig>
      <ClipPathAnimationVariantsContent />
    </ClipPathAnimationConfig>
  );
};

const ClipPathAnimationVariantsContent = () => {
  const { animation } = useSetClipPathAnimationConfig();
  const clipPathAnimationVariants =
    clip_path_animation_variants[animation || 'curtain-down'];

  return (
    <div className="relative flex  flex-col justify-between gap-8">
      <ClipPathAnimationSelector />

      <div className="w-3xs mx-auto">
        <motion.img
          alt="city"
          src="https://images.unsplash.com/photo-1581043067854-5762c5b94a42?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={403}
          height={606}
          key={animation}
          variants={clipPathAnimationVariants}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
          initial="hidden"
          whileInView="visible"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
