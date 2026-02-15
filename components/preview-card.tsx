import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';
import React, { Activity } from 'react';

interface PreviewCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  componentLink: string;
  videoUrl: string;
  title: string;
  description?: string;
}
export function PreviewCard({
  componentLink,
  videoUrl,
  title,
  description,
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
      className="group relative gap-4 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-b from-card to-card border border-primary/5 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:inset-0 after:z-[-1] after:rounded-xl after:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:backdrop-blur-xl hover:bg-primary/2 before:hover:opacity-100 block"
      href={componentLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      {...props}
    >
      <div>
        <video
          ref={videoRef}
          className="w-full inline-block align-middle bg-muted h-auto max-h-full object-contain"
          loop
          muted
          playsInline
          preload="metadata"
          src={videoUrl}
        />
        <div className="flex-1 flex flex-col p-4 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="line-clamp-1 font-semibold tracking-tighter transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>
            <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <ArrowUpRightIcon className="size-5" />
            </div>
          </div>
          {description && (
            <p className="line-clamp-2 text-muted-foreground text-sm tracking-tighter">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
export function PreviewCardSkelton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="relative aspect-square w-full" />

      <div className="flex-1 flex flex-col p-4 space-y-1">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}
