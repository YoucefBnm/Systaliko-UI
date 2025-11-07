'use client';

import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from '@/registry/shadcn/button';
import { siteConfig } from '@/config/site';
import GithubIcon from './icons/github-icon';
import { MenuIcon, StarIcon } from 'lucide-react';
import XIcon from './icons/x-icon';
import { ModeToggle } from './mode-toggle';

export function MobileNav() {
  return (
    <div className="block md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            <MenuIcon /> Menu
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-60 mr-6">
          <div className="flex flex-col items-start gap-4">
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
                  <span className="ml-1 hidden lg:inline">
                    Star on GitHub
                  </span>{' '}
                </div>
                <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                  <StarIcon className="size-3.5" fill="currentColor" />
                </div>
              </Link>
            </Button>

            <div className="flex items-center gap-2 mt-4">
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
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
