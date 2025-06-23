'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ContainerStagger2Demo } from '@/registry/demo/containers/container-stagger-2';
import { CustomCursorDemo } from '@/registry/demo/custom-cursor';
import { CustomCursor2Demo } from '@/registry/demo/custom-cursor-2';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <CustomCursorDemo />

      <Hero />
      <ContainerStagger2Demo />
      <CustomCursor2Demo />
      <Features />
    </main>
  );
}
