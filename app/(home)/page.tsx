import { Features } from '@/components/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ConstainerScrollScaleDemo } from '@/registry/demo/containers/container-scroll-scale';
import { ContainerScrollComboDemo } from '@/registry/demo/containers/container-scroll-combo';
import { ContainerScrollInsetDemo } from '@/registry/demo/containers/container-scroll-inset';
import { ContainerScrollInsetXDemo } from '@/registry/demo/containers/container-scroll-inset-x';
import { ContainerScrollInsetYDemo } from '@/registry/demo/containers/container-scroll-inset-y';
import { ContainerScrollRadiusDemo } from '@/registry/demo/containers/container-scroll-radius';
import { HeroGalleryScrollAnimationDemo } from '@/registry/demo/heros/hero-gallery-scroll-animation';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <HeroGalleryScrollAnimationDemo />

      <ContainerScrollComboDemo />
      <ContainerScrollInsetDemo />
      <ContainerScrollInsetYDemo />
      <ContainerScrollInsetXDemo />
      <ConstainerScrollScaleDemo />
      <ContainerScrollRadiusDemo />
      <Features />
    </main>
  );
}
