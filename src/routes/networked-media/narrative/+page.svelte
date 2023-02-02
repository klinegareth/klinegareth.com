<script lang="ts">
	import TextBox from '$lib/components/TextBox.svelte';
	import ImageBox from '$lib/components/ImageBox.svelte';
	import NavBox from '$lib/components/NavBox.svelte';
    
    import post from "$lib/content/networked-media/narrative.json"

    
</script>

<svelte:head>
	<title>vernacular web | networked media </title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="all">
	<div class="left">
		<div class="topleft">
			<ImageBox image="city.gif" link="https://www.patreon.com/posts/u60ye58222-15397437?utm_medium=post_notification_email&utm_source=post_link&utm_campaign=patron_engagement"/>
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
