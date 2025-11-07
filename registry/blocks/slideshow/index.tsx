'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';

interface SlideshowContextValue {
  activeSlide: number;
  changeSlide: (index: number) => void;
}

const SlideshowContext = React.createContext<SlideshowContextValue | undefined>(
  undefined,
);
function useSlideshowContext() {
  const context = React.useContext(SlideshowContext);
  if (context === undefined) {
    throw new Error(
      'useSlideshowContext must be used within a SlideshowProvider',
    );
  }
  return context;
}

export const Slideshow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const changeSlide = React.useCallback(
    (index: number) => setActiveSlide(index),
    [setActiveSlide],
  );
  return (
    <SlideshowContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    </SlideshowContext.Provider>
  );
});
Slideshow.displayName = 'Slideshow';

export const SlideshowIndicator = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { index: number }
>(({ index, children, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useSlideshowContext();
  const isActive = activeSlide === index;
  const handleMouse = () => changeSlide(index);
  return (
    <span
      className={cn(
        'relative inline-block origin-bottom overflow-hidden',
        className,
      )}
      {...props}
      ref={ref}
      onMouseEnter={handleMouse}
    >
      <TextStaggerHover
        as={'h2'}
        className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
      >
        <TextStaggerHoverActive
          className="opacity-20"
          animation={'top'}
          animate={isActive ? 'hidden' : 'visible'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {String(children)}
        </TextStaggerHoverActive>
        <TextStaggerHoverHidden
          animation={'bottom'}
          animate={isActive ? 'visible' : 'hidden'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {String(children)}
        </TextStaggerHoverHidden>
      </TextStaggerHover>
    </span>
  );
});
SlideshowIndicator.displayName = 'SlideshowIndicator';

export const clipPathVariants = {
  visible: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  hidden: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)',
  },
};
export const SlideshowImageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'grid  overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full',
        className,
      )}
      {...props}
    />
  );
});
SlideshowImageContainer.displayName = 'SlideshowImageContainer';

export const SlideshowImageWrap = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { activeSlide } = useSlideshowContext();
  return (
    <motion.div
      className={cn('inline-block align-middle', className)}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      animate={activeSlide === index ? 'visible' : 'hidden'}
      ref={ref}
      {...props}
    />
  );
});
SlideshowImageWrap.displayName = 'SlideshowImageWrap';
