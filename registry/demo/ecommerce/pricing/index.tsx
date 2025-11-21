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
import {
  ArrowUpRightIcon,
  Building2Icon,
  Tally3Icon,
  UserRoundIcon,
  UsersRoundIcon,
} from 'lucide-react';

interface PlanConfig {
  id: string;
  name: string;
  icon: typeof Tally3Icon;
  pricing: { monthly: number; yearly: number };
  features: string[];
  includesPrevious?: boolean;
  featured?: boolean;
}

const plans: PlanConfig[] = [
  {
    id: 'plan-free',
    name: 'Free',
    icon: UserRoundIcon,
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
    icon: UsersRoundIcon,
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
    icon: Building2Icon,
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
    <div>
      <Pricing className="space-y-4">
        <div className="mt-6 flex items-center justify-center gap-2">
          <PricingIntervalSwitch />
          <Label className="text-muted-foreground">Billed annually</Label>
          <Badge
            className="border-emerald-600 rounded-full text-emerald-600"
            variant={'outline'}
          >
            💰 Save up to {savings}% with annual billing
          </Badge>
        </div>
        <div className="flex flex-wrap gap-y-4 -space-x-0.5 justify-center items-end">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <PricingCard
                variant={plan.featured ? 'featured' : 'default'}
                className="md:flex-1 max-w-md min-w-2xs gap-6 rounded"
                key={plan.id}
              >
                <PricingPackage className="justify-between">
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  <Icon className="size-6 text-primary" />
                </PricingPackage>

                <PricingValue
                  yearlyValue={plan.pricing.yearly}
                  monthlyValue={plan.pricing.monthly}
                />

                <div className="flex flex-col items-start gap-2">
                  {plan.includesPrevious && (
                    <PricingIncludesPrevious className="text-sm text-muted-foreground">
                      Everything in previous plan
                    </PricingIncludesPrevious>
                  )}
                  {plan.features.map((feature) => (
                    <PricingFeature
                      className="text-sm text-muted-foreground"
                      key={feature}
                    >
                      {feature}
                    </PricingFeature>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  Get Started
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </PricingCard>
            );
          })}
        </div>
        <div className=" text-center text-sm text-muted-foreground">
          <p>
            All plans include a 30-day money-back guarantee. No hidden fees.
          </p>
        </div>
      </Pricing>
    </div>
  );
}
