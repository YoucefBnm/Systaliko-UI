/**
 * Type for GSAP easing functions with their use cases
 */
type EasingFunction = {
  /** use: "Smooth acceleration; suitable for elements entering the viewport." */
  'power1.in': [number, number, number, number];
  /** use: "Smooth deceleration; ideal for elements exiting the viewport." */
  'power1.out': [number, number, number, number];
  /** use: "Smooth acceleration and deceleration; great for modals or overlays." */
  'power1.inOut': [number, number, number, number];

  /** use: "Faster acceleration; good for quick entrances." */
  'power2.in': [number, number, number, number];
  /** use: "Faster deceleration; useful for quick exits." */
  'power2.out': [number, number, number, number];
  /** use: "Balanced acceleration and deceleration; suitable for smooth transitions." */
  'power2.inOut': [number, number, number, number];

  /** use: "Strong acceleration; effective for drawing attention." */
  'power3.in': [number, number, number, number];
  /** use: "Strong deceleration; emphasizes the end of an animation." */
  'power3.out': [number, number, number, number];
  /** use: "Pronounced acceleration and deceleration; ideal for impactful animations." */
  'power3.inOut': [number, number, number, number];

  /** use: "Very strong acceleration; grabs user attention quickly." */
  'power4.in': [number, number, number, number];
  /** use: "Very strong deceleration; creates a dramatic slowdown." */
  'power4.out': [number, number, number, number];
  /** use: "Sharp acceleration and deceleration; for high-impact transitions." */
  'power4.inOut': [number, number, number, number];

  /** use: "Gentle start; suitable for subtle animations." */
  'sine.in': [number, number, number, number];
  /** use: "Gentle end; perfect for fading elements." */
  'sine.out': [number, number, number, number];
  /** use: "Smooth start and end; ideal for continuous animations." */
  'sine.inOut': [number, number, number, number];

  /** use: "Rapid acceleration; for elements that need to appear quickly." */
  'expo.in': [number, number, number, number];
  /** use: "Rapid deceleration; for elements that need to disappear quickly." */
  'expo.out': [number, number, number, number];
  /** use: "Sharp acceleration and deceleration; for dynamic transitions." */
  'expo.inOut': [number, number, number, number];

  /** use: "Circular motion start; for elements entering in a circular path." */
  'circ.in': [number, number, number, number];
  /** use: "Circular motion end; for elements exiting in a circular path." */
  'circ.out': [number, number, number, number];
  /** use: "Circular motion start and end; for looping animations." */
  'circ.inOut': [number, number, number, number];

  /** use: "Slight reverse motion before starting; adds anticipation." */
  'back.in': [number, number, number, number];
  /** use: "Overshoots slightly before settling; adds a playful effect." */
  'back.out': [number, number, number, number];
  /** use: "Combined overshoot at start and end; for bouncy animations." */
  'back.inOut': [number, number, number, number];
};

/**
 * Collection of GSAP easing functions with descriptions for their use cases.
 * @example
 * ```tsx
 * <motion.div
 *   transition={{ duration: 0.3, easings: gsapTransitions['back.in'] }}
 *   whileHover={{ scale: 1.05 }}
 * >
 *   Gsap Transitions
 * </motion.div>
 * ```
 */
export const GSAPTransitions: EasingFunction = {
  'power1.in': [0.55, 0.085, 0.68, 0.53],
  'power1.out': [0.25, 0.46, 0.45, 0.94],
  'power1.inOut': [0.455, 0.03, 0.515, 0.955],

  'power2.in': [0.55, 0.085, 0.68, 0.53],
  'power2.out': [0.25, 0.46, 0.45, 0.94],
  'power2.inOut': [0.455, 0.03, 0.515, 0.955],

  'power3.in': [0.55, 0.055, 0.675, 0.19],
  'power3.out': [0.215, 0.61, 0.355, 1],
  'power3.inOut': [0.645, 0.045, 0.355, 1],

  'power4.in': [0.895, 0.03, 0.685, 0.22],
  'power4.out': [0.165, 0.84, 0.44, 1],
  'power4.inOut': [0.77, 0, 0.175, 1],

  'sine.in': [0.47, 0, 0.745, 0.715],
  'sine.out': [0.39, 0.575, 0.565, 1],
  'sine.inOut': [0.445, 0.05, 0.55, 0.95],

  'expo.in': [0.95, 0.05, 0.795, 0.035],
  'expo.out': [0.19, 1, 0.22, 1],
  'expo.inOut': [1, 0, 0, 1],

  'circ.in': [0.6, 0.04, 0.98, 0.335],
  'circ.out': [0.075, 0.82, 0.165, 1],
  'circ.inOut': [0.785, 0.135, 0.15, 0.86],

  'back.in': [0.6, -0.28, 0.735, 0.045],
  'back.out': [0.175, 0.885, 0.32, 1.275],
  'back.inOut': [0.68, -0.55, 0.265, 1.55],
} as const;
