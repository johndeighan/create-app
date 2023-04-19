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
