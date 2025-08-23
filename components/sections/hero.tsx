'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { ArrowUpRightIcon, ComponentIcon } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import ReactIcon from '../icons/react-icon';
import TSIcon from '../icons/ts-icon';
import TailwindIcon from '../icons/tailwind-icon';
import ShadcnIcon from '../icons/shadcn-icon copy';
import MotionIcon from '../icons/motion-icon';

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
  const animationVariants = useAnimationVariants('blur');

  return (
    <section className="relative max-w-7xl place-content-center  px-6 py-12 w-full">
      <ContainerStagger className="flex flex-col items-center text-center justify-center space-y-5">
        <MotionConfig transition={{ duration: 0.3, ease: 'easeIn' }}>
          <motion.div variants={animationVariants}>
            <Link href="/docs/blocks/container-stagger">
              <Badge className="bg-primary/20 text-foreground">
                <span className="text-base">👇🏻</span>
                {'  '} Use this animated component
              </Badge>
            </Link>
          </motion.div>

          <motion.h1
            variants={animationVariants}
            className="text-4xl font-semibold tracking-tight max-w-[25ch]"
          >
            Beautiful animated components, easy to change and adapt to your
            design.
          </motion.h1>

          <motion.p variants={animationVariants} className="max-w-prose">
            A modern component library built on top of Shadcn registry. Designed
            for flexibility, built for customization, and crafted to scale
            across variants and use cases.
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex items-center gap-2 justify-center"
          >
            <Button>
              <Link href="/docs">Browse Components</Link>
              <ComponentIcon />
            </Button>
            <Button variant={'outline'}>
              <Link href="/docs/heros/hero-gradient">Browse Templates</Link>
              <ArrowUpRightIcon />
            </Button>
          </motion.div>

          <motion.div
            variants={animationVariants}
            className="flex mt-4 items-center justify-center gap-4"
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
    </section>
  );
}
