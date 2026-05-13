'use client';
import { Slider } from '@/components/ui/slider';
import { SlidingNumber } from '@/registry/text/sliding-number';
import React from 'react';

export function SlidingNumberDemo() {
  const [value, setValue] = React.useState<number>(0);
  return (
    <div className="p-8 w-full space-y-4 max-w-md mx-auto">
      <Slider
        min={100}
        max={10000}
        step={100}
        value={[value]}
        onValueChange={(val) => setValue(val[0])}
      />
      <SlidingNumber value={value} className="text-2xl font-medium" />
    </div>
  );
}
