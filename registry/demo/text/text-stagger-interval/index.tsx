'use client';

import React, { useState } from 'react';
import { TextStaggerInterval } from '@/registry/text/text-stagger-interval';
import { Input } from '@/registry/shadcn/input';
import { Switch } from '@/registry/shadcn/switch';
import {
  AnimationConfig,
  AnimationSelector,
  StaggerInput,
  useSetAnimationConfig,
} from '@/components/docs/animation-config';

const TextStaggerIntervalDemoContent = () => {
  const { animation, staggerValue } = useSetAnimationConfig();
  const [intervalTime, setIntervalTime] = useState(2000);
  const [pauseOnHover, setPauseOnHover] = useState(true);

  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <div className="flex flex-col gap-4 items-start md:flex-row md:items-end">
        <AnimationSelector />
        <StaggerInput />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="interval-input">
            Interval (ms)
          </label>
          <Input
            id="interval-input"
            className="w-[120px]"
            type="number"
            step={100}
            min={500}
            value={intervalTime}
            onChange={(e) => setIntervalTime(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="pause-hover">
            Pause on Hover
          </label>
          <div className="flex h-9 items-center">
            <Switch
              id="pause-hover"
              checked={pauseOnHover}
              onCheckedChange={setPauseOnHover}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl">
          <TextStaggerInterval
            words={[
              'Modern UI',
              'Creative Layouts',
              'Dynamic Sites',
              'Sleek Designs',
            ]}
            animation={animation}
            staggerValue={staggerValue}
            interval={intervalTime}
            pauseOnHover={pauseOnHover}
            className="text-primary"
          />
        </h2>
      </div>
    </div>
  );
};

export function TextStaggerIntervalDemo() {
  return (
    <AnimationConfig>
      <TextStaggerIntervalDemoContent />
    </AnimationConfig>
  );
}
