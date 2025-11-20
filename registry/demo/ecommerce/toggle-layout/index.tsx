import {
  SelectLayoutGroup,
  ToggleLayout,
  ToggleLayoutCell,
  ToggleLayoutContainer,
} from '@/registry/ecommerce/toggle-layout';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import Image from 'next/image';

const products = [
  {
    id: 'product-1',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/51idMcfqaeL._AC_SX695_.jpg',
  },
  {
    id: 'product-2',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 29,
    imageUrl: 'https://m.media-amazon.com/images/I/51T3fRu8BwL._AC_SY695_.jpg',
  },
  {
    id: 'product-3',
    name: 'Better than lebron',
    category: 'Shirt',
    price: 9.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51Dw3+xtbwL._AC_SY879_.jpg',
  },
  {
    id: 'product-4',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/51sOQ6HcnZL._AC_SX695_.jpg',
  },
  {
    id: 'product-5',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/61KH6jsAjFL._AC_SX695_.jpg',
  },
  {
    id: 'product-6',
    name: 'Better than lebron',
    category: 'Shirt',
    price: 9.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71+aB8Kqx4L._AC_SX679_.jpg',
  },
  {
    id: 'product-7',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/51usDI-P8+L._AC_SX695_.jpg',
  },
  {
    id: 'product-8',
    name: 'Air Jordan',
    category: 'Shorts',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/613m241hJvL._AC_SX679_.jpg',
  },
  {
    id: 'product-9',
    name: 'Air Jordan',
    category: 'Shorts',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/61Fchml2nkL._AC_SX695_.jpg',
  },
];

export function ToggleLayoutDemo() {
  return (
    <section className="py-12 px-6">
      <ToggleLayout>
        <SelectLayoutGroup className="mb-8" />
        <ToggleLayoutContainer>
          {products.map((product) => (
            <ToggleLayoutCell
              key={product.id}
              className="w-full min-h-96 flex flex-col  max-w-sm mx-auto py-6 px-4 space-y-8 border border-border/20 rounded-3xl shadow-2xs"
            >
              <div className="w-fit mx-auto h-full flex  items-center">
                <Image
                  src={product.imageUrl}
                  width={695}
                  height={390}
                  className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                  alt="nike air jordan"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-semibold text-sm tracking-tight ">
                    {product.name}
                  </h2>
                  <Badge
                    variant={'secondary'}
                    className="shadow-xs border rounded-full"
                  >
                    {product.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm font-light tabular-nums tracking-tighter">
                    $120.00
                  </p>
                  <Button variant={'link'} size={'sm'}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </ToggleLayoutCell>
          ))}
        </ToggleLayoutContainer>
      </ToggleLayout>
    </section>
  );
}
