'use client';
import { Label } from '@/registry/shadcn/label';
import { Slider } from '@/registry/shadcn/slider';
import {
  CustomPricingContext,
  CustomPricingProviderProps,
  useCustomPricing,
  useCustomPricingStore,
} from '@/registry/utils/custom-pricing-utils';
// import React from 'react';

export function CustomPricingProvider({
  onChange,
  currency = '$',
  children,
}: CustomPricingProviderProps) {
  const store = useCustomPricingStore({ onChange });
  return (
    <CustomPricingContext.Provider value={{ currency, ...store }}>
      {children}
    </CustomPricingContext.Provider>
  );
}

// interface CustomPricingQuantityProps extends React.ComponentProps<'div'> {
//   id: string;
//   unitPrice?: number;
//   min?: number;
//   max?: number;
//   step?: number;
//   defaultValue?: number;
//   formatValue?: (value: number) => React.ReactNode;
//   formatPrice?: (subtotal: number) => React.ReactNode;
// }
// export function CustomPricingQuantity({
//   id,
//   unitPrice = 0,
//   min = 0,
//   max = 10,
//   step = 1,
//   defaultValue = 0,
//   formatValue,
//   formatPrice,
//   children,
//   ...props
// }: CustomPricingQuantityProps) {
//   const { register, updateQuantity, items, currency } = useCustomPricing();

//   React.useEffect(() => {
//     register(id, { type: 'quantity', value: defaultValue, unitPrice });
//   }, [id, defaultValue, unitPrice, register]);

//   const item = items[id];
//   const quantity = item?.type === 'quantity' ? item.value : defaultValue;
//   const subtotal = quantity * unitPrice;

//   const handleChange = (val: number[]) => {
//     updateQuantity(id, val[0]);
//   };

//   return (
//     <div {...props}>
//       <Slider
//         id={id}
//         min={min}
//         max={max}
//         step={step}
//         value={[quantity]}
//         onValueChange={handleChange}
//       />

//       <span>
//         {formatPrice
//           ? formatPrice(subtotal)
//           : `${currency}${subtotal.toLocaleString()}`}
//           [{quantity}]
//       </span>
//       {children}
//     </div>
//   );
// }
// interface CustomPricingQuantityValueProps extends React.ComponentProps<'span'> {
//   unitPrice: number;
//   id: string;
// }
// export function CustomPricingQuantityValue({
//   unitPrice,
//   id,
//   ...props
// }: CustomPricingQuantityValueProps) {
//   const { register, updateQuantity, items } = useCustomPricing();
//   const item = items[id];

//   return <span {...props}></span>;
// }
