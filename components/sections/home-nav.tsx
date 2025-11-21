'use client';
import Link from 'next/link';
import { Logo } from '../logo';
import { DesktopNav } from '../desktop-nav';
import { MobileNav } from '../mobile-nav';
import { Header } from '@/registry/blocks/header';

export function HomeNav() {
  return (
    <Header className="sticky top-0 left-0 z-999 w-full supports-[backdrop-blur]:bg-background/90 backdrop-blur-lg border-b border-b-border/25">
      <div className="container flex justify-between h-16 items-center">
        <Link href="/">
          <Logo />
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </Header>
  );
}
