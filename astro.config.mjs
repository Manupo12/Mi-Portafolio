// astro.config.mjs

import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Primero, añadimos la integración de React para que Astro entienda componentes .jsx
  integrations: [react()],
  
  // Luego, configuramos Vite para que use el plugin de Tailwind CSS
  vite: {
    plugins: [tailwindcss()],
  },
});