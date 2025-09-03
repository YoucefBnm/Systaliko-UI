import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonVariants } from '../ui/button';
import { ExternalLinkIcon } from 'lucide-react';

interface TemplatePreviewProps {
  url: string;
  children: ReactNode;
}
export function TemplatePreview({ url, children }: TemplatePreviewProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'group relative w-full gap-2 shrink no-underline',
      )}
      href={url}
      target="_blank"
    >
      {children}
      <ExternalLinkIcon className="size-4" />
    </Link>
  );
}
