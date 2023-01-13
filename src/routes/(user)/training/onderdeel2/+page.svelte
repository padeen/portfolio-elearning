<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	/* Timer */

	let end = 0;

	const startTimer = () => {
		setInterval(() => {
			if (end <= 3000) end += 1000;
		}, 1000);
	};

	/* Questions */

	let start_vragen = false;

	let volgende_vraag = true;

	const questions = [false, false, false, false];

	const questionTexts = [
		'Ik begrijp de verhoudingen, volgende vraag',
		'Daar heb ik over nagedacht, volgende',
		'Hier vind ik wel wat van, verder naar de volgende vraag',
		'Deze vragen hebben mij laten nadenken. Klaar met de vragen'
	];

	let questionCounter = 0;

	const handleStartVragen = () => {
		start_vragen = true;
		volgende_vraag = false;
		window.scrollTo(0, document.body.scrollHeight);
	};

	const volgendeVraag = () => {
		if (questionCounter === 3) {
			volgende_vraag = true;
			hide_final_text = false;
		}
		questionCounter++;
		questions[questionCounter] = true;
	};

	let hide_final_text = true;
</script>

<!--  Markup -->
{@html data.content1}
<div class:hidden={start_vragen}>
	<p class="text-sm italic text-center mb-8">Klik op de knop om met de vragen te beginnen.</p>
	<div
		class:hidden={start_vragen}
		on:click|once={handleStartVragen}
		on:click|once={startTimer}
		class="mb-8"
	>
		<button
			type="button"
			on:click|once={() => (questions[0] = true)}
			class="px-8 py-3 bg-rose-400 text-white font-medium leading-tight uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out"
			>Klaar voor de vragen</button
		>
	</div>
</div>
<section id="questions">
	{#if questions[0]}
		<p
			class="question"
			in:fly={{ delay: 50, y: -50, duration: 1200 }}
			out:fly={{ x: -100, duration: 1200 }}
		>
			Er bloeien rood-en-groene lichten in de lucht, er bloeien geelen-paarse lichten langs den
			grond?
		</p>
	{/if}

	{#if questions[1]}
		<p
			class="question"
			in:fade={{ delay: 200, duration: 500 }}
			out:fly={{ y: -50, duration: 1200 }}
		>
			Licht en geluid leeft in de paarse misten?
		</p>
	{/if}

	{#if questions[2]}
		<p
			class="question"
			in:fade={{ delay: 200, duration: 500 }}
			out:fly={{ x: 100, duration: 1200 }}
		>
			Als uit verten, en zijn vlak bij, de toeters vleien, de toeters gebieden, de locomotieven
			geven antwoord?
		</p>
	{/if}

	{#if questions[3]}
		<p class="question" transition:fade={{ delay: 200, duration: 500 }}>
			Zoo loopt ze hier nu dagelijks in den vallenden avond, altijd buiten den duisteren kap?
		</p>
	{/if}

	<p class="text-sm italic hidden">
		Nadat je goed hebt nagedacht over de vraag kun je op verder klikken
	</p>

	<div class:hidden={volgende_vraag} class="mt-20 mb-8">
		<button
			type="button"
			disabled={end <= 2500}
			on:click={() => (end = 0)}
			on:click={() => volgendeVraag()}
			on:click={() => window.scrollTo(0, document.body.scrollHeight)}
			class="block px-8 py-3 mx-auto disabled:opacity-60 bg-rose-400 text-white font-medium leading-tight uppercase rounded shadow-md active:shadow-lg disabled:transition duration-[1200ms] ease-out"
			>{questionTexts[questionCounter]}</button
		>
	</div>
</section>
<section class:hidden={hide_final_text} class="section-text lg:mt-8 mb-40">
	<p>
		En rechts is het water, zilvergrijs bewogen, fluweel overneveld, stippelig van goudlicht,
		dolende sterren aan onzichtbare masten, roeischuitjes als glimwormen zoo laag aan het water, zoo
		grillig en zoo snel.
	</p>
</section>
