'use client';

import * as React from 'react';
import { gradientStyle } from '@/__registry__/backgrounds/background-gradient/shadcn-default';

interface BackgroundGradientDemoProps {
  gradientColors: { color: string; start: string }[];
  gradientSize: { width: string; height: string };
  gradientPosition: { x: string; y: string };
}

export function BackgroundGradientDemo({
  gradientColors,
  gradientSize,
  gradientPosition,
}: BackgroundGradientDemoProps) {
  const { gradientBg } = gradientStyle({
    gradientColors,
    gradientSize,
    gradientPosition,
  });

  return (
    <section
      className="bg-background relative h-dvh w-full px-6 py-12 place-content-center"
      style={{
        backgroundImage: gradientBg,
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gradient Background Demo</h1>
        <p className="text-lg">Adjust the controls to customize the gradient</p>
      </div>
    </section>
  );
}
