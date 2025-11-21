'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { Button } from '@/registry/shadcn/button';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { ArrowUpRightIcon, ComponentIcon } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import ReactIcon from '../icons/react-icon';
import TSIcon from '../icons/ts-icon';
import TailwindIcon from '../icons/tailwind-icon';
import ShadcnIcon from '../icons/shadcn-icon copy';
import MotionIcon from '../icons/motion-icon';
import { Pill } from '../pill';
import { Pulse } from '@/registry/components/pulse';
import { Showcase } from './showcase';

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

export function Hero() {
  const animationVariants = ANIMATION_VARIANTS['blur'];

  return (
    <section className="relative max-w-7xl place-content-center w-full overflow-hidden">
      <ContainerStagger className="flex px-6 pt-12  flex-col items-center text-center justify-center space-y-6">
        <MotionConfig transition={{ duration: 0.4, ease: 'easeOut' }}>
          <motion.div variants={animationVariants}>
            <Pill
              href="/docs"
              label="and components availables"
              announcement={
                <div className="flex gap-2 items-center">
                  <Pulse /> New Startup template
                </div>
              }
            />
          </motion.div>

          <motion.h1
            variants={animationVariants}
            className="pb-px text-5xl font-semibold tracking-tight max-w-[25ch] text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50"
          >
            Copy Paste or install via shadcn registry React blocks/components
          </motion.h1>

          <motion.p
            variants={animationVariants}
            className="max-w-[70ch] text-lg text-muted-foreground"
          >
            Collection of UI blocks and components and templates to easly craft
            your website, interactive and animated, built for customization.
            built into the Shadcn CLI with no additional configuration required
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex items-center gap-2 justify-center"
          >
            <Button size="lg">
              <Link href="/docs">Browse Components</Link>
              <ComponentIcon />
            </Button>
            <Button size="lg" variant={'secondary'}>
              <Link href="/docs/templates">Browse Templates</Link>
              <ArrowUpRightIcon />
            </Button>
          </motion.div>

          <motion.div
            variants={animationVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-center gap-1 flex-wrap"
              >
                <tech.icon className="size-6" />
                <span className="text-muted-foreground text-sm capitalize font-medium">
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
