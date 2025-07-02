'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}
