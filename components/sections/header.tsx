'use client';
import React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { LinkText } from '../link-text';
import { useSearchContext } from 'fumadocs-ui/provider';
import { CommandIcon, StarIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
import GithubIcon from '../icons/github-icon';
import XIcon from '../icons/x-icon';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
  CloseAnimatedMenu,
} from '@/registry/blocks/animated-menu';
import { Variants } from 'motion/react';
import { useIsScrolled } from '@/registry/utils/use-is-scrolled';
import { usePathname } from 'next/navigation';
import { NavbarSidebarTrigger } from 'fumadocs-ui/layouts/docs-client';

const NAV_LINKS = [
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Templates',
    href: '/docs/templates',
  },
  {
    label: 'Changelog',
    href: '/changelog',
  },
  {
    label: 'Services',
    href: '/#services',
  },
];
const menuListVariants = {
  open: {
    width: 260,
    height: 340,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 50,
    height: 32,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;
const linkStyles =
  'hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50 inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none';

function MainNav({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav className={cn('flex gap-1 items-center', className)} {...props}>
      {NAV_LINKS.map((link) => (
        <LinkText key={link.label} href={link.href} className={linkStyles}>
          {link.label}
        </LinkText>
      ))}
    </nav>
  );
}
function HeaderLogo({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <Link
      href="/"
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Logo />
    </Link>
  );
}
function HeaderSearch({ className }: { className?: string }) {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      className={cn(
        'pl-3 pr-1.5 h-8 w-32 xl:w-40 bg-accent hover:bg-accent/70 transition-colors duration-200 ease-in-out text-sm text-muted-foreground rounded-md flex items-center justify-between',
        className,
      )}
      onClick={() => setOpenSearch(true)}
    >
      <span className="font-normal">Search...</span>

      <div className="flex items-center gap-0.5">
        <kbd className="size-5 leading-none flex items-center justify-center border rounded-[4px] bg-background">
          <CommandIcon className="size-2.5" />
        </kbd>
        <kbd className="size-5 flex items-center justify-center border rounded-[4px] bg-background">
          <span className="leading-none text-[0.625rem] pt-px">K</span>
        </kbd>
      </div>
    </button>
  );
}
function StarButton({ ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button size="sm" {...props}>
      <GithubIcon className="size-3.5" />
      <LinkText
        href={siteConfig.links.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="star on github"
      >
        Github
      </LinkText>

      <StarIcon className="fill-yellow-500 stroke-none size-3.5" />
    </Button>
  );
}
function HeaderCta({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-1', className)} {...props}>
      <Link
        href={siteConfig.links.repo}
        className={linkStyles}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository"
      >
        <GithubIcon className="size-4" />
      </Link>
      <Link
        href={siteConfig.links.x}
        className={linkStyles}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Creator X profile"
      >
        <XIcon className="size-4" />
      </Link>

      <StarButton />
    </div>
  );
}

function NavDesktop({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <MainNav />
      <HeaderSearch />
      <HeaderCta />
      <ModeToggle />
    </div>
  );
}
function MenuMobile() {
  return (
    <AnimatedMenu>
      <AnimatedMenuButton className="w-[50px] h-[32px] text-popover-foreground  cursor-pointer">
        <AnimatedMenuButtonToggleIcon />
      </AnimatedMenuButton>

      <AnimatedMenuList
        variants={menuListVariants}
        className="absolute right-0 top-0 shadow-xs bg-popover/90 text-popover-foreground border backdrop-blur rounded-md"
      >
        <div className="size-full flex flex-col justify-evenly gap-8 items-start place-content-center p-8">
          <div className="space-y-2">
            {NAV_LINKS.map((link, index) => (
              <AnimatedMenuItem order={index} key={link.label} className="p-1 ">
                <CloseAnimatedMenu>
                  <LinkText href={link.href}>{link.label}</LinkText>
                </CloseAnimatedMenu>
              </AnimatedMenuItem>
            ))}
          </div>
          <AnimatedMenuItem className="w-full" order={NAV_LINKS.length}>
            <CloseAnimatedMenu>
              <HeaderSearch className="w-full" />
            </CloseAnimatedMenu>
          </AnimatedMenuItem>
          <div className="flex items-center gap-1 ">
            <AnimatedMenuItem order={NAV_LINKS.length + 1}>
              <CloseAnimatedMenu>
                <Link
                  href={siteConfig.links.repo}
                  className={linkStyles}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github repository"
                >
                  <GithubIcon className="size-4" />
                </Link>
              </CloseAnimatedMenu>
            </AnimatedMenuItem>
            <AnimatedMenuItem order={NAV_LINKS.length + 2}>
              <CloseAnimatedMenu>
                <Link
                  href={siteConfig.links.x}
                  className={linkStyles}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Creator X profile"
                >
                  <XIcon className="size-4" />
                </Link>
              </CloseAnimatedMenu>
            </AnimatedMenuItem>

            <AnimatedMenuItem className="ml-6 " order={NAV_LINKS.length + 4}>
              <ModeToggle />
            </AnimatedMenuItem>
          </div>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
}
function NavMobile({ className }: { className?: string }) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith('/docs');

  return (
    <nav className={cn('flex items-center gap-4', className)}>
      <StarButton />
      <MenuMobile />
      {isDocs && <NavbarSidebarTrigger className="size-9 md:hidden" />}
    </nav>
  );
}
export function Header() {
  const { isScrolled, sentinelRef } = useIsScrolled();

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="sticky w-full h-[var(--fd-nav-height)] bg-sidebar/90 backdrop-blur border-b top-0 z-999 place-content-center">
        <div
          className={`px-6 mx-auto flex items-center justify-between gap-4 duration-300 transition-[width] ease-out ${isScrolled ? 'w-10/12' : 'w-12/12'}`}
        >
          <HeaderLogo
            className={`transition-[clip-path] ease-out duration-300 ${isScrolled ? '[clip-path:polygon(0%_0%,_25%_0%,_25%_100%,_0%_100%)]' : '[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]'}`}
          />
          <NavMobile className="flex lg:hidden" />
          <NavDesktop className="hidden lg:flex" />
        </div>
      </header>
    </>
  );
}
