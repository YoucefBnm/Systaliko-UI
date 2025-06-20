'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ContainerStagger2Demo } from '@/registry/demo/containers/container-stagger-2';
import { DeviceRotatedScrollDemo } from '@/registry/demo/containers/device-rotated-scroll';

export default function HomePage() {
  return (
    <main className="relative">
      <DeviceRotatedScrollDemo />
      <Header />
      <Hero />
      <ContainerStagger2Demo />
      <Features />
    </main>
  );
}
