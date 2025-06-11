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
    <header className="fixed w-full flex items-center justify-between z-50 h-14 top-0 left-0 px-8">
      <Link href="/">
        <Logo className=" w-[124px]" />
      </Link>

      <NavigationMenu>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), '  bg-transparent')}
            href="/"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
            href="/docs"
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>

      <ul className="flex list-none items-center">
        <li>
          <Link
            href="https://github.com/YoucefBnm/Systaliko-UI"
            rel="noreferrer noopener"
            target="_blank"
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent p-1.5')}
          >
            <GithubIcon className="size-4" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/YoucefBnm/Systaliko-UI"
            rel="noreferrer noopener"
            target="_blank"
            className={cn(navigationMenuTriggerStyle(), 'bg-transparent p-1.5')}
          >
            <XIcon className="size-4" />
          </Link>
        </li>
        <li className="ml-4">
          <ModeToggle />
        </li>
      </ul>
    </header>
  );
}
