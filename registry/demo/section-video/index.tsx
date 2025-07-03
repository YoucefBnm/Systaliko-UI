'use client';
import { Button } from '@/registry/button';
import {
  ContainerScrollAnimation,
  ContainerScrollInset,
  ContainerScrollTranslate,
} from '@/registry/containers/containers-scroll-animations';
import { SectionVideo } from '@/registry/section-video';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { motion } from 'motion/react';

export function SectionVideoDemo() {
  const animationVariants = useAnimationVariants();
  return (
    <section className="grid grid-cols-12 justify-center items-center  grid-rows-[max-content_1fr]">
      {/* heading */}
      {/* <div className="bg-red-500/50 "> */}
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mix-blend-difference h-[50vh] flex justify-center items-end row-start-1 col-start-2 row-end-2 col-end-12  relative z-10"
      >
        <h1 className="text-5xl text-center md:text-7xl font-bold tracking-tight uppercase text-secondary mix-blend-difference">
          scroll & roll
        </h1>
      </motion.div>
      {/* </div> */}
      {/* text + button */}

      {/* video */}
      <ContainerScrollAnimation className="row-start-1 col-start-2 row-end-3 col-end-12">
        <ContainerScrollTranslate className="h-dvh  flex items-center justify-center">
          <ContainerScrollInset
            className="overflow-hidden w-full flex justify-center items-center"
            insetRangeY={[22, 0]}
            insetXRange={[34, 0]}
            roundednessRange={[1000, 16]}
          >
            <video
              width="100%"
              height="100%"
              loop
              playsInline
              autoPlay
              muted
              className="block h-auto max-h-full max-w-full object-contain align-middle"
            >
              <source
                src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
            </video>
          </ContainerScrollInset>
        </ContainerScrollTranslate>
      </ContainerScrollAnimation>

      {/* text + button */}
      <motion.div className="relative my-6 z-10 row-start-2 text-center col-start-3 col-end-11 self-start justify-self-center  ">
        <Button className="rounded-full">Get Started</Button>
      </motion.div>
    </section>
  );
}
