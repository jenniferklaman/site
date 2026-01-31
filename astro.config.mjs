import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jenniferklaman.github.io/site",
  base: "/site/",
  integrations: [mdx(), sitemap(), tailwind()],
});
