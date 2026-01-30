import {
  ScrollAnimationRotate,
  ScrollAnimationRotateCol,
  ScrollAnimationRotateContainer,
} from '@/registry/scroll-animations/scroll-animation-rotate';
import Image from 'next/image';
import Link from 'next/link';

export function Showcase() {
  return (
    <div className="mx-auto max-w-7xl min-h-[50vh]">
      <ScrollAnimationRotate offset={['0% 50%', '50% 50%']}>
        <div className="pointer-events-none absolute w-[103%] h-1/6 top-0 left-0 z-10 bg-linear-180 from-transparent via-background/50 to-transparent" />
        <ScrollAnimationRotateContainer
          yRange={[-50, 400]}
          rotateRange={[70, 0]}
          className="gap-4 px-4"
        >
          <ScrollAnimationRotateCol className="relative h-fit max-h-screenm mt-[-10%] border border-border/50 shadow">
            <Link
              aria-label="view carecover template"
              title="carecover template"
              className="block"
              href="/docs/templates/cognify"
            >
              <Image
                src="/showcase-cognify.png"
                className="object-contain w-full h-auto max-w-full"
                sizes="(max-width: 1024px) 50vw, 33vw"
                alt="carecover template"
                width={1440}
                height={2260}
              />
            </Link>
          </ScrollAnimationRotateCol>
          <ScrollAnimationRotateCol
            yRange={['15%', '-5%']}
            className="relative h-fit max-h-screen mt-[-20%] border border-border/50 shadow "
          >
            <Link
              aria-label="view veo template"
              title="veo template"
              className="block"
              href="/docs/templates/veo"
            >
              <Image
                src="/showcase-veo.png"
                priority={true}
                className="object-contain w-full h-auto max-w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="veo template"
                width={1440}
                height={2260}
              />
            </Link>
          </ScrollAnimationRotateCol>
          <ScrollAnimationRotateCol
            className="hidden lg:block relative h-fit max-h-screen mt-[-10%] border border-border/50 shadow"
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
                className="object-contain w-full h-auto max-w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="portfolio template"
                width={1440}
                height={2260}
              />
            </Link>
          </ScrollAnimationRotateCol>
        </ScrollAnimationRotateContainer>
      </ScrollAnimationRotate>
    </div>
  );
}
