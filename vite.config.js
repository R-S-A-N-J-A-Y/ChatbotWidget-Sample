import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: "8000",
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "/index.html",
      output: {
        // This will ensure consistent file names
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/index.js",
        assetFileNames: "assets/index.css",
      },
    },
  },
});
