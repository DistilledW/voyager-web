import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config 

export default defineConfig({
    site: 'https://anonymous-voyager.netlify.app', 
    integrations: [tailwind()],
    server: {
        port: 3000
    },
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' },
            allowedHosts: ['.netlify.app']
        }
    }
});
