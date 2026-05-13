import React from 'react';

enum CUSTOM_PRICING_ACTION_TYPES {
  REGISTER = 'register',
  UPDATE_QTY = 'update_qty',
  TOGGLE_CHECKED = 'toggle_checked',
}
export interface CustomPricingProviderProps {
  onChange?: (total: number) => void;
  children?: React.ReactNode;
}
interface CustomPricingQuantityItem {
  type: 'quantity';
  value: number;
  unitPrice: number;
}
export interface UseCustomPricingStoreOptions {
  onChange?: (total: number) => void;
}

interface CustomPricingCheckedItem {
  type: 'checked';
  checked: boolean;
  price: number;
  group?: string | null;
}
interface CustomPricingContextValue
  extends ReturnType<typeof useCustomPricingStore> {}

export type CustomPricingItem =
  | CustomPricingQuantityItem
  | CustomPricingCheckedItem;

export type CustomPricingState = Record<string, CustomPricingItem>;

export type CustomPricingAction =
  | {
      type: CUSTOM_PRICING_ACTION_TYPES.REGISTER;
      id: string;
      item: CustomPricingItem;
    }
  | { type: CUSTOM_PRICING_ACTION_TYPES.UPDATE_QTY; id: string; value: number }
  | { type: CUSTOM_PRICING_ACTION_TYPES.TOGGLE_CHECKED; id: string };

export function customPricingReducer(
  state: CustomPricingState,
  action: CustomPricingAction,
) {
  switch (action.type) {
    case CUSTOM_PRICING_ACTION_TYPES.REGISTER: {
      if (state[action.id]) return state;
      return { ...state, [action.id]: action.item };
    }

    case CUSTOM_PRICING_ACTION_TYPES.UPDATE_QTY: {
      const item = state[action.id];
      if (!item || item.type !== 'quantity') return state;
      return { ...state, [action.id]: { ...item, value: action.value } };
    }

    case CUSTOM_PRICING_ACTION_TYPES.TOGGLE_CHECKED: {
      const item = state[action.id];
      if (!item || item.type !== 'checked') return state;

      if (item.group) {
        const updated = Object.fromEntries(
          Object.entries(state).map(([k, v]) =>
            v.type === 'checked' && v.group === item.group
              ? [k, { ...v, checked: k === action.id }]
              : [k, v],
          ),
        );
        return updated;
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

export function useCustomPricingStore({
  onChange,
}: UseCustomPricingStoreOptions = {}) {
  const [items, dispatch] = React.useReducer(customPricingReducer, {});

  const register = React.useCallback((id: string, item: CustomPricingItem) => {
    dispatch({ type: CUSTOM_PRICING_ACTION_TYPES.REGISTER, id, item });
  }, []);

  const updateQuantity = React.useCallback((id: string, value: number) => {
    dispatch({ type: CUSTOM_PRICING_ACTION_TYPES.UPDATE_QTY, id, value });
  }, []);

  const toggleChecked = React.useCallback((id: string) => {
    dispatch({ type: CUSTOM_PRICING_ACTION_TYPES.TOGGLE_CHECKED, id });
  }, []);

  const total = React.useMemo(() => {
    return Object.values(items).reduce((sum, item) => {
      if (item.type === 'quantity') return sum + item.value * item.unitPrice;
      if (item.type === 'checked') return sum + (item.checked ? item.price : 0);
      return sum;
    }, 0);
  }, [items]);

  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  React.useEffect(() => {
    onChangeRef.current?.(total);
  }, [total]);

  return { items, register, updateQuantity, toggleChecked, total };
}

export const CustomPricingContext =
  React.createContext<CustomPricingContextValue | null>(null);

export function useCustomPricing() {
  const context = React.useContext(CustomPricingContext);
  if (!context) {
    throw new Error(
      'useCustomPricing must be used within a CustomPricingProvider',
    );
  }
  return context;
}
interface UseCustomPricingQuantityProps {
  id: string;
  unitPrice?: number;
  defaultValue?: number;
}
export function useCustomPricingQuantity({
  id,
  unitPrice = 0,
  defaultValue = 0,
}: UseCustomPricingQuantityProps) {
  const { register, updateQuantity, items } = useCustomPricing();
  React.useEffect(() => {
    register(id, { type: 'quantity', value: defaultValue, unitPrice });
  }, [id, defaultValue, unitPrice, register]);

  const item = items[id];
  const quantity = item?.type === 'quantity' ? item.value : defaultValue;
  const subtotal = quantity * unitPrice;

  return {
    quantity,
    subtotal,
    updateQuantity,
  };
}
interface UseCustomPricingSelectProps {
  id: string;
  price?: number;
  type?: 'checkbox' | 'radio';
  group?: string;
  defaultChecked?: boolean;
}
export function useCustomPricingSelect({
  id,
  price = 0,
  type = 'radio',
  group,
  defaultChecked = false,
}: UseCustomPricingSelectProps) {
  const { register, toggleChecked, items } = useCustomPricing();
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

  return {
    checked,
    toggleChecked,
  };
}
