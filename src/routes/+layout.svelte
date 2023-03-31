<slot />

<style global>
	:root {
		--color-text: #684630;
		--color-link-text: #a47473;
		--color-box-bg: rgb(235, 225, 221);
		--color-highlight: #a47473;
		--color-link-highlight: #ffd1bf;
		--color-bg: var(--color-highlight);
	}

	@font-face {
		font-family: Cozette;
		src: url('/fonts/CozetteVector.ttf');
	}

	img::selection,
	a::selection,
	h1::selection,
	p::selection {
		background: var(--color-link-highlight);
	}

	* {
		font-family: Cozette;
		color: var(--color-text);
		/* Start https://www.cursors-4u.com */
		cursor: url(https://cur.cursors-4u.net/others/oth-4/oth305.cur), auto !important; /* End https://www.cursors-4u.com */
	}

	a,
	a > * {
		font-style: italic;
		color: var(--color-link-text);
		text-decoration: none;
		/* Start https://www.cursors-4u.com */
		cursor: url(https://cur.cursors-4u.net/others/oth-4/oth306.cur), auto !important; /* End https://www.cursors-4u.com */
	}

	a:hover,
	a:hover > * {
		font-style: normal;
		text-decoration: none;
		/* Start https://www.cursors-4u.com */
		cursor: url(https://cur.cursors-4u.net/others/oth-4/oth306.cur), auto !important; /* End https://www.cursors-4u.com */
	}

	button {
		/* Start https://www.cursors-4u.com */
		cursor: url(https://cur.cursors-4u.net/others/oth-4/oth306.cur), auto !important; /* End https://www.cursors-4u.com */
	}

	body {
		background-color: var(--color-bg);
		overflow: hidden;
		/* Start https://www.cursors-4u.com */
		cursor: url(https://cur.cursors-4u.net/others/oth-4/oth305.cur), auto !important; /* End https://www.cursors-4u.com */
		width: 100vw;
		height: 100vh;
		margin: 0px;
	}

	.all {
		padding: 50px;
		width: 40%;
		height: 60%;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}

	@media screen and (max-width: 800px) {
		* {
			box-sizing: border-box;
		}
		html,
		body {
			min-height: 100vh;
			display: flex;
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
		.all {
			min-width: 100%;
			min-height: 100%;
			flex-flow: column nowrap;
		}

		.left {
			width: 100%;
			flex-direction: column;
		}

		.right {
			flex-direction: column;
			width: 100%;
			overflow: auto;
		}

		.topright {
			flex: 2 1;
		}
		.bottomright {
			flex: 1 1;
		}
	}

	.left {
		flex: 1 0 50%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.right {
		flex: 1 0 50%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	*::-webkit-scrollbar {
		background-color: var(--color-box-bg);
	}

	.topleft {
		display: flex;
		flex: 1;
	}
	.bottomleft {
		display: flex;
		flex: 0 0;
	}
	.topright {
		flex: 0 1 20%;
		display: flex;
	}
	.bottomright {
		flex: 1 1;
		display: flex;
		overflow-y: auto;
	}
</style>
