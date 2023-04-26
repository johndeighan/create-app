import sveltePreProc from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";
import {coffeePreProcessor} from "@jdeighan/svelte-utils/preprocessors";
import {mdsvex} from 'mdsvex';

export default {
	extensions: ['.svelte','.md'],
	kit: {
		adapter: adapter(),
		},
	preprocess: [
		sveltePreProc({
			postcss: true,
			script: coffeePreProcessor,
			}),
		mdsvex({
			extensions: ['.md'],
			}),
		],
	};
