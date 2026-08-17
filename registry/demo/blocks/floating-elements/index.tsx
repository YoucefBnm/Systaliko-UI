'use client';

import {
  FloatingElementItem,
  FloatingElements,
} from '@/registry/blocks/floating-elements';
import { Label } from '@/registry/shadcn/label';
import { Slider } from '@/registry/shadcn/slider';
import { useState } from 'react';

const ELEMENTS = [
  { id: 'prox-1', className: 'bg-red-500 top-[10%] left-[10%]' },
  { id: 'prox-2', className: 'bg-teal-500 top-[20%] right-[8%]' },
  { id: 'prox-3', className: 'bg-blue-500 top-[80%] left-[10%]' },
  { id: 'prox-4', className: 'bg-green-500 bottom-[10%] right-[10%]' },
  { id: 'prox-5', className: 'bg-yellow-500 top-[5%] left-[30%]' },
  { id: 'prox-6', className: 'bg-violet-500 top-[5%] right-[30%]' },
  { id: 'prox-7', className: 'bg-emerald-500 bottom-[8%] left-[25%]' },
];

export function FloatingElementsDemo() {
  const [intensity, setIntensity] = useState(50);
  const [stiffness, setStiffness] = useState(150);
  const [damping, setDamping] = useState(15);

  return (
    <div className="flex h-screen flex-col">
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

      <FloatingElements className="bg-secondary flex-1">
        {ELEMENTS.map((el) => (
          <FloatingElementItem
            className={`absolute rounded shadow-[4px_4px_#000] size-20 ${el.className}`}
            key={el.id}
            intensity={intensity}
            stiffness={stiffness}
            damping={damping}
          />
        ))}
      </FloatingElements>
    </div>
  );
}
