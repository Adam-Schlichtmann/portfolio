<script lang="ts">
	import type { PageData } from './$types';
	import ProjectCard from './ProjectCard.svelte';

	export let data: PageData;
</script>

<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1>

{#each data.data as project}
	<ProjectCard {project} />
{/each}
