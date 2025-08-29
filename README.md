# Vinci 3D - Interactive 3D Scene

A Next.js application demonstrating smooth camera transitions, 3D object interaction, and material switching built with React Three Fiber and TypeScript.

## Features

### 🎥 Smooth Camera Transitions

- **4 Camera Presets**: Whole Object, Close Up, Top View, Extreme View
- **60fps Animations**: Smooth easing transitions between camera positions
- **No Clipping**: Optimized camera positioning to prevent object clipping
- **Easing Functions**: Natural camera movement using cubic easing

### 🎮 Interactive 3D Scene

- **Object Selection**: Click to select/deselect the 3D model
- **Visual Feedback**: Green wireframe outline when selected
- **Rotation Animation**: Selected objects rotate smoothly
- **Material Switching**: Toggle between Blue, Red, and Gold materials

### 🎨 Professional UI

- **Clean Interface**: Modern, responsive design with Tailwind CSS
- **Control Panel**: Intuitive controls for camera and material settings
- **Real-time Updates**: Live display of current material and camera view
- **Mobile Responsive**: Optimized for various screen sizes

## Technical Implementation

### Core Technologies

- **Next.js 15** with App Router
- **React Three Fiber** for 3D scene management
- **Three.js** for 3D graphics
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Architecture

- **Modular Components**: Separated concerns for camera, controls, and 3D objects
- **Custom Hooks**: Efficient state management with React hooks
- **Performance Optimized**: 60fps animations with proper frame management
- **Clean Code**: Well-structured, maintainable codebase

### Camera System

- **Preset Management**: Defined camera positions with smooth transitions
- **Animation Loop**: `useFrame` hook for consistent 60fps updates
- **Easing Functions**: Mathematical easing for natural movement
- **Orbit Controls**: Manual camera control with smooth handoff

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vinci-3d

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test:run

# Build for production
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Open test UI

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── SceneCanvas.tsx      # Main 3D scene orchestrator
│   │   ├── CameraEffect.tsx     # Camera animation and positioning
│   │   ├── ControlPanel.tsx     # UI controls for scene interaction
│   │   ├── DemoModel.tsx        # 3D model with selection logic
│   │   ├── BasicLights.tsx      # Scene lighting setup
│   │   └── Ground.tsx           # Ground plane component
│   ├── lib/
│   │   ├── cameraMath.ts        # Camera presets and math utilities
│   │   └── __tests__/           # Unit tests
│   └── test/
│       └── setup.ts             # Test environment setup
```

## Key Technical Decisions

### Camera Animation Approach

- **useRef for State**: Prevents unnecessary re-renders during animation
- **useFrame Loop**: Ensures consistent 60fps performance
- **Easing Functions**: Mathematical easing for natural movement feel
- **Preset System**: Predefined positions for consistent user experience

### Performance Optimizations

- **Suspense Boundaries**: Proper loading states for 3D assets
- **Ref-based Animation**: Avoids React re-render cycles
- **Optimized Renders**: Only update camera when necessary
- **Efficient Math**: Vector calculations for smooth positioning

### Testing Strategy

- **Unit Tests**: Core math functions and utilities
- **Mocked Dependencies**: Isolated testing of 3D components
- **Vitest**: Fast, modern testing framework
- **Comprehensive Coverage**: Tests for edge cases and core functionality

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **WebGL Support**: Requires WebGL 2.0 support
- **Mobile**: Responsive design with touch-friendly controls

## Future Enhancements

- **Additional Materials**: More material types and textures
- **Animation Sequences**: Predefined camera paths and tours
- **Performance Metrics**: FPS monitoring and optimization
- **Accessibility**: Screen reader support and keyboard navigation

## License

This project is created as a take-home assessment for Vinci.
