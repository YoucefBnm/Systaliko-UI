'use client';
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
    <AnimatedMenu className="self-center relative">
      <AnimatedMenuButton className="w-28 h-12 text-secondary-foreground font-medium">
        <AnimatedMenuButtonToggleIcon className="*:h-[1.5px] *:origin-[17.5%]" />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>
      <AnimatedMenuList
        layout
        className="absolute right-0 top-0 bg-secondary/70 backdrop-blur border border-border/10 shadow rounded-3xl"
      >
        <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
          <div className="flex flex-col items-start gap-4 *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_links.map((navLink, i) => (
              <AnimatedMenuItem
                key={navLink.id}
                className="perspective-dramatic perspective-origin-bottom"
                order={i}
              >
                <CloseAnimatedMenu>
                  <Link
                    className="text-2xl font-medium p-2"
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
          <div className="flex gap-3 *:transition-blur *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_socials.map((navSocial, i) => (
              <AnimatedMenuItem
                key={navSocial.id}
                className="text-primary"
                order={i + nav_links.length}
              >
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
    <nav className="flex border border-border/50 bg-card/50 backdrop-blur-xs gap-4 px-6 rounded-4xl items-center justify-between *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
      {nav_links.map((navLink) => (
        <Link
          key={navLink.id}
          className="font-medium text-sm p-2"
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
  const isMobile = useIsMobile(920);

  return (
    <div className="h-[250vh]">
      <Header className="sticky top-2 left-0 w-full h-16 z-999">
        <HeaderLogo>
          <span className="text-xl tracking-tighter font-bold">
            systaliko ui
          </span>
        </HeaderLogo>

        {isMobile ? <NavMobile /> : <NavDesktop />}
      </Header>
      <div className="w-4/5 mx-auto text-center h-[50vh] place-content-center">
        <h2 className="text-2xl font-bold">
          Scroll down 👇🏻 to hide header, scroll up ☝️ to show it again. resize
          ↔️ to check responsivity.
        </h2>
      </div>
    </div>
  );
}
