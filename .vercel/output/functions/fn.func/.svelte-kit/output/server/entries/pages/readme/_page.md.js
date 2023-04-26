import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Create an app template</h1>
<h1>How to create this package</h1>
<h2>Create a standard SvelteKit app</h2>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> create svelte@latest create-app
$ <span class="token builtin class-name">cd</span> create-app
$ <span class="token function">mkdir</span> src/lib src/bin
$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @sveltejs/adapter-static @sveltejs/adapter-vercel
$ <span class="token function">npm</span> run dev -- <span class="token parameter variable">--open</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Change <code>src/routes/+page.svelte</code> to:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>A Svelte Template<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>and note the immediate change to the web page</p>
<h2>Initialize git</h2>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">git</span> init
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"initial commit"</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-M</span> main</code>`}<!-- HTML_TAG_END --></pre>
<h2>Change <code>package.json</code></h2>
<pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"@jdeighan/create-app"</span><span class="token punctuation">,</span>
	<span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
	<span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
	<span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"John Deighan"</span><span class="token punctuation">,</span>
	<span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
	<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite dev"</span><span class="token punctuation">,</span>
		<span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span>
		<span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"@sveltejs/adapter-auto"</span><span class="token operator">:</span> <span class="token string">"^2.0.0"</span><span class="token punctuation">,</span>
		<span class="token property">"@sveltejs/adapter-static"</span><span class="token operator">:</span> <span class="token string">"^2.0.2"</span><span class="token punctuation">,</span>
		<span class="token property">"@sveltejs/adapter-vercel"</span><span class="token operator">:</span> <span class="token string">"^2.4.2"</span><span class="token punctuation">,</span>
		<span class="token property">"@sveltejs/kit"</span><span class="token operator">:</span> <span class="token string">"^1.5.0"</span><span class="token punctuation">,</span>
		<span class="token property">"svelte"</span><span class="token operator">:</span> <span class="token string">"^3.54.0"</span><span class="token punctuation">,</span>
		<span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"^4.2.0"</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Enable PostCSS</h2>
<p>Install PostCSS:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ npx svelte-add@latest postcss
$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> autoprefixer postcss-preset-env</code>`}<!-- HTML_TAG_END --></pre>
<p>Remove the file <code>postcss.config.cjs</code> and replace it with <code>postcss.config.js</code>;</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">'autoprefixer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> presetEnv <span class="token keyword">from</span> <span class="token string">'postcss-preset-env'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">presetEnv</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span><span class="token literal-property property">stage</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>RESTART THE DEV SERVER</p>
<p>Check PostCSS by changing <code>src/routes/+page.svelte</code> to:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome to SvelteKit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>postcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome to PostCSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello Again<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>postcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">div.main</span> <span class="token punctuation">&#123;</span>
		<span class="token selector">&amp; div.postcss</span> <span class="token punctuation">&#123;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token selector">&amp; div.hello</span> <span class="token punctuation">&#123;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> violet<span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Import some @jdeighan libs, like base-utils</h2>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @jdeighan/base-utils</code>`}<!-- HTML_TAG_END --></pre>
<h2>Enable CoffeeScript</h2>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> coffeescript npm-run-all @jdeighan/svelte-utils
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @sveltejs/adapter-static @sveltejs/adapter-vercel</code>`}<!-- HTML_TAG_END --></pre>
<p>Change <code>package.json</code> “scripts” section to:</p>
<pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json">	<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"coffee:watch"</span><span class="token operator">:</span> <span class="token string">"npx coffee -c -w ."</span><span class="token punctuation">,</span>
		<span class="token property">"vite:dev"</span><span class="token operator">:</span> <span class="token string">"vite dev"</span><span class="token punctuation">,</span>
		<span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"npx coffee -c . &amp;&amp; run-p coffee:watch vite:dev"</span><span class="token punctuation">,</span>
		<span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"npx coffee -c . &amp;&amp; vite build"</span><span class="token punctuation">,</span>
		<span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Change your <code>svelte.config.js</code> file to:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> sveltePreProc <span class="token keyword">from</span> <span class="token string">"svelte-preprocess"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">"@sveltejs/adapter-static"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>coffeePreProcessor<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@jdeighan/svelte-utils/preprocessors"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">sveltePreProc</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token literal-property property">script</span><span class="token operator">:</span> coffeePreProcessor<span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you want to use an adapter other than <code>adapter-static</code>, simply
change it in the import statement.</p>
<p>To test, change <code>src/routes/+page.svelte</code> to:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome to SvelteKit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>postcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome to PostCSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello <span class="token language-javascript"><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>
	What is your name?
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>input<span class="token punctuation">&#125;</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>clearName<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
	Clear
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>coffee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>undef<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@jdeighan/base-utils'</span>

	name <span class="token operator">=</span> <span class="token string">'John Deighan'</span>
	input <span class="token operator">=</span> undef
	clearName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
		name <span class="token operator">=</span> <span class="token string">''</span>
		input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>postcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">div.main</span> <span class="token punctuation">&#123;</span>
		<span class="token selector">&amp; div.postcss</span> <span class="token punctuation">&#123;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token selector">&amp; div.hello</span> <span class="token punctuation">&#123;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> violet<span class="token punctuation">;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Add a <code>robots.txt</code> file</h2>
<p>Add this file to your <code>static</code> folder</p>
<pre class="language-text"><!-- HTML_TAG_START -->${`<code class="language-text">User-agent: * Disallow: /</code>`}<!-- HTML_TAG_END --></pre>
<p>This prevents web crawlers from crawling your site. When you have
a working web site, you probably want search engines to find it,
in which case you should Google ‘robot.txt files’.</p>
<h2>Make offline capable/installable</h2>
<p>Put the file <code>favicon.svg</code> into the <code>static</code> folder</p>
<ol start="3"><li>Create a Web App Manifest <code>static/manifest.json</code>:</li></ol>
<pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token punctuation">&#123;</span>
	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
	<span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"my-app"</span><span class="token punctuation">,</span>
	<span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
	<span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
	<span class="token property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
	<span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
	<span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">&#123;</span>
			<span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"any"</span><span class="token punctuation">,</span>
			<span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"favicon.svg"</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Change the name, etc. to something appropriate for your app</p>
<p>Change your favicon to <code>favicon.svg</code> in <code>src/app.html</code>.</p>
<p>Add these lines to the <code>&lt;head&gt;</code> section of <code>src/app.html</code>:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manifest<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%sveltekit.assets%/manifest.json<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>My App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Change the title to something appropriate for your app</p>
<p>Install package workbox-precaching:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> workbox-precaching</code>`}<!-- HTML_TAG_END --></pre>
<p>Create the file <code>src/service-worker.js</code>:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>build<span class="token punctuation">,</span> files<span class="token punctuation">,</span> prerendered<span class="token punctuation">,</span> version<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$service-worker'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>cleanupOutdatedCaches<span class="token punctuation">,</span> precacheAndRoute<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'workbox-precaching'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> lPrecache <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string">'/'</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>build<span class="token punctuation">,</span>
	<span class="token operator">...</span>files<span class="token punctuation">,</span>
	<span class="token operator">...</span>prerendered<span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">url</span><span class="token operator">:</span> s<span class="token punctuation">,</span>
		<span class="token literal-property property">revision</span><span class="token operator">:</span> version
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">precacheAndRoute</span><span class="token punctuation">(</span>lPrecache<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Change <code>vite.config.js</code> to:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>sveltekit<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltejs/kit/vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>defineConfig<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">sveltekit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token string-property property">'"production"'</span><span class="token operator">:</span> <span class="token string">'"production"'</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>To test, open your web page in Google Chrome and check for
error messages in Applications / Manifest and Service Worker</p>
<h2>Enable using markdown</h2>
<p>Install mdsvex:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> mdsvex</code>`}<!-- HTML_TAG_END --></pre>
<p>Change your <code>svelte.config.js</code> to:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> sveltePreProc <span class="token keyword">from</span> <span class="token string">"svelte-preprocess"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">"@sveltejs/adapter-static"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>coffeePreProcessor<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@jdeighan/svelte-utils/preprocessors"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>mdsvex<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'mdsvex'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.svelte'</span><span class="token punctuation">,</span><span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">sveltePreProc</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token literal-property property">script</span><span class="token operator">:</span> coffeePreProcessor<span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Add a simple menu with access to README.md</h2>
<p>See <code>https://www.youtube.com/watch?v=S-VeYcOCFZw&amp;t=65s</code> for
a way to create better menus.</p>
<p>Change <code>src/routes/+layout.svelte</code>to:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/readme<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>How to build<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token string">"../app.postcss"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>postcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">nav</span> <span class="token punctuation">&#123;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> lightBlue<span class="token punctuation">;</span>
		<span class="token selector">&amp; a</span> <span class="token punctuation">&#123;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
			<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span> 16pt<span class="token punctuation">;</span>
			<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
			<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token selector">&amp;:hover</span> <span class="token punctuation">&#123;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
				<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
				<span class="token punctuation">&#125;</span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Create the folders <code>src/routes/readme</code> and <code>src/routes/about</code></p>
<p>Create the file <code>src/routes/about/+page.md</code></p>
<pre class="language-markdown"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token title important">About my app
<span class="token punctuation">============</span></span>

It's really <span class="token bold"><span class="token punctuation">**</span><span class="token content">great</span><span class="token punctuation">**</span></span>!</code>`}<!-- HTML_TAG_END --></pre>
<p>Add this key to “scripts” in the file <code>package.json</code>:</p>
<pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json">		<span class="token property">"readme"</span><span class="token operator">:</span> <span class="token string">"cp ./README.md ./src/routes/about/+page.md"</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In <code>package.json</code>, prepend “npm run readme &amp;&amp;” to <code>scripts/dev</code> and <code>scripts/build</code>.</p>
<p>To get better syntax hilighting for your code blocks,
you can go to <code>https://github.com/PrismJS/prism-themes</code>,
click on <code>themes</code>
and find a theme you like (I use prism-gruvbox-light.css).
To use it, copy the source code for the theme,
put it in a file named markdown.css in your static folder,
which is in your root folder, then in your app.html file,
add this to your <head>section:</head></p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%sveltekit.assets%/markdown.css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Add an install script</h2>
<p>Create the file <code>src/bin/install.js</code>:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token hashbang comment">#!/usr/bin/env node</span>

<span class="token comment">// --- Verify arguments</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'You have to provide a name to your app.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'For example :'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'    npm create @jdeighan/app my-app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

<span class="token comment">// --- Parse arguments and option</span>
<span class="token keyword">const</span> projectName <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> currentPath <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> projectPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>currentPath<span class="token punctuation">,</span> projectName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> git_repo <span class="token operator">=</span> <span class="token string">'https://github.com/johndeighan/create-app.git'</span><span class="token punctuation">;</span>

<span class="token comment">// --- Validate existing folder</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
	fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">'EEXIST'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Directory already exists. Please choose another name for the project.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

<span class="token comment">// --- define steps in workflow</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Downloading files...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">execSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">git clone --depth 1 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>git_repo<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>projectPath<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// --- Change directory</span>
		process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// --- Install dependencies</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Installing dependencies...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">await</span> <span class="token function">runCmd</span><span class="token punctuation">(</span><span class="token string">'npm install'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Dependencies installed successfully.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// --- Clean unused files</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Removing useless files'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npx rimraf ./.git'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		fs<span class="token punctuation">.</span><span class="token function">rmdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">,</span> <span class="token string">'bin'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The installation is done, this is ready to use !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>

<span class="token comment">// --- trigger workflow</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Add this key to your <code>package.json</code> file:</p>
<pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json">	<span class="token property">"bin"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token property">"@jdeighan/create-app"</span><span class="token operator">:</span> <span class="token string">"./src/bin/post-install.js"</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Push to GitHub</h2>
<p>Create the repo on GitHub:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ gh repo create create-app <span class="token parameter variable">--public</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/johndeighan/create-app
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main</code>`}<!-- HTML_TAG_END --></pre>
<h2>Push to npm</h2>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> publish <span class="token parameter variable">--access</span><span class="token operator">=</span>public</code>`}<!-- HTML_TAG_END --></pre>
<h2>Use it</h2>
<p>Now, you should be able to create a new project using:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> create @jdeighan/app myapp</code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  Page as default
};
