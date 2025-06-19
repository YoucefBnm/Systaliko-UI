export interface GradientStyleT {
  gradientColors?: { color: string; start: string }[];
  gradientSize?: { width: string; height: string };
  gradientPosition?: { x: string; y: string };
}

export const gradientStyle = ({
  gradientColors = [
    { color: 'var(--color-primary)', start: '0%' },
    { color: 'var(--background)', start: '100%' },
  ],
  gradientSize = {
    width: '80%',
    height: '100%',
  },
  gradientPosition = {
    x: '50%',
    y: '-20%',
  },
}: GradientStyleT) => {
  const gradientString = gradientColors
    .map(({ color, start }) => `${color} ${start}`)
    .join(', ');

  const gradientBg = `radial-gradient(${gradientSize.width} ${gradientSize.height} at ${gradientPosition.x} ${gradientPosition.y}, ${gradientString})`;

  return {
    gradientString,
    gradientBg,
  };
};
