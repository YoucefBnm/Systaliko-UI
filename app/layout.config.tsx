import { Logo } from '@/components/logo';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="inline-flex items-center ">
        <Logo className="h-auto w-32" />{' '}
        <sup className="text-[10px] font-semibold uppercase leading-tight bg-foreground/85 text-background py-0.5 px-1.5  rounded-sm">
          Beta
        </sup>
      </div>
    ),
  },
};
