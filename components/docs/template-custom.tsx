import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { MailIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function TemplateCustom() {
  return (
    <a
      className={cn(
        buttonVariants({ variant: 'default' }),
        'group relative w-full gap-2 shrink no-underline',
      )}
      href={`mailto:${siteConfig.links.email}`}
      target="_blank"
    >
      Request your custom template
      <MailIcon className="size-4" />
    </a>
  );
}
