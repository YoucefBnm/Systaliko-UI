import {
  GalleryContainer,
  GalleryRotatedScroll,
} from '@/__registry__/containers/gallery-rotated-scroll/shadcn-default';

export const DeviceRotatedScrollDemo = () => {
  return (
    <GalleryRotatedScroll>
      <div
        className="pointer-events-none absolute z-10 h-[20vh] w-full "
        style={{
          background: 'linear-gradient(to right, var(--primary), gray, purple)',
          filter: 'blur(84px)',
          mixBlendMode: 'screen',
        }}
      />

      <GalleryContainer
        className={`
        w-4/5 aspect-video mx-auto bg-border relative border-[20px] rounded-xl shadow-2xl
        after:block after:absolute after:top-[3%] after:left-[36%] after:h-[0.5%] after:w-[28%] after:rounded-full after:shadow-[0_0_3px_0_white] after:z-20
        `}
        rotateXRange={[95, 0]}
      >
        <div className="rounded-md size-full overflow-hidden">
          <video
            className="relative z-10  size-full object-cover"
            src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </GalleryContainer>
    </GalleryRotatedScroll>
  );
};
