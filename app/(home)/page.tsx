import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { CardHoverRevealFullDemo } from '@/registry/demo/cards/card-hover-reveal-full';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <div className="min-h-dvh w-full place-content-center place-items-center">
        <CardHoverRevealFullDemo />
      </div>
      <Features />
    </main>
  );
}
