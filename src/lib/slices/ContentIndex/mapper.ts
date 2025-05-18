import type { Client, Content, SliceMapper } from '@prismicio/client';
import type { ComponentProps } from 'svelte';

import ContentIndex from './index.svelte';

type Context = { client: Client<Content.AllDocumentTypes> };

const mapper: SliceMapper<
	Content.ContentIndexSlice,
	ComponentProps<ContentIndex>,
	Context
> = async ({ slice, context }) => {
	const { client } = context;

	const items =
		slice.primary.content_type === 'Blog'
			? await client.getAllByType('blogpost', {
					orderings: {
						field: 'document.first_publication_date',
						direction: 'desc'
					}
				})
			: await client.getAllByType('project', {
					orderings: {
						field: 'document.first_publication_date',
						direction: 'desc'
					}
				});

	return { slice, items };
};

export default mapper;
