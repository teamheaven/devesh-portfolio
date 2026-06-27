import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic"
  },
  resolve: {
    alias: {
      react: fileURLToPath(new URL("./node_modules/react", import.meta.url)),
      "react-dom": fileURLToPath(new URL("./node_modules/react-dom", import.meta.url)),
      "framer-motion": fileURLToPath(new URL("./node_modules/framer-motion", import.meta.url))
    },
    dedupe: ["react", "react-dom"]
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});
