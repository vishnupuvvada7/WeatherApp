import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false, // Disable CSS code splitting to ensure all CSS is bundled
    rollupOptions: {
      external: ['bootstrap'], // Declare Bootstrap as an external module
    },
  },
});
