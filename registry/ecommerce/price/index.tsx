'use client';
import { cn } from '@/lib/utils';
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
