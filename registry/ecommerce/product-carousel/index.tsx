'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import React from 'react';

const productCarouselWrapperVariants = cva(
  'relative size-full aspect-square grid grid-cols-1 grid-rows-1 *:row-start-1 *:col-start-1 overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
        withOverlay:
          'after:absolute after:rounded-[inherit] after:inset-0 after:bg-gray-950/5 after:z-10 after:pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
export interface ProductCarouselWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCarouselWrapperVariants> {}
interface ProductCarouselProps extends React.ComponentProps<'div'> {
  className?: string;
}
interface ProductCarouselContextValue {
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}
const ProductCarouselContext = React.createContext<
  ProductCarouselContextValue | undefined
>(undefined);

function useProductCarouselContext() {
  const context = React.useContext(ProductCarouselContext);
  if (context === undefined) {
    throw new Error(
      'useProductCarouselContext must be used within a ProductCarousel',
    );
  }
  return context;
}
export function ProductImage({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group size-full relative z-10 inline-grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 *:will-change-[opacity] *:transition-opacity *:duration-300 *:ease-out',
        '[&>:first-child]:opacity-100 [&>:first-child]:group-hover:opacity-0',
        '[&>:nth-child(2)]:opacity-0 [&>:nth-child(2)]:group-hover:opacity-100',
        'after:pointer-events-none',
        className,
      )}
      {...props}
    />
  );
}

export function ProductCarouselSlide({
  className,
  index,
  ...props
}: React.ComponentPropsWithRef<'div'> & { index: number }) {
  const { activeSlide } = useProductCarouselContext();
  const isActive = activeSlide === index;
  return (
    <div
      className={cn(
        `size-full ${isActive ? 'opacity-100' : 'opacity-0'}`,
        className,
      )}
      {...props}
    />
  );
}
interface ProductCarouselThumbnailProps extends React.ComponentProps<'button'> {
  index: number;
  layoutId: string;
  activeLayoutClassName?: string;
}
export function ProductCarouselThumbnail({
  index,
  layoutId,
  activeLayoutClassName,
  className,
  ...props
}: ProductCarouselThumbnailProps) {
  const { activeSlide, setActiveSlide } = useProductCarouselContext();
  const isActive = activeSlide === index;
  const handleMouseEnter = () => setActiveSlide(index);

  return (
    <button
      className={cn(
        'size-4 border border-border/50 cursor-pointer relative',
        className,
      )}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className={cn(
            'absolute border border-foreground/30 rounded-[inherit] -left-[3px] z-10 -top-[3px] size-5',
            activeLayoutClassName,
          )}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
            mass: 1,
          }}
        />
      )}
    </button>
  );
}
export function ProductCarouselWrapper({
  className,
  variant,
  ...props
}: ProductCarouselWrapperProps) {
  return (
    <div
      className={cn(productCarouselWrapperVariants({ variant, className }))}
      {...props}
    />
  );
}

export function ProductCarousel({ className, ...props }: ProductCarouselProps) {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  return (
    <ProductCarouselContext.Provider value={{ activeSlide, setActiveSlide }}>
      <div className={cn('relative ', className)} {...props} />
    </ProductCarouselContext.Provider>
  );
}
