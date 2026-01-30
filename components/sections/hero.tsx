'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { Button } from '@/registry/shadcn/button';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { ArrowUpRightIcon } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import ReactIcon from '../icons/react-icon';
import TSIcon from '../icons/ts-icon';
import TailwindIcon from '../icons/tailwind-icon';
import ShadcnIcon from '../icons/shadcn-icon';
import MotionIcon from '../icons/motion-icon';
import { Pulse } from '@/registry/components/pulse';
import { Showcase } from './showcase';
import { Badge } from '@/registry/shadcn/badge';
import { TextWavy } from '@/registry/text/text-wavy';

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
    <section className="relative max-w-7xl place-content-center w-full overflow-hidden min-h-[60vh]">
      <ContainerStagger className="flex px-6 pt-12 flex-col items-center text-center justify-center space-y-6 min-h-96">
        <MotionConfig transition={{ duration: 0.3, ease: 'easeOut' }}>
          <motion.div variants={animationVariants}>
           <Link href="/docs"><TextWavy text="New Blocks and Cognify template are available." /></Link>
          </motion.div>

          <motion.h1
            variants={animationVariants}
            className="text-4xl max-w-[25ch] font-medium tracking-tighter text-balance bg-clip-text text-transparent bg-linear-to-br from-foreground/40 to-foreground "
          >
            React blocks easy to Copy Paste or install via shadcn registry
          </motion.h1>

          <motion.p
            variants={animationVariants}
            className="text-balance  text-sm"
          >
            Collection of UI blocks and components and templates to easly craft
            your website, interactive and animated, built for customization.
            built into the Shadcn CLI with no additional configuration required
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex items-center gap-2 justify-center"
          >
            <Button size="sm">
              <Link href="/docs">Browse Components</Link>
            </Button>
            <Button size="sm" variant={'secondary'}>
              <Link href="/docs/templates">Browse Templates</Link>
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
