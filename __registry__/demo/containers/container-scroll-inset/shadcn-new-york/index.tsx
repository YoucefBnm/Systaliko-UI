import {
  ContainerScrollAnimation,
  ContainerScrollInset,
  ContainerScrollTranslate,
} from '@/__registry__/containers/containers-scroll-animations/shadcn-new-york';

export function ContainerScrollInsetDemo() {
  return (
    <ContainerScrollAnimation>
      <ContainerScrollTranslate className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ContainerScrollInset
          className="overflow-hidden w-full flex justify-center items-center"
          insetRangeY={[45, 0]}
          insetXRange={[45, 0]}
          roundednessRange={[1000, 16]}
        >
          <video
            className="relative z-10  max-h-full max-w-full "
            src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </ContainerScrollInset>
      </ContainerScrollTranslate>
    </ContainerScrollAnimation>
  );
}
