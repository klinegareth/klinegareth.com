<script lang="ts">
	export let title: string;
</script>

<div id="container">
	<h1>{title}</h1>
    <div id="content">
        <slot>
            lorem ipsum etc and such and such lol
        </slot>
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
        overflow-y: scroll;
	}
</style>
