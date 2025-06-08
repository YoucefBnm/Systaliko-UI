export interface GradientStyleT {
  gradientColors: { color: string; start: string }[];
  gradientSize: { width: string; height: string };
  gradientPosition: { x: string; y: string };
}

export const gradientStyle = (params: GradientStyleT) => {
  const { gradientColors, gradientSize, gradientPosition } = params;

  const gradientString = gradientColors
    .map(({ color, start }) => `${color} ${start}`)
    .join(', ');

  const gradientBg = `radial-gradient(${gradientSize.width} ${gradientSize.height} at ${gradientPosition.x} ${gradientPosition.y}, ${gradientString})`;

  return {
    gradientString,
    gradientBg,
  };
};
