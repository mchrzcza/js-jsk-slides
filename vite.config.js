import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { localImports: false, pretty: true };

export default defineConfig({
  plugins: [pugPlugin(options)],
  base: './',
  server: {
      port: 1234,
      open: true
  }
});