import type { PageLoad } from './$types';
const urls = import.meta.glob('$lib/content/networked-media/*.{json}');

export const load = (({ params }) => {
	return {
		page: {
			slug: `${params.slug}`,
			content: `$lib/content/networked-media/${params.slug}.json`
		}
	};
}) satisfies PageLoad;
