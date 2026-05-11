'use client';
import {
  CustomPricingProvider,
  CustomPricingCheckedControl,
  CustomPricingQuantityControl,
  CustomPricingTotalControl,
} from '@/registry/ecommerce/custom-pricing';
import { Label } from '@/registry/shadcn/label';
import { Slider } from '@/registry/shadcn/slider';
import { motion } from 'motion/react';
import { Switch } from '@/registry/shadcn/switch';
import { SlidingNumber } from '@/registry/text/sliding-number';

function SelectItem({
  id,
  label,
  price,
  checked,
  handleChange,
  groupId,
}: {
  id: string;
  label: string;
  price: string;
  checked: boolean;
  handleChange: () => void;
  groupId: string;
}) {
  return (
    <div className="relative group rounded-full transition-colors duration-200 has-[:checked]:text-white grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1">
      <input
        className="size-full [all:unset]"
        type="checkbox"
        name={id}
        value={id}
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="relative p-2 z-2 text-nowrap pointer-events-none flex gap-px flex-wrap justify-center items-center text-xs font-medium"
      >
        {label} <span className="text-[10px] tabular-nums">{price}</span>
      </label>
      {checked && (
        <motion.div
          layoutId={groupId}
          className="size-full rounded-full"
          style={{
            background: 'var(--primary)',
            backgroundImage: 'linear-gradient(180deg, #444 0%, #000 100%)',
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            mass: 1,
          }}
        />
      )}
    </div>
  );
}
function Selects() {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Website Type</h3>

      <div
        className="relative flex bg-input rounded-full ring ring-ring/40 p-0.5 w-fit border"
        id="custom-pricing-selects"
      >
        <CustomPricingCheckedControl
          id="landing page"
          defaultChecked={true}
          price={1500}
          group="website-type"
          render={({ id, checked, toggleChecked }) => (
            <div className="relative ">
              <SelectItem
                price={'$1.500'}
                id={id}
                checked={checked}
                handleChange={() => toggleChecked(id)}
                label="Landing page"
                groupId="custom-pricing-selects"
              />
            </div>
          )}
        />

        <CustomPricingCheckedControl
          id="business website"
          price={3000}
          group="website-type"
          render={({ id, checked, toggleChecked }) => (
            <div className="relative ">
              <SelectItem
                price={'$3.000'}
                id={id}
                checked={checked}
                handleChange={() => toggleChecked(id)}
                label="Business website"
                groupId="custom-pricing-selects"
              />
            </div>
          )}
        />

        <CustomPricingCheckedControl
          id="ecommerce store"
          price={5000}
          group="website-type"
          render={({ id, checked, toggleChecked }) => (
            <div className="relative ">
              <SelectItem
                price={'$5.000'}
                id={id}
                checked={checked}
                handleChange={() => toggleChecked(id)}
                label="Ecommerce store"
                groupId="custom-pricing-selects"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}
function Quantities() {
  return (
    <div className="space-y-4">
      <CustomPricingQuantityControl
        id="number of pages"
        unitPrice={100}
        defaultValue={0}
        render={({ id, subtotal, unitPrice, quantity, handleChange }) => (
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-between">
              <Label className="text-sm font-medium" htmlFor={id}>
                Number of pages{' '}
                <span className="text-[10px] text-muted-forground">
                  ${unitPrice}x{quantity}
                </span>
              </Label>

              <SlidingNumber
                value={subtotal}
                className="text-xs font-medium text-muted-foreground tracking-tight"
              />
            </div>
            <Slider
              id={id}
              min={0}
              max={10}
              step={1}
              value={[quantity]}
              onValueChange={handleChange}
            />
          </div>
        )}
      />

      <CustomPricingQuantityControl
        id="project urgency"
        unitPrice={50}
        defaultValue={0}
        render={({ id, subtotal, unitPrice, quantity, handleChange }) => (
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-between">
              <Label className="text-sm font-medium" htmlFor={id}>
                Project urgency
                <span className="text-[10px] text-muted-forground">
                  ${unitPrice}x{quantity}
                </span>
              </Label>

              <SlidingNumber
                value={subtotal}
                className="text-xs font-medium text-muted-foreground tracking-tight"
              />
            </div>
            <Slider
              id={id}
              min={0}
              max={10}
              step={1}
              value={[quantity]}
              onValueChange={handleChange}
            />
          </div>
        )}
      />

      <CustomPricingQuantityControl
        id="design customization"
        unitPrice={300}
        defaultValue={0}
        render={({ id, subtotal, unitPrice, quantity, handleChange }) => (
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-between">
              <Label className="text-sm font-medium" htmlFor={id}>
                Custom Design Level
                <span className="text-[10px] text-muted-forground">
                  ${unitPrice}x{quantity}
                </span>
              </Label>

              <SlidingNumber
                value={subtotal}
                className="text-xs font-medium text-muted-foreground tracking-tight"
              />
            </div>
            <Slider
              id={id}
              min={0}
              max={3}
              step={1}
              value={[quantity]}
              onValueChange={handleChange}
            />
          </div>
        )}
      />
    </div>
  );
}

function Options() {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-sm">Additional Features</h3>
      <div className="grid gap-2">
        <CustomPricingCheckedControl
          id="seo-optimization"
          price={200}
          type="checkbox"
          render={({ id, checked, toggleChecked }) => (
            <div className="flex items-center justify-between p-3 rounded-xl border bg-card/50 transition-colors hover:bg-card/80">
              <div className="space-y-0.5">
                <Label
                  htmlFor={id}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  SEO Optimization
                </Label>
                <p className="text-[10px] text-muted-foreground">
                  Boost your search engine rankings
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tabular-nums">$200</span>
                <Switch
                  checked={checked}
                  onCheckedChange={() => toggleChecked(id)}
                  id={id}
                />
              </div>
            </div>
          )}
        />

        <CustomPricingCheckedControl
          id="copywriting"
          price={150}
          type="checkbox"
          render={({ id, checked, toggleChecked }) => (
            <div className="flex items-center justify-between p-3 rounded-xl border bg-card/50 transition-colors hover:bg-card/80">
              <div className="space-y-0.5">
                <Label
                  htmlFor={id}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Copywriting
                </Label>
                <p className="text-[10px] text-muted-foreground">
                  Professional copywriting for your website
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tabular-nums">$150</span>
                <Switch
                  checked={checked}
                  onCheckedChange={() => toggleChecked(id)}
                  id={id}
                />
              </div>
            </div>
          )}
        />

        <CustomPricingCheckedControl
          id="third party"
          price={150}
          type="checkbox"
          render={({ id, checked, toggleChecked }) => (
            <div className="flex items-center justify-between p-3 rounded-xl border bg-card/50 transition-colors hover:bg-card/80">
              <div className="space-y-0.5">
                <Label
                  htmlFor={id}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Third party integration
                </Label>
                <p className="text-[10px] text-muted-foreground">
                  Connect with tools you already use
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tabular-nums">$150</span>
                <Switch
                  checked={checked}
                  onCheckedChange={() => toggleChecked(id)}
                  id={id}
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

function TotalDisplay() {
  return (
    <div className="pt-6 border-t border-dashed border-muted-foreground/30 mt-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h4 className="font-semibold text-base">Total Estimate</h4>
          <p className="text-xs text-muted-foreground">
            Dynamic pricing based on your selection
          </p>
        </div>
        <CustomPricingTotalControl
          render={({ total }) => (
            <div className="text-right">
              <SlidingNumber
                value={total}
                className="font-semibold tracking-tight text-primary"
              />
              <p className="text-xs text-muted-foreground  tracking-widest mt-0.5">
                Estimated USD
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export function CustomPricingDesignDemo() {
  return (
    <div className="min-h-screen p-6 place-content-center">
      <div className="space-y-8 p-6 rounded border bg-card shadow-xs mx-auto max-w-md">
        <CustomPricingProvider>
          <Selects />
          <Quantities />
          <Options />
          <TotalDisplay />
        </CustomPricingProvider>
      </div>
    </div>
  );
}
