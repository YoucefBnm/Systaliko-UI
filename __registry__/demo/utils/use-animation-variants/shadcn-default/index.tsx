'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AnimationT,
  useAnimationVariants,
} from '@/__registry__/utils/use-animation-variants/shadcn-default';
import { motion } from 'motion/react';
import { useState } from 'react';

const animations: { value: AnimationT; label: string }[] = [
  { value: 'left', label: 'Slide from Left' },
  { value: 'right', label: 'Slide from Right' },
  { value: 'top', label: 'Slide from Top' },
  { value: 'bottom', label: 'Slide from Bottom' },
  { value: 'z', label: 'Scale' },
  { value: 'blur', label: 'Blur' },
  // { value: "", label: 'Opacity' },
];

export const TextVerticalDemo = () => {
  const [animation, setAnimation] = useState<AnimationT>();
  const animationVariants = useAnimationVariants(animation);

  return (
    <div className="flex h-80 flex-col justify-between gap-8">
      <Select onValueChange={(value) => setAnimation(value as AnimationT)}>
        <SelectTrigger className="w-[180px]">
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

      <motion.h2
        key={animation}
        variants={animationVariants}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-4xl tracking-tight font-bold"
      >
        Choose your animation, simple as that !!
      </motion.h2>
    </div>
  );
};
