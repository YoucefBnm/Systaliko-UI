import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/__registry__/utils/use-smooth-scroll/shadcn-new-york';
import {
  motion,
  HTMLMotionProps,
  MotionValue,
  useScroll,
  useTransform,
  easeInOut,
} from 'motion/react';
import * as React from 'react';

interface GalleryRotatedScrollContextValue {
  scrollYProgress: MotionValue<number>;
}
const GalleryRotatedScrollContext = React.createContext<
  GalleryRotatedScrollContextValue | undefined
>(undefined);
export function useGalleryRotatedScrollContext() {
  const context = React.useContext(GalleryRotatedScrollContext);
  if (!context) {
    throw new Error(
      'useGalleryRotatedScrollContext must be used within a GalleryRotatedScrollContextProvider',
    );
  }
  return context;
}

export const GalleryRotatedScroll = ({
  spacerClass,
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { spacerClass?: string }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useSmoothScroll();

  return (
    <GalleryRotatedScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative overflow-hidden', className)}
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center top',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          ...style,
        }}
        {...props}
      >
        {children}
        <div className={cn('w-full h-96', spacerClass)} />
      </div>
    </GalleryRotatedScrollContext.Provider>
  );
};

GalleryRotatedScroll.displayName = 'GalleryRotatedScroll';

interface GalleryContainerProps extends HTMLMotionProps<'div'> {
  yRange?: [number, number];
  rotateXRange?: [number, number];
  scaleRange?: [number, number];
}

export const GalleryContainer = React.forwardRef<
  HTMLDivElement,
  GalleryContainerProps
>(
  (
    {
      yRange = [0, 350],
      rotateXRange = [80, 0],
      scaleRange = [1.1, 1],
      children,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { scrollYProgress } = useGalleryRotatedScrollContext();

    const y = useTransform(scrollYProgress, [0, 1], yRange, {
      ease: easeInOut,
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], rotateXRange, {
      ease: easeInOut,
    });

    const scale = useTransform(scrollYProgress, [0.5, 0.9], scaleRange, {
      ease: easeInOut,
    });

    return (
      <motion.div
        ref={ref}
        className={cn('flex relative', className)}
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center top',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          top: 0,
          y,
          rotateX,
          scale,
          ...style,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
GalleryContainer.displayName = 'GalleryContainer';

export const GalleryCol = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { yRange?: [string, string] }
>(({ yRange = ['-5%', '1%'], className, style, ...props }, ref) => {
  const { scrollYProgress } = useGalleryRotatedScrollContext();

  const y = useTransform(scrollYProgress, [0.4, 0.8], yRange, {
    ease: easeInOut,
  });

  return (
    <motion.div
      ref={ref}
      className={cn('relative flex flex-col w-full', className)}
      style={{
        y,
        backfaceVisibility: 'hidden',
        ...style,
      }}
      {...props}
    />
  );
});
GalleryCol.displayName = 'GalleryCol';
