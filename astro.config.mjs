// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  output: "static",
  base: "/design_site/",
  vite: {
    plugins: [tailwindcss()],
  }
});
