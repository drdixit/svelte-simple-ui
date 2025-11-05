import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: false
        }),
        paths: {
            base: '',
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore errors for sverdle route
                if (path.startsWith('/sverdle')) {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;
