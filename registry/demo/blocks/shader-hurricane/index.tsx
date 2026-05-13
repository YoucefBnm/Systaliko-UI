'use client';

import React, { useState, useDeferredValue } from 'react';
import { ShaderHurricane } from '@/registry/blocks/shader';
import { Input } from '@/registry/shadcn/input';

export function ShaderHurricaneDemo() {
  const [color1, setColor1] = useState('#00f2fe');
  const [color2, setColor2] = useState('#4facfe');
  const [color3, setColor3] = useState('#ffd700');
  const [background, setBackground] = useState('#0a0a0a');
  const [intensity, setIntensity] = useState(1);
  const [density, setDensity] = useState(1);
  const [speed, setSpeed] = useState(0.2);

  const deferredColor1 = useDeferredValue(color1);
  const deferredColor2 = useDeferredValue(color2);
  const deferredColor3 = useDeferredValue(color3);
  const deferredBackground = useDeferredValue(background);
  const deferredIntensity = useDeferredValue(intensity);
  const deferredDensity = useDeferredValue(density);
  const deferredSpeed = useDeferredValue(speed);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderHurricane
        className="absolute inset-0"
        colors={[deferredColor1, deferredColor2, deferredColor3]}
        background={deferredBackground}
        intensity={deferredIntensity}
        density={deferredDensity}
        speed={deferredSpeed}
      />

      <div className="absolute right-4 top-4 z-10 w-72 rounded-xl border border-border/50 bg-background/50 p-6 backdrop-blur-md">
        <h3 className="mb-4 text-lg font-semibold tracking-tight">
          Configuration
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="color1" className="text-sm font-medium">
              Color 1
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color1"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="h-8 w-8 cursor-pointer rounded border-none bg-transparent p-0"
              />
              <Input
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="h-8 font-mono text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="color2" className="text-sm font-medium">
              Color 2
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color2"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-8 w-8 cursor-pointer rounded border-none bg-transparent p-0"
              />
              <Input
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-8 font-mono text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="color3" className="text-sm font-medium">
              Color 3
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color3"
                value={color3}
                onChange={(e) => setColor3(e.target.value)}
                className="h-8 w-8 cursor-pointer rounded border-none bg-transparent p-0"
              />
              <Input
                value={color3}
                onChange={(e) => setColor3(e.target.value)}
                className="h-8 font-mono text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="background" className="text-sm font-medium">
              Background
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="background"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="h-8 w-8 cursor-pointer rounded border-none bg-transparent p-0"
              />
              <Input
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="h-8 font-mono text-xs"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="intensity" className="text-sm font-medium">
              Intensity
            </label>
            <Input
              id="intensity"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="h-8"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="density" className="text-sm font-medium">
              Density
            </label>
            <Input
              id="density"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="h-8"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="speed" className="text-sm font-medium">
              Speed
            </label>
            <Input
              id="speed"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
