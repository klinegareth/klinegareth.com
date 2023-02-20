<script lang="ts">
	import NavBox from '$lib/components/NavBox.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import post from "$lib/content/about.json"
</script>

<svelte:head>
	<title>about | (august) kline gareth</title>
	<link rel="icon" href="favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/m5yA_5G00qI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
		<div class="bottomleft">
			<NavBox />
		</div>
	</div>
	<div class="right">
		<TextBox title={post.title}>{@html post.content}</TextBox>
	</div>
</div>

