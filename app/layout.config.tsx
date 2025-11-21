import { Logo } from '@/components/logo';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="inline-flex items-center ">
        <Logo />{' '}
        <sup className="text-[10px] font-semibold uppercase leading-tight text-primary">
          Beta
        </sup>
      </div>
    ),
  },
};
