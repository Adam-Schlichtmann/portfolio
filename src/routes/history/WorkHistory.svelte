<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type { WorkHistory } from './types';

	type Props = {
		workHistory: WorkHistory;
	};
	let { workHistory }: Props = $props();
</script>

<Card.Root class="my-2">
	<Card.Header>
		<Card.Title class="flex items-center justify-between text-2xl"
			>{workHistory.title} @ {workHistory.company}
		</Card.Title>
	</Card.Header>
	<Card.Content>
		<Card.Description class="text-lg"
			>From: {workHistory.start.toLocaleDateString()} - To: {workHistory.end.toLocaleDateString() ===
			new Date().toLocaleDateString()
				? 'Present'
				: workHistory.end.toLocaleDateString()}</Card.Description
		>

		<div class="mt-4 grid auto-cols-max grid-cols-8 gap-4">
			{#each workHistory.tasks as task}
				<div class="m-auto">
					<ChevronRight />
				</div>

				<p class="text-m col-span-7">{task}</p>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
