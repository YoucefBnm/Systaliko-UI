'use client';
import { Button } from '@/registry/shadcn/button';
import {
  CustomCursor,
  CustomCursorProvider,
} from '@/registry/components/custom-cursor';
import { MapPinIcon } from 'lucide-react';

export function CustomCursorDemo() {
  return (
    <CustomCursorProvider>
      {({ setCursorStyle, setCursorChildren, containerRef }) => {
        const handleHeadingCursor = () => {
          setCursorStyle({
            scale: 6,
            mixBlendMode: 'difference',
          });
        };

        const handleMouseLeave = () => {
          setCursorChildren(
            <div className="bg-primary min-w-5 min-h-5 rounded-full" />,
          );
          setCursorStyle({});
        };

        const handleLinkCursor = () => {
          setCursorChildren(
            <div className="w-40 h-60 overflow-hidden rounded-md shadow">
              <img
                src="https://images.pexels.com/photos/20475203/pexels-photo-20475203.jpeg"
                alt="tokyo"
                className="size-full object-cover"
              />
            </div>,
          );
        };

        const handleButtonCursor = () =>
          setCursorStyle({ scale: 0.4, mixBlendMode: 'difference' });

        const handleImageCursor = () =>
          setCursorChildren(
            <div className="flex items-center gap-1 text-xs px-2.5 py-px rounded-full text-white font-medium border border-border/50 ring ring-ring/10  backdrop-blur">
              Visit Tokyo
              <MapPinIcon className="w-3.5" />
            </div>,
          );

        return (
          <div
            ref={containerRef}
            className="relative container flex justify-between gap-12 flex-wrap items-center py-12 px-6 min-h-svh"
          >
            <CustomCursor />

            <div className="flex flex-1 flex-col gap-4 items-start">
              <h1
                className="text-4xl text-balance tracking-tight font-semibold"
                onMouseEnter={handleHeadingCursor}
                onMouseLeave={handleMouseLeave}
              >
                Explore the World with interactive travel experiences
              </h1>
              <p className="text-sm text-balance">
                Discover breathtaking destinations, unique cultures, and
                unforgettable adventures. Let your curiosity guide you as you
                embark on journeys that inspire and transform.
              </p>

              <div className="flex gap-4">
                <Button
                  onMouseEnter={handleButtonCursor}
                  onMouseLeave={handleMouseLeave}
                  size="sm"
                >
                  Book now
                </Button>
                <Button
                  variant={'link'}
                  onMouseEnter={handleLinkCursor}
                  onMouseLeave={handleMouseLeave}
                  className="text-primary"
                  size="sm"
                >
                  Learn more
                </Button>
              </div>
            </div>

            <div
              className="relative w-2/3 md:w-1/4 ring-2 ring-violet-500/10 shadow rounded-md overflow-hidden"
              onMouseEnter={handleImageCursor}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://images.pexels.com/photos/20475203/pexels-photo-20475203.jpeg"
                alt="tokyo"
                className="size-full object-cover"
              />
            </div>
          </div>
        );
      }}
    </CustomCursorProvider>
  );
}
