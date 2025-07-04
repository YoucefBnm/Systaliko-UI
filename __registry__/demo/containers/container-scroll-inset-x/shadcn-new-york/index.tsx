import {
  ContainerScrollAnimation,
  ContainerScrollInsetX,
  ContainerScrollTranslate,
} from '@/__registry__/containers/containers-scroll-animations/shadcn-new-york';

export function ContainerScrollInsetXDemo() {
  return (
    <ContainerScrollAnimation>
      <ContainerScrollTranslate className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ContainerScrollInsetX
          className="overflow-hidden w-4/5 mx-auto  rounded-md flex justify-center items-center"
          insetRange={[120, 0]}
        >
          <video
            className="relative z-10  max-h-full max-w-full "
            src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </ContainerScrollInsetX>
      </ContainerScrollTranslate>
    </ContainerScrollAnimation>
  );
}
