'use client';

import { useIsMobile } from '@/registry/utils/use-mobile';
import { MobileHeader } from '../mobile-header';
import { DesktopHeader } from '../desktop-header';

export function Header() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
