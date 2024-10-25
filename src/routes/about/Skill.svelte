<script>
	/** @type {import('./types').Skill} */
	export let skill;
	/** @type {number} */
	export let index;
	import Star from 'lucide-svelte/icons/star';
	import { onMount } from 'svelte';

	import { slide } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
		return () => (visible = false);
	});
</script>

{#if visible}
	<div
		in:slide={{ delay: 400 + index * 200, duration: 2000, axis: 'x' }}
		class="my-2 flex flex-row justify-between"
	>
		<h5 class="text-m mr-4">
			{skill.name}
		</h5>
		<div class="flex flex-row">
			{#each { length: 5 } as _, index}
				<Star
					class={index <= skill.level ? 'fill-primary' : 'fill-background stroke-primary'}
					strokeWidth={index <= skill.level ? 0 : 1}
				/>
			{/each}
		</div>
	</div>
{/if}
