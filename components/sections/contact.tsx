'use client';
import { siteConfig } from '@/config/site';
import { ContainerStagger } from '@/registry/blocks/container-stagger';
import { ANIMATION_VARIANTS } from '@/registry/utils/animation-variants';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import XIcon from '../icons/x-icon';
import GithubIcon from '../icons/github-icon';
import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import TwentyFirstIcon from '../icons/21st-icon';
import ShadcnIcon from '../icons/shadcn-icon';

export function Contact() {
  const variants = ANIMATION_VARIANTS['blur'];
  return (
    <section className="py-12 px-6">
      <div className="md:grid md:grid-cols-5 md:gap-8 space-y-6">
        <div className="col-span-3 relative p-2 bg-linear-120 text-white from-zinc-900/30 to-zinc-800/40 bg-no-repeat border border-foreground/10 rounded-3xl shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
          <div className="border border-black rounded-[19px] shadow-[inset_0_1px_#ffffff1a,0_0_1.8px_#ffffff30]">
            <ContainerStagger className="size-full  py-12 px-6 flex flex-col text-center space-y-6 items-center justify-center bg-linear-180 via-10% from-zinc-700 to-zinc-950 bg-no-repeat rounded-[19px] p-0.5 relative">
              <MotionConfig transition={{ duration: 0.4, ease: 'easeOut' }}>
                <motion.h2
                  className="text-3xl font-semibold bg-clip-text text-transparent bg-linear-180 from-white via-white/90 to-white/70"
                  variants={variants}
                >
                  Get in touch with the creator
                </motion.h2>
                <motion.p
                  className="text-white/80 max-w-[45ch]"
                  variants={variants}
                >
                  Got a poject ideas, or existing project your want to enhance
                  or a question, suggetion, request ? Feel free to contact me on
                  the links below 👇🏻
                </motion.p>

                <motion.div
                  variants={variants}
                  className="flex gap-2 items-center"
                >
                  <Link
                    href={siteConfig.links.x}
                    aria-label="reach on x"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-white/50"
                  >
                    <XIcon className="size-5 text-white" />
                  </Link>
                  <Link
                    aria-label="contribute on github"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-white/50"
                    href={`mailto:${siteConfig.links.email}`}
                  >
                    <MailIcon className="size-5 text-white" />
                  </Link>
                  <Link
                    href={siteConfig.links.github}
                    aria-label="contribute on github"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-white/50"
                  >
                    <GithubIcon className="size-5 text-white" />
                  </Link>
                </motion.div>
              </MotionConfig>
            </ContainerStagger>
          </div>
        </div>

        <div className="col-span-2 self-center space-y-2">
          <Link
            href={siteConfig.links.twentyFirst}
            className="group flex items-center gap-2"
            rel="noreferrer"
            target="_blank"
          >
            <TwentyFirstIcon className="size-4" />
            <p className="opacity-80 transition-opacity duration-200 group-hover:opacity-100">
              Twenty first partner
            </p>

            <ArrowUpRightIcon className="ml-auto size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </Link>
          <Separator className="my-4" />
          <div className="flex items-center gap-2">
            <ShadcnIcon className="size-5" />
            <p className="text-sm text-muted-foreground">
              built into the Shadcn CLI with no additional configuration
              required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
