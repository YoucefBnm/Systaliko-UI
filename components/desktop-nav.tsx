'use client';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { siteConfig } from '@/config/site';
import XIcon from './icons/x-icon';
import GithubIcon from './icons/github-icon';
import { Button } from './ui/button';
import { MailIcon } from 'lucide-react';
import { Separator } from './ui/separator';

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-4 font-medium text-sm">
      <div className="flex items-center *:transition-colors *:p-2 *:text-sm *:text-foreground/70 *:hover:text-foreground">
        <Link href="/docs">Components</Link>
        <Link href="/docs/templates">Templates</Link>
      </div>

      <Separator className=" h-4 w-px" orientation="vertical" />
      <div className="flex items-center space-x-2 ">
        <Button variant="link" size="sm">
          <Link
            target="_blank"
            href={siteConfig.links.repo}
            className="inline-flex"
          >
            <GithubIcon className="size-4" />
          </Link>
        </Button>
        <Link
          rel="noreferrer noopener"
          href={`mailto:${siteConfig.links.email}`}
          className="p-2 transition-colors text-foreground/70 hover:text-foreground"
        >
          <MailIcon className="size-4" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.x}
          className="p-2 transition-colors text-foreground/70 hover:text-foreground mr-4"
        >
          <XIcon className="size-4" />
        </Link>
        <Separator className=" h-4 w-px" orientation="vertical" />

        <ModeToggle />
      </div>
    </nav>
  );
}
