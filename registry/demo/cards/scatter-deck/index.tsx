'use client';

import { motion } from 'motion/react';

export function ScatterDeck() {
  return (
    <div className="p-6 place-content-center h-screen">
      <div className="flex">
        <motion.div
          className="bg-[#B4654A]  w-[240px] text-center place-content-center aspect-[9/10] rounded border"
          style={{
            transform: 'translate(-3.2%, 8.6%) rotate(-5deg)',
          }}
        >
          card 1
        </motion.div>

        <motion.div
          className="bg-[#03B5AA] w-[240px] text-center place-content-center aspect-[9/10] rounded border"
          style={{
            transform: 'translate(0%, -5.4%) rotate(4deg)',
          }}
        >
          card 2
        </motion.div>

        <motion.div
          className="bg-[#D4CB92]  w-[240px] text-center place-content-center aspect-[9/10] rounded border"
          style={{
            transform: 'translate(-8.4%, -8.5%) rotate(6deg)',
          }}
        >
          card 3
        </motion.div>

        <motion.div
          className="bg-[#395C6B]  w-[240px] text-center place-content-center aspect-[9/10] rounded border"
          style={{
            transform: 'translate(-3.2%, -3.7%) rotate(-6deg)',
          }}
        >
          card 4
        </motion.div>

        <motion.div
          className="bg-[#80A4ED]  w-[240px] text-center place-content-center aspect-[9/10] rounded border"
          style={{
            transform: 'translate(0%, 7.1%) rotate(8deg)',
          }}
        >
          card 5
        </motion.div>
      </div>
    </div>
  );
}
