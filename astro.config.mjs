import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://cheat-sheet-01y.pages.dev",
  integrations: [
    mdx(),
    tailwind(),
    react(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
});
