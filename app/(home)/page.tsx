import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ContainerInfiniteScrollDemo } from '@/registry/demo/containers/container-infinite-scroll';
import { ContainerInsetScrollDemo } from '@/registry/demo/containers/container-inset-scroll';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ContainerInfiniteScrollDemo />
      <ContainerInsetScrollDemo />
      <Features />
    </main>
  );
}
