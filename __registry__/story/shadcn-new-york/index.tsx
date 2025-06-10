'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { PauseIcon, PlayIcon, ReplyIcon } from 'lucide-react';

interface StoryProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaLength: number;
  duration?: number;
}
interface StoryContextValue {
  mediaLength: number;
  currentIndex: number;
  progress: number;
  isPaused: boolean;
  isEnded: boolean;
  handleControl: () => void;
  setCurrentIndex: (index: number) => void;
  setIsPaused: (paused: boolean) => void;
  setIsEnded: (ended: boolean) => void;
}
const StoryContext = React.createContext<StoryContextValue | undefined>(
  undefined,
);
function useStoryContext() {
  const context = React.useContext(StoryContext);
  if (context === undefined) {
    throw new Error('useStoryContext must be used within a StoryProvider');
  }
  return context;
}
export const Story = React.forwardRef<HTMLDivElement, StoryProps>(
  ({ mediaLength, duration = 2000, className, children, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const [isEnded, setIsEnded] = React.useState(false);
    const progressRef = React.useRef<number>(0);
    const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(
      null,
    );

    React.useEffect(() => {
      progressRef.current = 0;
      setProgress(0);
    }, [currentIndex, duration, mediaLength]);
    React.useEffect(() => {
      if (mediaLength === 0 || isPaused) return;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      const tick = 50;
      const totalTicks = duration / tick;

      intervalRef.current = setInterval(() => {
        progressRef.current += 1;
        const newProgress = (progressRef.current / totalTicks) * 100;
        setProgress(newProgress);

        if (progressRef.current >= totalTicks) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;

          if (currentIndex < mediaLength - 1) {
            setCurrentIndex((idx) => idx + 1);
          } else {
            setIsPaused(true);
            setIsEnded(true);
          }
        }
      }, tick);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [isPaused, currentIndex, duration, mediaLength]);

    if (mediaLength === 0) {
      return (
        <div className="text-center text-secondary">No stories to display</div>
      );
    }

    const handleControl = () => {
      if (isEnded) {
        setCurrentIndex(0);
        setIsEnded(false);
        setIsPaused(false);
      } else {
        setIsPaused((prev) => !prev);
      }
    };

    return (
      <StoryContext.Provider
        value={{
          mediaLength,
          currentIndex,
          progress,
          isPaused,
          isEnded,
          handleControl,
          setCurrentIndex,
          setIsPaused,
          setIsEnded,
        }}
      >
        <div className={cn('mx-auto', className)} ref={ref} {...props}>
          {children}
        </div>
      </StoryContext.Provider>
    );
  },
);
Story.displayName = 'Story';

export const StoryProgress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    progressWrapClass?: string;
    progressActiveClass?: string;
  }
>(({ className, progressWrapClass, progressActiveClass, ...props }, ref) => {
  const {
    mediaLength,
    currentIndex,
    progress,
    setCurrentIndex,
    setIsEnded,
    setIsPaused,
  } = useStoryContext();

  const handleProgressClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(false);
    setIsEnded(false);
  };

  return (
    <div className={cn('space-x-1 flex', className)} ref={ref} {...props}>
      {Array.from({ length: mediaLength }).map((_, index) => {
        const isActive = index === currentIndex;
        const isCompleted = index < currentIndex;

        return (
          <div
            key={index}
            className={cn(
              'h-1 flex-1 rounded bg-secondary cursor-pointer transition-colors',
              'hover:bg-secondary/80',
              progressWrapClass,
            )}
            onClick={() => handleProgressClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProgressClick(index);
              }
            }}
          >
            <div
              className={cn(
                'h-full rounded-[inherit] transition-all duration-200',
                isActive
                  ? 'bg-primary'
                  : isCompleted
                    ? 'bg-primary'
                    : 'bg-transparent',
                progressActiveClass,
              )}
              style={{
                width: isActive ? `${progress}%` : isCompleted ? '100%' : '0%',
              }}
            />
          </div>
        );
      })}
    </div>
  );
});
StoryProgress.displayName = 'StoryProgress';

export const StorySlide = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { currentIndex } = useStoryContext();
  if (index !== currentIndex) return null;
  return (
    <div className={cn('animate-in fade-in', className)} ref={ref} {...props} />
  );
});
StorySlide.displayName = 'StorySlide';

export const StoryControls = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const { isPaused, isEnded, handleControl } = useStoryContext();
    return (
      <Button
        onClick={handleControl}
        size="icon"
        {...props}
        ref={ref}
        className={className}
      >
        {isPaused ? isEnded ? <ReplyIcon /> : <PlayIcon /> : <PauseIcon />}
      </Button>
    );
  },
);
StoryControls.displayName = 'StoryControls';

export const StoryOverlay: React.FC = () => (
  <div className=" absolute inset-0 ">
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
  </div>
);
