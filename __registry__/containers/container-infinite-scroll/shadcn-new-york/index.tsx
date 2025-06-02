'use client';
import * as React from 'react';
import { motion, useInView } from 'motion/react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

function SkeltonWrapper() {
  return (
    <div className=" space-y-5 p-4">
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-48 w-full" />
    </div>
  );
}
function Spinner() {
  return (
    <div className="inline-block size-6 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900" />
  );
}
interface CellInfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  isPending: boolean;
  SkeltonComp?: React.ComponentType | React.ReactElement;
}
export function CellInfiniteScroll({
  isPending,
  SkeltonComp = SkeltonWrapper,
  children,
  className,
}: CellInfiniteScrollProps) {
  const revealRef = React.useRef<HTMLDivElement | null>(null);

  const isInView = useInView(revealRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <div className={cn('relative', className)}>
      {isPending || !isInView ? (
        <motion.div
          initial="visible"
          animate={
            !isInView || isPending
              ? { opacity: 1, display: 'block' }
              : { opacity: 0, display: 'none' }
          }
        >
          {/* <div className=" space-y-5 p-4">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-48 w-full" />
          </div> */}
          {typeof SkeltonComp === 'function' ? <SkeltonComp /> : SkeltonComp}
        </motion.div>
      ) : (
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {children}
        </motion.div>
      )}
      <div ref={revealRef} />
    </div>
  );
}

interface ContainerInfiniteScrollProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: unknown[];
  isPending: boolean;
  itemsCount: number | null | undefined;
  loadMore: () => void;
  Loader?: React.ComponentType | React.ReactElement;
}
export function ContainerInfiniteScroll({
  items,
  isPending,
  itemsCount,
  loadMore,
  Loader = Spinner,
  children,
  className,
}: ContainerInfiniteScrollProps) {
  const observerRef = React.useRef<HTMLDivElement | null>(null);
  const allLoaded = items.length === itemsCount;
  const hasMore = isPending && !allLoaded && items.length > 0;
  React.useEffect(() => {
    const { current } = observerRef;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !allLoaded && items.length > 0) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  });

  return (
    <div className={className}>
      {children}
      {hasMore && (typeof Loader === 'function' ? <Loader /> : Loader)}
      {items.length > 0 && itemsCount && items.length < itemsCount && (
        <div ref={observerRef} />
      )}
    </div>
  );
}
