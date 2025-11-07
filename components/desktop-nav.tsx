'use client';
import Link from 'next/link';
import { Button } from '@/registry/shadcn/button';
import { ModeToggle } from './mode-toggle';
import { siteConfig } from '@/config/site';
import XIcon from './icons/x-icon';
import GithubIcon from './icons/github-icon';

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-4 font-medium text-sm">
      <Link
        href="/docs"
        className="p-2 text-sm transition-colors hover:text-accent-foreground"
      >
        Components
      </Link>
      <Link
        href="/docs/templates"
        className="p-2 text-sm transition-colors hover:text-accent-foreground"
      >
        Templates
      </Link>

      <Button variant="outline" size="sm">
        <Link
          target="_blank"
          href={siteConfig.links.repo}
          className="inline-flex"
        >
          <div className="flex items-center">
            <GithubIcon className="size-4" />
            <span className="ml-1 lg:hidden">Star</span>
            <span className="ml-1 hidden lg:inline">Star on GitHub</span>{' '}
          </div>
          <span className="ml-2 ">⭐️</span>
        </Link>
      </Button>

      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={siteConfig.links.x}
        className="transition-colors hover:text-accent-foreground"
      >
        <XIcon className="size-4" />
      </Link>

      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={siteConfig.links.github}
        className="transition-colors hover:text-accent-foreground"
      >
        <GithubIcon className="size-4" />
      </Link>

      <ModeToggle />
    </div>
  );
}
