export type StaggerDirection = 'start' | 'middle' | 'end';

export interface StaggerOptions {
  direction?: StaggerDirection;
  staggerValue?: number;
  totalItems: number;
  index: number;
}

/**
 * Calculates stagger delay based on the direction and pattern
 * @param options - Stagger configuration options
 * @returns number - The calculated stagger delay
 */
export function setStaggerDirection({
  direction = 'start',
  staggerValue = 0.02,
  totalItems,
  index,
}: StaggerOptions): number {
  switch (direction) {
    case 'start':
      // Linear progression from start
      return index * staggerValue;

    case 'middle':
      // Stagger from the middle outward
      const middleIndex = Math.floor(totalItems / 2);
      return Math.abs(index - middleIndex) * staggerValue;

    case 'end':
      // Linear progression from end
      return (totalItems - 1 - index) * staggerValue;

    default:
      return 0;
  }
}

/**
 * Example usage:
 *
 * // Start stagger (default)
 * const startDelay = useStaggerDirection({
 *   totalItems: 10,
 *   index: 5
 * }); // Returns 0.1 (5 * 0.02)
 *
 * // Middle stagger
 * const middleDelay = useStaggerDirection({
 *   direction: 'middle',
 *   totalItems: 10,
 *   index: 5
 * }); // Returns delay based on distance from middle
 *
 * // End stagger
 * const endDelay = useStaggerDirection({
 *   direction: 'end',
 *   totalItems: 10,
 *   index: 5
 * }); // Returns 0.08 ((10-1-5) * 0.02)
 */
