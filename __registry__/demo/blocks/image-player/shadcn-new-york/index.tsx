'use client';

import { ImagePlayer } from '@/__registry__/blocks/image-player/shadcn-new-york';
import Image from 'next/image';

const IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1617869763329-8e8160d32adb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1705675742522-b0bdc228f2ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1705615791178-d32cc2cdcd9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function ImagePlayerDemo() {
  return (
    <div className="h-screen p-12 flex items-center justify-center">
      <ImagePlayer
        images={IMAGES}
        interval={200}
        renderImage={(src) => (
          <Image
            src={src}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, 400px"
            className="size-full object-cover inline-block align-middle"
            alt="showcase"
          />
        )}
      />
    </div>
  );
}
