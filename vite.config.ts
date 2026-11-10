import { defineConfig } from "vite";

export default defineConfig({
  base: "/inc-game/",
  build: { outDir: "dist", emptyOutDir: true }
});