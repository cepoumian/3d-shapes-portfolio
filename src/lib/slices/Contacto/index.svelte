<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import Avatar from '../Biography/Avatar.svelte';

	export let slice: Content.ContactoSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="grid justify-center gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] md:justify-start">
		<Heading size="xl" class="col-start-1">
			{slice.primary.heading}
		</Heading>

		<div class="col-start-1 prose prose-invert prose-slate prose-xl">
			<PrismicRichText field={slice.primary.contact_info} />
		</div>
		<!-- <Button linkField={slice.primary.button_link} label={slice.primary.button_label} /> -->
		<Avatar
			image={slice.primary.contact_image}
			class="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
		/>
	</div>
</Bounded>
