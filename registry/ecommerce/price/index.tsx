'use client';
import { cn } from '@/lib/utils';
import React from 'react';

export const currencyMinorUnits: Record<string, number> = {
  USD: 2,
  EUR: 2,
  GBP: 2,
  JPY: 0,
};

interface PriceContextValue {
  amount: number | null;
  compareAt?: number | null;
  savingsPercent?: number | null;
  currency?: string;
  locale?: string;
}
const PriceContext = React.createContext<PriceContextValue | undefined>(
  undefined,
);
function usePriceContext() {
  const context = React.useContext(PriceContext);
  if (context === undefined) {
    throw new Error('usePriceContext must be used within a PriceProvider');
  }
  return context;
}
/**
 * Returns the divider to convert minor units to major units.
 * e.g. USD -> 100, JPY -> 1
 */
export function minorUnitDivider(currency?: string): number {
  const code = (currency ?? 'USD').toUpperCase();
  const digits = currencyMinorUnits[code] ?? 2;
  return Math.pow(10, digits);
}

/**
 * Memoized Intl.NumberFormat factory keyed by locale|currency|digits.
 */
const nfCache = new Map<string, Intl.NumberFormat>();
function getNumberFormatter(
  locale: string,
  currency: string,
  fractionDigits: number,
) {
  const key = `${locale}|${currency}|${fractionDigits}`;
  const cached = nfCache.get(key);
  if (cached) return cached;
  const nf = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    currencyDisplay: 'symbol',
  });
  nfCache.set(key, nf);
  return nf;
}

/**
 * Format an integer minor-unit amount (e.g. cents) to a localized currency string.
 * - amountMinor: integer (may be negative)
 * - currency: ISO code, defaults to USD
 * - locale: BCP47 locale, defaults to en-US
 */
export function formatCurrencyFromMinor(
  amountMinor: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  if (!Number.isInteger(amountMinor)) {
    console.warn('amountMinor should be an integer');
    amountMinor = Math.round(amountMinor);
  }
  const digits = currencyMinorUnits[currency.toUpperCase()] ?? 2;
  const divider = minorUnitDivider(currency);
  // Use exact division (no floating rounding) then delegate to Intl for display.
  const amountMajor = amountMinor / divider;
  const nf = getNumberFormatter(locale, currency, digits);
  return nf.format(amountMajor);
}

// components/Price.tsx

interface PriceProps extends React.ComponentProps<'div'> {
  amount: number | null; // minor units
  currency?: 'USD' | 'EUR' | 'GBP' | 'JPY';
  locale?: string;
  compareAt?: number | null; // minor units
  range?: { min: number | null; max: number | null } | null;
}
const format = (amt: number | null, currency?: string, locale?: string) => {
  if (amt === null) return '';
  return formatCurrencyFromMinor(amt, currency ?? 'USD', locale ?? 'en-US');
};

export function Price({
  amount,
  currency = 'USD',
  locale = 'en-US',
  compareAt = null,
  range = null,
  className,
  ...props
}: PriceProps) {
  // Range handling
  if (range) {
    if (range.min === null || range.max === null) return null;
    if (range.min === range.max) {
      return (
        <span {...props}>
          <span className="sr-only">Price: </span>
          {format(range.min)}
        </span>
      );
    }
    return (
      <span {...props}>
        <span className="sr-only">Price range: </span>
        {format(range.min)}&nbsp;–&nbsp;{format(range.max)}
      </span>
    );
  }

  // Unavailable / Free
  if (amount == null) {
    return (
      <span aria-hidden={false} {...props}>
        <span className="sr-only">Price not available</span>
      </span>
    );
  }
  if (amount === 0) {
    return (
      <span {...props}>
        <span className="sr-only">Free</span>
        Free
      </span>
    );
  }

  const isOnSale = compareAt != null && compareAt > amount;
  let savingsPercent: number | null = null;
  if (isOnSale) {
    // integer math to avoid float errors:
    savingsPercent = Math.round(((compareAt - amount) * 100) / compareAt);
  }
  return (
    <PriceContext.Provider
      value={{ amount, compareAt, savingsPercent, currency, locale }}
    >
      <span
        className={cn('inline-flex items-baseline', className)}
        {...props}
      />
    </PriceContext.Provider>
  );
}

export function PriceCurrent({ ...props }: React.ComponentProps<'span'>) {
  const { amount, currency, locale } = usePriceContext();
  return (
    <span {...props}>
      <span className="sr-only">Price: </span>
      {format(amount, currency, locale)}
    </span>
  );
}

export function PriceCompareAt({ ...props }: React.ComponentProps<'span'>) {
  const { compareAt, currency, locale } = usePriceContext();
  return (
    <span {...props}>
      <span className="sr-only">Old Price: </span>
      {format(compareAt!, currency, locale)}
    </span>
  );
}

export function PriceSavings({
  children,
  ...props
}: React.ComponentProps<'span'>) {
  const { savingsPercent } = usePriceContext();
  return (
    <span aria-hidden="true" {...props}>
      <span className="sr-only">Save: </span>
      {children} {savingsPercent}%
    </span>
  );
}
