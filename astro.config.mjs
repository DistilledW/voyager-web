import { defineConfig } from 'astro/config';
// https://astro.build/config 

export default defineConfig({
    output: 'static', 
    integrations: [],
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
