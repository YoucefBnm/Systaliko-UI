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
            <Button size="sm" className="rounded-full">
              Visit Tokyo
              <MapPinIcon />
            </Button>,
          );

        return (
          <div
            ref={containerRef}
            className="relative container flex justify-between gap-12 flex-wrap items-center py-12 px-6 min-h-svh"
          >
            <CustomCursor className="bg-primary min-w-5 min-h-5 rounded-full" />

            <div className="flex flex-1 flex-col gap-4 items-start">
              <h1
                className="text-5xl tracking-tight font-semibold"
                onMouseEnter={handleHeadingCursor}
                onMouseLeave={handleMouseLeave}
              >
                Explore the World with interactive{' '}
                <span className="text-primary">travel experiences</span>.
              </h1>
              <p className="max-w-prose">
                Discover breathtaking destinations, unique cultures, and
                unforgettable adventures. Let your curiosity guide you as you
                embark on journeys that inspire and transform.
              </p>

              <div className="flex gap-4">
                <Button
                  onMouseEnter={handleButtonCursor}
                  onMouseLeave={handleMouseLeave}
                  size="lg"
                >
                  Book now
                </Button>
                <Button
                  variant={'link'}
                  onMouseEnter={handleLinkCursor}
                  onMouseLeave={handleMouseLeave}
                  className="text-primary"
                  size="lg"
                >
                  Learn more
                </Button>
              </div>
            </div>

            <div
              className="relative w-2/3 md:w-1/3"
              onMouseEnter={handleImageCursor}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://images.pexels.com/photos/20475203/pexels-photo-20475203.jpeg"
                alt="tokyo"
                className="rounded-md size-full object-cover"
              />
            </div>
          </div>
        );
      }}
    </CustomCursorProvider>
  );
}
