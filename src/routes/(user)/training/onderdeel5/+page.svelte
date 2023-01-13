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
		'Klaar voor de volgende vraag',
		'Klaar voor de volgende vraag',
		'Klaar voor de volgende vraag',
		'Klaar voor de volgende vraag'
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
<div class="max-w-5xl mb-16 bg-stone-100">
	{#if questions[0]}
		<p
			class="question"
			in:fly={{ delay: 50, y: -50, duration: 1200 }}
			out:fly={{ x: -100, duration: 1200 }}
		>
			Ze zit in de leege klas boven op het gladde blad van een der bankjes en Davids brief ligt in
			haar schoot en Bertholds portret in haar handen?
		</p>
	{/if}

	{#if questions[1]}
		<p
			class="question"
			in:fade={{ delay: 200, duration: 500 }}
			out:fly={{ y: -50, duration: 1200 }}
		>
			Hij is nu veertien jaar -, David en zij-zelf zijn twee-en-twintig - hij is lang en blond en
			fijn, hij lijkt volwassen: zijn verschrompelde beenen zitten verborgen in een lange broek?
		</p>
	{/if}

	{#if questions[2]}
		<p
			class="question"
			in:fade={{ delay: 200, duration: 500 }}
			out:fly={{ x: 100, duration: 1200 }}
		>
			Stel; je voelt je net als Chantal ongemakkelijk als je een app van een collega krijgt zo s'
			avonds laat. Voel jij je vrij om dit aan te geven bij de betreffende collega?
		</p>
	{/if}

	{#if questions[3]}
		<p class="question" transition:fade={{ delay: 200, duration: 500 }}>
			Wat vind je kunnen om onderling tussen collega's te appen of mailen en wat vind je niet
			kunnen? Kun je daar voorbeelden van geven? (Denk daarbij ook aan welke smileys er gebruikt
			worden of afbeeldingen of filmpjes)
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
</div>
<section class:hidden={hide_final_text} class="section-text lg:mt-8 mb-40">
	<p>
		David woont nu al twee jaar in het huis met de vele ramen, met het groote grasveld, waar
		zandpaden en beukenlanen uit alle richtingen samenloopen. David komt niet dikwijls meer thuis -,
		hij is een paar maal met Berthold naar zee geweest, hij is dan weer bij Berthold in het huis
		gebleven, een enkelen keer gingen ze met allen op reis.
	</p>
</section>
