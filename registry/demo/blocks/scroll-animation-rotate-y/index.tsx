import {
  ScrollAnimationRotate,
  ScrollAnimationRotateContainer,
} from '@/registry/blocks/scroll-animation-rotate';

export const ScrollAnimationRotateYDemo = () => {
  return (
    <ScrollAnimationRotate>
      <ScrollAnimationRotateContainer
        className={`
        w-4/5 aspect-video mx-auto bg-border relative border-[20px] rounded-xl shadow-2xl
        after:block after:absolute after:top-[3%] after:left-[36%] after:h-[0.5%] after:w-[28%] after:rounded-full after:shadow-[0_0_3px_0_white] after:z-20
        `}
        rotateRange={[65, 0]}
      >
        <div className="rounded-md size-full overflow-hidden">
          <video
            className="relative z-10  size-full object-cover"
            src="https://videos.pexels.com/video-files/8084614/8084614-uhd_2560_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </ScrollAnimationRotateContainer>
    </ScrollAnimationRotate>
  );
};
