import dns from 'node:dns';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// This forces Vite to use `localhost` instead of `127.0.0.1`. Otherwise, we run into CORS issues
// since `localhost:8080` and `localhost:8082` are same-origin, but `127.0.0.1:8082` isn't.
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    css: {
      
      modules: {
        // Remove this after changing all of our SCSS @import to @use
        scopeBehaviour: 'local',
        generateScopedName: (name) => name,
      },
    },
    build: {
      lib: {
        name: 'AdyenDocumentViewer',
        entry: resolve(__dirname, 'src/index.tsx'),
        formats: ['es', 'umd'],
        fileName: 'adyen-document-viewer.min',
      },
      rollupOptions: {
        output: {
          assetFileNames: "adyen-document-viewer.[ext]",
        },
      },
      minify: true,
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
    plugins: [preact()],
  };
});
