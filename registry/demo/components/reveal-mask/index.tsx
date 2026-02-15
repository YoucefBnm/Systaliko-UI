'use client';

import { RevealMask } from '@/registry/components/reveal-mask';

export const RevealMaskDemo = () => {
  return (
    <div>
      <div className="h-screen place-content-center p-6">
        <h1 className="text-center text-4xl font-bold">Scroll Down 👇🏻</h1>
      </div>
      <div className="relative grid grid-rows-1 grid-cols-1 *:col-start-1 *:row-start-1 w-full h-screen overflow-hidden">
        <RevealMask className="size-full inset-0" />
        <video
          src="https://videos.pexels.com/video-files/19878722/19878722-uhd_1922_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
          aria-hidden
        />
      </div>
    </div>
  );
};
