import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteSvgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSvgr({
      svgrOptions: {},
    }),
  ],
});
