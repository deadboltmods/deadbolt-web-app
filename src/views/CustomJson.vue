<template>
	<ContentWithSidebar
		:sections="sections"
		:groupKeys="groupKeys"
		:settings="settings"
		:widgets="widgets" />
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import CustomJsonContent from '@/components/content/CustomJsonContent'
	import Character from '@/components/configurator/custom/Character'
	import Weapons from '@/components/configurator/custom/Weapons'
	import Output from '@/components/configurator/custom/Output'
	import ChoicesWidget from '@/components/configurator/custom/ChoicesWidget'

	const weaponsIntro = `
		Choose your <span class="color-g">primary</span> (<span class="color-g">LMB</span>) and <span class="color-b">secondary</span> (<span class="color-b">RMB</span>) weapons.
		<br>
		You can use the same weapon for <span class="color-lorange">both</span>.
	`;

	export default {
		name: 'CustomJson',
		title: 'Build custom.json | Deadbolt Game Mods',
		metaInfo: {
			title: 'Builds custom.json',
			meta: [
				{
					name: 'description',
					content: 'Builds your custom.json file, which allows you to play as NPCs and more',
				}
			],
		},
		components: {
			ContentWithSidebar
		},
		data() {
			return {
				sections: [
					{
						name: 'Level Config',
						anchor: 'intro',
						component: CustomJsonContent,
						groupKey: 'intro',
						intro: null,
						fullwidth: true,
						useStyledContentClass: false
					},
					{
						name: 'Character',
						anchor: 'character',
						component: Character,
						groupKey: 'options',
						intro: 'Choose your character with <span class="color-g">LMB</span>.<br>Each has their own stats, weapon and capabilities.',
						fullwidth: true,
						useStyledContentClass: false
					},
					{
						name: 'Weapons',
						anchor: 'weapons',
						component: Weapons,
						groupKey: 'options',
						intro: weaponsIntro,
						fullwidth: true,
						useStyledContentClass: false
					},
					{
						name: 'Output',
						anchor: 'output',
						component: Output,
						groupKey: 'options',
						intro: 'The final custom.json file contents.',
						fullwidth: true,
						useStyledContentClass: false
					},
				],
				groupKeys: {
					intro: 'Intro',
					options: 'Options'
				},
				widgets: [
					ChoicesWidget
				],
				settings: {
					'Character': [
						'showUnplayableCharacters'
					],
					'Weapons': [
						'showWeaponDescriptions',
						'showWeaponStats',
						// 'showUnusableWeapons',
					],
					'Misc': [
						'showExtraData',
					]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	//
</style>