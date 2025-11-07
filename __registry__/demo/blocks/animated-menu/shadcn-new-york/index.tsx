import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuButtonLabel,
  AnimatedMenuList,
  AnimatedMenuItem,
} from '@/__registry__/blocks/animated-menu/shadcn-new-york';
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
export function AnimatedMenuDemo() {
  return (
    <div className="self-start h-svh w-full z-[999] flex items-start justify-between px-8 py-2">
      <span className="text-xl font-bold tracking-tight">Systaliko UI</span>
      <div className="flex gap-4">
        <AnimatedMenu className="relative">
          <AnimatedMenuButton className="mr-4.5 text-zinc-50">
            <AnimatedMenuButtonToggleIcon className="*:rounded *:bg-zinc-50" />
            <AnimatedMenuButtonLabel />
          </AnimatedMenuButton>
          <AnimatedMenuList className="absolute right-0 top-0 bg-zinc-950/90  border border-secondary-foreground/5 backdrop-blur rounded-3xl">
            <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {menuItems.map((item, i) => (
                  <AnimatedMenuItem key={i} order={i}>
                    <Link
                      className="text-2xl font-medium text-white "
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
                      className=" font-medium text-muted"
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
