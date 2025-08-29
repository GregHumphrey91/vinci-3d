"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface DemoModelProps {
  materialType: string;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export default function DemoModel({
  materialType,
  isSelected,
  onSelect,
  onDeselect,
}: DemoModelProps) {
  // Ref for mesh
  const meshRef = useRef<Mesh>(null);

  // Sets material with switch statement
  const getMaterialProps = () => {
    switch (materialType) {
      case "blue":
        return { color: "#7aa2ff", roughness: 0.4, metalness: 0.2 };
      case "red":
        return { color: "#ef4444", roughness: 0.6, metalness: 0.1 };
      case "gold":
        return { color: "#fbbf24", roughness: 0.2, metalness: 0.8 };
      default:
        return { color: "#7aa2ff", roughness: 0.4, metalness: 0.2 };
    }
  };

  // Handles click events
  const handleClick = () => {
    // If selected, deselect & vice versa
    if (isSelected) {
      onDeselect();
    } else {
      onSelect();
    }
  };

  // Change cursor on hover
  const handlePointerEnter = () => {
    document.body.style.cursor = "pointer";
  };

  // Revert cursor back to normal on leave
  const handlePointerLeave = () => {
    document.body.style.cursor = "auto";
  };

  // If the mesh ref is set + user has clicked object 
  useFrame((state) => {
    if (meshRef.current && isSelected) {
      meshRef.current.rotation.y += 0.01; // Slows rotation if selected
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial {...getMaterialProps()} />

      {/** Selection outline effect */}
      {isSelected && (
        <mesh>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial
            color="#00ff00"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      )}
    </mesh>
  );
}
