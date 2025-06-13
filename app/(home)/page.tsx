import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Polygon } from '@/registry/backgrounds/clipped-shape';
import { ClippedShapeDemo } from '@/registry/demo/backgrounds/clipped-shape';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ClippedShapeDemo />
      <Features />
    </main>
  );
}
