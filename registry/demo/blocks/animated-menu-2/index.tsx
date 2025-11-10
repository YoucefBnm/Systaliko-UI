'use client';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuList,
  AnimatedMenuItem,
  CloseAnimatedMenu,
} from '@/registry/blocks/animated-menu';
import { Variants } from 'motion/react';
import Link from 'next/link';

const menuItems = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Services',
    href: '/#Services',
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
const socialLinks = [
  {
    title: 'Github',
    href: 'https://github.com/YoucefBnm/',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/',
  },
  {
    title: 'X',
    href: 'https://x.com/lbnm_yussef',
  },
  {
    title: '21st',
    href: 'https://21st.dev/community/YoucefBnm',
  },
];
const menuListvariants = {
  open: {
    width: 320,
    height: 420,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 48,
    height: 48,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const menuItemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.75,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.25 + -i * 0.1,
    },
  }),
} as Variants;

export function AnimatedMenu2Demo() {
  return (
    <div className="w-full self-start h-svh z-[999] flex items-start justify-between px-8 py-2">
      <span className="text-xl font-bold tracking-tight">Systaliko UI</span>
      <div className="flex gap-4">
        <AnimatedMenu className="relative ">
          <AnimatedMenuButton className="size-12 text-white">
            <AnimatedMenuButtonToggleIcon size="md" className="*:rounded" />
          </AnimatedMenuButton>
          <AnimatedMenuList
            variants={menuListvariants}
            className="absolute right-0 top-0 bg-linear-to-bl from-black/80 to-black border border-border/50 shadow-md rounded-3xl"
          >
            <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {menuItems.map((item, i) => (
                  <div className="overflow-hidden" key={item.title}>
                    <AnimatedMenuItem
                      className="perspective-dramatic perspective-origin-bottom"
                      variants={menuItemVariants}
                      order={i}
                    >
                      <CloseAnimatedMenu>
                        <Link
                          className="text-white text-2xl font-medium "
                          href={item.href}
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </CloseAnimatedMenu>
                    </AnimatedMenuItem>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {socialLinks.map((item, i) => (
                  <div className="overflow-hidden" key={item.title}>
                    <AnimatedMenuItem
                      order={i + menuItems.length}
                      variants={menuItemVariants}
                    >
                      <CloseAnimatedMenu>
                        <Link
                          className=" font-medium text-muted"
                          href={item.href}
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </CloseAnimatedMenu>
                    </AnimatedMenuItem>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </div>
    </div>
  );
}
