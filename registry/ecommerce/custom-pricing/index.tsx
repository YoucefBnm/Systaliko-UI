import {
  CustomPricingContext,
  CustomPricingProviderProps,
  useCustomPricing,
  useCustomPricingQuantity,
  useCustomPricingSelect,
  useCustomPricingStore,
} from '@/registry/utils/custom-pricing-utils';

interface CustomPricingQuantityControlProps {
  id: string;
  unitPrice?: number;
  defaultValue?: number;
  render?: (props: {
    id: string;
    unitPrice: number;
    subtotal: number;
    quantity: number;
    updateQuantity: (id: string, quantity: number) => void;
    handleChange: (val: number[]) => void;
  }) => React.ReactNode;
}

export function CustomPricingQuantityControl({
  id,
  unitPrice = 0,
  defaultValue = 0,
  render,
}: CustomPricingQuantityControlProps) {
  const { updateQuantity, quantity } = useCustomPricingQuantity({
    id,
    unitPrice,
    defaultValue,
  });
  const handleChange = (val: number[]) => {
    updateQuantity(id, val[0]);
  };
  const subtotal = quantity * unitPrice;

  if (render) {
    return render({
      id,
      unitPrice,
      subtotal,
      quantity,
      updateQuantity,
      handleChange,
    });
  }
}

export interface CustomPricingSelectProps {
  id: string;
  group?: string;
  type?: 'checkbox' | 'radio';
  defaultChecked?: boolean;
  price?: number;
  render?: (props: {
    id: string;
    checked: boolean;
    price: number;
    toggleChecked: (id: string) => void;
  }) => React.ReactNode;
}

export function CustomPricingCheckedControl({
  id,
  price = 0,
  type = 'radio',
  group,
  defaultChecked = false,
  render,
}: CustomPricingSelectProps) {
  const { checked, toggleChecked } = useCustomPricingSelect({
    id,
    type,
    group,
    price,
    defaultChecked,
  });

  if (render) {
    return render({ id, checked, price, toggleChecked });
  }
}

export function CustomPricingTotalControl({
  render,
}: {
  render?: (props: { total: number }) => React.ReactNode;
}) {
  const { total } = useCustomPricing();
  if (render) {
    return render({ total });
  }
  return total;
}
export function CustomPricingProvider({
  onChange,
  children,
}: CustomPricingProviderProps) {
  const store = useCustomPricingStore({ onChange });
  return (
    <CustomPricingContext.Provider value={{ ...store }}>
      {children}
    </CustomPricingContext.Provider>
  );
}
