// Camera preset positions
export const PRESETS = {
  whole: [3, 2, 3] as const,
  close: [1.6, 1.2, 1.6] as const,
  top: [0.001, 3, 0.001] as const,
  extreme: [1.05, 1.05, 1.05] as const,
} as const;

export type Preset = keyof typeof PRESETS;
export type Vec3 = readonly [number, number, number];

// Simple easing function
export const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

// Utility function to calculate distance between two points
export const calculateDistance = (pos1: Vec3, pos2: Vec3): number => {
  const [x1, y1, z1] = pos1;
  const [x2, y2, z2] = pos2;
  return Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
  );
};
