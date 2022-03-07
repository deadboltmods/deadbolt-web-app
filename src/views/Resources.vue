<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import MDLinks from '@/markdown/resources/links.md'
	import MDSpreadsheets from '@/markdown/resources/spreadsheets.md'
	import MDDevBlog from '@/markdown/resources/devblog.md'
	import MDCutContent from '@/markdown/resources/cut-content.md'
	// import MDEarlyDev from '@/markdown/resources/earlydev.md'
	import Colors from '@/components/resources/Colors'
	import DrawCtext from '@/components/resources/DrawCtext'
import CutscenePortraits from '@/components/resources/CutscenePortraits'

	export default {
		name: 'Resources',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'Links',
						anchor: 'links',
						component: MDLinks,
						groupKey: 'external'
					},
					{
						name: 'Spreadsheets',
						anchor: 'Spreadsheets',
						component: MDSpreadsheets,
						groupKey: 'external'
					},
					{
						name: 'Dev Blog Links',
						anchor: 'devblog',
						component: MDDevBlog,
						groupKey: 'dev'
					},
					{
						name: 'Unused Content',
						anchor: 'cutcontent',
						component: MDCutContent,
						groupKey: 'dev'
					},
					// {
					// 	name: 'Early Dev',
					// 	anchor: 'earlydev',
					// 	component: MDEarlyDev,
					// 	groupKey: 'dev'
					// },
					{
						name: 'Cutscene Portraits',
						anchor: 'cutsceneportraits',
						component: CutscenePortraits,
						groupKey: 'misc',
						useStyledContentClass: true
					},
					{
						name: 'draw_ctext',
						anchor: 'drawctext',
						component: DrawCtext,
						groupKey: 'misc',
						useStyledContentClass: false
					},
					{
						name: 'Colour Palette',
						anchor: 'colors',
						component: Colors,
						groupKey: 'misc'
					},
				],
				groupKeys:
				{
					external: 'External',
					dev: 'Hopoo Dev',
					misc: 'Misc'
				}
			}
		},
	}
</script>

