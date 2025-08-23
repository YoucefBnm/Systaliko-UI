'use client';
import Link from 'next/link';
import { Logo } from '../logo';
import { DesktopNav } from '../desktop-nav';
import { MobileNav } from '../mobile-nav';

export function HomeNav() {
  return (
    <header className="supports-[backdrop-blur]:bg-background/90 sticky top-0 z-50 w-full border-b border-border bg-background/40 backdrop-blur-lg">
      <div className="container flex justify-between h-16 items-center">
        <Link href="/">
          <Logo />
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
