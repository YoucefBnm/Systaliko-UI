/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { TextStaggerHoverDemo } from '@/registry/demo/text/text-stagger-hover';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import { motion, useScroll, useTransform } from 'motion/react';
import { animationRange } from '@/registry/utils/animation-range/animation-range';
import { GridBentoDemo } from '@/registry/demo/containers/grid-bento';
import { ContainerInfiniteScrollDemo } from '@/registry/demo/containers/container-infinite-scroll';
import { CardFlipDemo } from '@/registry/demo/cards/card-flip';
import { CardHoverReveal } from '@/registry/cards/card-hover-reveal';
import { CardHoverRevealDemo } from '@/registry/demo/cards/card-hover-reveal';
import { CardTestimonialDemo } from '@/registry/demo/cards/card-testimonial';
import { CardCurtainRevealDemo } from '@/registry/demo/cards/card-curtain-reveal';
import {
  ContainerClippedDemo,
  ContainerClippedDemo2,
  ContainerClippedDemo3,
} from '@/registry/demo/containers/container-clipped';
import { SetStaggerDirectionDemo } from '@/registry/demo/utils/set-stagger-direction';
import { CustomCursorDemo } from '@/registry/demo/custom-cursor';
import { GridStaggeredDemo } from '@/registry/demo/containers/grid-staggered';
import { GridStaggered } from '@/registry/containers/grid-staggered';
import { SectionGalleryDemo } from '@/registry/demo/section-gallery';
import { UseFollowMouseDemo } from '@/registry/demo/utils/use-follow-mouse';
import { CardsStackDemo } from '@/registry/demo/cards/cards-stack';
import { CardsStackRotatedDemo } from '@/registry/demo/cards/cards-stack-rotated';
import { SlideshowDemo } from '@/registry/demo/slideshow';

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-0%', '-100%']);

  const y1Range = animationRange(0, 8);
  const y1 = useTransform(scrollYProgress, y1Range, [20, 0]);

  const y2Range = animationRange(1, 8);
  const y2 = useTransform(scrollYProgress, y2Range, [40, 0]);

  const y3Range = animationRange(2, 8);
  const y3 = useTransform(scrollYProgress, y3Range, [60, 0]);

  const y4Range = animationRange(3, 8);
  const y4 = useTransform(scrollYProgress, y4Range, [80, 0]);

  const y5Range = animationRange(4, 8);
  const y5 = useTransform(scrollYProgress, y5Range, [100, 0]);

  const y6Range = animationRange(5, 8);
  const y6 = useTransform(scrollYProgress, y6Range, [120, 0]);

  const y7Range = animationRange(6, 8);
  const y7 = useTransform(scrollYProgress, y7Range, [140, 0]);

  const y8Range = animationRange(7, 8);
  const y8 = useTransform(scrollYProgress, y8Range, [160, 0]);

  return (
    <main className="relative">
      <SlideshowDemo />
      <CardsStackRotatedDemo />
      <CardsStackDemo />
      <UseFollowMouseDemo />
      <SectionGalleryDemo />
      <GridStaggeredDemo />
      <CustomCursorDemo />
      <SetStaggerDirectionDemo />
      <ContainerClippedDemo3 />
      <ContainerClippedDemo2 />
      <ContainerClippedDemo />
      <CardCurtainRevealDemo />
      <CardTestimonialDemo />
      <CardHoverRevealDemo />
      <CardFlipDemo />
      <ContainerInfiniteScrollDemo />
      <GridBentoDemo />
      {/* wrap */}

      {/* <div className="max-w-screen sticky top-0 left-0 w-full h-svh overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 h-svh items-center px-6"
        >
          <motion.div
            style={{ y: y1 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1732667318048-c3868e2c6ed6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y4 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y5 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1573455494057-12684d151bf4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y7 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1490855345014-1692c19ffe60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y8 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1493515211228-6c03db55b9ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>
        </motion.div>
      </div> */}
    </main>
  );
}
