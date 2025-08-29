import { vi } from "vitest";

// Mock Three.js and React Three Fiber for testing
vi.mock("@react-three/fiber", () => ({
  useThree: () => ({
    camera: {
      position: { x: 0, y: 0, z: 0 },
      lookAt: vi.fn(),
      near: 0.01,
      far: 100,
      updateProjectionMatrix: vi.fn(),
    },
    scene: {},
    gl: {},
  }),
  useFrame: vi.fn(),
}));

// Mock @react-three/drei
vi.mock("@react-three/drei", () => ({
  OrbitControls: () => null,
}));

// Mock performance API
global.performance = {
  now: vi.fn(() => Date.now()),
} as any;
