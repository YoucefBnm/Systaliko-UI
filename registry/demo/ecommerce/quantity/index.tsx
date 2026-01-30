'use client';

import {
  QuantityDecrease,
  QuantityIncrease,
  QuantityValue,
} from '@/registry/ecommerce/quantity';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export function QuantityDemo() {
  const [value, setValue] = useState(1);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="size-full place-content-center place-items-center">
      <div className="grid max-w-min grid-cols-[repeat(3,max-content)] rounded-md border items-center">
        <QuantityDecrease
          className="rounded-[7px]"
          onClick={decrease}
          value={value}
        />
        <QuantityValue>{value}</QuantityValue>
        <QuantityIncrease
          className="rounded-[7px]"
          onClick={increase}
          max={10}
          value={value}
        />
      </div>
    </div>
  );
}
