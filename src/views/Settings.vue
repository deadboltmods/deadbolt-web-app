<template>
	<div>
		<ContentWithSidebar
			:sections="sections"
			:groupKeys="groupKeys"/>
	</div>
</template>
<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import SettingsCustom from '@/components/content/settings/SettingsCustom'
	import SettingsGlobalConfig from '@/components/content/settings/SettingsGlobalConfig'
	import SettingsDECP from '@/components/content/settings/SettingsDECP'

	export default {
		name: 'Settings',
		title: 'Config Settings | Deadbolt Game Mods',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'DCP Settings',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'custom.json',
						anchor: 'customjson',
						component: SettingsCustom,
						groupKey: 'dcp',
						fullwidth: true,
					},
					{
						name: 'globalconfig.json',
						anchor: 'globalconfig',
						component: SettingsGlobalConfig,
						groupKey: 'dcp',
						fullwidth: true,
					},
					{
						name: 'DECP Settings',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'DECP.ini',
						anchor: 'decpini',
						component: SettingsDECP,
						groupKey: 'decp',
						fullwidth: false,
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
