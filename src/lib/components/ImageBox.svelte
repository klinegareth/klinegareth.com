<script lang="ts">
	export let image: string;
	export let link: string = null; // this is very silly, there's gotta be a better way to make props optional when you don't want to set a default value
    import sunsetKline from "$lib/assets/images/sunsetkline.png"
//	const urls = import.meta.glob('/static/assets/images/*.{png,svg}');
//    console.log(urls)
//	let imageUrl: string;
//	for (let url in urls) {
//		let splitString = url.split('/');
//		let end = splitString[splitString.length - 1];
//        console.log(urls);
//		if (end === image) {
//			imageUrl = url;
//            console.log(end)
//		}
//	}
</script>

<div id="container">
	<a href={link} target="_blank" rel="noreferrer"> <img src={sunsetKline} alt="Alt" /> </a>
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
