'use client';
import * as React from 'react';
import { useFollowMouse } from '@/__registry__/utils/use-follow-mouse/shadcn-new-york';
import { motion } from 'motion/react';

export const UseFollowMouseDemo = () => {
  const { cursorXSpring, cursroYSpring } = useFollowMouse({ duration: 0.3 });
  const [isMouseIn, setIsMouseIn] = React.useState<boolean>(false);
  return (
    <div
      className="relative w-full h-80"
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      <motion.h2
        className="inline-block absolute"
        style={{
          x: isMouseIn ? cursorXSpring : 0,
          y: isMouseIn ? cursroYSpring : 0,
        }}
      >
        Follow the mouse
      </motion.h2>
    </div>
  );
};
