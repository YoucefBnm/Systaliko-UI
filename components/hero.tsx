'use client';
import * as React from 'react';

import { ContainerStagger } from '@/registry/containers/container-stagger';
import { motion, MotionConfig } from 'motion/react';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { Button } from './ui/button';
import Link from 'next/link';
import ReactIcon from './icons/react-icon';
import TailwindIcon from './icons/tailwind-icon';
import ShadcnIcon from './icons/shadcn-icon';
import MotionIcon from './icons/motion-icon';
import TSIcon from './icons/ts-icon';
import { ArrowUpRightIcon, ComponentIcon, StarIcon } from 'lucide-react';
import { Badge } from './ui/badge';

export const Hero = () => {
  const animationVariants = useAnimationVariants('blur');

  return (
    <section className="relative max-w-7xl place-content-center min-h-dvh px-6 py-8 w-full">
      <ContainerStagger className="flex flex-col items-center text-center justify-center space-y-5">
        <MotionConfig transition={{ duration: 0.3, ease: 'easeIn' }}>
          <motion.a
            variants={animationVariants}
            href="https://github.com/YoucefBnm/Systaliko-UI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge variant={'secondary'} className="rounded-full">
              <StarIcon fill="currentColor" /> Star on github
            </Badge>
          </motion.a>
          <motion.h1
            variants={animationVariants}
            className="text-4xl font-semibold tracking-tight max-w-[25ch]"
          >
            Systaliko UI easy to scale change and adapt UI components
          </motion.h1>
          <motion.p variants={animationVariants} className="max-w-prose">
            A modern component library built on top of the ShadCN registry.
            Designed for flexibility, built for customization, and crafted to
            scale across variants and use cases.
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex items-center gap-2 justify-center"
          >
            <Button size="sm">
              <Link href="/docs">Browse Components</Link>
              <ComponentIcon />
            </Button>
            <Button size="sm" variant={'outline'}>
              <Link href="/docs/heros/hero-gradient">Use this component</Link>
              <ArrowUpRightIcon />
            </Button>
          </motion.div>

          <motion.div
            variants={animationVariants}
            className="flex mt-4 items-center justify-center gap-4"
          >
            <span className="text-muted-foreground text-sm">Built with</span>
            <ReactIcon className="size-6" />
            <TSIcon className="size-6" />
            <TailwindIcon className="size-6" />
            <ShadcnIcon className="size-6" />
            <MotionIcon className="size-6" />
          </motion.div>
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
};
