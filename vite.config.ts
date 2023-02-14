import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        dir: "dist/plugin/",
        entryFileNames: "plugin.js",
        assetFileNames: "plugin.css",
        chunkFileNames: "chunk.js",
        manualChunks: undefined,
      },
    },
  },
});
