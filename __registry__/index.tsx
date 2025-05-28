// This file is auto-generated. Do not edit directly.
import { type ComponentType } from "react";
import { TextStaggerInviewDemo } from "@/registry/text/text-stagger-inview/text-stagger-inview-demo";

interface RegistryItem {
  component: ComponentType;
  files: Array<{
    content: string;
    path: string;
  }>;
  demoProps?: Record<string, unknown>;
}

export const index: Record<string, RegistryItem> = {
  docs: {
    component: () => null,
    files: [
      {
        content:
          '"use client";\n\nimport React from "react";\nimport { cn } from "@/lib/utils";\n// You would typically import a highlighting library here, e.g., import { highlight } from \'shiki\';\n\ninterface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {\n  code: string; // Expect raw code string\n  language?: string; // Optional language for syntax highlighting\n}\n\nexport function CodeBlock({\n  code,\n  language = "text",\n  className,\n  ...props\n}: CodeBlockProps) {\n  // Placeholder for syntax highlighting logic\n  // In a real implementation, you would use a library like Shiki here\n  const highlightedCode = code; // For now, just use the raw code\n\n  // Add a check to ensure highlightedCode is a string\n  if (typeof highlightedCode !== "string") {\n    console.error("CodeBlock received non-string code:", highlightedCode);\n    return (\n      <pre>\n        <code>Error: Invalid code data received.</code>\n      </pre>\n    );\n  }\n\n  return (\n    <pre\n      className={cn(\n        // Adjusted styling for code editor look\n        "relative overflow-x-auto rounded-md bg-neutral-900 py-4 font-mono text-sm text-white",\n        className\n      )}\n      {...props}\n    >\n      <code\n        className={cn(\n          "grid px-6 leading-relaxed [&>span]:table-row",\n          `language-${language}`\n        )}\n      >\n        {/* Render highlighted code here */}\n        {/* This will be replaced with output from highlighting library */}\n        {highlightedCode.split("\\n").map((line, index) => (\n          <span key={index} className="table-row">\n            <span className="table-cell w-4 select-none text-neutral-500">\n              {index + 1}\n            </span>\n            {/* Line numbers */}\n            <span className="table-cell pl-4 text-white">{line}</span>\n            {/* Code line */}\n          </span>\n        ))}\n      </code>\n    </pre>\n  );\n}\n\n// The Pre helper is not strictly needed if CodeBlock handles rendering lines\n// but keeping it for now based on animate-ui structure reference.\nexport function Pre({ children }: { children: React.ReactNode }) {\n  return <>{children}</>;\n}\n',
        path: "components/docs/code-block.tsx",
      },
    ],
    demoProps: {},
  },
  icons: {
    component: () => null,
    files: [
      {
        content:
          'export default function ShadcnIcon(props: React.SVGProps<SVGSVGElement>) {\n  return (\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      fill="none"\n      stroke="currentColor"\n      aria-label="shadcn"\n      viewBox="0 0 256 256"\n      {...props}\n    >\n      <path\n        strokeLinecap="round"\n        strokeLinejoin="round"\n        strokeWidth="16"\n        d="m208 128-80 80M192 40 40 192"\n      ></path>\n    </svg>\n  );\n}\n',
        path: "components/icons/shadcn-icon.tsx",
      },
    ],
    demoProps: {},
  },
  "systaliko-ui": {
    component: () => null,
    files: [
      {
        content: `"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChevronsUpDown } from "lucide-react";
import { Styles } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Switch } from "../ui/switch";

type BaseBindNumber = { value: number; disableVariants?: Styles[] };
type BindNumberSlider = BaseBindNumber & {
  min: number;
  max: number;
  step: number;
};
type BindNumberOptions = BaseBindNumber & { options: Record<string, number> };
type BindNumber = BindNumberSlider | BindNumberOptions | BaseBindNumber;
type BindString = {
  value: string;
  options?: Record<string, string>;
  disableVariants?: Styles[];
};
type BindBoolean = { value: boolean; disableVariants?: Styles[] };
type Bind = BindNumber | BindString | BindBoolean;

type FlatBinds = Record<string, Bind>;
type NestedBinds = Record<string, FlatBinds>;
type Binds = FlatBinds | NestedBinds;

interface ControlledTweakpaneProps {
  binds: Binds;
  onBindsChange?: (binds: Binds) => void;
  currentStyle: Styles;
}

interface UncontrolledTweakpaneProps {
  initialBinds: Binds;
  onBindsChange?: (binds: Binds) => void;
  currentStyle: Styles;
}

type TweakpaneProps = ControlledTweakpaneProps | UncontrolledTweakpaneProps;

interface NumericInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onValueChange,
  className,
  min,
  max,
  step,
  ...props
}) => {
  const [display, setDisplay] = React.useState<string>(value.toString());

  React.useEffect(() => setDisplay(value.toString()), [value]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setDisplay(v);
      if (v !== "") {
        let n = Number(v);
        if (!isNaN(n)) {
          if (min !== undefined && n < min) n = min;
          if (max !== undefined && n > max) n = max;
          if (step !== undefined) n = Math.round(n / step) * step;
          onValueChange(n);
        }
      }
    },
    [min, max, step, onValueChange]
  );

  const handleBlur = React.useCallback(
    () => setDisplay(value.toString()),
    [value]
  );

  return (
    <Input
      {...props}
      className={cn(
        '[&[type="number"]::-webkit-inner-spin-button]:appearance-none [&[type="number"]::-webkit-outer-spin-button]:appearance-none text-sm',
        className
      )}
      min={min}
      max={max}
      step={step}
      autoComplete="off"
      type="number"
      inputMode="numeric"
      value={display}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

const isNestedBinds = (binds: Binds): binds is NestedBinds =>
  Object.values(binds).every(
    (v) =>
      typeof v === "object" &&
      v !== null &&
      !("value" in v) &&
      Object.values(v).every(
        (inner) =>
          typeof inner === "object" && inner !== null && "value" in inner
      )
  );

const renderNumber = (
  key: string,
  bind: BindNumber,
  onChange: (value: number) => void,
  currentStyle: Styles
) => {
  const disabled = bind.disableVariants?.includes(currentStyle);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {"min" in bind && "max" in bind ? (
            <div key={key} className="flex flex-row gap-2.5">
              <div className="w-[80px] flex items-center shrink-0 min-w-0">
                <Label
                  className="truncate text-current/80 block leading-[1.2]"
                  htmlFor={key}
                >
                  {key}
                </Label>
              </div>

              <Slider
                min={bind.min}
                max={bind.max}
                step={bind.step}
                value={[bind.value]}
                onValueChange={(v) => onChange(v[0])}
                disabled={disabled}
              />

              <NumericInput
                id={key}
                value={bind.value}
                min={bind.min}
                max={bind.max}
                step={bind.step}
                onValueChange={onChange}
                className="w-[50px] h-8 rounded-md px-2 shrink-0"
                disabled={disabled}
              />
            </div>
          ) : "options" in bind ? (
            <div key={key} className="flex flex-row gap-2.5">
              <div className="w-[80px] truncate flex items-center shrink-0 min-w-0">
                <Label
                  className="truncate text-current/80 block leading-[1.2]"
                  htmlFor={key}
                >
                  {key}
                </Label>
              </div>

              <Select
                value={bind.value.toString()}
                onValueChange={(v) => onChange(Number(v))}
                disabled={disabled}
              >
                <SelectTrigger
                  id={key}
                  className="flex-1 !h-8 rounded-md px-2 shrink-0"
                >
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>

                <SelectContent>
                  {Object.entries(bind.options).map(([key, value]) => (
                    <SelectItem
                      className="!h-8"
                      key={key}
                      value={value.toString()}
                    >
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div key={key} className="flex flex-row gap-2.5">
              <div className="w-[80px] truncate flex items-center shrink-0 min-w-0">
                <Label
                  className="truncate text-current/80 block leading-[1.2]"
                  htmlFor={key}
                >
                  {key}
                </Label>
              </div>

              <NumericInput
                id={key}
                value={bind.value}
                onValueChange={onChange}
                className="w-full h-8 rounded-md px-2"
                disabled={disabled}
              />
            </div>
          )}
        </TooltipTrigger>

        {disabled && (
          <TooltipContent sideOffset={0}>
            <p>This functionnality is not available in this style.</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const renderString = (
  key: string,
  bind: BindString,
  onChange: (value: string) => void,
  currentStyle: Styles
) => {
  const disabled = bind.disableVariants?.includes(currentStyle);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {bind?.options ? (
            <div key={key} className="flex flex-row gap-2.5">
              <div className="w-[80px] truncate flex items-center shrink-0 min-w-0">
                <Label
                  className="truncate text-current/80 block leading-[1.2]"
                  htmlFor={key}
                >
                  {key}
                </Label>
              </div>

              <Select
                value={bind.value}
                onValueChange={onChange}
                disabled={disabled}
              >
                <SelectTrigger
                  id={key}
                  className="flex-1 !h-8 rounded-md px-2 shrink-0"
                >
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>

                <SelectContent>
                  {Object.entries(bind.options).map(([key, value]) => (
                    <SelectItem className="!h-8" key={key} value={value}>
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div key={key} className="flex flex-row gap-2.5">
              <div className="w-[80px] truncate flex items-center shrink-0 min-w-0">
                <Label
                  className="truncate text-current/80 block leading-[1.2]"
                  htmlFor={key}
                >
                  {key}
                </Label>
              </div>

              <Input
                id={key}
                value={bind.value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-8 rounded-md px-2"
                disabled={bind.disableVariants?.includes(currentStyle)}
              />
            </div>
          )}
        </TooltipTrigger>

        {disabled && (
          <TooltipContent sideOffset={0}>
            <p>This functionnality is not available in this style.</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const renderBoolean = (
  key: string,
  bind: BindBoolean,
  onChange: (value: boolean) => void,
  currentStyle: Styles
) => {
  const disabled = bind.disableVariants?.includes(currentStyle);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div key={key} className="flex flex-row gap-2.5 justify-between">
            <div className="w-[80px] flex items-center shrink-0 min-w-0">
              <Label
                htmlFor={key}
                className="truncate text-current/80 block leading-[1.2]"
              >
                {key}
              </Label>
            </div>

            <Switch
              id={key}
              checked={bind.value}
              onCheckedChange={onChange}
              disabled={disabled}
            />
          </div>
        </TooltipTrigger>

        {disabled && (
          <TooltipContent sideOffset={0}>
            <p>This functionnality is not available in this style.</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const renderBind = (
  key: string,
  bind: Bind,
  onChange: (value: unknown) => void,
  currentStyle: Styles
) => {
  if ("value" in bind) {
    if (typeof bind.value === "number") {
      return renderNumber(key, bind as BindNumber, onChange, currentStyle);
    }
    if (typeof bind.value === "string") {
      return renderString(key, bind as BindString, onChange, currentStyle);
    }
    if (typeof bind.value === "boolean") {
      return renderBoolean(key, bind as BindBoolean, onChange, currentStyle);
    }
  }
  return null;
};

const renderFlatBinds = (
  binds: FlatBinds,
  onBindsChange: (binds: FlatBinds) => void,
  currentStyle: Styles
): React.ReactNode => (
  <div className="bg-background rounded-[7px] flex flex-col gap-2 pr-1.5 pl-2 py-[7px]">
    {Object.entries(binds).map(([key, bind]) => (
      <React.Fragment key={key}>
        {renderBind(
          key,
          bind,
          (value) =>
            onBindsChange({ ...binds, [key]: { ...bind, value } } as FlatBinds),
          currentStyle
        )}
      </React.Fragment>
    ))}
  </div>
);

const renderNestedBinds = (
  binds: NestedBinds,
  onBindsChange: (binds: NestedBinds) => void,
  initial: boolean,
  currentStyle: Styles
): React.ReactNode[] =>
  Object.entries(binds).map(([groupKey, groupBind]) => (
    <Collapsible
      key={groupKey}
      defaultOpen
      className="flex flex-col not-first:pt-1 first:-mt-0.5"
    >
      <CollapsibleTrigger className="cursor-pointer w-full truncate flex items-center justify-between rounded-md p-1.5">
        <Label className="truncate text-current/80 block leading-[1.2]">
          {groupKey}
        </Label>
        <ChevronsUpDown className="size-3.5 text-muted-foreground" />
      </CollapsibleTrigger>

      <CollapsibleContent {...(!initial ? { initial: false } : {})}>
        <div className="mt-1">
          {renderFlatBinds(
            groupBind,
            (updatedGroupBind) =>
              onBindsChange({ ...binds, [groupKey]: updatedGroupBind }),
            currentStyle
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  ));

const renderBinds = (
  binds: Binds,
  onBindsChange: (binds: Binds) => void,
  inital: boolean,
  currentStyle: Styles
) =>
  isNestedBinds(binds)
    ? renderNestedBinds(
        binds,
        onBindsChange as (b: NestedBinds) => void,
        inital,
        currentStyle
      )
    : renderFlatBinds(
        binds,
        onBindsChange as (b: FlatBinds) => void,
        currentStyle
      );

const Tweakpane = ({
  onBindsChange,
  currentStyle,
  ...props
}: TweakpaneProps) => {
  const [localBinds, setLocalBinds] = React.useState<Binds>(
    "binds" in props ? props.binds : props.initialBinds
  );
  const [initial, setInitial] = React.useState(false);

  const handleBindsChange = React.useCallback(
    (binds: Binds) => {
      setLocalBinds(binds);
      onBindsChange?.(binds);
    },
    [onBindsChange]
  );

  React.useEffect(() => {
    if ("binds" in props) setLocalBinds(props.binds);
    setTimeout(() => setInitial(true), 500);
  }, [props]);

  return (
    <div className="overflow-y-auto bg-muted md:rounded-r-[13px] rounded-b-[13px] md:rounded-bl-none md:border-l border-t border-border/75 dark:border-border/10 md:border-t-0 p-1.5 size-full flex flex-col">
      {renderBinds(localBinds, handleBindsChange, initial, currentStyle)}
    </div>
  );
};

export { Tweakpane, type TweakpaneProps, type Binds };`,
        path: "components/systaliko-ui/tweakpane.tsx",
      },
    ],
    demoProps: {},
  },
  ui: {
    component: () => null,
    files: [
      {
        content: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,
        path: "components/ui/button.tsx",
      },
    ],
    demoProps: {},
  },
  "default-text-stagger-inview-demo": {
    component: TextStaggerInviewDemo,
    files: [
      {
        content: `import * as React from "react";
import { TextStaggerInview } from "./index";

export function TextStaggerInviewDemo() {
  return <TextStaggerInview>Orchestrated text animation</TextStaggerInview>;
}`,
        path: "registry/text/text-stagger-inview/text-stagger-inview-demo.tsx",
      },
    ],
    demoProps: {},
  },
};
