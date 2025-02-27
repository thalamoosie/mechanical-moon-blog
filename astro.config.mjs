// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import mailObfuscation from "astro-mail-obfuscation";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), mailObfuscation()],
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
  },
});