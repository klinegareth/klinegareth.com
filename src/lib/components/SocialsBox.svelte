<script lang="ts">
	export let title = 'links';
	import Socials from '$lib/content/socials.json';
</script>

<div id="container">
	<h1>{title}</h1>
	<div class="header-description">
        <p>{Socials.description}</p>	
	</div>
	<div class="link-section">
		{#each Socials.links as social}
			<a href={social.url} target="_blank" rel="noreferrer noopener">{social.name}</a>
		{/each}
	</div>
</div>

<style>
	#container {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: var(--color-box-bg);
		border: solid 1px var(--color-text);
		padding: 15px;
		overflow: hidden;
	}

	.header-description {
		margin: 0px 15px 15px;
		text-align: center;
	}

	h1 {
		color: var(--color-highlight);
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
		margin-bottom: 15px;
	}
	.link-section {
		height: 100%;
		display: flex;
		gap: 20px;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
</style>
