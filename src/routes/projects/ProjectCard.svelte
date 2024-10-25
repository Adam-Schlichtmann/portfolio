<script>
	/** @type {import('./types').Project} */
	export let project;
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import GitHub from 'lucide-svelte/icons/github';

	import { onMount } from 'svelte';
	import { Progress } from '$lib/components/ui/progress';

	let value = 100;
	onMount(() => {
		const timer = setTimeout(() => {
			value = 0;
			setTimeout(() => {
				value = project.completion;
			}, 500);
		}, 500);
		return () => clearTimeout(timer);
	});
</script>

<Card.Root class="my-2">
	<Card.Header>
		<Card.Title class="flex items-center justify-between text-2xl"
			>{project.title}
			<Button href={project.github} target="_blank" variant="ghost"
				><GitHub class="mr-2 h-4 w-4" /> GitHub</Button
			></Card.Title
		>
	</Card.Header>
	<Card.Content>
		<Card.Description class="text-lg">{project.description}</Card.Description>
		<div class="my-4 flex flex-row flex-wrap">
			{#each project.tags as tag, index}
				<p class="text-sm text-muted-foreground">{tag}</p>
				{#if index < project.tags.length - 1}
					<Separator class="mx-4" orientation="vertical" />
				{/if}
			{/each}
		</div>
		<Progress {value} max={100} class="w-[100%]" />
	</Card.Content>
</Card.Root>
