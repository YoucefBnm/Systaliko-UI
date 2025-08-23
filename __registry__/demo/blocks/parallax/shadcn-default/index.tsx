'use client';
import { ContainerStagger } from '@/__registry__/blocks/container-stagger/shadcn-default';
import {
  Parallax,
  ParallaxItem,
  PrallaxContainer,
} from '@/__registry__/blocks/parallax/shadcn-default';
import { Button } from '@/__registry__/shadcn/button/shadcn-default';
import { TextStaggerInview } from '@/__registry__/text/text-stagger-inview/shadcn-default';
import { useAnimationVariants } from '@/__registry__/utils/use-animation-variants/shadcn-default';
import { motion } from 'motion/react';

export function ParallaxDemo() {
  const animationVariants = useAnimationVariants('z');
  return (
    <Parallax className="h-[3600px] md:h-[2000px] p-12">
      <ContainerStagger className="sticky top-0 h-screen space-y-4 w-full flex flex-col justify-center items-center text-center">
        <TextStaggerInview
          as="h2"
          className="text-5xl font-bold tracking-tighter md:w-2/3 mx-auto"
          animation="z"
        >
          Creating brands that brings people to the shop
        </TextStaggerInview>

        <motion.p
          variants={animationVariants}
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 28,
            mass: 0.9,
          }}
          className="max-w-prose  "
        >
          Defining the brand’s unique value proposition and positioning it in
          the market, creating a brand identity that resonates with the target
          audience.
        </motion.p>

        <motion.div
          variants={animationVariants}
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 28,
            mass: 0.9,
          }}
        >
          <Button size="lg">Get Started</Button>
        </motion.div>
      </ContainerStagger>
      <PrallaxContainer className="flex flex-wrap justify-between gap-4 w-full">
        <ParallaxItem
          className="w-11/12 md:w-1/4 max-h-96"
          start={200}
          end={-200}
        >
          <img
            className="size-full object-cover object-[50%_50%]"
            src="https://images.unsplash.com/photo-1508849789987-4e5333c12b78?q=80&w=1593&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="street"
          />
        </ParallaxItem>

        <ParallaxItem
          className="w-11/12 md:w-1/4 max-h-96"
          start={500}
          end={20}
        >
          <img
            className="size-full object-cover object-[50%_50%]"
            src="https://images.unsplash.com/photo-1666053691228-5f2c957b1755?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="street"
          />
        </ParallaxItem>
        <ParallaxItem
          className="w-11/12 md:w-1/4 max-h-96"
          start={800}
          end={50}
        >
          <img
            className="size-full object-cover object-[50%_50%]"
            src="https://images.unsplash.com/photo-1705693346612-bbc9f38f1621?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="street"
          />
        </ParallaxItem>
        <ParallaxItem
          className="w-11/12 md:w-1/4 max-h-96"
          start={500}
          end={50}
        >
          <img
            className="size-full object-cover object-[50%_50%]"
            src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="street"
          />
        </ParallaxItem>

        <ParallaxItem
          className="w-11/12 md:w-1/4 max-h-96"
          start={800}
          end={70}
        >
          <img
            className="size-full object-cover object-[50%_50%]"
            src="https://images.unsplash.com/photo-1643451481461-f73ff49a3f93?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="street"
          />
        </ParallaxItem>
      </PrallaxContainer>
    </Parallax>
  );
}
