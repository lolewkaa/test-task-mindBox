
import react from '@vitejs/plugin-react';
import { defineConfig  } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  base: "/test-task-mindBox",
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
