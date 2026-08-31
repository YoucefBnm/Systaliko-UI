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
import { Button } from '@/registry/shadcn/button';
import { Variants } from 'motion';
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
const menu_variants = {
  open: {
    width: 320,
    height: 380,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 320,
    height: 40,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const header_styles =
  'bg-primary/95 text-primary-foreground backdrop-blur ring rounded-md shadow-2xs p-1.5';
const NavMobile = () => {
  return (
    <AnimatedMenu>
      <AnimatedMenuButton className="text-primary-foreground h-10">
        <AnimatedMenuButtonToggleIcon />
        <AnimatedMenuButtonLabel />
      </AnimatedMenuButton>
      <AnimatedMenuList
        layout
        className={header_styles}
        variants={menu_variants}
      >
        <div className="pt-12 size-full flex flex-col justify-evenly ">
          <div className="*:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
            {nav_links.map((navLink, i) => (
              <AnimatedMenuItem
                key={navLink.id}
                className="perspective-dramatic perspective-origin-bottom"
                order={i}
              >
                <CloseAnimatedMenu>
                  <Link
                    className="block text-sm font-medium py-2 px-1"
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
              <AnimatedMenuItem key={navSocial.id} order={i + nav_links.length}>
                <CloseAnimatedMenu>
                  <Link
                    className="p-1 font-medium text-xs opacity-75 hover:opacity-100"
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
          <AnimatedMenuItem order={nav_links.length + nav_socials.length}>
            <Button variant={'secondary'} size={'sm'}>
              Contact us
            </Button>
          </AnimatedMenuItem>
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
};
const NavDesktop = () => {
  return (
    <nav className="flex justify-between  gap-2 items-center flex-1">
      <ul className="flex-1 flex justify-center  list-none *:transition-opacity *:duration-200 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
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
      </ul>

      <Button variant={'secondary'} size={'sm'}>
        Contact us
      </Button>
    </nav>
  );
};

export function HeaderDemo() {
  const isMobile = useIsMobile(980);

  return (
    <div className="h-[180vh]">
      <Header
        className={`
          sticky top-2 left-0 w-xs  mx-auto z-999  text-primary-foreground
          min-[980px]:w-10/12 min-[980px]:bg-primary/95 min-[980px]:backdrop-blur min-[980px]:ring min-[980px]:rounded-md min-[980px]:shadow-2xs min-[980px]:p-1.5
        `}
      >
        <HeaderLogo className="relative py-0.5 px-2 z-999">
          <span className="font-bold text-sm">systaliko ui</span>
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
