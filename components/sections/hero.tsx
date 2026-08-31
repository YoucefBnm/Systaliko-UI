'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { Button } from '@/registry/shadcn/button';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import ReactIcon from '../icons/react-icon';
import TSIcon from '../icons/ts-icon';
import TailwindIcon from '../icons/tailwind-icon';
import ShadcnIcon from '../icons/shadcn-icon';
import MotionIcon from '../icons/motion-icon';
import { Showcase } from './showcase';
import { TextWavy } from '@/registry/text/text-wavy';
import { LinkText } from '../link-text';
import { Badge } from '@/registry/shadcn/badge';
import { AnimatedBorder } from '@/registry/components/animated-border';
import { ArrowRightIcon } from 'lucide-react';

const TECH_STACK = [
  {
    id: Math.random(),
    label: 'react',
    icon: ReactIcon,
  },
  {
    id: Math.random(),
    label: 'typescript',
    icon: TSIcon,
  },
  {
    id: Math.random(),
    label: 'tailwind',
    icon: TailwindIcon,
  },
  {
    id: Math.random(),
    label: 'shadcn',
    icon: ShadcnIcon,
  },
  {
    id: Math.random(),
    label: 'motion',
    icon: MotionIcon,
  },
];

const animationVariants = ANIMATION_VARIANTS['blur'];

export function Hero() {
  return (
    <section className="relative max-w-7xl place-content-center w-full overflow-hidden min-h-[60vh]">
      <ContainerStagger className="flex px-6 pt-16 flex-col items-center text-center justify-center space-y-6 min-h-96">
        <MotionConfig
          transition={{ type: 'spring', visualDuration: 0.32, bounce: 0.1 }}
        >
          <motion.div variants={animationVariants}>
            <Link
              className="flex items-center gap-1 py-0.5"
              href="/docs/blocks/magnetic-grid"
            >
              <Badge className="rounded-full text-[10px] shadow-sm shadow-black/15 ring-1 ring-ring/50 py-px text-indigo-50 bg-indigo-500">
                new release
              </Badge>
              <TextWavy
                className="font-bold tabular-nums"
                text="v1.1.0 includes new magnetic grid block and updates"
                fontWeights={[500, 800, 500]}
              />

              <ArrowRightIcon className="w-4" />
            </Link>
          </motion.div>

          <motion.h1
            variants={animationVariants}
            className="text-3xl md:text-4xl max-w-[30ch] text-balance font-semibold tracking-tight"
          >
            React Blocks Templates Components Copy Paste or Install via Shadcn
          </motion.h1>

          <motion.p
            variants={animationVariants}
            className="text-balance text-sm mx-auto max-w-[55ch]"
          >
            60+ free blocks built with React, TypeScript, Tailwind CSS, and
            Motion. Copy paste or install via the Shadcn CLI no extra
            configuration.
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex items-center gap-2 justify-center"
          >
            <Button className="relative">
              <AnimatedBorder
                color="var(--muted)"
                className="absolute inset-0 border-2 border-indigo-400"
              />
              <LinkText aria-label="view docs" href="/docs">
                Browse Blocks
              </LinkText>
            </Button>
            <Button variant={'secondary'}>
              <LinkText aria-label="view templates" href="/docs/templates">
                Browse Templates
              </LinkText>
            </Button>
          </motion.div>

          <motion.div
            variants={animationVariants}
            className="my-4 flex flex-wrap items-center justify-center gap-4"
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-center gap-1 flex-wrap"
              >
                <tech.icon className="size-5" />
                <span className="sr-only text-muted-foreground text-sm capitalize font-medium">
                  {tech.label}
                </span>
              </div>
            ))}
          </motion.div>
        </MotionConfig>
      </ContainerStagger>
      <Showcase />
    </section>
  );
}
