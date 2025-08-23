import {
  ScrollAnimation,
  ScrollInsetY,
  ScrollTranslateY,
} from '@/__registry__/blocks/scroll-animation/shadcn-new-york';

export function ScrollAnimationInsetYDemo() {
  return (
    <ScrollAnimation>
      <ScrollTranslateY className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ScrollInsetY
          className="overflow-hidden w-4/5 mx-auto  rounded-md flex justify-center items-center"
          insetRange={[80, 0]}
        >
          <video
            className="relative z-10  max-h-full max-w-full "
            src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </ScrollInsetY>
      </ScrollTranslateY>
    </ScrollAnimation>
  );
}
