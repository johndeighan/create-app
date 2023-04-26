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
			padding: 3px 12px;
			text-decoration: none;
			color: black;
			font-size: 16pt;
			cursor: pointer;
			&:hover {
				background-color: blue;
				color: white;
				}
			}
		}
</style>
