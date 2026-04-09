// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline CSS to avoid render-blocking request (PageSpeed: ~1.2s LCP savings)
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()]
  },
});
