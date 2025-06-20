'use client';
import {
  AnimationConfig,
  AnimationSelector,
  StaggerSelector,
  useSetAnimationConfig,
} from '@/components/docs/animation-config';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import * as React from 'react';

const TextStaggerHoverDemoContent = () => {
  const { animation, staggerDirection } = useSetAnimationConfig();
  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <div className="flex flex-col gap-4 items-start">
        <AnimationSelector />
        <StaggerSelector />
      </div>

      <TextStaggerHover
        as={'h2'}
        className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
      >
        <TextStaggerHoverActive
          key={`${animation}-${staggerDirection}`}
          className="opacity-20"
          animation={animation}
          staggerDirection={staggerDirection}
        >
          Text Stagger Hover Demo
        </TextStaggerHoverActive>

        <TextStaggerHoverHidden
          key={`${animation}-${staggerDirection}-2`}
          animation={animation}
          staggerDirection={staggerDirection}
        >
          Text Stagger Hover Demo
        </TextStaggerHoverHidden>
      </TextStaggerHover>
    </div>
  );
};

export const TextStaggerHoverDemo = () => {
  return (
    <AnimationConfig>
      <TextStaggerHoverDemoContent />
    </AnimationConfig>
  );
};
