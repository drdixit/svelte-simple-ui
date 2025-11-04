// Use the static adapter for a production-ready static site
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			// default options fine; output will be in build/
			pages: 'build',
			assets: 'build'
		}),
		// prerendering will be handled during the static build step
	}
};

export default config;
