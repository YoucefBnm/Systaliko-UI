'use client';
import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AgencyPageDemo } from '@/registry/demo/pages/agency';

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <AgencyPageDemo />
      {/* <Hero />
      <Features /> */}
    </>
  );
}
