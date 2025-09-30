import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { appConfig } from './config/app.config';

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: appConfig.dev.port,
    host: appConfig.dev.host,
    open: appConfig.dev.open,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: appConfig.dev.previewPort,
    host: appConfig.dev.host,
    open: appConfig.dev.open,
  },
  build: {
    outDir: appConfig.build.outDir,
    sourcemap: appConfig.build.sourcemap,
    minify: appConfig.build.minify,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
  css: {
    devSourcemap: true,
  },
});