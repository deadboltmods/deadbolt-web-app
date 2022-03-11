<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import CutscenePortraits from '@/components/resources/CutscenePortraits'

	// Hopoo - Sprites
	import CutSpritesGrouped from '@/components/hopoo/CutSpritesGrouped'
	import CutSpritesSingle from '@/components/hopoo/CutSpritesSingle'
	import CutTilesets from '@/components/hopoo/CutTilesets'
	import CutSpritesBackgrounds from '@/components/hopoo/CutSpritesBackgrounds'

	// Hopoo - Blog
	// import MDEarlyDev from '@/markdown/resources/earlydev.md'
	import MDEarlyDev1 from '@/markdown/hopoo/earlydev-1.md'
	import MDEarlyDev2 from '@/markdown/hopoo/earlydev-2.md'
	import MDEarlyDev3 from '@/markdown/hopoo/earlydev-3.md'

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
						anchor: 'cutscene-portraits',
						component: CutscenePortraits,
						groupKey: 'general',
						useStyledContentClass: true
					},



					{
						name: 'Unused Dev Art',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Grouped',
						anchor: 'grouped-sprites',
						component: CutSpritesGrouped,
						groupKey: 'dev1'
					},
					{
						name: 'Sprites',
						anchor: 'single-sprites',
						component: CutSpritesSingle,
						groupKey: 'dev1'
					},
					{
						name: 'Tilesets',
						anchor: 'tilesets',
						component: CutTilesets,
						groupKey: 'dev1'
					},
					{
						name: 'Backgrounds',
						anchor: 'backgrounds',
						component: CutSpritesBackgrounds,
						groupKey: 'dev1'
					},

					// Hopoo Previews
					{
						name: 'Hopoo Previews',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'First Look',
						anchor: 'earlydev-1',
						component: MDEarlyDev1,
						groupKey: 'dev2'
					},
					{
						name: 'Second Preview',
						anchor: 'earlydev-2',
						component: MDEarlyDev2,
						groupKey: 'dev2'
					},
					{
						name: 'Scrapped Ideas',
						anchor: 'earlydev-3',
						component: MDEarlyDev3,
						groupKey: 'dev2'
					},
				],
				groupKeys:
				{
					general: 'General',
					dev1: 'Unused Dev Art',
					dev2: 'Hopoo Previews',
				}
			}
		},
	}
</script>

