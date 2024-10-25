<script>
	/** @type {string}*/
	export let word;
	/** @type {number} */
	export let index;

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = false;
	onMount(() => {
		visible = true;
		return () => (visible = false);
	});

	let innerWidth = 0;
	let innerHeight = 0;

	/**
	 * Create a number that is -screenSize - 0 or screenSize - 2 * screenSize (not including padding)
	 *
	 * @param {number} screenSize - The dimension of the screen
	 * @returns {number} The start position of the element
	 */
	const getStart = (/** @type {number} */ screenSize) => {
		// Padding necessary to fully force the item off screen
		const padding = 300;
		const offset = Math.random() * screenSize;
		// True indicates left or top depending on axies
		if (Math.random() > 0.5) {
			return -offset - padding;
		}
		return screenSize + offset + padding;
	};

	/**
	 * Create a number that is screenSize * 0.2 - screenSize * 0.8
	 *
	 * @param {number} screenSize - The dimension of the screen
	 * @returns {number} The destination position of the element
	 */
	const getDestination = (/** @type {number} */ screenSize) => {
		return Math.round(
			Math.min(screenSize * 0.8, Math.max(screenSize * 0.2, Math.random() * screenSize))
		);
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if visible && innerWidth > 0 && innerHeight > 0}
	<div
		in:fly={{
			delay: 400 + index * 200,
			duration: 2000,
			x: getStart(innerWidth),
			y: getStart(innerHeight),
			opacity: Math.random() * 0.5
		}}
	>
		<h3 class="text-lg">
			{word}
		</h3>
	</div>
{/if}
