<script lang="ts">
	export let image: string;
	export let link: string = null; // this is very silly, there's gotta be a better way to make props optional when you don't want to set a default value
	const urls = import.meta.glob('/static/images/*.{png,svg,gif}');
	let imageUrl: string;
	for (let url in urls) {
		let splitString = url.split('/');
		let end = splitString[splitString.length - 1];
		if (end === image) {
			imageUrl = url.substring(url.indexOf('/', 1));
		}
	}
</script>

<div id="container">
	<a href={link} target="_blank" rel="noreferrer"> <img src={imageUrl} alt="Alt" /> </a>
</div>

<style>
	img,
	a {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	#container {
		position: relative;
		flex: 60% 1 0;
		background-color: var(--color-box-bg);
		border: solid 1px var(--color-text);
	}
</style>
