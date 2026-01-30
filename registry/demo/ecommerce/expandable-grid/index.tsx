'use client';
import {
  ExpandableGrid,
  ExpandableGridCell,
} from '@/registry/ecommerce/expandable-grid';
import Image from 'next/image';

const products = [
  {
    id: 'product-16',
    name: 'Air Jordan',
    category: 'Shirt',
    price: 9.99,
    imageUrl: 'https://m.media-amazon.com/images/I/616dq9kBfsL._AC_SX679_.jpg',
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
    name: 'Better than lebron',
    category: 'Shirt',
    price: 9.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71+aB8Kqx4L._AC_SX679_.jpg',
  },

  {
    id: 'product-8',
    name: 'Air Jordan',
    category: 'Shorts',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/613m241hJvL._AC_SX679_.jpg',
  },
  {
    id: 'product-10',
    name: 'Air Jordan',
    category: 'Back pack',
    price: 39,
    imageUrl: 'https://m.media-amazon.com/images/I/514LX3oMMnL._AC_SX679_.jpg',
  },
  {
    id: 'product-9',
    name: 'Air Jordan',
    category: 'Back pack',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/51lex9hERBL._AC_SX679_.jpg',
  },
  {
    id: 'product-11',
    name: 'Jordan Jumpman',
    category: 'Arm band',
    price: 9.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61ZZq-GAkTL._AC_SX679_.jpg',
  },
  {
    id: 'product-12',
    name: 'JERSEY GYM SACK',
    category: 'Back pack',
    price: 29.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61+ae1+OUDL._AC_SX679_.jpg',
  },
  {
    id: 'product-13',
    name: 'Swingman Shorts',
    category: 'Shorts',
    price: 39.99,
    imageUrl: 'https://m.media-amazon.com/images/I/81o5IOyFN9L._AC_SX679_.jpg',
  },
  {
    id: 'product-14',
    name: 'Air Jordan 1',
    category: 'Shoes',
    price: 99.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61lHu1XGksL._AC_SY695_.jpg',
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
    name: 'Air Jordan',
    category: 'Sliders',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/51SXrf7XQ7L._AC_SY695_.jpg',
  },
];

export function ExpandableGridDemo() {
  return (
    <ExpandableGrid className="size-full">
      {products.map((product, index) => (
        <ExpandableGridCell key={product.id} index={index}>
          <div className="size-full p-3">
            <div className="relative aspect-square w-full max-w-full">
              <Image
                className="user-select-none select-none object-contain"
                fill
                alt="product"
                src={product.imageUrl}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </ExpandableGridCell>
      ))}
    </ExpandableGrid>
  );
}
