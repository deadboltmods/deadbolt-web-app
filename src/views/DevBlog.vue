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
	import DevBlogIntro from '@/components/content/DevBlogIntro';
	import DevBlogExplorer from '@/components/explorer/DevBlogExplorer';
	// import DevBlogSearchWidget from '@/components/explorer/DevBlogSearchWidget'

	export default {
		name: 'DevBlog',
		metaInfo: {
			title: 'DevBlog Explorer',
			meta: [
				{
					name: 'description',
					content: 'Read Hopoo\'s Tumblr for insights into DEADBOLT lore and early dev, with filters to search by keyword',
				},
			],
		},
		components: {
			ContentWithSidebar
		},
		data() {
			return {
				sections: [
					// {
					// 	name: 'Dev Blog Explorer',
					// 	hideFromSidebar: true,
					// 	specialHeading: true,
					// },
					{
						name: 'Dev Blog Explorer',
						anchor: 'intro',
						component: DevBlogIntro,
						groupKey: 'main'
					},
					{
						name: 'Explore',
						anchor: 'explore',
						component: DevBlogExplorer,
						groupKey: 'main'
					},
				],
				widgets: [
					// DevBlogSearchWidget
				],
				groupKeys: {
					main: 'Main'
				},
			}
		}
	}
</script>
