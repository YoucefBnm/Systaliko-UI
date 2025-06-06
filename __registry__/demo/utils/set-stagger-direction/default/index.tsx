'use client';

import {
  AnimationConfig,
  AnimationSelector,
  StaggerInput,
  StaggerSelector,
  useSetAnimationConfig,
} from '@/__registry__/animation-config/default';
import { setStaggerDirection } from '@/__registry__/utils/set-stagger-direction/default';
import { useAnimationVariants } from '@/__registry__/utils/use-animation-variants/default';
import { motion } from 'motion/react';

const ITEMS = [
  {
    bg: 'bg-green-500',
  },
  {
    bg: 'bg-indigo-500',
  },
  {
    bg: 'bg-rose-500',
  },
  {
    bg: 'bg-yellow-500',
  },
];

export const SetStaggerDirectionDemo = () => {
  return (
    <AnimationConfig>
      <SetStaggerDirectionDemoContent />
    </AnimationConfig>
  );
};
const SetStaggerDirectionDemoContent = () => {
  const { animation, staggerDirection, staggerValue } = useSetAnimationConfig();

  const animationVariants = useAnimationVariants(animation);

  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="flex flex-wrap  gap-4 items-center justify-center">
        <AnimationSelector />
        <StaggerSelector />
        <StaggerInput />
      </div>

      <div className="flex gap-4 flex-wrap">
        {ITEMS.map(({ bg }, index) => (
          <motion.div
            className={`${bg} size-16 rounded-md`}
            key={`${index}-${animation}-${staggerDirection}-${staggerValue}`}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              ease: 'easeIn',
              delay: setStaggerDirection({
                direction: staggerDirection,
                staggerValue: staggerValue,
                totalItems: ITEMS.length,
                index: index,
              }),
            }}
          />
        ))}
      </div>
    </div>
  );
};
