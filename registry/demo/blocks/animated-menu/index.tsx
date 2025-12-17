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
export function AnimatedMenuDemo() {
  return (
    <div className="self-start h-screen w-full z-[999] flex items-start justify-between px-8 ">
      <span className="text-xl font-bold tracking-tight">Systaliko UI</span>
      <AnimatedMenu className="relative">
        <AnimatedMenuButton className="w-[102px] h-[40px] text-primary-foreground">
          <AnimatedMenuButtonToggleIcon />
          <AnimatedMenuButtonLabel />
        </AnimatedMenuButton>
        <AnimatedMenuList className="absolute right-0 top-0.5 bg-linear-to-bl from-primary/95 to-primary border shadow-md inset-shadow-xs inset-shadow-muted rounded-3xl">
          <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
            <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
              {menuItems.map((item, i) => (
                <AnimatedMenuItem key={i} order={i}>
                  <Link
                    className="text-2xl font-medium text-muted"
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
                <AnimatedMenuItem key={item.title} order={i + menuItems.length}>
                  <Link
                    className=" font-medium text-muted/80 text-sm tracking-wide uppercase"
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
  );
}
