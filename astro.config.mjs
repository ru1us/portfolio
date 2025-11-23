import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ru1us.github.io',
  base: '/portp',
  integrations: [solid(), tailwind()]
});
