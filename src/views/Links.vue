<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import MDLinksOfficial from '@/markdown/resources/links-official.md'
	import MDDevBlog from '@/markdown/resources/devblog.md'
	import MDLinks from '@/markdown/resources/links.md'
	import MDSpreadsheets from '@/markdown/resources/spreadsheets.md'

	export default {
		name: 'Links',
		title: 'Links | Deadbolt Game Mods',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'Links',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Official',
						anchor: 'links-official',
						component: MDLinksOfficial,
						groupKey: 'links'
					},
					{
						name: 'Dev Blog',
						anchor: 'links-devblog',
						component: MDDevBlog,
						groupKey: 'links'
					},
					{
						name: 'Community',
						anchor: 'links-community',
						component: MDLinks,
						groupKey: 'links'
					},

					{
						name: 'Spreadsheets',
						anchor: 'Spreadsheets',
						component: MDSpreadsheets,
						groupKey: 'data'
					},
				],
				groupKeys:
				{
					links: 'Links',
					data: 'Data',
				}
			}
		},
	}
</script>

