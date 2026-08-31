import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/shadcn/badge';

interface PreviewCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  componentLink: string;
  videoUrl: string;
  title: string;
  description?: string;
  thumbnail?: string;
  updated?: boolean;
}
export function PreviewCard({
  componentLink,
  videoUrl,
  title,
  description,
  thumbnail,
  updated,
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
        'group block bg-card/50 shadow-none transition-shadow hover:ring-2 hover:ring-ring/10 duration-300 ease-out hover:shadow-[0_8px_24px_var(--muted)] text-card-foreground border rounded-xl overflow-hidden',
        className,
      )}
      href={componentLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      {...props}
    >
      <div className="relative bg-card m-2 rounded-[6px] overflow-hidden border border-border/50 transition-colors duration-200 ease-out group-hover:border-border">
        {updated && (
          <Badge className="absolute top-2 right-2 rounded-full text-[10px] shadow-sm shadow-black/15 ring-1 ring-ring/50 py-px text-blue-50 bg-blue-500">
            updated
          </Badge>
        )}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          src={videoUrl}
          poster={thumbnail}
        />
      </div>
      <div className="p-4 space-y-0.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-1 font-medium">{title}</h3>
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
