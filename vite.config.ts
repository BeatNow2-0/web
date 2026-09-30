import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
  },
  build: {
    sourcemap: mode !== 'production',
  },
}));
