'use client';

import {
  FloatingElementItem,
  FloatingElements,
} from '@/registry/blocks/floating-elements';
import { Label } from '@/registry/shadcn/field';
import { Slider } from '@/registry/shadcn/slider';
import React from 'react';

const colors = ['bg-red-300', 'bg-indigo-300', 'bg-blue-300', 'bg-violet-300'];

export function MagneticGridDemo() {
  const [intensity, setIntensity] = React.useState(20);
  const [stiffness, setStiffness] = React.useState(110);
  const [damping, setDamping] = React.useState(15);

  return (
    <div className="h-screen space-y-6">
      <div className="border-b bg-background/80 backdrop-blur-sm p-4 z-10">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-2 min-w-[180px]">
            <Label className="text-sm font-medium">
              Intensity: {intensity}px
            </Label>
            <Slider
              value={[intensity]}
              onValueChange={([v]) => setIntensity(v)}
              min={5}
              max={150}
              step={1}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[180px]">
            <Label className="text-sm font-medium">
              Stiffness: {stiffness}
            </Label>
            <Slider
              value={[stiffness]}
              onValueChange={([v]) => setStiffness(v)}
              min={20}
              max={500}
              step={10}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[180px]">
            <Label className="text-sm font-medium">Damping: {damping}</Label>
            <Slider
              value={[damping]}
              onValueChange={([v]) => setDamping(v)}
              min={1}
              max={60}
              step={1}
            />
          </div>
        </div>
      </div>

      <FloatingElements className="bg-secondary w-xs max-w-xs aspect-square mx-auto grid grid-cols-[repeat(20,minmax(0,1fr))] p-1 gap-1">
        {Array.from({ length: 300 }).map((_, i) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          return (
            <FloatingElementItem
              key={i}
              className={`aspect-square ${randomColor}`}
              intensity={intensity}
              stiffness={stiffness}
              damping={damping}
            />
          );
        })}
      </FloatingElements>
    </div>
  );
}
