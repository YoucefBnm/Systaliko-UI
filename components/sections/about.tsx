'use client';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { motion, MotionConfig } from 'motion/react';
import TwentyFirstIcon from '../icons/21st-icon';
import ShadcnIcon from '../icons/shadcn-icon';
import { SVGProps } from 'react';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '@/registry/text/text-scroll-read';

function AboutCard({
  Icon,
  lead,
}: {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  lead: string;
}) {
  return (
    <div className="p-2 flex items-center gap-4 text-muted-foreground">
      <div className="flex-1">
        <Icon className="size-4" />
      </div>
      <p className="text-sm ">{lead}</p>
    </div>
  );
}

export function About() {
  const variants = ANIMATION_VARIANTS['blur'];
  return (
    <section className="py-20 px-8 ">
      <div className="md:w-4/5 mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            Create your website in no time
          </h2>
          <ContainerStagger className="flex justify-start flex-wrap flex-11/12 mx-auto  gap-6">
            <MotionConfig transition={{ duration: 0.4, ease: 'easeOut' }}>
              <motion.div variants={variants}>
                <AboutCard
                  Icon={ShadcnIcon}
                  lead="Built into the Shadcn CLI with no additional configuration required"
                />
              </motion.div>
              <motion.div variants={variants}>
                <AboutCard Icon={TwentyFirstIcon} lead="Twenty first partner" />
              </motion.div>
            </MotionConfig>
          </ContainerStagger>
        </div>
        <TextScrollRead spaceClass=" h-20 ">
          <TextScrollReadWrap yRange={[0, 80]}>
            <ClipText className="text-lg md:text-3xl font-medium tracking-wide leading-normal bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,var(--muted-foreground)_50%)]">
              No <code>npm-install</code> a whole library install/copy only the
              components you want, easy to adapt to your design and brand, Every
              component is built with composability in mind adapt them or ship
              them as is, with the ability to Switch and create variants
              effortlessly using smart prop patterns and consistent API
              conventions.
            </ClipText>
          </TextScrollReadWrap>
        </TextScrollRead>
      </div>
    </section>
  );
}
