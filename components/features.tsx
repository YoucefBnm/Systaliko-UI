import { CardSticky, ContainerScroll } from '@/registry/cards/cards-stack';
import {
  BoxIcon,
  BrushIcon,
  FileCogIcon,
  LayersIcon,
  PuzzleIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const FEATURES = [
  {
    id: 'feature-shadcn',
    title: 'Powered by Shadcn registry',
    icon: BoxIcon,
    description:
      "Uses the official shadcn/ui registry as a base, so you're working with proven foundations that are easy to extend.",
  },
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
    id: 'feature-stack',
    title: 'Built for modern stack',
    icon: LayersIcon,
    description:
      'Ideal for apps using Next.js, Tailwind CSS, and TypeScript. Drop in and go — no bulky setup.',
  },
];

export function Features() {
  return (
    <section className="py-12 px-8">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 md:h-dvh top-16 space-y-5 md:sticky md:py-12">
          <h2 className="text-4xl font-semibold tracking-tight">
            Why<span className="text-primary"> Systaliko UI?</span>
          </h2>
          <p className="max-w-prose text-muted-foreground">
            Components distribution not &quot;npm install&quot; where you
            install only the components you want not the whole library. Creating
            components fully customizable and flexible to different usecases,
            and easy to adapt to your design and brand.
          </p>
          <Button variant={'link'}>
            <Link href="/docs/blocks/cards-stack">Use this Component</Link>
          </Button>
        </div>

        <ContainerScroll className="min-h-[400vh] space-y-8 py-12 place-content-center place-items-center">
          {FEATURES.map((feature, index) => (
            <CardSticky
              key={feature.id}
              index={index + 2}
              className="rounded-2xl md:w-4/5 border p-8  shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {feature.title}
                </h2>
                <feature.icon className="size-8 text-primary" />
              </div>

              <p className="text-foreground">{feature.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
  );
}
