export interface GradientStyleT {
  gradientColors?: { color: string; start: string }[];
  gradientSize?: { width: string; height: string };
  gradientPosition?: { x: string; y: string };
}
const gradientColorsDefault = [
  { color: 'var(--color-primary)', start: '0%' },

  { color: 'var(--background)', start: '100%' },
];
const gradientSizeDefault = {
  width: '80%',
  height: '100%',
};
const gradientPositionDefault = {
  x: '50%',
  y: '-20%',
};

export const gradientStyle = ({
  gradientColors = gradientColorsDefault,
  gradientSize: gradientSize = gradientSizeDefault,
  gradientPosition: gradientPosition = gradientPositionDefault,
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
