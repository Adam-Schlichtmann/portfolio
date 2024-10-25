<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Skill from './Skill.svelte';
</script>

<h1 class="my-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About</h1>

<h1 class="text-xl">
	{data.data.name}
</h1>

<p class="text-m my-4">{data.data.elevator}</p>

{#each data.data.skills as skill, index}
	<Skill {skill} {index} />
{/each}
