import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3100,
  },
  plugins: react(),
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@containers', replacement: path.resolve(__dirname, 'src/containers') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@menus', replacement: path.resolve(__dirname, 'src/menus') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
    ],
  },
});
