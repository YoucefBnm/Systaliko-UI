'use client';
import { SPRING_CONFIG } from '@/lib/spring-transition';
import { CardsStackContainer, CardSticky } from '@/registry/cards/cards-stack';
import { Button } from '@/registry/shadcn/button';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import { TextStaggerInterval } from '@/registry/text/text-stagger-interval';
import {
  BoxIcon,
  BrushIcon,
  FileCogIcon,
  LayersIcon,
  PuzzleIcon,
} from 'lucide-react';
import { motion, animate, useMotionValue } from 'motion/react';
import Link from 'next/link';
import React from 'react';

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
  const timeline = useMotionValue(0);
  React.useEffect(() => {
    const controls = animate(timeline, 1, {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
    });

    return () => controls.stop();
  }, []);
  return (
    <section className="py-12 px-8 min-h-screen">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="md:sticky top-24 left-0 h-fit space-y-4">
          <h2 className="text-2xl font-semibold ">
            Ready to ship{' '}
            <span className="relative overflow-hidden bg-accent text-accent-foreground text-xl w-34 -rotate-1 py-1 rounded-md ring-2 ring-ring/10 shadow-2xs text-center inline-block align-middle">
              <TextStaggerInterval
                words={['Components', 'Blocks', 'Templates']}
                animation={'blur'}
                staggerValue={0.05}
                interval={3000}
              />
              <div className="absolute -z-1 inset-0 overflow-hidden">
                <motion.div
                  className="bg-foreground/15 size-full origin-left "
                  style={{
                    scaleX: timeline,
                    transformOrigin: 'left',
                  }}
                />{' '}
              </div>
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
              className="supports-[backdrop-blur]:bg-card/90 odd:rotate-2 rounded w-3/5 border px-8 py-10  shadow backdrop-blur-md"
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
