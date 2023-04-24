Create an app template
======================

Create a standard SvelteKit app
-------------------------------

```bash
$ npm create svelte@latest create-app
$ cd create-app
$ mkdir src/lib src/bin
$ npm install
$ npm install -D @sveltejs/adapter-static @sveltejs/adapter-vercel
$ npm run dev -- --open
```

Change `src/routes/+page.svelte` to:

```svelte
<h1>A Svelte Template</h1>
```
and note the immediate change to the web page

Initialize git
--------------

```bash
$ git init
$ git add -A
$ git commit -m "initial commit"
$ git branch -M main
```

Change `package.json`
---------------------

```json
{
	"name": "@jdeighan/create-app",
	"version": "1.0.0",
	"type": "module",
	"author": "John Deighan",
	"license": "MIT",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^2.0.0",
		"@sveltejs/adapter-static": "^2.0.2",
		"@sveltejs/adapter-vercel": "^2.4.2",
		"@sveltejs/kit": "^1.5.0",
		"svelte": "^3.54.0",
		"vite": "^4.2.0"
	}
}
```

Enable PostCSS
--------------

Install PostCSS:

```bash
$ npx svelte-add@latest postcss
$ npm install
$ npm install -D autoprefixer postcss-preset-env
```

Remove the file `postcss.config.cjs` and replace it with `postcss.config.js`;

```js
import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env'

export default {
	plugins: [
		autoprefixer({}),
		presetEnv({stage: 1}),
		],
	};
```

RESTART THE DEV SERVER

Check PostCSS by changing `src/routes/+page.svelte` to:

```svelte
<h1>Welcome to SvelteKit</h1>

<div class="main">
	<div class="postcss">
		<h1>Welcome to PostCSS</h1>
	</div>
	<div class="hello">
		<h1>Hello Again</h1>
	</div>
</div>

<style lang="postcss">
	div.main {
		& div.postcss {
			color: green;
			}
		& div.hello {
			color: violet;
			}
		}
</style>
```

Import some @jdeighan libs, like base-utils
-------------------------------------------

```bash
$ npm install -D @jdeighan/base-utils
```

Enable CoffeeScript
-------------------

```bash
$ npm install -D coffeescript npm-run-all @jdeighan/svelte-utils
$ npm install -D @sveltejs/adapter-static @sveltejs/adapter-vercel
```

Change `package.json` "scripts" section to:

```json
	"scripts": {
		"coffee:watch": "npx coffee -c -w .",
		"vite:dev": "vite dev",
		"dev": "npx coffee -c . && run-p coffee:watch vite:dev",
		"build": "npx coffee -c . && vite build",
		"preview": "vite preview"
		},
```

Change your `svelte.config.js` file to:

```js
import sveltePreProc from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import {coffeePreProcessor} from "@jdeighan/svelte-utils/preprocessors";

export default {
	kit: {
		adapter: adapter(),
		},

	preprocess: [
		sveltePreProc({
			postcss: true,
			script: coffeePreProcessor,
			}),
		],
	};
```

If you want to use an adapter other than `adapter-static`, simply
change it in the import statement.

To test, change `src/routes/+page.svelte` to:

```svelte
<h1>Welcome to SvelteKit</h1>

<div class="main">
	<div class="postcss">
		<h1>Welcome to PostCSS</h1>
	</div>
	<div class="hello">
		<h1>Hello {name}</h1>
	</div>
</div>

<label>
	What is your name?
	<input bind:value={name} bind:this={input}/>
</label>

<button on:click={clearName}>
	Clear
</button>

<script lang="coffee">
	import {undef} from '@jdeighan/base-utils'

	name = 'John Deighan'
	input = undef
	clearName = () ->
		name = ''
		input.focus()
</script>

<style lang="postcss">
	div.main {
		& div.postcss {
			color: green;
			}
		& div.hello {
			color: violet;
			}
		}
</style>
```

Add a `robots.txt` file
-----------------------

Add this file to your `static` folder

```text
User-agent: * Disallow: /
```

This prevents web crawlers from crawling your site. When you have
a working web site, you probably want search engines to find it,
in which case you should Google 'robot.txt files'.

Make offline capable/installable
--------------------------------

Put the file `favicon.svg` into the `static` folder

3. Create a Web App Manifest `static/manifest.json`:

```json
{
	"name": "My App",
	"short_name": "my-app",
	"start_url": "/",
	"display": "standalone",
	"theme_color": "#ffffff",
	"background_color": "#000000",
	"icons": [
		{
			"sizes": "any",
			"src": "favicon.svg"
			}
		]
	}
```

Change the name, etc. to something appropriate for your app

Change your favicon to `favicon.svg` in `src/app.html`.

Add these lines to the `<head>` section of `src/app.html`:

```html
		<link rel="manifest" href="%sveltekit.assets%/manifest.json" />
		<title>My App!</title>
```

Change the title to something appropriate for your app

Install package workbox-precaching:

```bash
$ npm install -D workbox-precaching
```

Create the file `src/service-worker.js`:

```js
import {build, files, prerendered, version} from '$service-worker';
import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching';

const lPrecache = [
	'/',
	...build,
	...files,
	...prerendered,
	].map(s => ({
		url: s,
		revision: version
		}));

precacheAndRoute(lPrecache);
```

Change `vite.config.js` to:

```js
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.NODE_ENV': '"production"',
		},
	});
```

To test, open your web page in Google Chrome and check for
error messages in Applications / Manifest and Service Worker

Enable using markdown
---------------------

Install mdsvex:

```bash
$ npm install -D mdsvex
```

Change your `svelte.config.js` to:

```js
import sveltePreProc from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
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
```

Add a simple menu with access to README.md
------------------------------------------

See `https://www.youtube.com/watch?v=S-VeYcOCFZw&t=65s` for
a way to create better menus.

Change `src/routes/+layout.svelte`to:

```svelte
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/readme">How to build</a>
</nav>

<slot/>

<script>
	import "../app.postcss";
</script>

<style lang="postcss">
	nav {
		background-color: lightBlue;
		& a {
			border: none;
			text-decoration: none;
			color: black;
			font-size: 16pt;
			cursor: pointer;
			padding: 0;
			&:hover {
				background-color: blue;
				color: white;
				}
			}
		}
</style>
```

Create the folders `src/routes/readme` and `src/routes/about`

Create the file `src/routes/about/+page.md`

```markdown
About my app
============

It's really **great**!
```

Add this key to "scripts" in the file `package.json`:

```json
		"readme": "cp ./README.md ./src/routes/about/+page.md",
```

In `package.json`, prepend "npm run readme &&" to `scripts/dev` and `scripts/build`.

To get better syntax hilighting for your code blocks,
you can go to `https://github.com/PrismJS/prism-themes`,
click on `themes`
and find a theme you like (I use prism-gruvbox-light.css).
To use it, copy the source code for the theme,
put it in a file named markdown.css in your static folder,
which is in your root folder, then in your app.html file,
add this to your <head> section:

```html
<link rel="stylesheet" href="%sveltekit.assets%/markdown.css"/>
```


Add a post install script
-------------------------

Create the file `src/bin/post-install.js`:

```js
#!/usr/bin/env node

console.log("Everything installed OK");
```

Add this key to your `package.json` file:

```json
	"bin": {
		"@jdeighan/create-app": "./src/bin/post-install.js"
		},
```

Push to GitHub
--------------

Create the repo on GitHub:

```bash
$ gh repo create create-app --public
$ git remote add origin https://github.com/johndeighan/create-app
$ git push -u origin main
```

Push to npm
-----------

```bash
$ npm publish --access=public
``

Use it
------

Now, you should be able to create a new project using:

```bash
$ npm create @jdeighan/app myapp
```
