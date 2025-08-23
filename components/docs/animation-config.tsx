import { Input } from '@/registry/shadcn/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/shadcn/select';
import { AnimationT } from '@/registry/utils/use-animation-variants';
import { createContext, useContext, useState } from 'react';
import { StaggerDirection } from '@/registry/utils/set-stagger-direction';

const animations: { value: AnimationT; label: string }[] = [
  { value: 'left', label: 'Slide from Left' },
  { value: 'right', label: 'Slide from Right' },
  { value: 'top', label: 'Slide from Top' },
  { value: 'bottom', label: 'Slide from Bottom' },
  { value: 'z', label: 'Scale' },
  { value: 'blur', label: 'Blur' },
];

const staggerDirections: { value: StaggerDirection; label: string }[] = [
  { value: 'start', label: 'Start' },
  { value: 'middle', label: 'Middle' },
  { value: 'end', label: 'End' },
];

type AnimationConfigContextType = {
  animation: AnimationT | undefined;
  staggerValue: number;
  staggerDirection: StaggerDirection;
  setAnimation: (value: AnimationT) => void;
  setStaggerValue: (value: number) => void;
  setStaggerDirection: (value: StaggerDirection) => void;
};

const AnimationConfigContext = createContext<
  AnimationConfigContextType | undefined
>(undefined);

export function AnimationConfig({ children }: { children: React.ReactNode }) {
  const [animation, setAnimation] = useState<AnimationT>();
  const [staggerValue, setStaggerValue] = useState<number>(0.02);
  const [staggerDirection, setStaggerDirection] =
    useState<StaggerDirection>('start');
  return (
    <AnimationConfigContext.Provider
      value={{
        animation,
        staggerValue,
        setAnimation,
        setStaggerValue,
        staggerDirection,
        setStaggerDirection,
      }}
    >
      {children}
    </AnimationConfigContext.Provider>
  );
}

export function useSetAnimationConfig() {
  const context = useContext(AnimationConfigContext);
  if (!context) {
    throw new Error(
      'useSetAnimationConfig must be used within an AnimationConfigProvider',
    );
  }
  return context;
}

export function AnimationSelector() {
  const { setAnimation } = useSetAnimationConfig();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm" htmlFor="animation-select">
        Select Animation
      </label>
      <Select onValueChange={(value) => setAnimation(value as AnimationT)}>
        <SelectTrigger id="animation-select" className="w-[180px]">
          <SelectValue placeholder={'Opacity'} />
        </SelectTrigger>
        <SelectContent className="relative z-40">
          {animations.map((animation) => (
            <SelectItem
              key={animation.value ?? animation.label}
              value={animation.value ?? ''}
            >
              {animation.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function StaggerInput() {
  const { staggerValue, setStaggerValue } = useSetAnimationConfig();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm" htmlFor="stagger-input">
        Set Stagger Value
      </label>
      <Input
        id="stagger-input"
        className="max-w-fit"
        type="number"
        step={0.01}
        min={0}
        value={staggerValue}
        onChange={(e) => setStaggerValue(Number(e.target.value))}
      />
    </div>
  );
}

export function StaggerSelector() {
  const { setStaggerDirection } = useSetAnimationConfig();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm" htmlFor="animation-select">
        Select Stagger Direction
      </label>
      <Select
        onValueChange={(value) =>
          setStaggerDirection(value as StaggerDirection)
        }
      >
        <SelectTrigger id="stagger-select" className="w-[180px]">
          <SelectValue placeholder="Stagger Direction" />
        </SelectTrigger>
        <SelectContent className="relative z-40">
          {staggerDirections.map((staggerDirection) => (
            <SelectItem
              key={staggerDirection.value ?? staggerDirection.label}
              value={staggerDirection.value ?? ''}
            >
              {staggerDirection.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
