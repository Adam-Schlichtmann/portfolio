<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import ProjectCard from './ProjectCard.svelte';
</script>

<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1>

{#each data.data as project}
	<ProjectCard {project} />
{/each}
