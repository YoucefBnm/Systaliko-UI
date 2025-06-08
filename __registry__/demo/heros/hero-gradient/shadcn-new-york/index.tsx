import { Button } from '@/components/ui/button';
import {
  HeroDescription,
  HeroGradient,
  HeroGradientCta,
  HeroGradientText,
  HeroHeading,
  HeroTextBadge,
} from '@/__registry__/heros/hero-gradient/shadcn-new-york';
import { PhoneCallIcon } from 'lucide-react';

export function HeroGradientDemo() {
  return (
    <HeroGradient
      gradientColors={[
        {
          color: 'var(--color-primary)',
          start: '-100%',
        },
        {
          color: 'var(--background)',
          start: '100%',
        },
      ]}
      gradientPosition={{ x: '50%', y: '0%' }}
      className="min-h-screen w-full place-content-center place-items-center text-center"
    >
      <HeroGradientText className="flex flex-col items-center space-y-5">
        <HeroTextBadge className="text-primary" animation="blur">
          <span className="inline-block text-xs">
            Get started with us &rarr;
          </span>
        </HeroTextBadge>

        <HeroHeading
          className="text-4xl font-semibold max-w-[22ch]"
          animation="blur"
        >
          Get into the future of web development
        </HeroHeading>
        <HeroDescription
          animation="blur"
          className="max-w-[50ch] text-muted-foreground mx-auto"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nisi
          sunt necessitatibus, quas, facere iste molestiae alias vel optio
          delectus architecto enim tenetur mollitia? Soluta.
        </HeroDescription>

        <HeroGradientCta animation="blur">
          <Button
            variant={'outline'}
            className="relative flex w-fit items-center rounded-full border border-primary text-primary px-4 py-2 shadow-[0px_4px_24px_var(--primary)] transition-colors hover:bg-primary"
          >
            Book a free call <PhoneCallIcon />
          </Button>
        </HeroGradientCta>
      </HeroGradientText>
    </HeroGradient>
  );
}
