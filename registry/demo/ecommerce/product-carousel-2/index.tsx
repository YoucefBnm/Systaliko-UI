'use client';
import {
  ProductCarousel,
  ProductCarouselSlide,
  ProductCarouselWrapper,
  ProductImage,
} from '@/registry/ecommerce/product-carousel';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import Image from 'next/image';
import React from 'react';

export function ProductCarousel2Demo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle play errors silently
        console.debug('Video play error:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };
  return (
    <div className="h-svh place-content-center place-items-center">
      <ProductCarousel
        id="product-carousel-2"
        className="bg-card border border-border/50 w-xs md:w-md shadow overflow-hidden space-y-4"
      >
        <ProductCarouselWrapper className="aspect-[3/2] shadow border overflow-hidden rounded-[inherit]">
          <ProductCarouselSlide
            className="flex justify-center items-end"
            index={0}
          >
            <ProductImage className="justify-center items-start">
              <Image
                src="https://images.pexels.com/photos/5488927/pexels-photo-5488927.jpeg"
                width={6000}
                height={4000}
                className="inline-block align-middle w-full mx-auto h-auto max-h-full object-contain"
                alt="yacht"
              />
              <video
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                playsInline
                muted
                autoPlay
                src="https://videos.pexels.com/video-files/4415852/4415852-uhd_2560_1440_30fps.mp4"
                preload="metadata"
                className="w-full h-auto max-h-full aspect-[3/2] object-cover"
              />
            </ProductImage>
          </ProductCarouselSlide>
        </ProductCarouselWrapper>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold tracking-tight ">
              2023 Fairline F-Line 33
            </h2>
            <Badge
              variant={'outline'}
              className="shadow-xs text-amber-500 border rounded-full"
            >
              Luxury
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm font-light tabular-nums tracking-tighter">
            $buy the jordan
          </p>
          <Button className="w-full rounded-none" size={'lg'}>
            Buy Now
          </Button>
        </div>
      </ProductCarousel>
    </div>
  );
}
