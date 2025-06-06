'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion, MotionConfig } from 'motion/react';
import {
  AnimationT,
  useAnimationVariants,
} from '@/__registry__/utils/use-animation-variants/shadcn-new-york';

interface SectionGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  title?: string;
  description?: string;
}
interface SectionGalleryContextValue {
  heading: string;
  title?: string;
  description?: string;
}
interface AnimatedItemProps {
  animation?: AnimationT;
}
const SectionGalleryContext = React.createContext<
  SectionGalleryContextValue | undefined
>(undefined);
function useSectionGalleryContext() {
  const context = React.useContext(SectionGalleryContext);
  if (context === undefined) {
    throw new Error(
      'useSectionGalleryContext must be used within a SectionGalleryProvider',
    );
  }
  return context;
}
export const SectionGallery = React.forwardRef<
  HTMLDivElement,
  SectionGalleryProps
>(({ heading, title, description, children, className, ...props }, ref) => {
  return (
    <SectionGalleryContext.Provider
      value={{
        heading,
        title,
        description,
      }}
    >
      <section ref={ref} className={cn('relative', className)} {...props}>
        {children}
      </section>
    </SectionGalleryContext.Provider>
  );
});
SectionGallery.displayName = 'SectionGallery';
export const SectionGalleryTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<'h4'> & AnimatedItemProps
>(({ className, animation, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  const { title } = useSectionGalleryContext();
  return (
    <motion.h4
      className={cn(
        'capitalize tracking-wide text-xs font-medium md:text-sm',
        className,
      )}
      variants={animationVariants}
      ref={ref}
      {...props}
    >
      {title}
    </motion.h4>
  );
});
SectionGalleryTitle.displayName = 'SectionGalleryTitle';

export const SectionGalleryHeading = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<'h2'> & AnimatedItemProps
>(({ className, animation, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  const { heading } = useSectionGalleryContext();

  return (
    <motion.h2
      className={cn(
        'text-4xl font-semibold md:text-5xl tracking-tight">',
        className,
      )}
      variants={animationVariants}
      ref={ref}
      {...props}
    >
      {heading}
    </motion.h2>
  );
});
SectionGalleryHeading.displayName = 'SectionGalleryHeading';

export const SectionGalleryCta = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & AnimatedItemProps
>(({ className, animation, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);

  return (
    <motion.div
      className={className}
      variants={animationVariants}
      ref={ref}
      {...props}
    />
  );
});
SectionGalleryCta.displayName = 'SectionGalleryCta';

export const SectionGalleryAnimationContainer = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    staggerValue?: number;
    children: React.ReactNode;
  }
>(({ staggerValue = 0.2, children, className, transition, ...props }, ref) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ staggerChildren: staggerValue }}
      ref={ref}
      {...props}
    >
      <MotionConfig
        transition={{
          duration: 0.3,
          ...transition,
        }}
      >
        {children}
      </MotionConfig>
    </motion.div>
  );
});
SectionGalleryAnimationContainer.displayName =
  'SectionGalleryAnimationContainer';

export const SectionGalleryDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'p'> & AnimatedItemProps
>(({ className, animation, ...props }, ref) => {
  const animationVariants = useAnimationVariants(animation);
  const { description } = useSectionGalleryContext();
  return (
    <motion.p
      className={className}
      variants={animationVariants}
      ref={ref}
      {...props}
    >
      {description}
    </motion.p>
  );
});
SectionGalleryDescription.displayName = 'SectionGalleryDescription';
