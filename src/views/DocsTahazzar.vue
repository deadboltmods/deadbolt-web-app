<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import MDTahazzarGuide from '@/markdown/community/tahazzar-level-design.md'

	export default {
		name: 'TahazzarGuideLevelDesign',
		metaInfo: {
			title: 'Tahazzar\'s Guide to Custom DEADBOLT Level Design',
			meta: [
				{
					name: 'description',
					content: 'Detailed guide to level design, written by DEADBOLT map maker Tahazzar',
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
						name: 'Document1',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Tahazzar\'s Guide',
						anchor: 'guide',
						component: MDTahazzarGuide,
						groupKey: 'document'
					},
				],
				groupKeys:
				{
					document: 'Document',
				}
			}
		},
	}
</script>

