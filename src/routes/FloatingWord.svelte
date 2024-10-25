<script lang="ts">
	type Props = {
		word: string;
		index: number;
	};

	let { word, index }: Props = $props();

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = $state(false);
	onMount(() => {
		visible = true;
		return () => (visible = false);
	});

	/**
	 * Create a number that is screenSize * 0.2 - screenSize * 0.8
	 *
	 * @param {number} screenSize - The dimension of the screen
	 * @returns {number} The destination position of the element
	 */
	const getDestination = (screenSize: number) => {
		return Math.round(
			Math.min(screenSize * 0.8, Math.max(screenSize * 0.2, Math.random() * screenSize))
		);
	};

	/**
	 * Create a number that is -screenSize - 0 or screenSize - 2 * screenSize (not including padding)
	 *
	 * @param {number} screenSize - The dimension of the screen
	 * @returns {number} The start position of the element
	 */
	const getStart = (screenSize: number) => {
		// Padding necessary to fully force the item off screen
		const padding = 300;
		const offset = Math.random() * screenSize;
		// True indicates left or top depending on axies
		if (Math.random() > 0.5) {
			return -offset - padding;
		}
		return screenSize + offset + padding;
	};

	let innerWidth = $state(0);
	let innerHeight = $state(0);

	let destinationX = $derived(getDestination(innerWidth));
	let destinationY = $derived(getDestination(innerHeight));
	$inspect(destinationX);
	$inspect(destinationY);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if visible && destinationX > 0 && destinationY > 0}
	<div
		in:fly={{
			delay: 400 + index * 200,
			duration: 2000,
			x: getStart(innerWidth),
			y: getStart(innerHeight),
			opacity: Math.random() * 0.5
		}}
		class={`mx-6 my-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center`}
	>
		<h3 class="text-xl lg:text-2xl">
			{word}
		</h3>
	</div>
{/if}
