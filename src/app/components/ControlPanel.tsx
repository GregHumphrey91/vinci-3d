"use client";

type CamPositionType = "whole" | "close" | "top" | "extreme";

interface ControlPanelProps {
  materialType: string;
  setMaterialType: (type: string) => void;
  cameraPreset: CamPositionType;
  setCameraPreset: (preset: CamPositionType) => void;
  selectedObject: string | null;
}

interface CameraPresetType {
  key: CamPositionType;
  label: string;
  position: [number, number, number];
}

const colorsArr: string[] = ["blue", "red", "gold"];

const cameraPresetArr: CameraPresetType[] = [
  { key: "whole", label: "Whole Object", position: [3, 2, 3] },
  { key: "close", label: "Close Up", position: [1.5, 1, 1.5] },
  { key: "top", label: "Top View", position: [0, 3, 0] },
  { key: "extreme", label: "Extreme View", position: [1.2, 1.2, 1.2] },
];

export default function ControlPanel({
  materialType,
  setMaterialType,
  cameraPreset,
  setCameraPreset,
  selectedObject,
}: ControlPanelProps) {
  return (
    <div className="mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        3D Scene Controls
      </h3>

      {/* Material Controls */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Type
        </label>
        <div className="flex gap-2">
          {/** Options arr for different colors/materials */}
          {colorsArr.map((type) => (
            <button
              key={type}
              onClick={() => setMaterialType(type)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                materialType === type
                  ? "bg-blue-600 text-white" // styling for currently active btn
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300" // styling for inactive btns
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Camera Controls */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Camera View
        </label>
        <div className="flex gap-2">
          {cameraPresetArr.map((preset) => (
            // Add cam preset event handler + css styling for active / inactive states
            <button
              key={preset.key}
              onClick={() => {
                setCameraPreset(preset.key);
              }}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                cameraPreset === preset.key
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/** Selection Info */}
      <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-200">
        <h4 className="text-sm font-medium text-blue-800 mb-2">
          Selection Info
        </h4>
        {selectedObject ? (
          <div className="text-sm text-blue-700">
            <p>
              <strong>Selected:</strong> {selectedObject}
            </p>
            <p>
              <strong>Type:</strong> Icosahedron (20-sided 3D shape)
            </p>
            <p>
              <strong>Material:</strong> {materialType}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              �� Click again to deselect
            </p>
          </div>
        ) : (
          <p className="text-sm text-blue-600">
            Click on the 3D model to select it
          </p>
        )}
      </div>

      {/* Current State Display */}
      <div className="text-sm text-gray-600 text-center">
        <p>
          <strong>Current Material:</strong> {materialType}
        </p>
        <p>
          <strong>Current View:</strong> {cameraPreset}
        </p>
      </div>
    </div>
  );
}
