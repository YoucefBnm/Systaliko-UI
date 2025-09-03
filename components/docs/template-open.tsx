import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import GithubIcon from '../icons/github-icon';

interface TemplateOpenProps {
  url: string;
  free?: boolean;
}
export function TemplateOpen({ url, free = false }: TemplateOpenProps) {
  if (free) {
    return (
      <Link
        href={url}
        target="_blank"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'not-prose group relative w-full gap-2 shrink',
        )}
      >
        Download
        <GithubIcon className="size-4" />
      </Link>
    );
  }

  // TODO: add pricing
  return null;
}
