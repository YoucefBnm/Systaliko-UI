'use client';

import { TextStaggerInview } from '@/registry/text/text-stagger-inview';

export const TextStaggerInvieWaveswDemo = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <TextStaggerInview
        animation="bottom"
        staggerValue={0.05}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-4xl font-bold tracking-tighter uppercase"
      >
        Let&apos;s create a wave with letters
      </TextStaggerInview>
      <TextStaggerInview
        animation="top"
        staggerValue={0.05}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-4xl font-bold tracking-tighter uppercase"
      >
        Let&apos;s create a wave with letters
      </TextStaggerInview>
    </div>
  );
};
