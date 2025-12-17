'use client';
import { cn } from '@/lib/utils';
import { Switch } from '@/registry/shadcn/switch';
import { cva, VariantProps } from 'class-variance-authority';
import { CheckIcon, PlusIcon, XIcon } from 'lucide-react';
import React from 'react';
interface Price {
  amount: number;
  currency: string;
  interval?: 'month' | 'year' | 'week' | 'day' | 'one-time';
  discount?: number;
}

interface PriceFormatOptions {
  locale?: string;
  showCurrency?: boolean;
  showDecimals?: boolean;
  compact?: boolean;
  notation?: 'standard' | 'compact' | 'scientific' | 'engineering';
}

function formatPrice(price: Price, options: PriceFormatOptions = {}): string {
  const {
    locale = 'en-US',
    showCurrency = true,
    showDecimals = true,
    compact = false,
    notation = 'standard',
  } = options;

  const formatter = new Intl.NumberFormat(locale, {
    style: showCurrency ? 'currency' : 'decimal',
    currency: price.currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
    notation: compact ? 'compact' : notation,
  });

  return formatter.format(price.amount);
}

function calculateFinalPrice(price: Price): number {
  if (price.discount) {
    return price.amount * (1 - price.discount / 100);
  }
  return price.amount;
}

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  price: Price;
  options?: PriceFormatOptions;
  animated?: boolean;
}

export function Price({
  price,
  options,
  className,
  children,
  animated = false,
  ...props
}: PriceProps) {
  const finalPrice = calculateFinalPrice(price);
  const [displayValue, setDisplayValue] = React.useState(finalPrice);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const prevValueRef = React.useRef(finalPrice);

  React.useEffect(() => {
    if (animated && prevValueRef.current !== finalPrice) {
      setIsAnimating(true);
      const duration = 400;
      const steps = 20;
      const stepDuration = duration / steps;
      const diff = finalPrice - prevValueRef.current;
      const stepValue = diff / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          setDisplayValue(finalPrice);
          setIsAnimating(false);
          clearInterval(timer);
        } else {
          setDisplayValue(prevValueRef.current + stepValue * currentStep);
        }
      }, stepDuration);

      prevValueRef.current = finalPrice;
      return () => clearInterval(timer);
    } else if (!animated) {
      setDisplayValue(finalPrice);
    }
  }, [finalPrice, animated]);

  const displayPrice = animated ? displayValue : finalPrice;

  return (
    <div className={cn('tabular-nums', className)} {...props}>
      {price.discount ? (
        <div className="flex items-baseline gap-2">
          <span className="text-muted-foreground/60 line-through text-sm">
            {formatPrice(price, options)}
          </span>
          <span
            className={cn(
              'transition-transform duration-300',
              isAnimating && 'scale-105',
            )}
          >
            {formatPrice({ ...price, amount: displayPrice }, options)}
          </span>
        </div>
      ) : (
        <span
          className={cn(
            'transition-transform duration-300',
            isAnimating && 'scale-105',
          )}
        >
          {formatPrice({ ...price, amount: displayPrice }, options)}
        </span>
      )}
      {children}
    </div>
  );
}

const pricingCardVariants = cva(
  'group relative border-2 p-6 flex flex-col space-y-6 bg-card transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]',
  {
    variants: {
      variant: {
        default: 'border-border/20 hover:border-border/50 ',
        featured: 'border-primary/50 z-2 hover:border-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
type PricingInterval = 'monthly' | 'yearly';
interface PricingDuration {
  monthly: number;
  yearly: number;
}

interface PricingContextValue {
  interval: PricingInterval;
  toggleInterval: () => void;
  savings?: number;
}
const PricingContext = React.createContext<PricingContextValue | undefined>(
  undefined,
);
function usePricingContext() {
  const context = React.useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricingContext must be used within a PricingProvider');
  }
  return context;
}
export function calculateYearlySavings(pricing: PricingDuration): number {
  const yearlyTotal = pricing.monthly * 12;
  const savings = yearlyTotal - pricing.yearly;
  return Math.round((savings / yearlyTotal) * 100);
}

export function Pricing({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [interval, setInterval] = React.useState<PricingInterval>('monthly');

  const toggleInterval = () => {
    setInterval((prevState) =>
      prevState === 'monthly' ? 'yearly' : 'monthly',
    );
  };
  return (
    <PricingContext.Provider value={{ interval, toggleInterval }}>
      <div {...props} />
    </PricingContext.Provider>
  );
}

export function PricingCard({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof pricingCardVariants>) {
  return (
    <div
      className={cn(pricingCardVariants({ variant, className }))}
      {...props}
    />
  );
}

export function PricingFeature({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <CheckIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingIncludesPrevious({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <PlusIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingExclude({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <XIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingPackage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  );
}
export function PricingIntervalSwitch({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { toggleInterval } = usePricingContext();
  return (
    <Switch
      className={cn('inline-flex items-center gap-1', className)}
      id="yearly-pricing"
      onCheckedChange={toggleInterval}
      {...props}
    />
  );
}
interface PricingValueProps extends React.HTMLAttributes<HTMLDivElement> {
  monthlyValue: number;
  yearlyValue: number;
}
export function PricingValue({
  monthlyValue,
  yearlyValue,

  ...props
}: PricingValueProps) {
  const { interval } = usePricingContext();
  const currentPrice = interval === 'monthly' ? monthlyValue : yearlyValue;

  return (
    <Price
      {...props}
      price={{
        amount: currentPrice,
        currency: 'USD',
        interval: interval === 'monthly' ? 'month' : 'year',
      }}
      options={{ showDecimals: false }}
      animated={true}
      className="inline-flex gap-1 tracking-tighter items-center text-4xl"
    >
      <span className="text-muted-foreground text-sm font-normal tracking-normal">
        /{interval === 'monthly' ? 'per month' : 'per year'}
      </span>
    </Price>
  );
}
