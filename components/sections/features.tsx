import { SPRING_CONFIG } from '@/lib/spring-transition';
import { CardsStackContainer, CardSticky } from '@/registry/cards/cards-stack';
import { Button } from '@/registry/shadcn/button';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import { TextStaggerInterval } from '@/registry/text/text-stagger-interval';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import {
  BoxIcon,
  BrushIcon,
  FileCogIcon,
  LayersIcon,
  PuzzleIcon,
} from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  {
    id: 'feature-components',
    title: 'Flexible Components',
    icon: PuzzleIcon,
    description:
      'Every component is built with composability in mind — adapt them to your design system or ship them as-is.',
  },
  {
    id: 'feature-customization',
    title: 'Easy Customization',
    icon: BrushIcon,
    description:
      'Built using Tailwind CSS with an architecture that makes it easy to override styles, behavior, and structure without friction.',
  },
  {
    id: 'feature-variant',
    title: 'Variant Friendly',
    icon: FileCogIcon,
    description:
      'Switch and create variants effortlessly using smart prop patterns and consistent API conventions.',
  },
  {
    id: 'feature-shadcn',
    title: 'Powered by Shadcn registry',
    icon: BoxIcon,
    description:
      "Uses the official shadcn/ui registry as a base, so you're working with proven foundations that are easy to extend.",
  },
  {
    id: 'feature-stack',
    title: 'Built for modern stack',
    icon: LayersIcon,
    description:
      'Ideal for apps using Next.js, Tailwind CSS, and TypeScript. Drop in and go — no bulky setup.',
  },
];

export function Features() {
  return (
    <section className="py-12 px-8 min-h-screen">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="md:sticky top-16 left-0 h-fit space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Ready to ship{' '}
            <span className="bg-secondary text-xl text-secondary-foreground w-32 -rotate-1 p-0.5 rounded text-center inline-block">
              <TextStaggerInterval
                words={['Components', 'Blocks', 'Templates']}
                animation={'blur'}
                staggerValue={0.05}
                interval={3000}
              />
            </span>
          </h2>

          <p className="text-balance text-muted-foreground">
            No <code>npm-install</code> a whole library install only the
            components you want, easy to adapt to your design and brand.
          </p>
          <Button>
            <Link
              className="p-1 overflow-hidden"
              href="/docs/cards/cards-stack"
            >
              <TextStaggerHover>
                <TextStaggerHoverActive
                  transition={SPRING_CONFIG}
                  className="opacity-80"
                  animation="blur"
                >
                  Use this component
                </TextStaggerHoverActive>
                <TextStaggerHoverHidden
                  animation="blur"
                  transition={SPRING_CONFIG}
                >
                  Use this component
                </TextStaggerHoverHidden>
              </TextStaggerHover>
            </Link>
          </Button>
        </div>

        <CardsStackContainer className="md:min-h-[400vh] space-y-8 py-12 place-content-center place-items-center">
          {FEATURES.map((feature, index) => (
            <CardSticky
              key={feature.id}
              index={index + 5}
              className="supports-[backdrop-blur]:bg-card/90 odd:rotate-2 rounded w-4/5 border px-8 py-10  shadow backdrop-blur-md"
            >
              <feature.icon className="justify-self-end size-6 stroke-[1.8]" />
              <h2 className="my-6 text-xl font-semibold tracking-tighter">
                {feature.title}
              </h2>
              <p className="text-foreground text-sm text-balance">
                {feature.description}
              </p>
            </CardSticky>
          ))}
        </CardsStackContainer>
      </div>
    </section>
  );
}
