<template>
	<div>
		<ContentWithSidebar
			:sections="sections"
			:groupKeys="groupKeys"
			:settings="settings"
			/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import Colors from '@/components/resources/Colors'
	import DrawCtext from '@/components/resources/DrawCtext'
	// import MDDevBlogFull from '@/markdown/resources/devblog-full-wip.md'

	export default {
		name: 'Resources',
		metaInfo: {
			title: 'Links',
			meta: [
				{
					name: 'description',
					content: 'A small collection of potentially helpful resources, including a colour pallette',
				}
			],
		},
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'Resources',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Text Colours',
						anchor: 'drawctext',
						component: DrawCtext,
						groupKey: 'resources',
						useStyledContentClass: false
					},
					{
						name: 'Colour Palette',
						anchor: 'colors',
						component: Colors,
						groupKey: 'resources'
					},
					// {
					// 	name: 'Dev Blog - Extracts',
					// 	anchor: 'devblog-full',
					// 	component: MDDevBlogFull,
					// 	groupKey: 'misc'
					// },
				],
				groupKeys:
				{
					resources: 'Resources',
					misc: 'Misc',
				},

				settings: {
					'Previews': [
						'site_showWIP'
					]
				},

			}
		},
	}
</script>

