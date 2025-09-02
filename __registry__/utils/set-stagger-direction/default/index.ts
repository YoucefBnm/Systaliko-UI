export type StaggerDirection = 'start' | 'middle' | 'end' | 'random';

export interface StaggerOptions {
  direction?: StaggerDirection;
  staggerValue?: number;
  totalItems: number;
  index: number;
}

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

    case 'random':
      // Random stagger between index and totalItems
      const min = Math.min(index, totalItems);
      const max = Math.max(index, totalItems);
      return Math.random() * (max - min) * staggerValue;

    default:
      return 0;
  }
}
