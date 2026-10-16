// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://flashkards.app',
  // The CSS is small, so inline it rather than block the first paint on a request.
  // Emit privacy.html rather than privacy/index.html, so Cloudflare serves
  // /privacy directly instead of redirecting to /privacy/.
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  // Astro preloads Inter and generates a metric-matched fallback, so text
  // doesn't visibly swap fonts while the page loads.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
  ],
});
