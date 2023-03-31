<script lang="ts">
	const rons = [
		'/images/ron/ron1',
		'/images/ron/ron2.webp',
		'/images/ron/ron4.webp',
		'/images/ron/ron5.webp'
	];
	const tucks = [
		'/images/tuck/dickvein.webp',
		'/images/tuck/tcideology.jpg',
		'/images/tuck/tcmnm.jpg',
		'/images/tuck/tcmnm2.jpg',
		'/images/tuck/tcsexyshoes.jpg',
		'/images/tuck/tctrans.jpg'
	];
	let y: number;
</script>

<svelte:head>
	<title>this user is...</title>
	<meta name="description" content="so fucking scared all the time" />
	<link rel="stylesheet" href="/scared.css" />
</svelte:head>

<svelte:window bind:scrollY={y} />
<div class="heading-container">
	<h1>so *fucking scared* all the time</h1>
	<p
		style="font-family: 'sans-serif'; text-shadow: -40px 0px 8px lightpink, -20px 0px 8px lightcyan !important"
	>
		ε=┌(;･_･)┘
	</p>

	<p
		style="color: lightcyan; font-family: 'Cozette'; font-size: 1.1em; text-shadow: 0px 0px 0px !important; width: 25%;"
	>
		ʕ·ᴥ·ʔ- cw: so so so so so much transphobia, also some flashing lights
	</p>
	<p
		style="color: pink; font-family: 'Cozette'; font-size: 1.1em; text-shadow: 0px 0px 0px !important; width: 40%;"
	>
		i put a bunch of iframes in here. i am a bad girl web designer. no loading bars for you. you
		might wanna wait a sec for everything to load. also this isn't in comic sans isn't that fun
	</p>
</div>
<div class="paragraph-container">
	<p>i deleted my instagram a hot sec ago</p>
	<p>it got too exhausting</p>
	<p>girls posting about finally getting on hrt</p>
	<p>or getting groped at the airport</p>
	<p>or walls of text about community defense</p>
	<p>or doctors, or landlords, the news etc</p>
	<p>dead girls, journalists, the cops</p>
	<p>all crammed up together in my hand</p>
	<p />
	<p>
		texas parents have started keeping "<a
			href="https://www.them.us/story/portrait-of-a-texas-family-video-game-trans-kids"
			>safe folders</a
		>", folders of evidence to prove they aren't abusing their trans kids
	</p>
	<p>florida just started forcibly detransitioning children</p>
	<p>for the cis people reading this: forcible detransition is a synonym for torture</p>
	<p>their governor tortured people at guantanamo and now is doing the same to kids</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<img
				id="rons"
				src={rons[Math.floor(y % 4)]}
				alt="A bunch of images of Florida governor Ron DeSantis rapidly switching between each other as the page scrolls"
			/>
		</div>
	</div>
	<p>
		they're going to pass a bill soon that will allow them to take away children from their trans
		parents
	</p>
	<p>joe biden called what's going on there "close to sinful"</p>
	<p>almost there</p>
	<p>like they really might go ahead and do it</p>
	<p>and nobody's saying shit</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<iframe
				src="https://web.archive.org/web/20230319104649/https://www.theamericanconservative.com/transgenderism-must-be-eradicated/"
				id="americanconservativeframe"
				title="transgenderism must be eradicated"
			/>
		</div>
	</div>
	<p>
		hell, eric adams is buddies with a guy who went to uganda during their "kill the gays" campaign
		and said they were doing a great job
	</p>
	<p>but he's vegan tho so i guess he's gotta be a good guy</p>
	<p>
		and kamala <a href="https://theappeal.org/incarcerated-transgender-womens-lives-must-matter/"
			>worked</a
		> to keep trans people in prison from getting healthcare
	</p>
	<p>i think my relationship to truth has broken lately</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<iframe
				src="https://web.archive.org/web/20230320232751/https://www.nytimes.com/2023/02/16/opinion/jk-rowling-transphobia.html"
				frameborder="0"
				title="in defense of jk rowling"
				id="jk"
			/>
		</div>
	</div>
	<p>
		like what i just said isn't 100% true, probably a member of her staff did that while she was
		california ag, and she only delayed a woman's access to surgery that she did eventually receive
	</p>
	<p>but so what</p>
	<p>they might kill all of us</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<iframe
				width="301"
				height="168"
				src="https://www.youtube.com/embed/677Q3JqeK48"
				title="Hogwarts Legacy, JK Rowling, and Trans Advocacy"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				id="ro"
			/>
		</div>
	</div>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<iframe
				src="https://web.archive.org/web/20230320230732/https://www.dailywire.com/news/how-to-eradicate-transgenderism-from-public-life"
				title="how to eradicate transgenderism"
				id="howto"
			/>
		</div>
	</div>
	<p>and nobody's gonna say a word</p>
	<p>fuck it</p>
	<p>half the country thinks i don't exist</p>
	<p>and most of the other half aids and abets</p>
	<p>anyways, i feel like i'm living in an alternate reality sometimes</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<img
				id="tucks"
				src={tucks[Math.floor(y % 5)]}
				alt="A bunch of images of Tucker Carlson rapidly switching between each other as the page scrolls"
			/>
		</div>
	</div>
	<p>but mostly i'm just spending time with the people i love</p>
	<p>full transexual immersion</p>
	<p>went to the beach</p>
	<div class="graphics-anchor">
		<div class="graphics-container">
			<img
				id="beach-gif"
				src="/images/beach.gif"
				alt="An animated low-resolution gif of four people walking on a rocky beach"
			/>
		</div>
	</div>
	<p>
		the music in the car was <a
			href="https://open.spotify.com/playlist/3X9dB4k6rUtdDie9MY57Up?si=wPdxLQ7tRMGGzpy_f2akBQ&utm_source=copy-link"
			style="color: lightpink">girl music</a
		>
	</p>
	<p>got a tattoo from a stranger visiting from kansas city</p>
	<p>
		talked about <a
			href="http://hessepress.storenvy.com/products/28804096-hannah-baer-trans-girl-suicide-museum"
			style="color: lightpink">tgirl suicide museum</a
		>, and
		<a href="https://www.hazeljaneplante.com/little-blue" style="color: lightblue">little blue</a>,
		and
		<a
			href="https://www.sealpress.com/titles/julia-serano/whipping-girl/9781580056229/"
			style="color: lightpink">whipping girl</a
		>
	</p>
	<p>gonna go to my friends' show, and the picnic, and a housewarming party</p>
	<p>might hyperventilate in my room for a bit</p>
	<p>call mom</p>
	<p />
	<p>i realize i don't have much of a thesis here</p>
	<p>that's kinda the point</p>
	<p>things are so bad and undoubtedly will get worse</p>
	<p>and i just need to put that thought somewhere outside my head</p>
	<p />
	<p>i also haven't mentioned how fucking cool trans people are</p>
	<p>
		i found out the other day that the picnic i helped start gets talked about all the way in
		chicago
	</p>
	<p>we're all like two degrees of separation from each other</p>
	<p>and make a ton of cool art</p>
	<p>all our shit filters up through the culture, and these bastards want us dead</p>
	<p />
	<p>my mom's really sweet about it</p>
	<p>she goes on these mini rants about how she can't imagine how people could hate us</p>
	<p>how we're all so thoughtful and empathetic</p>
	<p>and how we literally magically transform</p>
	<p>big mom fan</p>
	<p />
	<p>i think i'll leave it at that</p>
	<p>this is all exhausting and bad etc</p>
	<p>gonna have to fight</p>
	<p />
	<p>anyways, go learn the home addresses of your local politicians and ceos</p>
	<p />
	<p style="text-shadow: 0px 10px 10px red, 0px -10px 10px red !important; font-family: 'Cozette';">
		ʕ·ᴥ·ʔ- love, kline
	</p>
	<p />
</div>

<style>
</style>
