import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap'
const routes = [
    '/home',
    '/hotel-management',
    '/investors',
    '/restaurants',
    '/technology',
    '/leaders',
    '/contact',
    '/experience',
    '/terms-and-conditions',
    '/privacy-notice',
    '/experience'
];

export default defineConfig({
    plugins: [react(), Sitemap({ hostname: 'https://norte19.com', dynamicRoutes: routes }),],
    server: {
        port: 3000,
        open: true, // Automatically opens the browser
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        coverage: {
            enabled: true,
            provider: "v8",
            reporter: ['html', 'json-summary', 'lcov'],
            reportsDirectory: './coverage',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                "/node_modules/",
                "/coverage",
                "package.json",
                "package-lock.json",
                "reportWebVitals.ts",
                "setupTests.ts",
                "index.tsx"
            ]
        },
        exclude: ['**/node_modules/**']
    },
});
