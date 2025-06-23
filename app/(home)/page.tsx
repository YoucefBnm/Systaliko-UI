'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Logo } from '@/components/logo';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';

export default function HomePage() {
  return (
    <main className="relative">
      {/* <Header /> */}
      <Hero />
      <Features />
    </main>
  );
}
