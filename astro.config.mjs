import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [basicSsl()]
  }
});