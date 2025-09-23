'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { motion, MotionConfig } from 'motion/react';

export function ContainerStagger2Demo() {
  const animationVariants = ANIMATION_VARIANTS.default;
  return (
    <div className="p-8">
      <div className="h-dvh place-content-center place-items-center">
        <h1 className="text-4xl">Scroll to see the animation 👇🏻</h1>
      </div>
      <ContainerStagger
        staggerChildren={0.4}
        className="flex overflow-hidden gap-4 justify-center"
      >
        <MotionConfig transition={{ duration: 0.3, ease: 'easeIn' }}>
          <motion.div
            variants={animationVariants}
            className=" size-16 bg-pink-500 rounded"
          />

          <motion.div
            variants={animationVariants}
            className=" size-16 bg-emerald-500 rounded"
          />

          <motion.div
            variants={animationVariants}
            className=" size-16 bg-indigo-500 rounded"
          />

          <motion.div
            variants={animationVariants}
            className=" size-16 bg-yellow-500 rounded"
          />
        </MotionConfig>
      </ContainerStagger>
    </div>
  );
}
