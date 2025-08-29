import { describe, test, expect } from "vitest";
import { easeInOut, PRESETS, calculateDistance } from "../cameraMath";

describe("Camera Math Functions", () => {
  describe("easeInOut", () => {
    test("should return correct values at endpoints", () => {
      expect(easeInOut(0)).toBe(0);
      expect(easeInOut(1)).toBe(1);
      expect(easeInOut(0.5)).toBe(0.5);
    });

    test("should be symmetric around 0.5", () => {
      const t1 = 0.3;
      const t2 = 0.7;
      const result1 = easeInOut(t1);
      const result2 = easeInOut(t2);
      expect(Math.abs(result1 - (1 - result2))).toBeLessThan(0.0001);
    });
  });

  describe("PRESETS", () => {
    test("should contain all expected camera presets", () => {
      expect(PRESETS).toHaveProperty("whole");
      expect(PRESETS).toHaveProperty("close");
      expect(PRESETS).toHaveProperty("top");
      expect(PRESETS).toHaveProperty("extreme");
    });

    test("should have extreme view closer than close view", () => {
      const extremeDistance = calculateDistance([0, 0, 0], PRESETS.extreme);
      const closeDistance = calculateDistance([0, 0, 0], PRESETS.close);
      expect(extremeDistance).toBeLessThan(closeDistance);
    });
  });

  describe("calculateDistance", () => {
    test("should calculate correct distance between two points", () => {
      const point1: [number, number, number] = [0, 0, 0];
      const point2: [number, number, number] = [3, 4, 0];
      expect(calculateDistance(point1, point2)).toBe(5); // 3-4-5 triangle
    });

    test("should return 0 for same point", () => {
      const point: [number, number, number] = [1, 2, 3];
      expect(calculateDistance(point, point)).toBe(0);
    });
  });
});
