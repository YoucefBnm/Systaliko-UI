'use client';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  InfiniteScroll,
  InfiniteScrollCell,
} from '@/registry/ecommerce/infinite-scroll';
import { PreviewCard, PreviewCardSkelton } from '../preview-card';

interface FeaturedCoponentProps {
  id: string;
  componentLink: string;
  videoUrl: string;
  title: string;
  description: string;
}
const featuredComponents: FeaturedCoponentProps[] = [
  {
    id: 'featured-component-scroll-reverse-animation',
    componentLink: '/docs/scroll-animations/scroll-reverse-animation',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/hero-gallery-scroll-animation/default/video.1746088116758.mp4',
    title: 'Scroll Reverse Animation',
    description:
      'Scroll Trigger animations, that reverse animation of both gallery images and text in different range on scroll.',
  },
  {
    id: 'featured-component-sticky-cards-stack',
    componentLink: '/docs/cards/cards-stack',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/cards-stack/cards-stack/video.mp4?v=1',
    title: 'Sticky Cards Stack',
    description:
      'Animated cards stack, displaying one card at a time overlaping the previous card.',
  },
  {
    id: 'featured-component-testimonal-cards',
    componentLink: '/docs/cards/cards-stack-rotated',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/animated-cards-stack/animated-cards-stack-on-scroll/video.mp4?v=1',
    title: 'Rotated Cards Stack',
    description: 'Stack of rotated cards show, rotate one element at a time.',
  },
  {
    id: 'featured-component-product-card',
    componentLink: '/docs/ecommerce/product-carousel',
    videoUrl: '/videos/product-card-component-preview.mp4',
    title: 'Product Card',
    description:
      'Showcase your products with preview image/video for each product and display your different product colors or categories.',
  },
  {
    id: 'featured-component-curtain-card',
    componentLink: '/docs/cards/card-curtain-reveal',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/card-curtain-reveal/card-curtain-reveal/video.mp4?v=1',
    title: 'Curtain Reveal Card',
    description:
      'Interactive card component with open curtain to see content on hover.',
  },
  {
    id: 'featured-component-wavy-block',
    componentLink: '/docs/scroll-animations/wavy-block',
    videoUrl: '/videos/wavy-block-component-preview.mp4',
    title: 'Wavy Block',
    description: 'Wavy Block animates its children in waves pattern on scroll.',
  },
  {
    id: 'featured-component-text-stagger-hover',
    componentLink: '/docs/text/text-stagger-hover',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/text-stagger-hover/default/video.1750815014778.mp4',
    title: 'Text Stagger Hover',
    description:
      'Splitted text animation with staggered reveal triggered by hover gesture, You can easily customize by controlling the animation property (transform, opacity, blur) and the stagger value, and the transition.',
  },
  {
    id: 'featured-component-scroll-x-carousel',
    componentLink: '/docs/scroll-animations/story',
    videoUrl:
      'https://cdn.21st.dev/youcefbnm/scroll-x-carousel/default/video.1751413860542.mp4',
    title: 'Scroll X Carousel',
    description:
      'Carousel that transforms on the x-axis, showing items depnding on the scroll position, with a progress indicator.',
  },
];

export function Components() {
  return (
    <section className="py-16 px-8 space-y-8">
      <div className="space-y-4">
        <TextStaggerInview
          className="text-4xl font-semibold tracking-tight [&>[data-word=customizable]]:text-primary [&>[data-word=flexible]]:text-primary"
          animation="blur"
          as="h2"
        >
          Components
        </TextStaggerInview>

        <p className="max-w-prose text-muted-foreground">
          Choose your component copy/past or install via shadcn registry
        </p>
      </div>

      <InfiniteScroll
        isPending={false}
        currentItemsLength={featuredComponents.length}
        allItemsCount={featuredComponents.length}
        loadMore={() => {}}
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-4"
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
        <Button size="lg" className="self-center">
          <Link className="inline-flex items-center gap-1" href="/docs">
            View all components
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </Button>
      </InfiniteScroll>
    </section>
  );
}
