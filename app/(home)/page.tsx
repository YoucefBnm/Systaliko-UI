import { Features } from '@/components/sections/features';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
// import { HomeBanner } from '@/components/sections/home-banner';
import { HomeNav } from '@/components/sections/home-nav';
import { Team } from '@/registry/demo/blocks/team';

export default function HomePage() {
  return (
    <>
      {/* <HomeBanner /> */}
      <HomeNav />
      <Team />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
