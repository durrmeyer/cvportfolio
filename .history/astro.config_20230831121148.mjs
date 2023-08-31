import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://durrmeyer.github.io/cvportfolio',
 
});
