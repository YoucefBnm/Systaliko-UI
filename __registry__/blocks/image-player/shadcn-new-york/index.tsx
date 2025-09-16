/* eslint-disable @next/next/no-img-element */
'use client';
import * as React from 'react';

interface ImagePlayerProps extends React.HTMLAttributes<HTMLImageElement> {
  images: string[];
  interval?: number;
  loop?: boolean;
  onComplete?: () => void;
  renderImage?: (src: string, index: number) => React.ReactNode;
}

export const ImagePlayer: React.FC<ImagePlayerProps> = ({
  images,
  interval = 500,
  loop = true,
  onComplete,
  renderImage,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const currentImage = React.useMemo(
    () => images[currentIndex],
    [images, currentIndex],
  );

  React.useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= images.length) {
          if (loop) {
            return 0;
          } else {
            onComplete?.();
            return prevIndex;
          }
        }

        return nextIndex;
      });
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval, loop, onComplete]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="text-destructive">No images !!</div>;
  }

  return (
    <>
      {renderImage ? (
        renderImage(currentImage, currentIndex)
      ) : (
        <img src={currentImage} {...props} />
      )}
    </>
  );
};
