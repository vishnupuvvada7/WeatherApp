import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        /^bootstrap\/dist\/css\/bootstrap\.min\.css$/,
        'react-chartjs-2', // Add react-chartjs-2 as an external module
        'chart.js/auto'
      ],
    },
  },
});
