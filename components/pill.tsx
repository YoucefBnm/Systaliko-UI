import { cn } from '@/lib/utils';
import { Pulse } from '@/registry/components/pulse';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface PillProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  announcement?: React.ReactNode;
}

export function Pill({
  href,
  label,
  announcement = (
    <div className="flex gap-1 items-center">
      <Pulse className="size-2.5" /> Announcement
    </div>
  ),
  className,
  ...props
}: PillProps) {
  return (
    <Link
      href={href}
      className={cn(
        'shadow-sm shadow-black/15',
        'flex w-auto items-center space-x-2 rounded-full',
        'ring-1 ring-ring/20',
        'px-2 py-1 whitespace-pre',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'w-fit rounded-full px-2 py-0.5',
          'text-xs font-semibold  sm:text-sm',
          'text-center',
        )}
      >
        {announcement}
      </div>
      <p className="text-xs font-medium sm:text-sm">{label}</p>
      <ArrowRightIcon className="size-4" />
    </Link>
  );
}
