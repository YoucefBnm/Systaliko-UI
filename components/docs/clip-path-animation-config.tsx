import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/shadcn/select';

import { createContext, useContext, useState } from 'react';
import { StaggerDirection } from '@/registry/utils/set-stagger-direction';
import { ClipPathAnimationT } from '@/registry/utils/clip-path-animation-variants';

const animations: { value: ClipPathAnimationT; label: string }[] = [
  { value: 'curtain-down', label: 'Curtain Down' },
  { value: 'curtain-up', label: 'Curtain Up' },
  { value: 'curtain-center-vertical', label: 'Curtain Center Vertical' },
  { value: 'curtain-center-horizontal', label: 'Curtain Center Horizontal' },
];

type ClipPathAnimationConfigContextType = {
  animation: ClipPathAnimationT | 'curtain-up';
  staggerValue: number;
  staggerDirection: StaggerDirection;
  setAnimation: (value: ClipPathAnimationT) => void;
  setStaggerValue: (value: number) => void;
  setStaggerDirection: (value: StaggerDirection) => void;
};

const ClipPathAnimationConfigContext = createContext<
  ClipPathAnimationConfigContextType | undefined
>(undefined);

export function ClipPathAnimationConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animation, setAnimation] =
    useState<ClipPathAnimationT>('curtain-down');
  const [staggerValue, setStaggerValue] = useState<number>(0.02);
  const [staggerDirection, setStaggerDirection] =
    useState<StaggerDirection>('first');
  return (
    <ClipPathAnimationConfigContext.Provider
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
    </ClipPathAnimationConfigContext.Provider>
  );
}

export function useSetClipPathAnimationConfig() {
  const context = useContext(ClipPathAnimationConfigContext);
  if (!context) {
    throw new Error(
      'useSetAnimationConfig must be used within an AnimationConfigProvider',
    );
  }
  return context;
}

export function ClipPathAnimationSelector() {
  const { setAnimation } = useSetClipPathAnimationConfig();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm" htmlFor="animation-select">
        Select Animation
      </label>
      <Select
        onValueChange={(value) => setAnimation(value as ClipPathAnimationT)}
      >
        <SelectTrigger id="animation-select" className="w-[180px]">
          <SelectValue placeholder={'Curtain Down'} />
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
