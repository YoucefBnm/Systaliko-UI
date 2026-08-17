/**
 * @deprecated Use `AnimationVariantsT` instead.
 */
export type AnimationT =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'z'
  | 'blur'
  | 'default';

/**
 * @deprecated Use `animation_variants` instead.
 */
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

export type AnimationVariantsT =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'z'
  | 'blur'
  | 'opacity'
  | 'rotateX'
  | 'rotateY'
  | 'rotateZ';

export const animation_variants = {
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
  rotateX: {
    hidden: { rotateX: '-180deg', opacity: 0 },
    visible: { rotateX: '0deg', opacity: 1 },
  },
  rotateY: {
    hidden: { rotateY: '-180deg', opacity: 0 },
    visible: { rotateY: '0deg', opacity: 1 },
  },
  rotateZ: {
    hidden: { rotateZ: '-180deg', opacity: 0 },
    visible: { rotateZ: '0deg', opacity: 1 },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const;
