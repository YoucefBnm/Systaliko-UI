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
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '@/registry/blocks/animated-menu';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';

export function MobileNav() {
  return (
    <AnimatedMenu className="relative block md:hidden">
      <AnimatedMenuButton className="w-[102px] h-[40px]">
        <AnimatedMenuButtonToggleIcon />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>

      <AnimatedMenuList className="absolute right-0 top-0 bg-linear-to-bl from-secondary/90 to-secondary border border-secondary-foreground/10 backdrop-blur rounded-3xl">
        <div className="size-full flex flex-col items-start gap-4 justify-evenly place-content-center p-8">
          <div className="flex gap-4 flex-col">
            <AnimatedMenuItem>
              <Link
                href="/docs"
                className="p-2 text-sm transition-colors hover:text-accent-foreground"
              >
                <TextStaggerHover>
                  <TextStaggerHoverActive
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    animation="top"
                  >
                    Components
                  </TextStaggerHoverActive>
                  <TextStaggerHoverHidden
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    animation="bottom"
                  >
                    Components
                  </TextStaggerHoverHidden>
                </TextStaggerHover>
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem>
              <Link
                href="/docs/templates"
                className="p-2 text-sm transition-colors hover:text-accent-foreground"
              >
                <TextStaggerHover>
                  <TextStaggerHoverActive
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    animation="top"
                  >
                    Templates
                  </TextStaggerHoverActive>
                  <TextStaggerHoverHidden
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    animation="bottom"
                  >
                    Templates
                  </TextStaggerHoverHidden>
                </TextStaggerHover>
              </Link>
            </AnimatedMenuItem>
          </div>
          <div className="flex items-center gap-2 ">
            <AnimatedMenuItem>
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href={siteConfig.links.x}
                className="transition-colors hover:text-accent-foreground"
              >
                <XIcon className="size-4" />
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem>
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href={siteConfig.links.repo}
                className="transition-colors hover:text-accent-foreground"
              >
                <GithubIcon className="size-4" />
              </Link>
            </AnimatedMenuItem>
            <AnimatedMenuItem>
              <Link
                rel="noreferrer noopener"
                href={`mailto:${siteConfig.links.email}`}
                className="transition-colors hover:text-accent-foreground"
              >
                <MailIcon className="size-4" />
              </Link>
            </AnimatedMenuItem>
          </div>
          <AnimatedMenuItem>
            <ModeToggle />
          </AnimatedMenuItem>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
}
