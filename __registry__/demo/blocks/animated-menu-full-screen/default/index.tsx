'use client';
import { Variants } from 'motion/react';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuList,
  AnimatedMenuItem,
  CloseAnimatedMenu,
} from '@/__registry__/blocks/animated-menu/default';
import Link from 'next/link';
import { Button } from '@/__registry__/shadcn/button/default';

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
const variants = {
  open: {
    width: '100vw',
    height: '100vh',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 64,
    height: 64,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;
export function AnimatedMenuFullScreenDemo() {
  return (
    <div className="w-full z-[999] flex h-16 items-center justify-between pl-8 py-2">
      <span className="text-xl relative z-[9999] mix-blend-difference text-white font-bold tracking-tight">
        Systaliko UI
      </span>
      <div className="flex gap-4">
        <AnimatedMenu className="relative">
          <AnimatedMenuButton className="min-h-16 min-w-16">
            <AnimatedMenuButtonToggleIcon size="xl" className="*:bg-white/80" />
          </AnimatedMenuButton>
          <AnimatedMenuList
            variants={variants}
            className="absolute right-0 top-0 bg-zinc-950/90 backdrop-blur text-white"
          >
            <div className="flex px-6 justify-evenly items-center gap-8 flex-wrap size-full">
              <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {menuItems.map((item, i) => (
                  <div className="overflow-hidden" key={item.title}>
                    <AnimatedMenuItem
                      className="perspective-dramatic perspective-origin-bottom"
                      order={i}
                    >
                      <CloseAnimatedMenu>
                        <Link
                          className="text-6xl tracking-wide font-medium "
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
              <div className="space-y-6 flex flex-col justify-evenly">
                <div className="flex gap-4 flex-wrap *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                  {socialLinks.map((item, i) => (
                    <div className="overflow-hidden" key={item.title}>
                      <AnimatedMenuItem order={i + menuItems.length}>
                        <CloseAnimatedMenu>
                          <Link
                            className="font-medium text-muted"
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

                <AnimatedMenuItem
                  order={socialLinks.length + menuItems.length}
                  className="space-y-3"
                >
                  <p className="text-muted/50 text-sm max-w-[35ch]">
                    in systaliko ui, we are using the animated menu component to
                    create a beautiful and interactive navigation menu. it is
                    designed to be easy to use and customizable, making it a
                    great choice for any project.
                  </p>
                  <Button variant="link" className="text-muted">
                    Get in touch
                  </Button>
                </AnimatedMenuItem>
              </div>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </div>
    </div>
  );
}
