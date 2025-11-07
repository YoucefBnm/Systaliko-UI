import { Components } from '@/components/sections/components';
import { Contact } from '@/components/sections/contact';
// import { Features } from '@/components/sections/features';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
// import { HomeBanner } from '@/components/sections/home-banner';
import { HomeNav } from '@/components/sections/home-nav';

export default function HomePage() {
  return (
    <>
      {/* <HomeBanner /> */}
      <HomeNav />
      <Hero />
      <Components />
      {/* <Features /> */}
      <Contact />
      <Footer />
    </>
  );
}
