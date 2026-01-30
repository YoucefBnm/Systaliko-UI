'use client';
import { cn } from '@/lib/utils';
import { useToggleOnscroll } from '@/registry/utils/use-toggle-onscroll';
import { HTMLMotionProps, motion } from 'motion/react';
import Link from 'next/link';

export function HeaderLogo({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Link aria-label="logo" href="/" {...props} />;
}

export function Header({
  toggleOnScroll = true,
  className,
  ...props
}: HTMLMotionProps<'header'> & { toggleOnScroll?: boolean }) {
  const { isHidden, setIsHidden } = toggleOnScroll
    ? useToggleOnscroll()
    : { isHidden: false, setIsHidden: () => {} };
  const showHeader = () => setIsHidden(false);

  return (
    <motion.header
      className={cn('flex justify-between items-center', className)}
      animate={isHidden ? { y: '-100%' } : { y: '0%' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: '0%' }}
      onFocusCapture={showHeader}
      {...props}
    />
  );
}
