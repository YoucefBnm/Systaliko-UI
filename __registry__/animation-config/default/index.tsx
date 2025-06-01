import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimationT } from '@/__registry__/utils/use-animation-variants/default';
import { createContext, useContext, useState } from 'react';

const animations: { value: AnimationT; label: string }[] = [
  { value: 'left', label: 'Slide from Left' },
  { value: 'right', label: 'Slide from Right' },
  { value: 'top', label: 'Slide from Top' },
  { value: 'bottom', label: 'Slide from Bottom' },
  { value: 'z', label: 'Scale' },
  { value: 'blur', label: 'Blur' },
];

type AnimationConfigContextType = {
  animation: AnimationT | undefined;
  staggerValue: number;
  setAnimation: (value: AnimationT) => void;
  setStaggerValue: (value: number) => void;
};

const AnimationConfigContext = createContext<
  AnimationConfigContextType | undefined
>(undefined);

export function AnimationConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animation, setAnimation] = useState<AnimationT>();
  const [staggerValue, setStaggerValue] = useState<number>(0.02);

  return (
    <AnimationConfigContext.Provider
      value={{
        animation,
        staggerValue,
        setAnimation,
        setStaggerValue,
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
          <SelectValue placeholder="Choose your animation" />
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

export function AnimationConfig() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <AnimationSelector />
      <StaggerInput />
    </div>
  );
}
