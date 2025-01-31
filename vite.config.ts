import { setDefaultResultOrder } from 'node:dns';
import { resolve } from 'node:path';

import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// This forces Vite to use `localhost` instead of `127.0.0.1`. Otherwise, we run into CORS issues
// since `localhost:8080` and `localhost:8082` are same-origin, but `127.0.0.1:8082` isn't.
setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(() => ({
  root: resolve(__dirname, 'playground'),
  publicDir: resolve(__dirname, 'dist'),
  css: {
    modules: {
      // TODO: Remove this after changing all of our SCSS @import to @use
      scopeBehaviour: 'local',
      generateScopedName: (name) => name,
    },
  },
  build: {
    lib: {
      name: 'AdyenDocumentViewer',
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'es' ? 'adyen-document-viewer.min.mjs' : 'adyen-document-viewer.min.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'adyen-document-viewer.min.[ext]',
      },
    },
    minify: true,
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  plugins: [preact()],
  server: {
    host: 'localhost',
    port: 5174,
  },
}));
