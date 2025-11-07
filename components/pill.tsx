import { cn } from '@/lib/utils';
import { Pulse } from '@/registry/components/pulse';
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
        'flex w-auto items-center space-x-2 rounded-full',
        'ring-1 ring-accent',
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
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
    </Link>
  );
}
