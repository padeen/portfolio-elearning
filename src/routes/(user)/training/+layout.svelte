<script lang="ts">
	import { page } from '$app/stores';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: active = $page.data.active;

	const email = data.email;
</script>

<div class="flex justify-between items-center py-1.5 pr-8">
	<div class="pl-6 w-32">
		<img src="/images/logo.svg" alt="logo gedragskeuze" />
	</div>
	<div class="flex justify-start items-center space-x-4 uppercase font-semibold">
		<div>nog 90 dagen actief</div>
		<div class="lowercase">
			{email}
		</div>
	</div>
</div>
<div class="flex justify-start">
	<div class="flex-col pt-6 px-6 h-auto border-r-2 space-y-2.5 bg-stone-100">
		<div class:font-semibold={active === 'onderdeel1'}>
			<a href="/training/onderdeel1">Welkom</a>
		</div>
		<div class:font-semibold={active === 'onderdeel2'}>
			<a href="/training/onderdeel2">Filmpje Koffie erbij</a>
		</div>
		<div class:font-semibold={active === 'onderdeel3'}>
			<a href="/training/onderdeel3">Wat zegt de wet</a>
		</div>
		<div class:font-semibold={active === 'onderdeel4'}>
			<a href="/training/onderdeel4">Filmpje Vrijdagmiddagborrel</a>
		</div>
		<div class:font-semibold={active === 'onderdeel5'}>
			<a href="/training/onderdeel5">Filmpje Appen in bed</a>
		</div>
		<div class:font-semibold={active === 'onderdeel6'}>
			<a href="/training/onderdeel6">Wat je geleerd hebt</a>
		</div>
	</div>
	<main class="flex flex-col justify-center items-center px-16 py-14 w-full bg-stone-100">
		<slot />
	</main>
</div>
