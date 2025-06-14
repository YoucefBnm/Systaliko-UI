import Link from 'next/link';
import { Logo } from './logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import GithubIcon from './icons/github-icon';
import XIcon from './icons/x-icon';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between z-50 h-14 top-0 left-0 px-6 md:px-12">
      <Link href="/">
        <Logo className="w-[148px]" />
      </Link>

      <NavigationMenu className="[&>li]:list-none">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), '  bg-transparent')}
            href="/"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
            href="/docs"
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
            href="https://github.com/YoucefBnm/Systaliko-UI"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon className="size-4" />
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
            href="https://github.com/YoucefBnm/Systaliko-UI"
            target="_blank"
            rel="noreferrer noopener"
          >
            <XIcon className="size-4" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-6">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
