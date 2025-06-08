'use client';

import * as React from 'react';
import { gradientStyle } from '@/__registry__/backgrounds/background-gradient/default';
import {
  BackgroundConfig,
  GradientControls,
  useSetBackgroundConfig,
} from '@/components/docs/background-config';

function GradientDemoContent() {
  const { gradientColors, gradientSize, gradientPosition } =
    useSetBackgroundConfig();
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
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <GradientControls />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gradient Background Demo</h1>
        <p className="text-lg">Adjust the controls to customize the gradient</p>
      </div>
    </section>
  );
}

export function BackgroundGradientDemo() {
  return (
    <BackgroundConfig>
      <GradientDemoContent />
    </BackgroundConfig>
  );
}

export default BackgroundGradientDemo;
