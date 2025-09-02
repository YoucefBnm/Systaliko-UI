'use client';
import { cn } from '@/lib/utils';
import { motion, MotionValue, useTransform, useScroll } from 'motion/react';
import * as React from 'react';

interface TextScrollReadProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: string;
  className?: string;
  opacityRange?: [number, number];
  offset?:
    | ['start end', 'end start']
    | ['start center', 'end center']
    | ['center start', 'center end'];
}

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  opacityRange?: [number, number];
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  opacityRange?: [number, number];
}

const Character = React.memo(function Character({
  children,
  progress,
  range,
  opacityRange = [0.2, 1],
}: CharacterProps) {
  const opacity = useTransform(progress, range, opacityRange);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
});

Character.displayName = 'Character';

const Word = React.memo(function Word({
  children,
  range,
  progress,
  opacityRange,
}: WordProps) {
  const characters = children.split('');
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="inline-block mr-2">
      {characters.map((char, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);

        return (
          <Character
            key={`${char}-${index}`}
            range={[start, end]}
            progress={progress}
            opacityRange={opacityRange}
          >
            {char}
          </Character>
        );
      })}
      &nbsp;
    </span>
  );
});

Word.displayName = 'Word';

export const TextScrollRead = React.forwardRef<
  HTMLElement,
  TextScrollReadProps
>(
  (
    {
      as: Component = 'div',
      children,
      className,
      opacityRange = [0.2, 1],
      offset = ['start end', 'end start'],
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset,
    });

    const words = children.split(' ').filter((word) => word.length > 0);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    return (
      <Component
        ref={combinedRef}
        className={cn('relative leading-relaxed', className)}
        {...props}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={`${word}-${index}`}
              range={[start, end]}
              progress={scrollYProgress}
              opacityRange={opacityRange}
            >
              {word}
            </Word>
          );
        })}
      </Component>
    );
  },
);

TextScrollRead.displayName = 'TextScrollRead';
