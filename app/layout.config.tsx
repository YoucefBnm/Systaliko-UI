import { Logo } from '@/components/logo';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="inline-flex items-center ">
        <Logo className="h-auto w-32" />{' '}
        <sup className="text-[10px] leading-tight bg-foreground/80 text-background px-1.5  rounded-full">
          Beta
        </sup>
      </div>
    ),
  },
};
