<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import MDWorkshopPlay from '@/markdown/guides/dcp-workshop-play.md'
	import MDWorkshopPublish from '@/markdown/guides/dcp-workshop-publish.md'
	import MDWeapons from '@/markdown/guides/dcp-weapons.md'
	import MDDebuglog from '@/markdown/guides/dcp-debuglog.md'
	// import MDIcon from '@/markdown/guides/dcp-icon.md'

	export default {
		name: 'Resources',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'Play',
						anchor: 'workshop-play',
						component: MDWorkshopPlay,
						groupKey: 'workshop'
					},
					{
						name: 'Publish',
						anchor: 'workshop-publish',
						component: MDWorkshopPublish,
						groupKey: 'workshop'
					},
					{
						name: 'Weapons',
						anchor: 'weapons',
						component: MDWeapons,
						groupKey: 'weapons'
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
