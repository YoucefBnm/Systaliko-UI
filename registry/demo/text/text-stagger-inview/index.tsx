'use client';

import {
  AnimationConfigProvider,
  AnimationSelector,
  StaggerInput,
  useSetAnimationConfig,
} from '@/registry/animation-config';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';

export const TextStaggerInviewDemo = () => {
  return (
    <AnimationConfigProvider>
      <TextStaggerInviewDemoContent />
    </AnimationConfigProvider>
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
        className="overflow-hidden text-4xl tracking-tight font-bold"
        stagger={staggerValue}
      >
        Stagger Text Inview Demo
      </TextStaggerInview>
    </div>
  );
};
