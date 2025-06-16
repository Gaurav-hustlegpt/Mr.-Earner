import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',              // ensures correct asset paths in production
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    hmr: { protocol: 'ws', host: '127.0.0.1' }
  }
});
