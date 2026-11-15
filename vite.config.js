import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        workspace: resolve(import.meta.dirname, 'workspace.html'),
        process: resolve(import.meta.dirname, 'process.html'),
        pricing: resolve(import.meta.dirname, 'pricing.html'),
        studio: resolve(import.meta.dirname, 'studio.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      },
    },
  },
});
