<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import MDWorkshopPlay from '@/markdown/guides/dcp-workshop-play.md'
	import MDWorkshopPublish from '@/markdown/guides/dcp-workshop-publish.md'
	import MDWorkshopZip from '@/markdown/guides/dcp-workshop-zip.md'
	import MDWorkshopImageSizes from '@/markdown/guides/dcp-workshop-image-sizes.md'
	import MDWeapons from '@/markdown/guides/dcp-weapons.md'
	import MDDebuglog from '@/markdown/guides/dcp-debuglog.md'
	// import MDIcon from '@/markdown/guides/dcp-icon.md'

	export default {
		name: 'Guides',
		metaInfo: {
			title: 'Guides',
			meta: [
				{
					name: 'description',
					content: 'Guides covering DCP and DECP usage',
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
						name: 'Workshop Guides',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Image Sizes',
						anchor: 'image-sizes',
						component: MDWorkshopImageSizes,
						groupKey: 'workshop'
					},
					{
						name: 'ZIP Upload',
						anchor: 'workshop-zip',
						component: MDWorkshopZip,
						groupKey: 'workshop'
					},
					{
						name: 'Play Mods',
						anchor: 'workshop-play',
						component: MDWorkshopPlay,
						groupKey: 'workshop'
					},
					{
						name: 'Publish Mods',
						anchor: 'workshop-publish',
						component: MDWorkshopPublish,
						groupKey: 'workshop'
					},
					{
						name: 'Weapons Guides',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'weapons.json',
						anchor: 'weaponsjson',
						component: MDWeapons,
						groupKey: 'weapons'
					},
					{
						name: 'Misc Guides',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Debug Log',
						anchor: 'debuglog',
						component: MDDebuglog,
						groupKey: 'misc'
					},
					// {
					// 	name: 'Custom Icon',
					// 	anchor: 'icon',
					// 	component: MDIcon,
					// 	groupKey: 'misc'
					// },
				],
				groupKeys:
				{
					workshop: 'Workshop',
					weapons: 'Weapons',
					misc: 'Misc',
				}
			}
		},
	}
</script>
