export type ClipPathAnimationT =
  | 'curtain-down'
  | 'curtain-up'
  | 'curtain-center-vertical'
  | 'curtain-center-horizontal';

export const clip_path_animation_variants = {
  'curtain-down': {
    hidden: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    visible: { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' },
  },
  'curtain-up': {
    hidden: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    visible: { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' },
  },
  'curtain-center-vertical': {
    hidden: { clipPath: 'polygon(50% 100%, 50% 100%, 50% 0, 50% 0)' },
    visible: { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' },
  },
  'curtain-center-horizontal': {
    hidden: { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)' },
    visible: { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' },
  },
} as const;
