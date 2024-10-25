<script>
	import { WholeWord } from 'lucide-svelte';
	import FloatingWord from './FloatingWord.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<h1 class="my-auto text-4xl font-extrabold tracking-tight lg:text-5xl">{data.data.name}</h1>

	{#each data.data.adjectives as word, index}
		<FloatingWord {word} {index} />
	{/each}
</div>
