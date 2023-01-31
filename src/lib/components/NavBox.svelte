<script lang="ts">
	export let title = 'Navigation';
	import Links from '$lib/content/navigation.json';
</script>

<div id="container">
	<h1>{title}</h1>
	<div id="content">
		<nav>
			{#each Object.entries(Links.links) as link}
				<a href={link[1].url}>{link[1].name}</a>
			{/each}
		</nav>
	</div>
</div>

<style>
	#container {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--color-box-bg);
		border: solid 1px var(--color-text);
		padding: 15px;
	}

	h1 {
		color: var(--color-highlight);
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
	}

	#content {
		color: var(--color-text);
		text-align: justify;
	}
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
