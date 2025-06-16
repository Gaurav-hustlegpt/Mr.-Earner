import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',      // Use loopback interface that works in Chrome
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
    },
    // CORS is built-in, but no need for 0.0.0.0 or chrome-extension origins now
  }
});
