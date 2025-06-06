<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import IconCircle from '~icons/ic/baseline-circle';

	gsap.registerPlugin(ScrollTrigger);

	export let slice: Content.TechListSlice;

	let component: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4 // 4 second delay on scroll
				// markers: true
			}
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(400, 600) : gsap.utils.random(-600, -400);
				}
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(400, 600);
				}
			}
		);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="overflow-hidden"
	bind:this={component}
>
	<Bounded as="div">
		<Heading size="lg" class="mb-8" tag="h2">
			{slice.primary.heading}
		</Heading>
	</Bounded>

	{#each slice.primary.item as { tech_color, tech_name }}
		<div
			class="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 w-full"
			aria-label={tech_name || undefined}
		>
			{#each Array(15) as _, index}
				<span
					class="tech-item font-extrabold uppercase tracking-tighter text-5xl md:text-7xl"
					style="color: {index === 7 && tech_color ? tech_color : 'inherit'};"
				>
					{tech_name}
				</span>
				<span class="text-3xl">
					<IconCircle />
				</span>
			{/each}
		</div>
	{/each}
</section>
