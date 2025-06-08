'use client';
import { Button } from '@/components/ui/button';
import { ContainerStagger } from '@/registry/containers/container-stagger';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { VideoIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function ContainerStaggerDemo() {
  const MotionButton = motion.create(Button);
  const animationVariants = useAnimationVariants('blur');
  return (
    <ContainerStagger className="flex flex-col text-center items-center space-y-5 p-6">
      <motion.h1
        className="font-serif text-5xl font-extralight"
        variants={animationVariants}
      >
        Your{' '}
        <span className=" font-serif font-extralight text-primary">
          animated & reusuble
        </span>{' '}
        <br />
        blocks for your designs
      </motion.h1>

      <motion.p
        variants={animationVariants}
        className="leading-normal tracking-tight text-muted-foreground"
      >
        Crafting exceptional digital experiences through innovative design
        solutions.
        <br /> From concept to creation, we transform your vision into reality.
      </motion.p>

      <MotionButton size="sm" variants={animationVariants}>
        Book free call <VideoIcon className="size-4  " />
      </MotionButton>
    </ContainerStagger>
  );
}
