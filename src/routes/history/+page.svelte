<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import WorkHistory from './WorkHistory.svelte';
</script>

<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Work History</h1>

{#each data.data as workHistory}
	<WorkHistory {workHistory} />
{/each}
