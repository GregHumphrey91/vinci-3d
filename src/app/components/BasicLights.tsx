"use client";

import { Color } from "three";

export default function BasicLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.0} />
      <hemisphereLight groundColor={new Color("#888")} />
    </>
  );
}
