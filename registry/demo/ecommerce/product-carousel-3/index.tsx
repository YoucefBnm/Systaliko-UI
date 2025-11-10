import {
  ProductCarousel,
  ProductCarouselSlide,
  ProductCarouselThumbnail,
  ProductCarouselWrapper,
  ProductImage,
} from '@/registry/ecommerce/product-carousel';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import Image from 'next/image';

function NikeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
      />
    </svg>
  );
}
export function ProductCarousel3Demo() {
  return (
    <div className="h-svh place-content-center place-items-center">
      <ProductCarousel
        id="product-carousel"
        className="bg-card border w-xs shadow rounded-3xl p-4 overflow-hidden space-y-4"
      >
        <ProductCarouselWrapper>
          <NikeIcon className="size-6 absolute top-1 left-1 z-20" />

          <ProductCarouselSlide
            className="flex justify-center items-end  "
            index={0}
          >
            <ProductImage className="justify-center items-center">
              <Image
                src="https://m.media-amazon.com/images/I/51idMcfqaeL._AC_SX695_.jpg"
                width={695}
                height={390}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
              <Image
                src="https://m.media-amazon.com/images/I/51o7G1R81ML._AC_SX695_.jpg"
                width={695}
                height={385}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
            </ProductImage>
          </ProductCarouselSlide>

          <ProductCarouselSlide
            className="flex justify-center items-end size-full  "
            index={1}
          >
            <ProductImage className="size-full justify-center items-center ">
              <Image
                src="https://m.media-amazon.com/images/I/51sOQ6HcnZL._AC_SX695_.jpg"
                width={695}
                height={395}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
              <Image
                src="https://m.media-amazon.com/images/I/512tyq4RP5L._AC_SX695_.jpg"
                width={695}
                height={393}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
            </ProductImage>
          </ProductCarouselSlide>

          <ProductCarouselSlide
            className="flex justify-center items-end size-full  "
            index={2}
          >
            <ProductImage className="size-full justify-center items-center ">
              <Image
                src="https://m.media-amazon.com/images/I/61KH6jsAjFL._AC_SX695_.jpg"
                width={695}
                height={376}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
              <Image
                src="https://m.media-amazon.com/images/I/61adCwX-wwL._AC_SX695_.jpg"
                width={695}
                height={376}
                className="inline-block align-middle w-4/5 mx-auto h-auto max-h-full object-contain"
                alt="nike air jordan"
              />
            </ProductImage>
          </ProductCarouselSlide>
        </ProductCarouselWrapper>
        <div className="py-1 px-3 inline-flex items-center space-x-2">
          <ProductCarouselThumbnail
            index={0}
            className=" size-8 p-1 inline-flex justify-center items-center rounded"
            layoutId="product-carousel"
            activeLayoutClassName="size-9"
          >
            <Image
              src="https://m.media-amazon.com/images/I/51idMcfqaeL._AC_SX695_.jpg"
              width={695}
              height={390}
              className="relative inline-block align-middle w-full mx-auto h-auto max-h-full object-contain"
              alt="nike air jordan"
            />
          </ProductCarouselThumbnail>

          <ProductCarouselThumbnail
            index={1}
            className=" size-8 p-1 inline-flex justify-center items-center rounded"
            layoutId="product-carousel"
            activeLayoutClassName="size-9"
          >
            <Image
              src="https://m.media-amazon.com/images/I/51sOQ6HcnZL._AC_SX695_.jpg"
              width={695}
              height={395}
              className="relative inline-block align-middle w-full mx-auto h-auto max-h-full object-contain"
              alt="nike air jordan"
            />
          </ProductCarouselThumbnail>

          <ProductCarouselThumbnail
            index={2}
            className=" size-8 p-1 inline-flex justify-center items-center rounded"
            layoutId="product-carousel"
            activeLayoutClassName="size-9"
          >
            <Image
              src="https://m.media-amazon.com/images/I/61KH6jsAjFL._AC_SX695_.jpg"
              width={695}
              height={376}
              className="relative inline-block align-middle w-full mx-auto h-auto max-h-full object-contain"
              alt="nike air jordan"
            />
          </ProductCarouselThumbnail>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold tracking-tight ">Air Jordan 1</h2>
            <Badge
              variant={'secondary'}
              className="shadow-xs border rounded-full"
            >
              Best Seller
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm font-light tabular-nums tracking-tighter">
            $120.00
          </p>
          <Button className="rounded-xl w-full" size={'lg'}>
            Buy Now
          </Button>
        </div>
      </ProductCarousel>
    </div>
  );
}
