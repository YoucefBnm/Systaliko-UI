'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ScrollXCarouselDemo } from '@/registry/demo/scroll-x-carousel';

export default function HomePage() {
  return (
    <>
      {/* <Header />
      <Hero />
      <Features /> */}
      <ScrollXCarouselDemo />
    </>
  );
}
