import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { attachFile } from './attach-file';
import { FeaturedComponentProps } from '@/types/featured-component';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
});

export function getFeaturedComponents(): FeaturedComponentProps[] {
  return source
    .getPages()
    .filter((page) => page.data.featured && page.data.videoUrl)
    .map((page) => ({
      id: `featured-${page.slugs.join('-')}`,
      componentLink: page.url,
      videoUrl: page.data.videoUrl!,
      thumbnail: page.data.thumbnail,
      title: page.data.title,
      description: page.data.description,
    }));
}
