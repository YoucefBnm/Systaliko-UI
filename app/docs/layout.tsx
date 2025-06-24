import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import XIcon from '@/components/icons/x-icon';
import GlobeIcon from '@/components/icons/globe-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import TwentyFirstIcon from '@/components/icons/21st-icon';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      githubUrl="https://github.com/YoucefBnm/Systaliko-UI"
      links={[
        {
          icon: <XIcon />,
          url: 'https://x.com/lbnm_yussef',
          text: 'X',
          type: 'icon',
        },
        {
          icon: <GlobeIcon />,
          url: 'https://ycfdev.netlify.app/',
          text: 'Website',
          type: 'icon',
        },
        {
          icon: <LinkedinIcon />,
          url: 'https://www.linkedin.com/in/youcef-bnm-692392123/',
          text: 'Linkedin',
          type: 'icon',
        },
        {
          icon: <TwentyFirstIcon className="size-6" />,
          url: 'https://21st.dev/YoucefBnm',
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
