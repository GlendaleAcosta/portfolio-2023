import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [basicSsl()]
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});