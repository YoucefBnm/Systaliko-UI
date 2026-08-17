'use client';

import {
  FloatingElements,
  InfiniteFloatingItem,
} from '@/registry/blocks/floating-elements';
import { Label } from '@/registry/shadcn/label';
import { Slider } from '@/registry/shadcn/slider';
import { useState } from 'react';

const ELEMENTS = [
  { id: 'inf-1', className: 'bg-violet-500 top-[10%] left-[15%]', phase: 0 },
  {
    id: 'inf-2',
    className: 'bg-emerald-500 bottom-[12%] left-[25%]',
    phase: Math.PI / 3,
  },
  {
    id: 'inf-3',
    className: 'bg-yellow-500 top-[40%] right-[12%]',
    phase: Math.PI,
  },
  {
    id: 'inf-4',
    className: 'bg-rose-500 top-[15%] right-[30%]',
    phase: Math.PI / 2,
  },
  {
    id: 'inf-5',
    className: 'bg-sky-500 bottom-[20%] right-[20%]',
    phase: (Math.PI * 5) / 4,
  },
  {
    id: 'inf-6',
    className: 'bg-orange-500 top-[60%] left-[8%]',
    phase: (Math.PI * 3) / 2,
  },
];

export function FloatingElementsInfiniteDemo() {
  const [depth, setDepth] = useState(0.03);
  const [amplitude, setAmplitude] = useState(12);
  const [speed, setSpeed] = useState(1);
  const [stiffness, setStiffness] = useState(80);
  const [damping, setDamping] = useState(20);

  return (
    <div className="flex h-screen flex-col">
      <div className="border-b bg-background/80 backdrop-blur-sm p-4 z-10">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-2 min-w-[160px]">
            <Label className="text-sm font-medium">
              Depth: {depth.toFixed(2)}
            </Label>
            <Slider
              value={[depth * 100]}
              onValueChange={([v]) => setDepth(v / 100)}
              min={0}
              max={15}
              step={1}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[160px]">
            <Label className="text-sm font-medium">
              Amplitude: {amplitude}px
            </Label>
            <Slider
              value={[amplitude]}
              onValueChange={([v]) => setAmplitude(v)}
              min={1}
              max={60}
              step={1}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[160px]">
            <Label className="text-sm font-medium">
              Speed: {speed.toFixed(1)}
            </Label>
            <Slider
              value={[speed * 10]}
              onValueChange={([v]) => setSpeed(v / 10)}
              min={1}
              max={40}
              step={1}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[160px]">
            <Label className="text-sm font-medium">
              Stiffness: {stiffness}
            </Label>
            <Slider
              value={[stiffness]}
              onValueChange={([v]) => setStiffness(v)}
              min={10}
              max={300}
              step={10}
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[160px]">
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
          <InfiniteFloatingItem
            className={`absolute rounded shadow-[4px_4px_#000] size-20 ${el.className}`}
            key={el.id}
            depth={depth}
            amplitude={amplitude}
            speed={speed}
            phase={el.phase}
            stiffness={stiffness}
            damping={damping}
          />
        ))}
      </FloatingElements>
    </div>
  );
}
