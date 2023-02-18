<script lang="ts">
	type Link = {
		name: string;
		url: string;
		description: string;
	};
	type Links = {
		description: string;
		links: ArrayLike<Link>;
	};
	export let newtab = false;
	let perPage = 6;
	let page = 0;
	export let title = 'links';
	export let links: Links;
	function pages() {
		// thank god for this guy idk why i was losing my mind over this https://codereview.stackexchange.com/questions/266170/table-pagination
		const items = links.links;
		const range = (size: number) => [...Array(size).keys()];
		const pageCount = Math.ceil(items.length / perPage);
		const getPage = (pageNo: number) =>
			range(perPage)
				.map((noInPage) => items[pageNo * perPage + noInPage])
				.filter((link) => link != undefined);
		return range(pageCount).map((pageNo) => getPage(pageNo));
	}
	function nextPage() {
		if (page < pages().length - 1) {
			page++;
		}
	}
	function prevPage() {
		if (page >= 1) {
			page--;
		} else {
			page = 0;
		}
	}
</script>

<div id="container">
	<h1>{title}</h1>
	<div class="header-description">
    <p>
		{links.description}
    </p>
	</div>
	<div id="page-navigation">
		{#if page > 0}
			<button on:click={prevPage} type="button">
				{`<-`}
			</button>
		{/if}
		{#if page < pages().length - 1}
			<button on:click={nextPage} type="button">
				{'->'}
			</button>
		{/if}
	</div>
	<nav>
		{#each pages()[page] as link}
			<a href={link.url} target={newtab ? '_blank' : ''} rel="noreferrer">
				{link.name}
			</a>
			<p class="link-description">{link.description}</p>
		{/each}
	</nav>
</div>

<style scoped>
	#container {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: var(--color-box-bg);
		border: solid 1px var(--color-text);
		padding: 15px;
		overflow: hidden;
	}

	#page-navigation {
		gap: 15px;
		margin: 0px 15px 15px;
		display: flex;
		justify-content: center;
	}

	.header-description {
		margin: 0px 15px 15px;
		text-align: center;
	}

	.link-description {
		margin-top: 0px;
	}

	button {
		font-family: Cozette;
		color: var(--color-box-bg);
		border: none;
		background: var(--color-highlight);
	}

	h1 {
		color: var(--color-highlight);
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
		margin-bottom: 15px;
	}

	nav {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
</style>
