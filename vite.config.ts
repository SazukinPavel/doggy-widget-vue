import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin(), vue()],
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
