import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [tailwind()],
});
