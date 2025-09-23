'use client';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import { TRANSITIONS } from '@/registry/utils/transitions';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { ArrowUpRightIcon, ComponentIcon } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';

export function ContainerStaggerDemo() {
  const animationVariants = ANIMATION_VARIANTS.blur;
  return (
    <section className="relative max-w-7xl place-content-center  px-6 py-12 w-full">
      <ContainerStagger className="flex flex-col items-center text-center justify-center space-y-5">
        <MotionConfig transition={TRANSITIONS.filter}>
          <motion.div variants={animationVariants}>
            <Link href="https://systaliko-ui.vercel.app/docs/containers/container-stagger">
              <Badge variant="secondary">100% free and open source</Badge>
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
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
}
