<template>
	<div>
		<ContentWithSidebar
			:sections="sections"
			:groupKeys="groupKeys"
			:settings="settings"/>
			/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import WPBuilder from '@/components/wallpaper/WPBuilder'
	import WPViewer from '@/components/wallpaper/WPViewer'

	export default {
		name: 'WallpaperBuilder',
		metaInfo: {
			title: 'Wallpaper Builder',
			meta: [
				{
					name: 'description',
					content: 'Build custom wallpaper for DEADBOLT',
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
						name: 'Wallpaper Builder',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Builder',
						anchor: 'wp-builder',
						component: WPBuilder,
						groupKey: 'wallpaper',
						useStyledContentClass: true,
						fullwidth: true,
						// hidePageHeading: true,
					},
					{
						name: 'Viewer',
						anchor: 'wp-viewer',
						component: WPViewer,
						groupKey: 'wallpaper',
						useStyledContentClass: true,
						fullwidth: true,
						// hidePageHeading: true,
					},
				],
				groupKeys:
				{
					wallpaper: 'Wallpaper',
				},

				settings: {
					'Show Reaper?': [
						'wallpaper_showReaperOnHover',
						'wallpaper_showReaperAlways',
					],

					'Tile Picker': [
						'wallpaper_useDoubleSizedTiles',
						'wallpaper_showTileBG',
						'wallpaper_showTileFG',
					]
				}
			}
		},
	}
</script>

