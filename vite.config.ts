import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_URL || "/",

  // Development server configuration
  server: {
    host: "::",
    port: process.env.VITE_DEV_PORT ? parseInt(process.env.VITE_DEV_PORT) : 5173,
    open: true,
  },

  // Production build optimizations
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          router: ['react-router-dom'],
          utils: ['clsx', 'tailwind-merge', 'date-fns'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
  },

  // Preview server for production builds
  preview: {
    port: 4173,
    host: "::",
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
}));
