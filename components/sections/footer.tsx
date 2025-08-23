import { siteConfig } from '@/config/site';
import { Button } from '@/registry/shadcn/button';
import Link from 'next/link';
import GithubIcon from '../icons/github-icon';
import XIcon from '../icons/x-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import TwentyFirstIcon from '../icons/21st-icon';

export function Footer() {
  return (
    <footer className="relative border-t mt-6 border-border py-6 md:py-0">
      <div className="container flex justify-between h-16 items-center gap-4 flex-wrap">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Created by{' '}
          <a
            href={siteConfig.links.x}
            title="Twitter"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            @YoucefBnm
          </a>
          .
        </p>
        <div className="flex gap-1">
          <Button variant={'ghost'} size={'icon'}>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </Link>
          </Button>

          <Button variant={'ghost'} size={'icon'}>
            <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
              <XIcon />
            </Link>
          </Button>

          <Button variant={'ghost'} size={'icon'}>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </Link>
          </Button>

          <Button variant={'ghost'} size={'icon'}>
            <Link
              href={siteConfig.links.twentyFirst}
              target="_blank"
              rel="noreferrer"
            >
              <TwentyFirstIcon />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
