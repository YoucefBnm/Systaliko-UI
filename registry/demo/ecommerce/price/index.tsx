import {
  Price,
  PriceCompareAt,
  PriceCurrent,
  PriceSavings,
} from '@/registry/ecommerce/price';
import { badgeVariants } from '@/registry/shadcn/badge';

export function PriceDemo() {
  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold">Price with sale</h3>
        <Price
          className="tabular-nums tracking-tighter space-x-2"
          amount={1999}
          compareAt={2499}
          currency="USD"
        >
          <PriceCurrent />
          <PriceCompareAt className="text-sm line-through text-muted-foreground" />
          <PriceSavings
            className={`${badgeVariants({ variant: 'outline' })} text-emerald-500 bg-emerald-100 border-none`}
          >
            Save
          </PriceSavings>
        </Price>
      </div>

      <div className="space-y-2">
        <h3 className=" ">Price with diffrent currency</h3>
        <div className="flex gap-2">
          <Price
            className="tabular-nums tracking-tighter space-x-2"
            amount={2000}
            currency="GBP"
          >
            <PriceCurrent />
          </Price>
          <Price
            className="tabular-nums tracking-tighter space-x-2"
            amount={1999}
            currency="EUR"
          >
            <PriceCurrent />
          </Price>
          <Price
            className="tabular-nums tracking-tighter space-x-2"
            amount={20000}
            currency="JPY"
          >
            <PriceCurrent />
          </Price>
        </div>
      </div>
    </div>
  );
}
