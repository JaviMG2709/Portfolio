// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "https://javimg2709.github.io/Portfolio/",
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});