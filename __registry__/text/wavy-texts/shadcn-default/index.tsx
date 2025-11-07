'use client';
import {
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useScroll,
  useSpring,
} from 'motion/react';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const toRadian = (deg: number) => (deg * Math.PI) / 180;

type WavyTextsConfig = {
  baseOffsetFactor: number;
  baseExtra: number;
  baseAmplitude: number;
  lengthEffect: number;
  frequency: number;
  progressScale: number;
  phaseShiftDeg: number;
  spring: SpringOptions;
};

function WavyBlock({
  text,
  index,
  scrollProgress,
  maxLen,
  config,
}: {
  text: string;
  index: number;
  scrollProgress: MotionValue<number>;
  maxLen: number;
  config: WavyTextsConfig;
}) {
  // compute length factor based on character count (0..1)
  const lengthFactor = Math.min(1, Math.max(0, text.length / (maxLen || 1)));

  // Track if component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);

  // Helper function to calculate X position from scroll progress
  // Use consistent default width (1200) for SSR to avoid hydration mismatch
  const calculateX = useCallback(
    (p: number, windowWidth?: number) => {
      // p is 0..1
      const phase = config.progressScale * p; // like your `6 * progress`

      // Use provided windowWidth, or default to 1200 for SSR consistency
      const width =
        windowWidth ??
        (typeof window !== 'undefined' ? window.innerWidth : 1200);
      const baseOffset = config.baseOffsetFactor * width + config.baseExtra;

      // amplitude scaled by lengthFactor (shorter => larger amplitude)
      const amplitudeScale = 1 - config.lengthEffect * lengthFactor; // 1 - 0.6*lenFactor in your earlier code
      const amplitude = config.baseAmplitude * amplitudeScale;

      const angle =
        toRadian(config.frequency * index) +
        phase +
        toRadian(config.phaseShiftDeg);

      return baseOffset + amplitude * Math.cos(angle);
    },
    [config, lengthFactor, index],
  );

  // Get initial scroll progress
  // Always use 0 for initial render to ensure SSR/client consistency
  // The actual scroll position will be set in useLayoutEffect after mount
  const initialProgress = 0;
  const initialX = calculateX(initialProgress, 1200);

  // create a motion value per title and wrap it with a spring for smoothing
  const rawX = useMotionValue(initialX);
  const x = useSpring(rawX, config.spring);

  // Mark as mounted on client side
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  // Use useLayoutEffect to set position synchronously before paint
  useLayoutEffect(() => {
    if (!scrollProgress || !isMounted) return;

    // Set initial position immediately (synchronously before paint)
    // Now use actual window width since we're on client
    const currentProgress = scrollProgress.get();
    const windowWidth =
      typeof window !== 'undefined' ? window.innerWidth : 1200;
    const correctX = calculateX(currentProgress, windowWidth);
    // Set immediately to prevent visual jump
    rawX.set(correctX);
  }, [scrollProgress, rawX, calculateX, isMounted]);

  // Subscribe to scroll changes in regular effect
  useEffect(() => {
    if (!scrollProgress || !isMounted) return;

    // subscribe to scroll progress changes
    const unsub = scrollProgress.onChange((p) => {
      const windowWidth =
        typeof window !== 'undefined' ? window.innerWidth : 1200;
      const newX = calculateX(p, windowWidth);
      // set raw motion value (spring will smooth it)
      rawX.set(newX);
    });

    return () => {
      if (unsub) unsub();
    };
  }, [scrollProgress, rawX, calculateX, isMounted]);

  return (
    <motion.h2
      className="text-[clamp(6rem,7.3vw,14rem)] font-bold leading-none tracking-tighter uppercase whitespace-nowrap"
      style={{ x }}
      aria-label={text}
      suppressHydrationWarning
    >
      {text}
    </motion.h2>
  );
}

export function WavyTexts({
  titles = [],
  className = 'py-24',
  config: userConfig = {},
}: {
  titles?: string[];
  className?: string;
  config?: Partial<WavyTextsConfig>;
}) {
  // sane defaults (tweakable)
  const config = useMemo(() => {
    return {
      // baseOffsetFactor * window.innerWidth + baseExtra (mirrors your `.1 * window.innerWidth + 160`)
      baseOffsetFactor: userConfig.baseOffsetFactor ?? 0.1,
      baseExtra: userConfig.baseExtra ?? 160,

      // base amplitude in px (you used 160 previously)
      baseAmplitude: userConfig.baseAmplitude ?? 160,

      // how strongly length reduces amplitude (0..1)
      lengthEffect: userConfig.lengthEffect ?? 0.6,

      // degrees between items (you used 35 * index)
      frequency: userConfig.frequency ?? 35,

      // how much progress affects phase (you used 6 * progress)
      progressScale: userConfig.progressScale ?? 6,

      // phase shift (you had -180 deg)
      phaseShiftDeg: userConfig.phaseShiftDeg ?? -180,

      // spring config used by Framer Motion
      spring: userConfig.spring ?? { damping: 22, stiffness: 300 },
    };
  }, [userConfig]);

  // compute the maximum character length among titles (used to normalize lengthFactor)
  const maxLen = useMemo(() => {
    if (!titles || titles.length === 0) return 1;
    return Math.max(...titles.map((t) => (t ? String(t).length : 0)));
  }, [titles]);

  // container ref and scroll progress (scoped to container)
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className={className}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          {titles.map((t, i) => (
            <WavyBlock
              key={i}
              text={t}
              index={i}
              scrollProgress={scrollYProgress}
              maxLen={maxLen}
              config={config}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
