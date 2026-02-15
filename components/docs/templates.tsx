'use client';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
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
}
const featuredComponents: FeaturedCoponentProps[] = [
  {
    id: 'template-enera',
    componentLink: '/docs/templates/enera',
    videoUrl: '/videos/enera-preview.mp4',
    title: 'Enera Template',
  },
  {
    id: 'template-cognify',
    componentLink: '/docs/templates/cognify',
    videoUrl: '/videos/cognify-preview.mp4',
    title: 'Cognify AI Template',
  },
  {
    id: 'template-abla',
    componentLink: '/docs/templates/abla',
    videoUrl: '/videos/abla-preview.mp4',
    title: ' Abla Studio Template',
  },
  {
    id: 'template-carecover',
    componentLink: '/docs/templates/',
    videoUrl: '/videos/carecover-preview.mp4',
    title: ' Carecover Template',
  },
  {
    id: 'template-portfolio',
    componentLink: '/docs/templates/motus',
    videoUrl: '/videos/portfolio-preview.mp4',
    title: 'Portfolio Template',
  },
  {
    id: 'template-product-page',
    componentLink: '/docs/templates/product-page',
    videoUrl: '/videos/product-page-preview.mp4',
    title: 'Product Template',
  },
  {
    id: 'template-veo',
    componentLink: '/docs/templates/veo',
    videoUrl: '/videos/veo-preview.mp4',
    title: 'Veo Template',
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
