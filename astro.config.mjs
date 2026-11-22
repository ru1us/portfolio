import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://byrufus.art',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [solid(), tailwind()]
});
