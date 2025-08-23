import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import XIcon from '@/components/icons/x-icon';
import GlobeIcon from '@/components/icons/globe-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import TwentyFirstIcon from '@/components/icons/21st-icon';
import { siteConfig } from '@/config/site';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      githubUrl={siteConfig.links.repo}
      links={[
        {
          icon: <XIcon />,
          url: siteConfig.links.x,
          text: 'X',
          type: 'icon',
        },
        {
          icon: <GlobeIcon />,
          url: siteConfig.links.website,
          text: 'Website',
          type: 'icon',
        },
        {
          icon: <LinkedinIcon />,
          url: siteConfig.links.linkedin,
          text: 'Linkedin',
          type: 'icon',
        },
        {
          icon: <TwentyFirstIcon className="size-6" />,
          url: siteConfig.links.twentyFirst,
          text: '21st',
          type: 'icon',
        },
      ]}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
