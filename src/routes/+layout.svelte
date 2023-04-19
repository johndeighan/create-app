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
