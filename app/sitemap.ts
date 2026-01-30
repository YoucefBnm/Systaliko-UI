import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';
import meta from '@/content/docs/meta.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, ''); // Remove trailing slash
  const currentDate = new Date();

  // Priority mapping based on category importance
  const getPriority = (page: string): number => {
    if (page.startsWith('templates/')) return 0.9;
    if (page.startsWith('blocks/')) return 0.8;
    if (page.startsWith('scroll-animations/')) return 0.8;
    if (page.startsWith('ecommerce/')) return 0.8;
    if (page.startsWith('cards/')) return 0.7;
    if (page.startsWith('components/')) return 0.7;
    if (page.startsWith('text/')) return 0.7;
    if (page.startsWith('utils/')) return 0.6;
    return 0.7; // Default priority
  };

  // Change frequency mapping
  const getChangeFrequency = (page: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
    if (page === 'index' || page.startsWith('templates/')) return 'weekly';
    return 'monthly';
  };

  // Build sitemap entries
  const entries: MetadataRoute.Sitemap = [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main docs page
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Add all pages from meta.json
  meta.pages.forEach((page) => {
    // Skip separator items
    if (page.startsWith('---')) return;

    // Handle index page - it's already added as /docs above
    if (page === 'index') return;

    const url = `${baseUrl}/docs/${page}`;
    const priority = getPriority(page);
    const changeFrequency = getChangeFrequency(page);

    entries.push({
      url,
      lastModified: currentDate,
      changeFrequency,
      priority,
    });
  });

  return entries;
}
