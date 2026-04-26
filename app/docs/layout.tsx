import { source } from '@/lib/source';
import { DocsLayout, DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import XIcon from '@/components/icons/x-icon';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/sections/header';

const DOCS_LAYOUT_PROPS: DocsLayoutProps = {
  tree: source.pageTree,

  githubUrl: siteConfig.links.repo,

  links: [
    {
      icon: <XIcon />,
      url: siteConfig.links.x,
      text: 'X',
      type: 'icon',
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...DOCS_LAYOUT_PROPS}
      nav={{
        component: <Header />,
      }}
      sidebar={{ collapsible: true }}
      tree={source.pageTree}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
