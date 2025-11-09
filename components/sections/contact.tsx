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
import { Pill } from '../pill';
import { Pulse } from '@/registry/components/pulse';
import { Button } from '../ui/button';
import LinkedinIcon from '../icons/linkedin-icon';
{
  /* <motion.div
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
                </motion.div> */
}
export function Contact() {
  const variants = ANIMATION_VARIANTS['blur'];
  return (
    <section className="py-12 px-6">
      <div className="mx-auto md:w-4/5 relative p-2 bg-linear-120 text-white from-zinc-900/30 to-zinc-800/40 bg-no-repeat border border-foreground/10 rounded-3xl shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
        <div className="border border-black rounded-[19px] shadow-[inset_0_1px_#ffffff1a,0_0_1.8px_#ffffff30]">
          <ContainerStagger className="flex justify-center items-center gap-8 flex-wrap size-full py-12 px-6  bg-linear-180 via-10% from-zinc-700 to-zinc-950 bg-no-repeat rounded-[19px] p-0.5 relative">
            <div className="flex flex-col space-y-6  justify-center items-start md:items-center">
              <MotionConfig transition={{ duration: 0.4, ease: 'easeOut' }}>
                <motion.div variants={variants}>
                  <Pill
                    href={siteConfig.links.linkedin}
                    label="and collaborations"
                    announcement={
                      <div className="flex gap-2 items-center">
                        <Pulse className="[&>*:first-child]:bg-emerald-500/50 [&>*:last-child]:bg-emerald-400" />{' '}
                        Available for projects
                      </div>
                    }
                    className="bg-black/15"
                    target="_blank"
                    rel="noreferrer"
                  />
                </motion.div>
                <motion.h2
                  className="text-3xl font-semibold bg-clip-text text-transparent bg-linear-180 from-white via-white/90 to-white/70"
                  variants={variants}
                >
                  Get in touch with the creator
                </motion.h2>
                <motion.p
                  className="text-white/80 max-w-[45ch] md:text-center"
                  variants={variants}
                >
                  Have a project ideas, or existing project you want to
                  enhance/migrate or a question, suggestion, request ? Feel free
                  to contact.
                </motion.p>
                <motion.div
                  variants={variants}
                  className="flex  items-center gap-4"
                >
                  <Button variant={'secondary'} size={'lg'}>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      rel="noreferrer"
                      aria-label="send an email"
                      className="flex gap-1 items-center size-full"
                    >
                      <MailIcon className="size-4" />
                      Get in touch
                    </a>
                  </Button>
                  <Link
                    href={siteConfig.links.x}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="navigate to project repo github"
                  >
                    <XIcon className="size-4" />
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    aria-label="navigate to linkedin profile"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedinIcon className="size-4" />
                  </Link>
                </motion.div>
                <Separator className="my-4 bg-muted-foreground/20 w-11/12 mx-auto" />
                <motion.div
                  className="flex items-center flex-wrap flex-11/12 mx-auto  gap-6"
                  variants={variants}
                >
                  <Link
                    href={siteConfig.links.twentyFirst}
                    className="group flex items-center gap-2"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TwentyFirstIcon className="size-4" />
                    <p className="text-sm opacity-80 transition-opacity duration-200 group-hover:opacity-100">
                      Twenty first partner
                    </p>

                    <ArrowUpRightIcon className="ml-auto size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href="https://ui.shadcn.com/docs/directory"
                    className="group flex items-center gap-2"
                  >
                    <ShadcnIcon className="size-5" />
                    <p className="text-sm opacity-80 transition-opacity duration-200 group-hover:opacity-100">
                      built into the Shadcn CLI with no additional configuration
                      required
                    </p>
                    <ArrowUpRightIcon className="ml-auto size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href={siteConfig.links.repo}
                    className="group flex items-center gap-2"
                  >
                    <GithubIcon className="size-5" />
                    <p className="text-sm opacity-80 transition-opacity duration-200 group-hover:opacity-100">
                      Contribute to the project on Github
                    </p>
                    <ArrowUpRightIcon className="ml-auto size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              </MotionConfig>
            </div>
          </ContainerStagger>
        </div>
      </div>
    </section>
  );
}
