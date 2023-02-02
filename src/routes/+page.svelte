<script setup>
	import NavBox from '$lib/components/NavBox.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import SocialsBox from '$lib/components/SocialsBox.svelte';
</script>

<svelte:head>
	<title>(august) kline gareth</title>
	<link rel="icon" href="favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<ImageBox image="sunsetkline.png" />
		</div>
		<div class="bottomleft">
			<NavBox />
		</div>
	</div>
	<div class="right">
		<div class="topright">
			<SocialsBox />
		</div>
		<div class="bottomright">
			<TextBox title="hello">heyo, welcome to my page! i post things here sometimes</TextBox>
		</div>
	</div>
</div>

<style>
</style>
