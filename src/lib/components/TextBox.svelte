<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div id="container">
	<h1>{title}</h1>
	<div id="content">
		{content}
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
		overflow: scroll;
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
</style>
