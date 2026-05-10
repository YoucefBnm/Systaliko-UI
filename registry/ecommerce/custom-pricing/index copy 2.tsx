'use client';
import { cn } from '@/lib/utils';
import { Slider } from '@/registry/shadcn/slider';
import {
  CustomPricingContext,
  CustomPricingProviderProps,
  useCustomPricing,
  useCustomPricingStore,
} from '@/registry/utils/custom-pricing-utils';
import React from 'react';
import { CheckIcon } from 'lucide-react';

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

export interface CustomPricingQuantityProps
  extends React.ComponentProps<'div'> {
  id: string;
  unitPrice?: number;
  currency?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  formatValue?: (value: number) => React.ReactNode;
  formatPrice?: (subtotal: number) => React.ReactNode;
}

export function CustomPricingQuantity({
  children,
  id,
  unitPrice = 0,
  currency = '$',
  min = 0,
  max = 10,
  step = 1,
  defaultValue = 0,
  formatValue,
  formatPrice,
  ...props
}: CustomPricingQuantityProps) {
  const { register, updateQuantity, items } = useCustomPricing();

  React.useEffect(() => {
    register(id, { type: 'quantity', value: defaultValue, unitPrice });
  }, [id, defaultValue, unitPrice, register]);

  const item = items[id];
  const value = item?.type === 'quantity' ? item.value : defaultValue;
  const subtotal = value * unitPrice;

  const handleChange = (val: number[]) => {
    updateQuantity(id, val[0]);
  };

  return (
    <div data-slot="custom-pricing-quantity" {...props}>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={handleChange}
      />
      <span>
        {formatPrice
          ? formatPrice(subtotal)
          : `${currency}${subtotal.toLocaleString()}`}
      </span>
      {children}
    </div>
  );
}

export interface CustomPricingCheckedProps extends React.ComponentProps<'div'> {
  id: string;
  label: React.ReactNode;
  price?: number;
  type?: 'checkbox' | 'radio';
  group?: string;
  defaultChecked?: boolean;
  description?: React.ReactNode;
  formatPrice?: (price: number) => React.ReactNode;
}

export function CustomPricingChecked({
  className,
  id,
  label,
  price = 0,
  type = 'checkbox',
  group,
  defaultChecked = false,
  description,
  formatPrice,
  ...props
}: CustomPricingCheckedProps) {
  const { register, toggleChecked, items, currency } = useCustomPricing();
  React.useEffect(() => {
    register(id, {
      type: 'checked',
      checked: defaultChecked,
      price,
      group: type === 'radio' ? group : null,
    });
  }, [id, price, group, type, defaultChecked, register]);

  const item = items[id];
  const checked = item?.type === 'checked' ? item.checked : defaultChecked;

  return (
    <div
      className={cn(
        'relative flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent/50',
        checked ? 'border-primary bg-accent/50' : 'border-input bg-background',
        className,
      )}
      onClick={() => toggleChecked(id)}
      {...(props as any)}
    >
      <div className="mt-1 flex items-center justify-center">
        {type === 'checkbox' ? (
          <div
            className={cn(
              'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background',
              checked ? 'bg-primary text-primary-foreground' : 'bg-background',
            )}
          >
            {checked && <CheckIcon className="h-3 w-3" />}
          </div>
        ) : (
          <div
            className={cn(
              'flex h-4 w-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background',
              checked ? 'bg-background' : 'bg-background',
            )}
          >
            {checked && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium leading-none">{label}</span>
          <span className="text-sm font-medium">
            {price > 0
              ? `+${formatPrice ? formatPrice(price) : `${currency}${price.toLocaleString()}`}`
              : 'Free'}
          </span>
        </div>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>
    </div>
  );
}

export interface CustomPricingTotalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: React.ReactNode;
  formatTotal?: (total: number) => React.ReactNode;
  // children?: (total: number, currency: string) => React.ReactNode;
}

export function CustomPricingTotal({
  label = 'Total',
  formatTotal,
  // children,
  className,
  ...props
}: CustomPricingTotalProps) {
  const { total, currency } = useCustomPricing();
  const formatted = formatTotal
    ? formatTotal(total)
    : `${currency}${total.toLocaleString()}`;

  // if (children) return <>{children(total, currency)}</>;

  return (
    <div className={cn('cp-total', className)} {...props}>
      <span className="cp-total-label">{label}</span>
      <span className="cp-total-value">{formatted}</span>
    </div>
  );
}
