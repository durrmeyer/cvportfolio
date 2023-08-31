import { defineConfig } from 'astro/config';
import { image } from 'astro/assets';
// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://durrmeyer.github.io',
  
});
