'use client';

import {
  AnimationConfig,
  AnimationSelector,
  StaggerInput,
  useSetAnimationConfig,
} from '@/components/docs/animation-config';
import { TextStaggerInview } from '@/__registry__/text/text-stagger-inview/default';

export const TextStaggerInviewDemo = () => {
  return (
    <AnimationConfig>
      <TextStaggerInviewDemoContent />
    </AnimationConfig>
  );
};

const TextStaggerInviewDemoContent = () => {
  const { animation, staggerValue } = useSetAnimationConfig();
  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <div className="flex flex-col gap-4 items-start">
        <AnimationSelector />
        <StaggerInput />
      </div>
      <TextStaggerInview
        key={`${animation}-${staggerValue}`}
        animation={animation}
        className="text-4xl tracking-tight font-bold"
        stagger={staggerValue}
      >
        Stagger Text Inview Demo
      </TextStaggerInview>
    </div>
  );
};
