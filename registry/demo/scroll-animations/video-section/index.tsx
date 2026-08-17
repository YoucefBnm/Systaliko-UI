'use client';

import {
  ScrollAnimation,
  ScrollInset,
  ScrollScale,
  ScrollTranslateY,
} from '@/registry/scroll-animations/scroll-animation';
import { Button } from '@/registry/shadcn/button';

export function VideoSectionDemo() {
  return (
    <ScrollAnimation
      style={{
        background:
          'radial-gradient(40% 30% at 50% 50%, #0e19ae 0%, #0b1387 22.92%, #080f67 42.71%, #030526 88.54%)',
      }}
      className="min-h-screen bg-stone-900 px-6 py-10 text-slate-50 w-full"
      spacerClass="h-48"
    >
      <ScrollTranslateY yRange={[0, 192]}>
        <ScrollTranslateY yRange={[90, -16]} className="space-y-4 text-center">
          <h1 className="text-5xl font-medium tracking-tighter  md:text-6xl">
            Scroll & Roll
          </h1>
          <p className="mx-auto max-w-[42ch] text-slate-400 text-balance">
            for your next project, built with motion, for your hero or cta or
            showcase section.
          </p>
        </ScrollTranslateY>

        <ScrollInset
          className="w-full h-fit mx-auto max-w-3xl "
          insetRangeY={[40, 0]}
          insetXRange={[40, 0]}
          roundednessRange={[999, 24]}
        >
          <ScrollScale inputRange={[0, 1]} scaleRange={[0.75, 1]}>
            <video
              src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
              data-src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
              className="relative z-10 size-auto max-h-full max-w-ful"
              autoPlay
              muted
              loop
              playsInline
            />
          </ScrollScale>
        </ScrollInset>
        <ScrollTranslateY yRange={[-80, 16]} className="text-center">
          <Button
            variant={'ghost'}
            className=" rounded-full border border-[#84cc16] bg-gray-950/10 px-4 py-2 shadow-[0px_4px_24px_#84cc16] transition-colors hover:bg-slate-50"
          >
            Get Started
          </Button>
        </ScrollTranslateY>
      </ScrollTranslateY>
    </ScrollAnimation>
  );
}
