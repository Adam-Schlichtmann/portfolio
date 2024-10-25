<script lang="ts">
	import FloatingWord from './FloatingWord.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1 class="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">{data.data.name}</h1>

	{#each data.data.adjectives as word, index}
		<FloatingWord {word} {index} />
	{/each}
</div>
