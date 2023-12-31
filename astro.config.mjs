import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [basicSsl()]
  },
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});