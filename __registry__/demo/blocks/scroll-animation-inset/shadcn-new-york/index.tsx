import {
  ScrollAnimation,
  ScrollInset,
  ScrollTranslate,
} from '@/__registry__/blocks/scroll-animation/shadcn-new-york';

export function ScrollAnimationInsetDemo() {
  return (
    <ScrollAnimation>
      <ScrollTranslate className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ScrollInset
          className="overflow-hidden w-full flex justify-center items-center"
          insetRangeY={[20, 0]}
          insetXRange={[20, 0]}
          roundednessRange={[999, 16]}
        >
          <video
            className="relative z-10  max-h-full max-w-full "
            src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </ScrollInset>
      </ScrollTranslate>
    </ScrollAnimation>
  );
}
