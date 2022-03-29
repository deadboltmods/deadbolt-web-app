<template>
	<div>
		<ContentWithSidebar
			:sections="sections"
			:groupKeys="groupKeys"
			:widgets="widgets" />
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import News1 from '@/markdown/news/news-2022-03-11.md';

	export default {
		name: 'DevBlog',
		metaInfo: {
			title: 'Links',
			meta: [
				{
					name: 'description',
					content: 'Read announcements and updates for DCP, DECP, and this website',
				}
			],
		},
		components: {
			ContentWithSidebar
		},
		data() {
			return {
				sections: [
					{
						name: 'News & Updates',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Major Site Update',
						anchor: 'news-2022-03-11',
						component: News1,
						groupKey: '2022'
					},
				],
				widgets: [
					// DevBlogSearchWidget
				],
				groupKeys: {
					news: 'News',
					2022: '2022',
				},
			}
		}
	}
</script>
