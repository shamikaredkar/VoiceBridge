import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Ensure JSON files are treated as assets
  assetsInclude: ['**/*.json'],

  // Configure the build process
  build: {
    rollupOptions: {
      // Externalize dependencies if needed
      external: [],
    },
  },

  // Ensure Vite correctly handles Web Workers
  worker: {
    format: 'es',  // Use ES module format for workers
  },

  resolve: {
    alias: {
      // Add path aliases if needed
      '@': '/src',
    },
  },

  optimizeDeps: {
    include: ['@xenova/transformers'],  // Ensure specific dependencies are pre-bundled
  },
});
