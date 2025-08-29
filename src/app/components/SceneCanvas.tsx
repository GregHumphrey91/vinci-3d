"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitCtrls } from "three-stdlib";
import ControlPanel from "./ControlPanel";
import DemoModel from "./DemoModel";
import BasicLights from "./BasicLights";
import Ground from "./Ground";
import CameraRig from "./CameraEffect";

export default function SceneCanvas() {
  // Different camera positions
  type CamPositionType = "whole" | "close" | "top" | "extreme";

  // State management
  const [materialType, setMaterialType] = useState<string>("blue");
  const [cameraPreset, setCameraPreset] = useState<CamPositionType>("whole");

  // Object Selection State
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  // Ref for controls
  const controlsRef = useRef<OrbitCtrls>(null);

  return (
    <div>
      {/** Control Panel */}
      <ControlPanel
        materialType={materialType}
        setMaterialType={setMaterialType}
        cameraPreset={cameraPreset}
        setCameraPreset={setCameraPreset}
        selectedObject={selectedObject}
      />

      {/** 3D Scene Setup */}
      <div style={{ width: "100%", height: 480 }}>
        <Canvas camera={{ fov: 50 }}>
          {/** Handles Camera State */}
          <CameraRig preset={cameraPreset as CamPositionType} />
          <color attach="background" args={["#f3f4f6"]} />
          <Suspense fallback={null}>
            <BasicLights />
            <DemoModel
              isSelected={selectedObject === "demoModel"}
              onSelect={() => setSelectedObject("demoModel")}
              onDeselect={() => setSelectedObject(null)}
              materialType={materialType}
            />
            <Ground />
            <OrbitControls
              key={cameraPreset}
              ref={controlsRef}
              enablePan={false}
              target={[0, 0, 0]}
              enableDamping
              dampingFactor={0.08}
              minDistance={1.5}
              maxDistance={8}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
