<script lang="ts">
	import LinkBox from '$lib/components/LinkBox.svelte';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import NavBox from '$lib/components/NavBox.svelte';
	import links from '$lib/content/networked-media/index.json';
</script>

<svelte:head>
	<title>networked media | (august) kline gareth</title>
	(Mobile layout works!)
	<link rel="icon" href="favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<ImageBox image="moon.gif" link="https://aconfuseddragon.itch.io/downloads" />
		</div>
		<div class="bottomleft">
			<NavBox />
		</div>
	</div>
	<div class="right">
		<LinkBox {links} title="networked media" />
	</div>
</div>
