<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys" :fullwidth="true"/>
	</div>
</template>
<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import LevelConfigSettingsTable from '@/components/content/tables/LevelConfigSettingsTable'

	export default {
		name: 'Resources',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'custom.json',
						anchor: 'customjson',
						component: LevelConfigSettingsTable,
						groupKey: 'dcp',
					},
				],
				groupKeys:
				{
					dcp: 'DCP',
					decp: 'DECP',
				}
			}
		},
	}
</script>
