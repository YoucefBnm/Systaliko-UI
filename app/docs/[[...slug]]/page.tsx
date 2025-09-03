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
import defaultMdxComponents from 'fumadocs-ui/mdx';

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
          components={{
            ...defaultMdxComponents,
            ComponentPreview: (props) => (
              <ComponentPreview {...props} url={url} />
            ),
            ComponentInstallation,
            TemplateOpen,
            TemplatePreview,
            TypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: 'https://systaliko-ui.vercel.app/',
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
      title: page.data.title,
      description: page.data.description,
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
