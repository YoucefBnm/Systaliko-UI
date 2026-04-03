import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const spotlightListVariants = cva('list-style-none *:transition-blur ', {
  variants: {
    variant: {
      blur: '[&:hover>*]:blur-[2px] [&>*:hover]:blur-none transition-[filter]',
      scale: '[&:hover>*]:scale-85 [&>*:hover]:scale-100 transition-transform',
      opacity:
        '[&:hover>*]:opacity-50 [&>*:hover]:opacity-100 transition-opacity',
    },
  },
  defaultVariants: {
    variant: 'blur',
  },
});

export function SportlightList({
  variant,
  className,
  ...props
}: React.ComponentProps<'ul'> & VariantProps<typeof spotlightListVariants>) {
  return (
    <ul
      className={cn(spotlightListVariants({ variant, className }))}
      {...props}
    />
  );
}
