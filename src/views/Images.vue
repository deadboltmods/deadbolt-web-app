<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	// import MDLinksOfficial from '@/markdown/resources/links-official.md'
	// import MDLinks from '@/markdown/resources/links.md'
	// import MDSpreadsheets from '@/markdown/resources/spreadsheets.md'
	// import MDDevBlog from '@/markdown/resources/devblog.md'
	import MDEarlyDev from '@/markdown/resources/earlydev.md'
	// import Colors from '@/components/resources/Colors'
	// import DrawCtext from '@/components/resources/DrawCtext'
	import CutContent from '@/components/resources/CutContent'
	import CutscenePortraits from '@/components/resources/CutscenePortraits'

	export default {
		name: 'Images',
		title: 'Images | Deadbolt Game Mods',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'Images',
						hideFromSidebar: true,
						specialHeading: true,
					},

					{
						name: 'Cutscene Portraits',
						anchor: 'cutsceneportraits',
						component: CutscenePortraits,
						groupKey: 'general',
						useStyledContentClass: true
					},

					{
						name: 'Unused Content',
						anchor: 'cutcontent',
						component: CutContent,
						groupKey: 'dev'
					},
					{
						name: 'Early Dev',
						anchor: 'earlydev',
						component: MDEarlyDev,
						groupKey: 'dev'
					},
				],
				groupKeys:
				{
					general: 'General',
					dev: 'Hopoo Dev',
				}
			}
		},
	}
</script>

