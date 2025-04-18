import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './app/components'),
      '@modules': path.resolve(__dirname, './app/modules'),
      '@theme': path.resolve(__dirname, './app/theme'),
      '@store': path.resolve(__dirname, './app/store'),
    },
  },
});
