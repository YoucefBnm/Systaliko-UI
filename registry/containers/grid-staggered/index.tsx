import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const gridStaggerdVariants = cva(
  'grid grid-cols-12 place-items-stretch [&>*]:h-max ',
  {
    variants: {
      variant: {
        default: `
            grid-rows-[0.1fr_0.35fr_0.1fr_0.35fr_0.1fr]
            [&>*]:col-span-6 [&>*]:row-span-2 
            [&>*:first-child]:row-start-1 
            [&>*:nth-child(2)]:row-start-2
        `,
        threeCells: `
        grid-rows-4 
        [&>*]:col-span-6 [&>*]:row-span-2 
        [&>*:first-child]:row-start-1 
        [&>*:nth-child(2)]:row-start-2
      `,
        twoCells: `
        grid-rows-[0.2fr_0.6fr_0.2fr] 
        [&>*]:col-span-6 [&>*]:row-span-2 
        [&>*:first-child]:row-start-1 
        [&>*:nth-child(2)]:row-start-2
      `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const GridStaggered = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof gridStaggerdVariants>
>(({ variant, className, ...props }, ref) => {
  return (
    <div
      className={cn(gridStaggerdVariants({ variant }), className)}
      {...props}
      ref={ref}
    />
  );
});
GridStaggered.displayName = 'GridStaggered';
