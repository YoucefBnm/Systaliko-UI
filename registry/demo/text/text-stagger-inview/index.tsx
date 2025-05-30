'use client';

import { useState } from 'react';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import { AnimationT } from '@/registry/utils/use-animation-variants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const animations: { value: AnimationT; label: string }[] = [
  { value: 'left', label: 'Slide from Left' },
  { value: 'right', label: 'Slide from Right' },
  { value: 'top', label: 'Slide from Top' },
  { value: 'bottom', label: 'Slide from Bottom' },
  { value: 'z', label: 'Scale' },
  { value: 'blur', label: 'Blur' },
  // { value: "", label: 'Opacity' },
];

export const TextStaggerInviewDemo = () => {
  const [animation, setAnimation] = useState<AnimationT>();
  const [staggerValue, setStaggerValue] = useState<number>(0.02);
  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <div className="flex items-center justify-between">
        <Select onValueChange={(value) => setAnimation(value as AnimationT)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose your animation" />
          </SelectTrigger>
          <SelectContent className="relative z-40">
            {animations.map((animation) => (
              <SelectItem
                key={animation.value ?? animation.label}
                value={animation.value ?? ''}
              >
                {animation.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          className="max-w-fit"
          type="number"
          step={0.01}
          min={0}
          value={staggerValue}
          onChange={(e) => setStaggerValue(Number(e.target.value))}
        />
      </div>
      <TextStaggerInview
        key={`${animation}-${staggerValue}`}
        animation={animation}
        className="overflow-hidden text-4xl tracking-tight font-bold"
        stagger={staggerValue}
      >
        Orchestrated text animation with staggered animations
      </TextStaggerInview>
    </div>
  );
};
