// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps
  },
  // Add resolve alias if necessary
  resolve: {
    alias: {
      '@swiper': './src/assets/vendor/swiper/',
    },
  },
});
