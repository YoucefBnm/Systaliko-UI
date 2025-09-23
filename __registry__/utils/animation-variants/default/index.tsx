export type AnimationT =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'z'
  | 'blur'
  | 'default';

export const ANIMATION_VARIANTS = {
  left: {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  top: {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  bottom: {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  z: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  blur: {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  },
  default: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const;
