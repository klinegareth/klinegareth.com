<script lang="ts">
	import TextBox from '$lib/components/TextBox.svelte';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import NavBox from '$lib/components/NavBox.svelte';
    
    import post from "$lib/content/networked-media/blurryjpeg.json"

    
</script>

<svelte:head>
	<title>vernacular web | networked media </title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<ImageBox image="lmao-deep.gif" link="https://tenor.com/view/lmao-deep-fried-mad-raging-gif-14229167"/>
		</div>
		<div class="bottomleft">
			<NavBox />
		</div>
	</div>
	<div class="right">
			<TextBox title={post.title}>{@html post.content}</TextBox>
	</div>
</div>

<style>
</style>
