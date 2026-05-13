'use client';

import {
  HTMLMotionProps,
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useReducedMotion,
  useScroll,
  UseScrollOptions,
  useSpring,
  useTransform,
} from 'motion/react';
import React from 'react';

interface WavyTextsConfig {
  baseOffsetFactor: number;
  baseExtra: number;
  baseAmplitude: number;
  lengthEffect: number;
  frequency: number;
  progressScale: number;
  phaseShiftDeg: number;
  spring: SpringOptions;
}
interface WavyBlockItemProps extends HTMLMotionProps<'div'> {
  index: number;
  config?: Partial<WavyTextsConfig>;
  axis?: 'x' | 'y';
}
interface WavyBlockContextValue {
  scrollYProgress: MotionValue<number>;
  maxLen: number;
}

const WavyBlockContext = React.createContext<WavyBlockContextValue | undefined>(
  undefined,
);

function useWavyBlockContext() {
  const context = React.useContext(WavyBlockContext);
  if (context === undefined) {
    throw new Error('useWavyBlockContext must be used within a WavyBlock');
  }
  return context;
}
const toRadian = (deg: number) => (deg * Math.PI) / 180;
const TAU = Math.PI * 2;
const DEFAULT_X_CONFIG: WavyTextsConfig = {
  baseOffsetFactor: 0.1,
  baseExtra: 0,
  baseAmplitude: 160,
  lengthEffect: 0.6,
  frequency: 35,
  progressScale: 1,
  phaseShiftDeg: -180,
  spring: { damping: 22, stiffness: 300 },
};
const DEFAULT_Y_CONFIG: WavyTextsConfig = {
  ...DEFAULT_X_CONFIG,
  baseOffsetFactor: 0,
  baseAmplitude: 120,
  progressScale: 2,
  phaseShiftDeg: 0,
};

export function WavyBlockItem({
  index,
  axis = 'x',
  config,
  style,
  ...props
}: WavyBlockItemProps) {
  const { scrollYProgress, maxLen } = useWavyBlockContext();
  const reducedMotion = useReducedMotion();
  const lengthFactor = Math.min(1, Math.max(0, maxLen / (maxLen || 1)));
  const resolvedConfig = React.useMemo(() => {
    const defaults = axis === 'y' ? DEFAULT_Y_CONFIG : DEFAULT_X_CONFIG;
    return {
      ...defaults,
      ...config,
      spring: {
        ...defaults.spring,
        ...config?.spring,
      },
    };
  }, [axis, config]);

  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  const calculateAxisOffset = React.useCallback(
    (p: number, viewportSize?: number) => {
      const phase = resolvedConfig.progressScale * p * TAU;

      const size =
        viewportSize ??
        (typeof window !== 'undefined'
          ? axis === 'y'
            ? window.innerHeight
            : window.innerWidth
          : axis === 'y'
            ? 900
            : 1200);
      const hasManualBaseOffset =
        config?.baseOffsetFactor !== undefined ||
        config?.baseExtra !== undefined;
      const baseOffset =
        axis === 'y' && !hasManualBaseOffset
          ? 0
          : resolvedConfig.baseOffsetFactor * size + resolvedConfig.baseExtra;

      const amplitudeScale = 1 - resolvedConfig.lengthEffect * lengthFactor;
      const amplitude = resolvedConfig.baseAmplitude * amplitudeScale;

      const waveOffset =
        axis === 'y'
          ? amplitude *
            Math.sin(
              phase +
                toRadian(resolvedConfig.frequency * index) +
                toRadian(resolvedConfig.phaseShiftDeg),
            )
          : amplitude *
            Math.cos(
              phase +
                toRadian(resolvedConfig.frequency * index) +
                toRadian(resolvedConfig.phaseShiftDeg),
            );

      return baseOffset + waveOffset;
    },
    [
      resolvedConfig,
      lengthFactor,
      index,
      axis,
      config?.baseOffsetFactor,
      config?.baseExtra,
    ],
  );

  const initialOffset = calculateAxisOffset(0);
  const rawOffset = useMotionValue(initialOffset);
  const springOffset = useSpring(rawOffset, resolvedConfig.spring);
  const offset = reducedMotion ? rawOffset : springOffset;

  React.useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!scrollYProgress || !isMounted) return;

    const unsub = scrollYProgress.onChange((p) => {
      const viewportSize =
        typeof window !== 'undefined'
          ? axis === 'y'
            ? window.innerHeight
            : window.innerWidth
          : axis === 'y'
            ? 900
            : 1200;
      const newOffset = calculateAxisOffset(p, viewportSize);
      rawOffset.set(newOffset);
    });

    return () => {
      if (unsub) unsub();
    };
  }, [scrollYProgress, rawOffset, calculateAxisOffset, isMounted, axis]);

  const motionAxisStyle = axis === 'y' ? { y: offset } : { x: offset };

  return (
    <motion.div
      style={{ ...motionAxisStyle, ...style }}
      suppressHydrationWarning
      {...props}
    />
  );
}

export function WavyBlock({
  offset = ['start end', 'end start'],
  ...props
}: React.ComponentPropsWithRef<'div'> & {
  offset?: UseScrollOptions['offset'];
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { current } = containerRef;

  const maxLen = React.useMemo(() => {
    if (!current?.children || current.children.length === 0) return 1;
    const childrenArray = Array.from(current.children);
    return Math.max(
      ...childrenArray.map((child) => (child ? String(child).length : 0)),
    );
  }, [current?.children]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });
  return (
    <WavyBlockContext.Provider value={{ scrollYProgress, maxLen }}>
      <div ref={containerRef} {...props} />
    </WavyBlockContext.Provider>
  );
}

export function WavyBlockSticky({
  yRange = [0, 300],
  yInput = [0, 1],
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  yRange?: [number, number];
  yInput?: [number, number];
}) {
  const { scrollYProgress } = useWavyBlockContext();

  const y = useTransform(scrollYProgress, yInput, yRange);
  return <motion.div style={{ y, ...style }} {...props} />;
}
