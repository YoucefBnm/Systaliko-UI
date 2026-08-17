'use client';

import { TypingText, TypingTextProps } from '@/registry/text/typing-text';
import {
  motion,
  AnimatePresence,
  HTMLMotionProps,
  MotionConfig,
} from 'motion/react';
import React from 'react';

export type PhasesT =
  | 'idle'
  | 'typing-user'
  | 'thinking'
  | 'sources'
  | 'typing-answer'
  | 'complete'
  | 'exiting';

export interface TimingConfig {
  pauseBeforeStart: number;
  thinking: number;
  sourcesStagger: number;
  pauseBeforeAnswer: number;
  holdComplete: number;
}

const DEFAULT_TIMING: TimingConfig = {
  pauseBeforeStart: 400,
  thinking: 1600,
  sourcesStagger: 450,
  pauseBeforeAnswer: 600,
  holdComplete: 3500,
};

interface AiConversationLoopContextType {
  phase: PhasesT;
  setPhase: (phase: PhasesT) => void;
  cycleKey: number;
}

const AiConversationLoopContext = React.createContext<
  AiConversationLoopContextType | undefined
>(undefined);

export function useAiConversationLoopContext() {
  const context = React.useContext(AiConversationLoopContext);
  if (!context) {
    throw new Error(
      'AiConversationLoop components must be used within a <AiConversationLoop>',
    );
  }
  return context;
}

interface AiConversationLoopProps extends HTMLMotionProps<'div'> {
  userTiming?: Partial<TimingConfig>;
}

export function AiConversationLoop({
  userTiming = DEFAULT_TIMING,
  children,
  ...props
}: AiConversationLoopProps) {
  const [cycleKey, setCycleKey] = React.useState(0);
  const [phase, setPhase] = React.useState<PhasesT>('idle');

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    if (phase === 'idle') {
      timeoutId = setTimeout(() => {
        setPhase('typing-user');
      }, userTiming.pauseBeforeStart);
    } else if (phase === 'thinking') {
      timeoutId = setTimeout(() => {
        setPhase('sources');
      }, userTiming.thinking);
    } else if (phase === 'sources') {
      intervalId = setInterval(() => {
        clearInterval(intervalId);
        timeoutId = setTimeout(() => {
          setPhase('typing-answer');
        }, userTiming.pauseBeforeAnswer);
      }, userTiming.sourcesStagger);
    } else if (phase === 'complete') {
      timeoutId = setTimeout(() => {
        setPhase('exiting'); // Trigger exit animation
      }, userTiming.holdComplete);
    } else if (phase === 'exiting') {
      timeoutId = setTimeout(() => {
        setCycleKey((k) => k + 1); // Trigger restart
        setPhase('idle'); // Enter idle state to pause before restarting
      }, 500); // Wait for exit animation to complete
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [phase, cycleKey, userTiming]);

  return (
    <AiConversationLoopContext.Provider
      value={{
        phase,
        setPhase,
        cycleKey,
      }}
    >
      <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.5 }}>
        <AnimatePresence mode="wait">
          {phase !== 'idle' && phase !== 'exiting' && (
            <motion.div
              key={cycleKey}
              initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
              {...props}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </AiConversationLoopContext.Provider>
  );
}

export function UserMessage({ text, speed, ...props }: TypingTextProps) {
  const { setPhase, cycleKey } = useAiConversationLoopContext();
  return (
    <TypingText
      key={`user-${cycleKey}`}
      text={text}
      speed={speed}
      onComplete={() => setPhase('thinking')}
      {...props}
    />
  );
}

export function AiBlock({ ...props }: HTMLMotionProps<'div'>) {
  const { phase } = useAiConversationLoopContext();

  return (
    <motion.div
      initial={false}
      animate={phase !== 'typing-user' ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { delay: 0.1 },
        },
      }}
      {...props}
    />
  );
}

export function AiStatus({ ...props }: HTMLMotionProps<'div'>) {
  const { phase } = useAiConversationLoopContext();
  return (
    <AnimatePresence mode="popLayout">
      {phase === 'thinking' && (
        <motion.div
          key="thinking"
          layout
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export function AiSources({ ...props }: HTMLMotionProps<'div'>) {
  const { phase } = useAiConversationLoopContext();
  const isVisible =
    phase === 'sources' ||
    phase === 'typing-answer' ||
    phase === 'complete' ||
    phase === 'exiting';

  return (
    <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div
          key="sources"
          layout
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}
export function AiAnswer({
  startTyping = true,
  onTypingComplete,
  text,
  speed = 22,
  children,
  ...props
}: TypingTextProps & {
  startTyping?: boolean;
  onTypingComplete?: () => void;
}) {
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    if (startTyping) setIsComplete(false);
  }, [startTyping]);

  const handleComplete = React.useCallback(() => {
    setIsComplete(true);
    onTypingComplete?.();
  }, [onTypingComplete]);

  return (
    <div className="overflow-hidden">
      <div className="rounded-2xl rounded-tl-none border bg-muted px-4 py-3 text-xs shadow-sm">
        <p className="leading-relaxed">
          {startTyping && text && text !== '' ? (
            <TypingText
              text={text}
              speed={speed}
              onComplete={handleComplete}
              {...props}
            />
          ) : (
            <>
              As a Large Language Model, I am unable to provide real-time
              information.
            </>
          )}
        </p>

        <motion.div
          initial={false}
          animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 4 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
          className="mt-3 flex items-center justify-between border-t pt-3"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export function AiResult({
  text,
  speed = 22,
  ...props
}: TypingTextProps & HTMLMotionProps<'div'>) {
  const { phase, setPhase } = useAiConversationLoopContext();

  const isVisible =
    phase === 'typing-answer' || phase === 'complete' || phase === 'exiting';
  return (
    <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div
          key="answer"
          layout
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
        >
          <AiAnswer
            startTyping={
              phase === 'typing-answer' ||
              phase === 'complete' ||
              phase === 'exiting'
            }
            text={text}
            speed={speed}
            onTypingComplete={() => {
              if (phase === 'typing-answer') {
                setPhase('complete');
              }
            }}
            {...props}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
