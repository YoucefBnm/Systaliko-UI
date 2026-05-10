'use client';
import { cn } from '@/lib/utils';
import {
  Checkbox,
  CheckboxField,
  Label,
} from '@/registry/components/checkbox-field';
import { Slider } from '@/registry/shadcn/slider';
import {
  CustomPricingProvider,
  useCustomPricingQuantity,
  useCustomPricingSelect,
} from '@/registry/utils/custom-pricing-utils';
import { CheckIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import React from 'react';

interface CustomPricingQuantityGroupProps {
  id: string;
  unitPrice?: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}
interface CustomPricingSelectProps {
  id: string;
  group?: string;
  type?: 'checkbox' | 'radio';
  defaultChecked?: boolean;
  price?: number;
}
// export function CustomPricingChecked({
//   id,
//   price = 0,
//   type = 'radio',
//   group,
//   defaultChecked = false,
//   ...props
// }: CustomPricingSelectProps) {
//   const { checked, toggleChecked } = useCustomPricingSelect({
//     id,
//     type,
//     group,
//     price,
//     defaultChecked,
//   });
//   return (
//     <div
//       className={cn(
//         'relative flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent/50',
//         checked ? 'border-primary bg-accent/50' : 'border-input bg-background',
//       )}
//       onClick={() => toggleChecked(id)}
//       {...(props as any)}
//     >
//       <div className="mt-1 flex items-center justify-center">
//         <div
//           className={cn(
//             'flex h-4 w-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background',
//             checked ? 'bg-background' : 'bg-background',
//           )}
//         >
//           {checked && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
//         </div>
//       </div>

//       <div className="flex flex-1 flex-col gap-1">
//         <div className="flex w-full items-center justify-between">
//           <span className="text-sm font-medium leading-none">{id}</span>
//           <span className="text-sm font-medium">{price.toLocaleString()}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
function RadioGroupItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'group/radio-group-item peer relative flex justify-center items-center shrink-0 rounded border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator">
        {children}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid w-full gap-2', className)}
      {...props}
    />
  );
}

function CustomPricingQuantityGroup({
  id,
  unitPrice = 0,
  min,
  max,
  step,
  defaultValue = 0,
}: CustomPricingQuantityGroupProps) {
  const { updateQuantity, quantity } = useCustomPricingQuantity({ id });
  const handleChange = (val: number[]) => {
    updateQuantity(id, val[0]);
  };
  const subtotal = quantity * unitPrice;

  return (
    <div className="">
      <Label htmlFor={id}>{id}</Label>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[quantity]}
        defaultValue={[defaultValue]}
        onValueChange={handleChange}
      />
      <span>{`${subtotal.toLocaleString()}`}</span>
    </div>
  );
}
export function CustomPricingDesignDemo() {
  return (
    <div className="h-screen w-full place-content-center">
      <div className="p-8 mx-auto max-w-md bg-card border place-content-center ">
        <CustomPricingProvider>
          <div className="space-y-4">
            <CustomPricingQuantityGroup
              id="pages"
              unitPrice={100}
              min={0}
              max={30}
              step={1}
              defaultValue={0}
            />
            <CustomPricingQuantityGroup
              id="revision rounds"
              unitPrice={50}
              min={0}
              max={20}
              step={1}
              defaultValue={0}
            />
          </div>

          <div className="space-y-4">
            <RadioGroup className="bg-input p-0.5 rounded-full border">
              <RadioGroupItem
                className="bg-popover font-medium capitalize size-fit px-4 py-1.5 rounded-full overflow-hidden"
                value="default"
                id="r1"
              >
                default
              </RadioGroupItem>
            </RadioGroup>
            {/* <CustomPricingChecked id="ecommerce" price={800} type="checkbox" />

            <CustomPricingChecked id="seo" price={600} type="checkbox" /> */}
          </div>
          {/* <CustomPricingChecked
            id="redesign"
            price={2000}
            type="radio"
            group="project"
          /> */}
          {/* <CustomPricingChecked
            id="landing"
            price={800}
            type="radio"
            group="project"
          /> */}
        </CustomPricingProvider>
      </div>
    </div>
  );
}
