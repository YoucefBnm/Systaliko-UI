import * as React from 'react';
import { Label as LabelPrimitive } from 'radix-ui';
import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const checkboxFieldVariants = cva(
  'group relative has-data-[state=checked]:text-primary-foreground has-data-[state=checked]:*:opacity-100 has-[button:disabled]:opacity-50  has-[button:disabled]:after:pointer-events-none has-[button:disabled]:after:absolute has-[button:disabled]:after:inset-0 has-[button:disabled]:after:z-10 has-[button:disabled]:after:bg-[linear-gradient(to_bottom_right,transparent_calc(50%-0.5px),var(--destructive)_calc(50%-0.5px),var(--destructive)_calc(50%+0.5px),transparent_calc(50%+0.5px))] inline-grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 [&>button]:size-full [&>label]:pointer-events-none [&>label]:relative [&>label]:z-5 [&>label]:my-2',
  {
    variants: {
      variant: {
        default: '[&>label]:mx-3 ',
        withCheckmark: '[&>label]:ml-6 [&>label]:mr-2.5 [&>button]:pl-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'group group-hover:border-primary peer relative flex size-4 shrink-0 rounded-[inherit] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className,
      )}
      {...props}
    />
  );
}
function CheckboxIcon({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn(
        'grid place-content-center text-current [&>svg]:size-3.5 [&>svg]:transition-opacity [&>svg]:duration-200 [&>svg]:opacity-20 [&>svg]:group-data-[state=checked]:opacity-100 [&>svg]:group-data-[state=indeterminate]:opacity-100',
        className,
      )}
      {...props}
    >
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  );
}
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

function CheckboxField({
  className,
  variant,
  ...props
}: React.ComponentProps<'fieldset'> &
  VariantProps<typeof checkboxFieldVariants>) {
  return (
    <fieldset
      className={cn(checkboxFieldVariants({ variant }), className)}
      role="group"
      data-slot="field"
      {...props}
    />
  );
}

export { Checkbox, CheckboxIcon, Label, CheckboxField };
