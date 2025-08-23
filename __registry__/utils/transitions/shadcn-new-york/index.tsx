export const TRANSITIONS = {
  y: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  x: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
  scale: { type: 'spring', stiffness: 1000, damping: 28, mass: 0.9 },
  filter: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  opacity: { duration: 0.36, ease: 'easeOut' },
} as const;
