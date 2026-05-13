import { SPRING_CONFIG } from '@/lib/spring-transition';
import { cn } from '@/lib/utils';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import Link from 'next/link';

export function LinkText({
  children,
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn('p-1 overflow-hidden', className)}
      href={href}
      {...props}
    >
      <TextStaggerHover className="inline">
        <TextStaggerHoverActive
          transition={SPRING_CONFIG}
          className="opacity-80"
          animation="blur"
          staggerDirection="last"
        >
          {children}
        </TextStaggerHoverActive>
        <TextStaggerHoverHidden animation="blur" transition={SPRING_CONFIG}>
          {children}
        </TextStaggerHoverHidden>
      </TextStaggerHover>
    </Link>
  );
}
