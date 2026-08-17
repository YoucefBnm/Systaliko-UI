'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TypingTextProps extends React.ComponentProps<'span'> {
  text: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypingText({
  text,
  speed = 32,
  startDelay = 0,
  showCursor = true,
  onComplete,
  className,
  ...props
}: TypingTextProps) {
  const [displayed, setDisplayed] = React.useState('');
  const [isDone, setIsDone] = React.useState(false);
  const onCompleteRef = React.useRef(onComplete);

  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  React.useEffect(() => {
    setDisplayed('');
    setIsDone(false);

    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (interval) clearInterval(interval);
          setIsDone(true);
          onCompleteRef.current?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={cn('inline', className)} {...props}>
      {displayed}
      {showCursor && !isDone && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[1em] w-px -translate-y-px animate-pulse bg-current align-middle"
        />
      )}
    </span>
  );
}
