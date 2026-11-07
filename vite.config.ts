import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  root: './client',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './client/src'),
      '@shared': path.resolve(import.meta.dirname, './shared'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5657',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
  },
});
