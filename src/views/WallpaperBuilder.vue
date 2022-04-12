<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import WBuilder from '@/components/wallpaper-builder/WBuilder'

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
						name: 'Builder1',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Wallpaper Builder',
						anchor: 'wbuilder',
						component: WBuilder,
						groupKey: 'builder',
						useStyledContentClass: true,
						fullwidth: true,
					},
				],
				groupKeys:
				{
					builder: 'Builder',
				}
			}
		},
	}
</script>

