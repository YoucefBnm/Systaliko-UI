'use client';
import { Button } from '@/__registry__/button/default';
import {
  ContainerScrollAnimation,
  ContainerScrollInset,
  ContainerScrollScale,
  ContainerScrollTranslate,
} from '@/__registry__/containers/containers-scroll-animations/default';

export function SectionVideoDemo() {
  return (
    <section className="relative grid grid-cols-12 place-content-center grid-rows-[max-content_1fr] text-center">
      <div className="mix-blend-difference h-[50vh] text-background dark:text-foreground flex flex-col justify-center md:justify-end items-center row-start-1 col-start-2 row-end-2 col-end-12  relative z-10">
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold tracking-tight">
          Delivering Exceptional
        </h1>
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold tracking-tight">
          Digital Experiences
        </h1>

        <Button size="lg" className="rounded-full mt-4">
          Start your project
        </Button>
      </div>

      <ContainerScrollAnimation className="row-start-1 col-start-2 row-end-3 col-end-12">
        <ContainerScrollTranslate className="flex items-center justify-center">
          <ContainerScrollInset
            className="overflow-hidden w-full flex justify-center items-center"
            insetRangeY={[10, 0]}
            insetXRange={[27, 0]}
            roundednessRange={[1000, 16]}
          >
            <ContainerScrollScale scaleRange={[2, 1]}>
              <video
                width="100%"
                height="100%"
                loop
                playsInline
                autoPlay
                muted
                className="block h-auto max-h-full max-w-full object-contain align-middle"
              >
                <source
                  src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
            </ContainerScrollScale>
          </ContainerScrollInset>
        </ContainerScrollTranslate>
      </ContainerScrollAnimation>
    </section>
  );
}
