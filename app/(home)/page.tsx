'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionVideoDemo } from '@/registry/demo/section-video';

export default function HomePage() {
  return (
    <>
      {/* <Header />
      <Hero />
      <Features /> */}
      <SectionVideoDemo />
    </>
  );
}
