'use client';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';
import { StarIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { useIsScrolled } from '@/registry/utils/use-is-scrolled';
import { Logo } from './logo';

export function DesktopHeader() {
  const { isScrolled, sentinelRef } = useIsScrolled();

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="sticky z-999 top-0 left-0 w-full flex justify-center">
        <div
          className={`
            flex justify-between backdrop-blur-lg
            transition-all duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]
            inset-[0_0_auto] py-3
            ${isScrolled ? 'w-10/12 px-3 translate-y-4 bg-background/50 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.05)]' : 'w-full px-10'}
          `}
        >
          <Link
            aria-label="home page"
            className="text-primary flex items-center justify-center"
            href="/"
          >
            <Logo />
          </Link>

          <nav className="flex gap-2 items-center">
            <div className="flex">
              <Link
                className="hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
                href="/docs"
              >
                Blocks
              </Link>
              <Link
                className="hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
                href="/docs/templates"
              >
                Templates
              </Link>
            </div>

            <Separator orientation="vertical" />

            <Button size="sm">
              <Link
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 items-center"
                href={siteConfig.links.repo}
                aria-label="star repo on github"
              >
                <StarIcon className="size-3" />
                Star on Github
              </Link>
            </Button>

            <ModeToggle />
          </nav>
        </div>
      </header>
    </>
  );
}
