import { Components } from '@/components/sections/components';
import { Features } from '@/components/sections/features';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { getFeaturedComponents } from '@/lib/source';
import { CustomPricingDesignDemo } from '@/registry/demo/ecommerce/custom-pricing-design';

export default function HomePage() {
  const featuredComponents = getFeaturedComponents();

  return (
    <>
      {/* <Header />
      <Hero />
      <Components featuredComponents={featuredComponents} />
      <Features />
      <Services />
      <Footer /> */}

      <CustomPricingDesignDemo />
    </>
  );
}
