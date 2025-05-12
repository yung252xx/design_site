// @ts-check
import { defineConfig } from 'astro/config';


export default defineConfig({
  output: "static",
  base: "/design_site/",
  vite: {
    plugins: [tailwindcss()]
  }
});
