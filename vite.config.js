import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            ziggy: "vendor/tightenco/ziggy/src/js/route.js",
            // 'vendor/tightenco/ziggy/dist/vue.es.js' if using the Vue plugin
        },
    },
});
