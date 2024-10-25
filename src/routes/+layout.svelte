<script lang="ts">
	import '../app.css';

	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="m-4 h-screen max-w-screen-sm">
	<div class="flex items-center justify-between">
		<div class="flex flex-row">
			<Button class="text-md tracking-tight md:text-xl" href="/" variant="link">Home</Button>
			<Separator class="my-2 bg-primary" orientation="vertical" />
			<Button class="text-md tracking-tight md:text-xl" href="/about" variant="link">About</Button>
			<Separator class="my-2 bg-primary" orientation="vertical" />
			<Button class="text-md tracking-tight md:text-xl" href="/projects" variant="link"
				>Projects</Button
			>
			<Separator class="my-2 bg-primary" orientation="vertical" />
			<Button class="text-md tracking-tight md:text-xl" href="/history" variant="link"
				>Work History</Button
			>
		</div>
		<Button class="flex" on:click={toggleMode} variant="outline" size="icon">
			<Sun class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
	<Separator class="mt-2" />
	<ModeWatcher />
	<slot></slot>
</div>
