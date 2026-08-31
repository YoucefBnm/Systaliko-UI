'use client';
import {
  calculateYearlySavings,
  Pricing,
  PricingCard,
  PricingFeature,
  PricingIncludesPrevious,
  PricingIntervalSwitch,
  PricingPackage,
  PricingValue,
} from '@/registry/ecommerce/pricing';
import { Badge } from '@/registry/shadcn/badge';
import { Button } from '@/registry/shadcn/button';
import { Label } from '@/registry/shadcn/field';
import { ArrowUpRightIcon } from 'lucide-react';

interface PlanConfig {
  id: string;
  name: string;
  description: string;
  pricing: { monthly: number; yearly: number };
  features: string[];
  includesPrevious?: boolean;
  featured?: boolean;
}
const feature_style = `
  text-sm
  [&_[data-slot='icon-wrapper']]:rounded-full [&_[data-slot='icon-wrapper']]:bg-muted/20 
  [&_[data-slot='icon-wrapper']]:border [&_[data-slot='icon-wrapper']]:border-border/50 
  [&_[data-slot='icon-wrapper']]:aspect-square  [&_[data-slot='icon-wrapper']]:[&>svg]:w-2.5
`;
const plans: PlanConfig[] = [
  {
    id: 'plan-free',
    name: 'Free',
    description: 'Perfect for personal use.',
    pricing: { monthly: 0, yearly: 0 },
    features: [
      '30 monthly tasks',
      'Up to 3 active projects',
      'Solo workspace',
      'Basic reminders and due dates',
      'Mobile + desktop app',
      'Community support',
    ],
  },
  {
    id: 'plan-team',
    name: 'Team',
    description: 'Perfect for small teams.',
    pricing: { monthly: 12, yearly: 100 },
    features: [
      'Unlimited projects and tasks',
      'Team workspaces with roles & permissions',
      'Real-time collaboration & comments',
      'Kanban, calendar & timeline views',
      'File sharing + integrations (Google Drive, Slack...)',
      'Priority email & chat support',
    ],
    includesPrevious: true,
    featured: true,
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    description: 'Perfect for large organizations.',
    pricing: { monthly: 24, yearly: 200 },
    features: [
      'Workflow automations (triggers & actions)',
      'Advanced reporting dashboards',
      'Custom fields & templates',
      'Time tracking & workload view',
      'External client access',
      'SSO + enhanced security',
    ],
    includesPrevious: true,
  },
];
export function PricingDemo() {
  const savings = calculateYearlySavings(plans[1].pricing);

  return (
    <Pricing className="p-8 w-full max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-center gap-2">
        <PricingIntervalSwitch />
        <Label className="text-muted-foreground">Billed annually</Label>
        <Badge
          className="rounded-full shadow-2xs ring-2 ring-ring/10 py-1 bg-emerald-200 text-emerald-950"
          variant={'outline'}
        >
          💰 Save up to {savings}% with annual billing
        </Badge>
      </div>
      <div className="flex gap-4 items-end justify-center flex-wrap">
        {plans.map((plan) => (
          <PricingCard
            className={`
              shadow-2xs ring-2 ring-ring/10 rounded-xl p-0 space-y-0 
              ${plan.featured ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'}
            `}
            key={plan.id}
          >
            <div className="shadow-2xs flex p-8 flex-col gap-8">
              <PricingPackage className="flex-col gap-2 justify-start items-start">
                <Badge variant={'secondary'}>{plan.name}</Badge>
                <p className="text-muted-foreground">{plan.description}</p>
              </PricingPackage>

              <PricingValue
                yearlyValue={plan.pricing.yearly}
                monthlyValue={plan.pricing.monthly}
                className="font-semibold"
              />
              <Button className="w-full" variant={'secondary'} size="lg">
                Get Started
                <ArrowUpRightIcon className="size-4" />
              </Button>
            </div>

            <div className="p-8 flex flex-col gap-1.5">
              {plan.includesPrevious && (
                <PricingIncludesPrevious className={feature_style}>
                  Everything in previous plan
                </PricingIncludesPrevious>
              )}
              {plan.features.map((feature) => (
                <PricingFeature className={feature_style} key={feature}>
                  {feature}
                </PricingFeature>
              ))}
            </div>
          </PricingCard>
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground">
        <p>All plans include a 30-day money-back guarantee. No hidden fees.</p>
      </div>
    </Pricing>
  );
}
