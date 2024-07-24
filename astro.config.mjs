import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  redirects: {
    "/": "/pt-br",
  },
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
});
