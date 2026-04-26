import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Systaliko UI',
    short_name: 'Systaliko',
    description:
      'Free React UI blocks, e-commerce components, and full-page templates. Copy-paste or install via Shadcn CLI. Built with Motion, TypeScript, and Tailwind CSS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [],
  };
}
