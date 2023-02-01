<script lang="ts">
	import LinkBox from '$lib/components/LinkBox.svelte';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import NavBox from '$lib/components/NavBox.svelte';
	import links from '$lib/content/links.json';
</script>

<svelte:head>
	<title>links | (august) kline gareth</title>
	<link rel="icon" href="favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<ImageBox image="angels.png" link="https://graylure.tumblr.com/post/700287252594573312"/>
		</div>
		<div class="bottomleft">
			<NavBox />
		</div>
	</div>
	<div class="right">
			<LinkBox {links} newtab={true}/>
	</div>
</div>

