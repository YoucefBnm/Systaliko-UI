'use client';

import Link from 'next/link';
import { Button } from '@/registry/shadcn/button';
import { siteConfig } from '@/config/site';
import GithubIcon from './icons/github-icon';
import { MailIcon, StarIcon } from 'lucide-react';
import XIcon from './icons/x-icon';
import { ModeToggle } from './mode-toggle';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '@/registry/blocks/animated-menu';
import { Logo } from './logo';
import { useIsScrolled } from '@/registry/utils/use-is-scrolled';
import { Variants } from 'motion/react';

const menuListVariants = {
  open: {
    width: 270,
    height: 350,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 80,
    height: 30,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

export function MobileHeader() {
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
            inset-[0_0_auto] py-2
            ${isScrolled ? 'w-10/12 px-3 translate-y-1 bg-background/50 rounded shadow-[0_0_0_1px_rgba(0,0,0,0.05)]' : 'w-full px-10'}
        `}
        >
          <Link
            aria-label="home page"
            className="text-primary flex items-center justify-center"
            href="/"
          >
            <Logo />
          </Link>
          <AnimatedMenu className="relative block md:hidden">
            <AnimatedMenuButton className="w-[80px] h-[30px] text-primary-foreground">
              <AnimatedMenuButtonLabel className="text-xs" />
            </AnimatedMenuButton>

            <AnimatedMenuList
              variants={menuListVariants}
              className="absolute right-0 top-0 bg-linear-to-bl from-primary/90 to-primary border border-primary-foreground/10 backdrop-blur rounded-md"
            >
              <div className="size-full flex flex-col items-start gap-4 justify-evenly place-content-center p-8">
                <div className="flex gap-4 flex-col">
                  <AnimatedMenuItem>
                    <Link
                      className="text-primary-foreground hover:bg-primary focus:bg-primary focus-visible:ring-ring/50 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50  inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
                      href="/docs"
                    >
                      Blocks
                    </Link>
                  </AnimatedMenuItem>
                  <AnimatedMenuItem>
                    <Link
                      className="text-primary-foreground hover:bg-primary focus:bg-primary focus-visible:ring-ring/50 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50  inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
                      href="/docs/templates"
                    >
                      Templates
                    </Link>
                  </AnimatedMenuItem>
                  <AnimatedMenuItem>
                    <Button size="sm" variant="secondary">
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
                  </AnimatedMenuItem>
                </div>
                <div className="flex items-center gap-2 ">
                  <AnimatedMenuItem>
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href={siteConfig.links.x}
                      className="transition-colors text-primary-foreground"
                    >
                      <XIcon className="size-4" />
                    </Link>
                  </AnimatedMenuItem>
                  <AnimatedMenuItem>
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href={siteConfig.links.repo}
                      className="transition-colors text-primary-foreground"
                    >
                      <GithubIcon className="size-4" />
                    </Link>
                  </AnimatedMenuItem>
                  <AnimatedMenuItem>
                    <Link
                      rel="noreferrer noopener"
                      href={`mailto:${siteConfig.links.email}`}
                      className="transition-colors text-primary-foreground"
                    >
                      <MailIcon className="size-4" />
                    </Link>
                  </AnimatedMenuItem>
                </div>
                <AnimatedMenuItem className="text-primary-foreground">
                  <ModeToggle />
                </AnimatedMenuItem>
              </div>
            </AnimatedMenuList>
          </AnimatedMenu>
        </div>
      </header>
    </>
  );
}
