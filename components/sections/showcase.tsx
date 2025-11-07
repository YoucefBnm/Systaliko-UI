import {
  ScrollAnimationRotate,
  ScrollAnimationRotateCol,
  ScrollAnimationRotateContainer,
} from '@/registry/blocks/scroll-animation-rotate';
import Image from 'next/image';
import Link from 'next/link';

export function Showcase() {
  return (
    <section className="">
      <ScrollAnimationRotate offset={['0% 50%', '50% 50%']}>
        <div className="pointer-events-none absolute w-[103%] h-1/6 top-0 left-0 z-10 bg-linear-180 from-red-transparent via-background/50 to-transparent" />
        <ScrollAnimationRotateContainer
          yRange={[-100, 400]}
          rotateRange={[70, 0]}
          className="gap-4 px-4"
        >
          <ScrollAnimationRotateCol className="hidden lg:block relative border shadow-2xl h-svh mt-[-10%]">
            <Link
              aria-label="view abla template"
              title="abla template"
              className="block"
              href="/docs/templates/abla"
            >
              <Image
                src="/showcase-abla.png"
                className="object-contain w-full h-auto max-w-full"
                sizes="(max-width: 1000px) 50vw, 300px"
                alt="abla template"
                width={1440}
                height={3950}
              />
            </Link>
          </ScrollAnimationRotateCol>
          <ScrollAnimationRotateCol
            yRange={['15%', '-5%']}
            className="relative border shadow-2xl h-svh mt-[-20%] "
          >
            <Link
              aria-label="view veo template"
              title="veo template"
              className="block"
              href="/docs/templates/veo"
            >
              <Image
                src="/showcase-veo.png"
                className=" object-contain w-full h-auto max-w-full"
                sizes="(max-width: 742px) 100vw, 300px"
                alt="abla template"
                width={1440}
                height={3950}
              />
            </Link>
          </ScrollAnimationRotateCol>
          <ScrollAnimationRotateCol
            className="relative border shadow-2xl h-svh mt-[-10%]"
            yRange={['-10%', '2%']}
          >
            <Link
              aria-label="view portfolio template"
              title="portfolio template"
              className="block"
              href="/docs/templates/portfolio"
            >
              <Image
                src="/showcase-portfolio-light.png"
                className=" object-contain w-full h-auto max-w-full"
                sizes="(max-width: 742px) 100vw, 300px"
                alt="abla template"
                width={1440}
                height={3950}
              />
            </Link>
          </ScrollAnimationRotateCol>
        </ScrollAnimationRotateContainer>
      </ScrollAnimationRotate>
    </section>
  );
}
