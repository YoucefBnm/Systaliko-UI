'use client';
import {
  Pricing,
  PricingCard,
  PricingExclude,
  PricingFeature,
  PricingPackage,
  PricingValue,
} from '@/registry/ecommerce/pricing';
import { Button } from '@/registry/shadcn/button';
import { ArrowUpRightIcon, SquareIcon, UserIcon } from 'lucide-react';

const plan = {
  id: 'plan-basic',
  name: 'Basic',
  icon: SquareIcon,
  pricing: { monthly: 19, yearly: 199 },
  features: [
    'Unlimited projects and tasks',
    'Team workspaces with roles & permissions',
    'Real-time collaboration & comments',
    'Kanban, calendar & timeline views',
    'File sharing + integrations (Google Drive, Slack...)',
    'Priority email & chat support',
  ],
  excludes: [
    'Workflow automations (triggers & actions)',
    'Advanced reporting dashboards',
    'Custom fields & templates',
  ],
};
export function Pricing2Demo() {
  return (
    <Pricing>
      <PricingCard className="w-full max-w-md border-muted mx-auto rounded-xl bg-primary text-primary-foreground">
        <PricingPackage className="justify-between">
          <h3 className="text-xl font-medium">Basic</h3>
          <UserIcon className="size-8" />
        </PricingPackage>
        <div className="space-y-2">
          <PricingValue yearlyValue={200} monthlyValue={19} />
          <p className="text-sm text-muted-foreground">
            Best for freelancers, students, and people organizing their personal
            workflow.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          {plan.features.map((feature) => (
            <PricingFeature
              className="text-sm text-muted-foreground"
              key={feature}
            >
              {feature}
            </PricingFeature>
          ))}
          {plan.excludes.map((exclude) => (
            <PricingExclude
              className="text-sm text-muted-foreground/60"
              key={exclude}
            >
              {exclude}
            </PricingExclude>
          ))}
        </div>

        <Button className="w-full" variant={'secondary'}>
          Get Started
          <ArrowUpRightIcon className="size-4" />
        </Button>
      </PricingCard>
    </Pricing>
  );
}
