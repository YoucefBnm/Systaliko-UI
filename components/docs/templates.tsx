'use client';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import {
  InfiniteScroll,
  InfiniteScrollCell,
} from '@/registry/ecommerce/infinite-scroll';
import { PreviewCard, PreviewCardSkelton } from '../preview-card';
import { FeaturedComponentProps } from '@/types/featured-component';

const featuredComponents: FeaturedComponentProps[] = [
  {
    id: 'template-enera',
    componentLink: '/docs/templates/enera',
    videoUrl: '/videos/enera-preview.mp4',
    thumbnail: '/videos/enera-preview.png',
    title: 'Enera Template',
  },
  {
    id: 'template-cognify',
    componentLink: '/docs/templates/cognify',
    videoUrl: '/videos/cognify-preview.mp4',
    thumbnail: '/videos/cognify-preview.png',
    title: 'Cognify AI Template',
  },
  {
    id: 'template-veo',
    componentLink: '/docs/templates/veo',
    videoUrl: '/videos/veo-preview.mp4',
    thumbnail: '/videos/veo-preview.png',
    title: 'Veo Template',
  },
  {
    id: 'template-abla',
    componentLink: '/docs/templates/abla',
    videoUrl: '/videos/abla-preview.mp4',
    thumbnail: '/videos/abla-preview.png',
    title: ' Abla Studio Template',
  },
  {
    id: 'template-carecover',
    componentLink: '/docs/templates/',
    videoUrl: '/videos/carecover-preview.mp4',
    thumbnail: '/videos/carecover-preview.png',
    title: ' Carecover Template',
  },
  {
    id: 'template-portfolio',
    componentLink: '/docs/templates/portfolio',
    videoUrl: '/videos/portfolio-preview.mp4',
    thumbnail: '/videos/portfolio-preview.png',
    title: 'Portfolio Template',
  },
  {
    id: 'template-motus',
    componentLink: '/docs/templates/motus',
    videoUrl: '/videos/motus-preview.mp4',
    thumbnail: '/videos/motus-preview.png',
    title: 'Motus Template',
  },
  {
    id: 'template-product-page',
    componentLink: '/docs/templates/product-page',
    videoUrl: '/videos/product-page-preview.mp4',
    thumbnail: '/videos/product-page-preview.png',
    title: 'Product Template',
  },
];

export function Templates() {
  return (
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
    </InfiniteScroll>
  );
}
