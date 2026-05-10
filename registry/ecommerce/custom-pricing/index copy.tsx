import { cn } from '@/lib/utils';
import React from 'react';

enum CUSTOM_PRICING_TYPES {
  REGISTER = 'register',
  UPDATE_QTY = 'update_qty',
  TOGGLE_CHECKED = 'toggle_checked',
}

export type CustomPricingItemType = 'quantity' | 'checked';

export interface CustomPricingQuantityItem {
  type: 'quantity';
  value: number;
  unitPrice: number;
}

export interface CustomPricingCheckedItem {
  type: 'checked';
  checked: boolean;
  price: number;
  group?: string | null;
}

export type CustomPricingItem =
  | CustomPricingQuantityItem
  | CustomPricingCheckedItem;

export type CustomPricingState = Record<string, CustomPricingItem>;

export type CustomPricingAction =
  | { type: CUSTOM_PRICING_TYPES.REGISTER; id: string; item: CustomPricingItem }
  | { type: CUSTOM_PRICING_TYPES.UPDATE_QTY; id: string; value: number }
  | { type: CUSTOM_PRICING_TYPES.TOGGLE_CHECKED; id: string };

function customPricingReducer(
  state: CustomPricingState,
  action: CustomPricingAction,
): CustomPricingState {
  switch (action.type) {
    case CUSTOM_PRICING_TYPES.REGISTER: {
      if (state[action.id]) return state;
      return { ...state, [action.id]: action.item };
    }

    case CUSTOM_PRICING_TYPES.UPDATE_QTY: {
      const item = state[action.id];
      if (!item || item.type !== 'quantity') return state;
      return { ...state, [action.id]: { ...item, value: action.value } };
    }

    case CUSTOM_PRICING_TYPES.TOGGLE_CHECKED: {
      const item = state[action.id];
      if (!item || item.type !== 'checked') return state;

      if (item.group) {
        return Object.fromEntries(
          Object.entries(state).map(([k, v]) =>
            v.type === 'checked' && v.group === item.group
              ? [k, { ...v, checked: k === action.id }]
              : [k, v],
          ),
        );
      }

      return {
        ...state,
        [action.id]: { ...item, checked: !item.checked },
      };
    }

    default:
      return state;
  }
}

export function CustomPricing({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn(className)} {...props} />;
}
