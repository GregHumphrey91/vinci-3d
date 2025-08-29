"use client";

import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { PRESETS, type Preset, type Vec3, easeInOut } from "../lib/cameraMath";

export default function CameraRig({ preset = "whole" as Preset }) {
  const { camera } = useThree();

  // Simple animation state
  const isAnimating = useRef(false);
  const startPos = useRef<Vec3>([3, 2, 3]);
  const targetPos = useRef<Vec3>([3, 2, 3]);
  const animationStart = useRef(0);
  const animationDuration = 0.8;
  const hasInitialized = useRef(false); // Track if we've initialized
  const previousPreset = useRef<Preset>(preset); // Track previous preset

  // Set initial camera position on first component load
  useEffect(() => {
    // Start at "whole" position immediately
    camera.position.set(3, 2, 3);
    camera.lookAt(0, 0, 0);

    // Set safe near/far planes
    camera.near = 0.01;
    camera.far = 100;
    camera.updateProjectionMatrix();

    hasInitialized.current = true; // Mark as initialized
  }, []);

  // Handle preset changes
  useEffect(() => {
    // Don't start animation until we've initialized
    if (!hasInitialized.current) return;

    // Don't start animation if preset hasn't actually changed
    if (preset === previousPreset.current) return;

    // Current position
    const newPos = PRESETS[preset];

    // Set starting position to camera's current pos
    startPos.current = [
      camera.position.x,
      camera.position.y,
      camera.position.z,
    ];
    // Set the target to the user's selected position arr
    targetPos.current = newPos; // Set target ref
    isAnimating.current = true; // Set animation ref
    animationStart.current = performance.now();

    previousPreset.current = preset; // Update previous preset
  }, [preset]); // Only depend on preset changes, NOT camera

  // Smooth animation loop
  useFrame((state) => {
    if (isAnimating.current) {
      const elapsed = (performance.now() - animationStart.current) / 1000;
      const progress = Math.min(elapsed / animationDuration, 1);
      const eased = easeInOut(progress);

      // Interpolate position
      const x =
        startPos.current[0] +
        (targetPos.current[0] - startPos.current[0]) * eased;
      const y =
        startPos.current[1] +
        (targetPos.current[1] - startPos.current[1]) * eased;
      const z =
        startPos.current[2] +
        (targetPos.current[2] - startPos.current[2]) * eased;

      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);

      // End animation
      if (progress >= 1) {
        isAnimating.current = false;
      }
    }
  });

  return null;
}
