'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const bentoGridVariants = cva(
  'relative grid gap-4 [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right',
  {
    variants: {
      variant: {
        default: `
            grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr]
            [&>*:first-child]:col-span-8 md:[&>*:first-child]:col-span-6 [&>*:first-child]:row-span-3
            [&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
            [&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
            [&>*:nth-child(4)]:col-span-4 md:[&>*:nth-child(4)]:col-span-3
            [&>*:nth-child(5)]:col-span-4 md:[&>*:nth-child(5)]:col-span-3
          `,
        threeCells: `
            grid-cols-2 grid-rows-2 [&>*:nth-child(4)]:hidden [&>*:nth-child(5)]:hidden
            [&>*:first-child]:col-span-2
        `,
        fourCells: `
          grid-cols-3 grid-rows-2
          [&>*:first-child]:col-span-1
          [&>*:nth-child(2)]:col-span-2
          [&>*:nth-child(3)]:col-span-2
          [&>*:nth-child(5)]:hidden
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const GridBento = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bentoGridVariants>
>(({ variant, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(bentoGridVariants({ variant }), className)}
      {...props}
    />
  );
});
GridBento.displayName = 'GridBento';
