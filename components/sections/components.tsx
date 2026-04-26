'use client';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  InfiniteScroll,
  InfiniteScrollCell,
} from '@/registry/ecommerce/infinite-scroll';
import { PreviewCard, PreviewCardSkelton } from '../preview-card';
import { FeaturedComponentProps } from '@/types/featured-component';
import { TextWavy } from '@/registry/text/text-wavy';
import { LinkText } from '../link-text';
import clsx from 'clsx';

interface ComponentsProps {
  featuredComponents: FeaturedComponentProps[];
}

export function Components({ featuredComponents }: ComponentsProps) {
  return (
    <section className="my-12 border-b">
      <div className="border-y">
        <div className="text-center py-4 place-content-center mx-8 border-x">
          <Link
            className="group p-1 inline-flex items-end gap-0.5"
            href="/docs"
          >
            <TextWavy
              className="leading-none"
              text="Open source · Free forever · Shadcn compatible"
            />
            <ArrowRightIcon className="size-3 mb-px transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>

          <TextStaggerInview className="block text-2xl font-semibold">
            Featured Blocks and Components
          </TextStaggerInview>
          <p className="text-sm text-muted-foreground mt-2 max-w-[60ch] mx-auto text-balance">
            Navigation blocks, e-commerce flows, scroll animations, interactive
            cards, and fullpage templates each documented, typed, and
            installable in one command.
          </p>
        </div>
      </div>
      <InfiniteScroll
        isPending={false}
        currentItemsLength={featuredComponents.length}
        allItemsCount={featuredComponents.length}
        loadMore={() => {}}
        className="mx-8 bg-border p-px py-0 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-px"
      >
        {featuredComponents.map((component) => (
          <InfiniteScrollCell
            amount={0}
            skelton={<PreviewCardSkelton />}
            key={component.id}
            className={clsx(
              'bg-card p-3 relative',
              'after:absolute after:-left-1 after:-top-1 after:size-2 after:bg-card',
              'before:absolute before:-right-1 before:-top-1 before:size-2 before:bg-card',
            )}
          >
            <PreviewCard
              className="p-0 bg-none rounded-none border-none shadow-none hover:shadow-none hover:rounded-none"
              {...component}
            />
          </InfiniteScrollCell>
        ))}
        <div className="bg-card flex justify-center items-center p-4">
          <Button className="self-center">
            <LinkText href="/docs">View all blocks</LinkText>
          </Button>
        </div>
      </InfiniteScroll>
    </section>
  );
}
