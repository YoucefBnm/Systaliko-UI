import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuButtonLabel,
  AnimatedMenuList,
  AnimatedMenuItem,
} from '@/registry/blocks/animated-menu';
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

const menu_variants = {
  open: {
    width: 320,
    height: 380,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 320,
    height: 48,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as const;
export function AnimatedMenuDemo() {
  return (
    <div className="self-start h-screen w-full z-[999] flex items-start justify-between px-8 ">
      <div className="mt-4 w-xs mx-auto max-w-full flex justify-between items-center gap-4">
        <span className="relative z-999 inline-block px-2 text-primary-foreground font-bold">
          systaliko
        </span>
        <AnimatedMenu>
          <AnimatedMenuButton className="h-12 text-primary-foreground">
            <AnimatedMenuButtonToggleIcon />
            <AnimatedMenuButtonLabel />
          </AnimatedMenuButton>
          <AnimatedMenuList
            variants={menu_variants}
            className="bg-primary ring-2 ring-black shadow text-primary-foreground"
          >
            <div className="pt-14 pb-8 flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {menuItems.map((item, i) => (
                  <AnimatedMenuItem key={i} order={i}>
                    <Link
                      className="text-sm font-medium opacity-80 hover:opacity-100"
                      href={item.href}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
              <div className="flex gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {socialLinks.map((item, i) => (
                  <AnimatedMenuItem
                    key={item.title}
                    order={i + menuItems.length}
                  >
                    <Link
                      className="text-sm font-medium opacity-70 hover:opacity-100 tracking-wide uppercase"
                      href={item.href}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </div>
    </div>
  );
}
