import SceneCanvas from "./components/SceneCanvas";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h1 className="text-xl font-bold text-white">Vinci 3D</h1>
            </div>
            <div className="text-sm text-slate-300">
              Interactive 3D Scene Demo
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Project Description */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interactive 3D Scene with React Three Fiber
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A demonstration of smooth camera transitions, material switching,
            and object interaction built with Next.js, TypeScript, and React
            Three Fiber.
          </p>
        </div>

        {/* 3D Scene */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
          <SceneCanvas />
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Smooth Camera Transitions
            </h3>
            <p className="text-slate-300 text-sm">
              Experience fluid camera movements between different viewing angles
              with easing animations.
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Material Switching
            </h3>
            <p className="text-slate-300 text-sm">
              Switch between different materials and colors in real-time without
              losing surface detail.
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Object Interaction
            </h3>
            <p className="text-slate-300 text-sm">
              Click to select and interact with 3D objects with visual feedback
              and metadata display.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Built With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Next.js 15", color: "bg-black text-white" },
              { name: "React Three Fiber", color: "bg-blue-600 text-white" },
              { name: "TypeScript", color: "bg-blue-700 text-white" },
              { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
              { name: "Three.js", color: "bg-green-600 text-white" },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-800/30 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center text-slate-400 text-sm">
            <p>Vinci 3D Take-Home Project • Interactive 3D Scene Demo</p>
            <p className="mt-1">
              Built with modern web technologies for smooth 3D experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
