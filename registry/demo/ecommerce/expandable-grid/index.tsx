'use client';
import {
  ExpandableGrid,
  ExpandableGridCell,
  ExpandableGridClose,
  ExpandableGridControls,
  ExpandableGridContent,
  ExpandbleGridArrow,
} from '@/registry/ecommerce/expandable-grid';
import { Button } from '@/registry/shadcn/button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingBagIcon,
  XIcon,
} from 'lucide-react';

const products = [
  {
    id: 'product-16',
    name: 'Dunk low',
    category: 'shoes',
    price: 120,
    imageUrl: 'https://m.media-amazon.com/images/I/610xbLBO7OL._AC_SX695_.jpg',
  },
  {
    id: 'product-2',
    name: 'Air Jordan',
    category: 'Shoes',
    price: 29,
    imageUrl: 'https://m.media-amazon.com/images/I/71zTqMdALmL._AC_SX679_.jpg',
  },

  {
    id: 'product-6',
    name: 'Dunk low',
    category: 'Shoes',
    price: 199.99,
    imageUrl: 'https://m.media-amazon.com/images/I/7119MA+u0-L._AC_SY695_.jpg',
  },

  {
    id: 'product-8',
    name: 'Dunk low',
    category: 'Shoes',
    price: 209,
    imageUrl: 'https://m.media-amazon.com/images/I/71O6Mufrm9L._AC_SX695_.jpg',
  },
  {
    id: 'product-10',
    name: 'Air 1',
    category: 'Shoes',
    price: 309,
    imageUrl: 'https://m.media-amazon.com/images/I/51lif4Kn+hL._AC_SX695_.jpg',
  },
  {
    id: 'product-9',
    name: 'Air 1',
    category: 'Shoes',
    price: 109,
    imageUrl: 'https://m.media-amazon.com/images/I/71xE6hxRI8L._AC_SX695_.jpg',
  },
  {
    id: 'product-11',
    name: 'Spizike',
    category: 'Shoes',
    price: 289.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61YTxxzMl7L._AC_SY695_.jpg',
  },
  {
    id: 'product-12',
    name: 'Air 1',
    category: 'Shoes',
    price: 129.99,
    imageUrl: 'https://m.media-amazon.com/images/I/610ts+H4DSL._AC_SY695_.jpg',
  },
  {
    id: 'product-13',
    name: 'Air 1',
    category: 'Shoes',
    price: 139.99,
    imageUrl: 'https://m.media-amazon.com/images/I/713LjPUQ+iL._AC_SY695_.jpg',
  },
  {
    id: 'product-14',
    name: 'Air 1',
    category: 'Shoes',
    price: 99.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51Gq5rf1snL._AC_SX695_.jpg',
  },
  {
    id: 'product-15',
    name: 'Spizike Low',
    category: 'Shoes',
    price: 139.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51QWuYdWCwL._AC_SY695_.jpg',
  },
  {
    id: 'product-1',
    name: 'Air 1',
    category: 'Shoes',
    price: 149.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61u1hnBaaTL._AC_SX695_.jpg',
  },
];

const button_styles =
  'cursor-pointer rounded-full bg-secondary text-secondary-foreground  hover:bg-secondary/80 size-6 flex justify-center items-center [&>svg]:w-3';
export function ExpandableGridDemo() {
  return (
    <div className="w-full bg-white">
      <ExpandableGrid className="w-full min-h-screen place-content-center">
        <ExpandableGridControls className="flex items-center gap-2">
          <div className="flex gap-0.5 border p-0.5 rounded-full">
            <ExpandbleGridArrow direction="previous" className={button_styles}>
              <ArrowLeftIcon />
            </ExpandbleGridArrow>
            <ExpandbleGridArrow direction="next" className={button_styles}>
              <ArrowRightIcon />
            </ExpandbleGridArrow>
          </div>
          <ExpandableGridClose className={button_styles}>
            <XIcon />
          </ExpandableGridClose>
        </ExpandableGridControls>
        {products.map((product, index) => (
          <ExpandableGridCell key={product.id} index={index}>
            <div className="size-full p-3 space-y-2 flex flex-col items-center">
              <div className="relative aspect-square w-full p-2 flex justify-center items-end max-w-full">
                <img
                  className="inline-block max-h-full max-w-full align-middle object-contain"
                  alt={product.name}
                  src={product.imageUrl}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div
                className="space-y-6 w-full transition-transform duration-300 ease-out"
                style={{
                  transform: 'scale(var(--inv-scale, 1))',
                  transformOrigin: 'top center',
                }}
              >
                <div className="flex gap-1 items-center flex-wrap justify-center text-[10px]">
                  <h3 className="font-medium uppercase tracking-wider text-primary">
                    {product.name}
                  </h3>
                  <p className="font-light">${product.price}</p>
                </div>
                <ExpandableGridContent className="space-y-3 text-center">
                  <div className="flex  justify-center items-center gap-1.5">
                    {['7', '8', '9', '10', '11'].map((size) => (
                      <button
                        key={size}
                        className="size-5 aspect-square flex items-center justify-center rounded-full border border-border text-[7px] hover:bg-muted"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <Button className="rounded-full h-6 px-2 text-[8px]">
                    Add to Cart <ShoppingBagIcon className="size-2" />
                  </Button>
                </ExpandableGridContent>
              </div>
            </div>
          </ExpandableGridCell>
        ))}
      </ExpandableGrid>
    </div>
  );
}
