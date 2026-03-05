import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages branch deploy (no Actions): publish from /docs
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});