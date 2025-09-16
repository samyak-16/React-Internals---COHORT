import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', //Backend Server URL
        secure: false, // If the backend server uses HTTPS, set this to true

        changeOrigin: true, // For virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
