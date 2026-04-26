'use client';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
  CloseAnimatedMenu,
} from '@/registry/blocks/animated-menu';
import { Header, HeaderLogo } from '@/registry/blocks/header';
import Link from 'next/link';

const nav_links = [
  {
    id: 'nav-link-about',
    label: 'About',
    href: '#',
  },
  {
    id: 'nav-link-features',
    label: 'Features',
    href: '#',
  },
  {
    id: 'nav-link-pricing',
    label: 'Pricing',
    href: '#',
  },
  {
    id: 'nav-link-faq',
    label: 'FAQ',
    href: '#',
  },
  {
    id: 'nav-link-contact',
    label: 'Contact',
    href: '#',
  },
];
const nav_socials = [
  {
    id: 'nav-social-x',
    label: 'x',
    href: 'https://x.com',
  },
  {
    id: 'nav-social-instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    id: 'nav-social-linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
];

const NavMobile = () => {
  return (
    <AnimatedMenu>
      <AnimatedMenuButton className="text-primary-foreground">
        <AnimatedMenuButtonToggleIcon />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>
      <AnimatedMenuList
        layout
        className="bg-primary/90 backdrop-blur rounded-2xl"
      >
        <div className="flex flex-col p-8 justify-evenly gap-6 items-start size-full text-primary-foreground">
          <div className="flex flex-col items-start gap-4 *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_links.map((navLink, i) => (
              <AnimatedMenuItem
                key={navLink.id}
                className="perspective-dramatic perspective-origin-bottom"
                order={i}
              >
                <CloseAnimatedMenu>
                  <Link
                    className="text-sm font-medium p-3"
                    href={navLink.href}
                    title={navLink.label}
                    aria-label={`navigate to ${navLink.label}`}
                  >
                    {navLink.label}
                  </Link>
                </CloseAnimatedMenu>
              </AnimatedMenuItem>
            ))}
          </div>
          <Separator className="bg-border/15" />
          <div className="flex gap-3 *:transition-blur *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_socials.map((navSocial, i) => (
              <AnimatedMenuItem key={navSocial.id} order={i + nav_links.length}>
                <CloseAnimatedMenu>
                  <Link
                    className="p-1"
                    href={navSocial.href}
                    title={navSocial.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`navigate to ${navSocial.label}`}
                  >
                    {navSocial.label}
                  </Link>
                </CloseAnimatedMenu>
              </AnimatedMenuItem>
            ))}
          </div>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
};
const NavDesktop = () => {
  return (
    <nav className="flex gap-2 px-6 items-center justify-between *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
      {nav_links.map((navLink) => (
        <Link
          key={navLink.id}
          className="font-medium text-xs p-2"
          href={navLink.href}
          title={navLink.label}
          aria-label={`navigate to ${navLink.label}`}
        >
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
};
export function HeaderDemo() {
  const isMobile = useIsMobile(650);

  return (
    <div className="h-[180vh]">
      <Header className="sticky top-2 left-0 w-10/12 mx-auto h-12 z-999 bg-primary/80 text-primary-foreground backdrop-blur border border-border/50 shadow rounded-full p-2">
        <HeaderLogo className="p-2">
          <span className="font-semibold">systaliko ui</span>
        </HeaderLogo>

        {isMobile ? <NavMobile /> : <NavDesktop />}
      </Header>
      <div className="w-4/5 mx-auto text-center h-[50vh] place-content-center">
        <h2 className="text-2xl font-semibold text-balance">
          Scroll down 👇🏻 to hide header, scroll up ☝️ to show it again. resize
          ↔️ to check responsivity.
        </h2>
      </div>
    </div>
  );
}
