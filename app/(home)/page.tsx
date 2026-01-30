// import { About } from '@/components/sections/about';
import { Components } from '@/components/sections/components';
import { Contact } from '@/components/sections/contact';
import { Features } from '@/components/sections/features';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
// import { HomeBanner } from '@/components/sections/home-banner';

export default function HomePage() {
  return (
    <>
      {/* <HomeBanner />  */}
      <Header />
      <Hero />
      {/* <About /> */}
      <Components />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}
