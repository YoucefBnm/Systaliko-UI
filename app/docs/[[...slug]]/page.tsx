import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { ComponentPreview } from '@/components/docs/component-preview';
import { TemplateOpen } from '@/components/docs/template-open';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { ComponentInstallation } from '@/components/docs/component-installation';
import { TemplatePreview } from '@/components/docs/template-preview';
import { TemplateCustom } from '@/components/docs/template-custom';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Templates } from '@/components/docs/templates';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const url = page.data.url as string | undefined;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
            ComponentPreview: (props: any) => (
              <ComponentPreview {...props} url={url} />
            ),
            ComponentInstallation,
            TemplateOpen,
            TemplatePreview,
            TemplateCustom,
            Templates,
            TypeTable,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

const categoryMap: Record<string, string> = {
  templates: 'Next.js & React Template',
  blocks: 'React UI Block',
  ecommerce: 'React E-commerce Component',
  'scroll-animations': 'React Scroll Animation',
  cards: 'Animated React Card Component',
  components: 'React UI Component',
  text: 'Animated React Text Component',
  utils: 'React Utility',
};

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const componentName = page.data.title;
  const category = params.slug?.[0] || '';
  const typeLabel = categoryMap[category] || 'React Component';

  // Apply Formula: [Component Name] — [Category] React [Type]
  const seoTitle = `${componentName} — ${typeLabel}`;

  // Apply Description Formula: Free [name] for React. Copy-paste or install via Shadcn CLI. Built with [stack].
  const seoDescription =
    page.data.description ||
    `Free ${componentName} for React. Copy-paste or install via Shadcn CLI. Built with TypeScript, Tailwind CSS, and Framer Motion.`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://systaliko-ui.vercel.app/docs/${(params.slug || []).join('/')}`,
      images: [
        {
          url: 'https://systaliko-ui.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Systaliko UI',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@systaliko_ui',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: 'https://systaliko-ui.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Systaliko UI',
        },
      ],
    },
  };
}
