import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';
import React from 'react';
import { cn } from '@/lib/utils';

interface PreviewCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  componentLink: string;
  videoUrl: string;
  thumbnail?: string;
  title: string;
  description?: string;
}
export function PreviewCard({
  componentLink,
  videoUrl,
  thumbnail,
  title,
  description,
  className,
  ...props
}: PreviewCardProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle play errors silently
        console.debug('Video play error:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <Link
      className={cn(
        'group block relative p-2 space-y-4 rounded-2xl bg-card text-card-foreground ring ring-ring/10 shadow-2xs',
        className,
      )}
      href={componentLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      {...props}
    >
      <div className="w-full aspect-video place-content-center bg-muted rounded-xl p-1">
        <video
          ref={videoRef}
          className="rounded-lg border border-border/30"
          loop
          muted
          playsInline
          preload="metadata"
          src={videoUrl}
          poster={thumbnail}
        />
      </div>
      <div className="flex-1 flex flex-col p-2 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-1 font-medium tracking-tight">{title}</h3>
          <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <ArrowUpRightIcon className="size-5" />
          </div>
        </div>
        {description && (
          <p className="line-clamp-2 text-muted-foreground text-xs text-balance">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
export function PreviewCardSkelton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="relative aspect-video w-full" />

      <div className="flex-1 flex flex-col p-4 space-y-1">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}
