import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
