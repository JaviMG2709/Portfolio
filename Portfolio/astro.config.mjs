// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://javig2709.github.io',
    base: '/Portfolio/',
    vite: { plugins: [tailwindcss()] },
});
