'use client';
import { GridBentoDemo } from '@/registry/demo/containers/grid-bento';
import { ContainerInfiniteScrollDemo } from '@/registry/demo/containers/container-infinite-scroll';
import { CardFlipDemo } from '@/registry/demo/cards/card-flip';
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
import { SectionGalleryDemo } from '@/registry/demo/section-gallery';
import { CardsStackDemo } from '@/registry/demo/cards/cards-stack';
import { CardsStackRotatedDemo } from '@/registry/demo/cards/cards-stack-rotated';
import { SlideshowDemo } from '@/registry/demo/slideshow';
import { BackgroundGradientDemo } from '@/registry/demo/backgrounds/background-gradient';
import { HeroGradientDemo } from '@/registry/demo/heros/hero-gradient';
import { GalleryRotatedScrollDemo } from '@/registry/demo/containers/gallery-rotated-scroll';
import { UseSmoothScrollDemo } from '@/registry/demo/utils/use-smooth-scroll';

export default function Home() {
  return (
    <main className="relative">
      <UseSmoothScrollDemo />
      <GalleryRotatedScrollDemo />
      <HeroGradientDemo />
      <BackgroundGradientDemo />
      <SlideshowDemo />
      <CardsStackRotatedDemo />
      <CardsStackDemo />
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
    </main>
  );
}
