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
import { Badge } from '@/registry/shadcn/badge';

interface ComponentsProps {
  featuredComponents: FeaturedComponentProps[];
}

export function Components({ featuredComponents }: ComponentsProps) {
  return (
    <section className="my-12 space-y-6">
      <div className="text-center space-y-2 place-content-center px-8 ">
        <Link
          className="inline-flex border rounded-full items-center gap-1 py-0.5 pl-0.5 pr-2 "
          href="/docs"
        >
          <Badge
            variant="secondary"
            className="rounded-full text-[10px] shadow-sm shadow-black/15 ring-1 ring-ring/20 py-0"
          >
            Free
          </Badge>
          <TextWavy
            className="font-bold leading-[0.9]"
            text="Open source · Free forever · Shadcn compatible"
          />
        </Link>

        <TextStaggerInview className="block text-2xl font-semibold">
          Featured Blocks and Components
        </TextStaggerInview>
        <p className="text-sm text-muted-foreground max-w-[60ch] mx-auto text-balance">
          Navigation blocks, e-commerce flows, scroll animations, interactive
          cards, and fullpage templates each documented, typed, and installable
          in one command.
        </p>
      </div>
      <InfiniteScroll
        isPending={false}
        currentItemsLength={featuredComponents.length}
        allItemsCount={featuredComponents.length}
        loadMore={() => {}}
        className="px-16 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] justify-center gap-2 max-w-6xl mx-auto"
      >
        {featuredComponents.map((component) => (
          <InfiniteScrollCell
            amount={0}
            skelton={<PreviewCardSkelton />}
            key={component.id}
          >
            <PreviewCard {...component} />
          </InfiniteScrollCell>
        ))}
      </InfiniteScroll>
      <div className="flex justify-center">
        <Button>
          <LinkText href="/docs">View all blocks</LinkText>
        </Button>
      </div>
    </section>
  );
}
