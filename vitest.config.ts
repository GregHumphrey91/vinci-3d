import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/app/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".next", ".vercel"],
  },
  // Explicitly ignore build tools during testing
  plugins: [],
  // Disable CSS processing entirely
  css: {
    modules: false,
  },
  // Ignore PostCSS and other build tools
  optimizeDeps: {
    exclude: ["@tailwindcss/postcss", "postcss"],
  },
});
