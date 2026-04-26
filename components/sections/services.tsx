import { TextWavy } from '@/registry/text/text-wavy';
import {
  ComponentIcon,
  GlobeIcon,
  ShoppingCartIcon,
  ZapIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { LinkText } from '../link-text';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

interface ServiceT {
  label: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const SERVICES: ServiceT[] = [
  {
    label: 'Custom Website Development',
    description:
      'React, Next.js, or Vite — whichever fits your project. Responsive, accessible, and performance-optimized from day one.',
    icon: GlobeIcon,
  },
  {
    label: 'Custom Blocks & Components',
    description:
      'Shadcn-compatible, TypeScript, CVA-driven, documented. Built to the same standard as this library.',
    icon: ComponentIcon,
  },
  {
    label: 'E-commerce Features & Integrations',
    description:
      'Stripe, checkout flows, product UI, inventory components. Custom logic, not off-the-shelf plugins.',
    icon: ShoppingCartIcon,
  },
  {
    label: 'Performance & Accessibility Audits',
    description:
      'Lighthouse, WCAG, Core Web Vitals. Fix list + implementation. Past results: +70% Lighthouse improvement.',
    icon: ZapIcon,
  },
];

function ServiceCard({
  service,
  className,
}: {
  service: ServiceT;
  className?: string;
}) {
  const formattedSubject = encodeURIComponent(service.label);

  return (
    <div className={cn('p-4 space-y-4 place-content-center', className)}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium text-balance">{service.label}</h3>
        <service.icon className="text-muted/50" />
      </div>

      <p className="text-muted/80 text-sm text-balance">
        {service.description}
      </p>

      <Button className="text-xs" size={'sm'} variant={'link'}>
        <LinkText
          href={`mailto:${siteConfig.links.email}?subject=${formattedSubject}`}
          target="_top"
          aria-label={'Send email for ' + service.label}
          className="text-primary-foreground"
        >
          Get Started
        </LinkText>
      </Button>
    </div>
  );
}

function ServiceCta() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl w-fit border border-black bg-muted p-1 shadow-sm">
        <div className="overflow-hidden rounded-lg">
          <Image
            sizes="(max-width: 768px) 100vw, 33vw"
            src="/systaliko-services.png"
            alt="services"
            width={720}
            height={540}
          />
        </div>
      </div>

      <div className="space-y-4">
        <TextWavy
          className="inline-block uppercase tracking-wide"
          text="Custom Frontend Development — Available for Hire"
          colors={[
            'var(--primary-foreground)',
            'var(--muted-foreground)',
            'var(--primary-foreground)',
          ]}
        />
        <h2 className="font-medium text-balance">
          Systaliko UI is built by a working frontend developer. If you need
          something that's not in the library, I build it.
        </h2>
        <p className="text-muted-foreground text-sm text-balance">
          Available for freelance projects, component contracts, and consulting.
          Remote · Worldwide.
        </p>

        <div className="flex gap-2">
          <Button variant="secondary" className="text-primary" size="sm">
            <LinkText
              href={`mailto:${siteConfig.links.email}?subject=development20%service`}
              target="_top"
              aria-label={'Send email to' + siteConfig.links.email}
            >
              Get in Touch
            </LinkText>
          </Button>
          {/* <Button size="sm">
            <LinkText aria-label="View services" href="/services">
              View Services
            </LinkText>
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      className="bg-primary text-primary-foreground mt-10 py-12 px-8"
      id="services"
      aria-label="Freelance Services"
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-8 lg:grid-rows-4 bg-border/20 dark:bg-secondary/20 gap-px p-px">
        {SERVICES.map((service, index) => (
          <ServiceCard
            className={clsx(
              'relative col-span-2 row-span-2 bg-primary',
              'before:absolute before:-left-2 before:-top-2 before:size-4 before:bg-primary',
              'after:absolute after:-right-2 after:-top-2 after:size-4 after:bg-primary',
            )}
            key={index}
            service={service}
          />
        ))}
        <div className="space-y-4 row-start-1 col-start-3 col-span-4 row-span-4 p-4 place-content-center bg-primary">
          <ServiceCta />
        </div>
      </div>
    </section>
  );
}
