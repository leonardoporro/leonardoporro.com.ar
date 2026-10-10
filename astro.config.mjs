// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://leonardoporro.com.ar",
  integrations: [sitemap()],
  trailingSlash: "always",
  build: { format: "directory" },
});
