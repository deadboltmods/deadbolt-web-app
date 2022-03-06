<template>
	<div>
		<p>Details of the options available in custom.json, the new config for custom levels.</p>

		<Table :rows="rows" :columns="columns"/>
	</div>
</template>

<script>
	import Table from '@/components/Table.vue'

	export default {
		name: 'SettingsCustom',
		components: {
			Table
		},
		data() {
			return {
				columns: {
					col1: 'Group',
					col2: 'Name',
					col3: 'Default',
					col4: 'Description',
				},
				rows: [
					{
						col1: 'DCP',
						col2: 'version',
						col3: 'depends',
						col4: 'The version of DCP when the config was generated.',
						modileHideCol1: false,
					},
					{
						col1: 'player_properties',
						col2: 'sprite_base',
						col3: 'sP',
						col4: 'The base string for the player\'s sprite. Change this to use NPC sprites. Always wrap with inverted commas, eg <code>"sZomb1"</code>. If there are any sprites missing for your character you will see a grey reaper.',
						modileHideCol1: false,
					},
					{
						col1: 'player_properties',
						col2: 'sprite_removeweaponstring',
						col3: '<span class="color-r">false</span>',
						col4: 'Always use <span class="color-g">true</span> if sprite_base is not sP. This makes NPC sprites work.',
						modileHideCol1: true,
					},
					{
						col1: 'player_properties',
						col2: 'run_speed',
						col3: '2',
						col4: 'How fast you move. Most characters are 2. Amber is the fastest, with 4.',
						modileHideCol1: true,
					},
					{
						col1: 'player_properties',
						col2: 'health',
						col3: '30',
						col4: 'HP. For an overview of NPC survivability, see the STK (shots to kill) tab in the master data <a target="_blank" href="https://docs.google.com/spreadsheets/d/1qRyF3laHK2bKYyI552aA5PElzib8ak1FfLNxDId9Lzg/edit#gid=1841226704">spreadsheet</a>',
						modileHideCol1: true,
					},
					{
						col1: 'player_properties',
						col2: 'blood_type',
						col3: '5',
						col4: 'Blood colour. 1-3 is red. 4 is grey. 5 is black.',
						modileHideCol1: true,
					},
					{
						col1: 'player_properties',
						col2: 'no_ragdoll',
						col3: '<span class="color-r">false</span>',
						col4: 'If <span class="color-g">true</span>, prevents a ragdoll from showing on death. Use <span class="color-g">true</span> if your NPCs has no ragdoll sprites. Most killable enemies do. Try playing  without this enabled; if you see a reaper ragdoll on death, that NPC has no ragdoll sprites.',
						modileHideCol1: true,
					},
					{
						col1: 'player_weapons',
						col2: 'set_primary',
						col3: '-1',
						col4: 'Primary weapon index. Use -1 for player choice (ie. whatever weapon they last used in the campaign)',
						modileHideCol1: false,
					},
					{
						col1: 'player_weapons',
						col2: 'set_secondary',
						col3: '-1',
						col4: 'Secondary weapon index. Use 4 (the ID for punch) for no weapons.',
						modileHideCol1: true,
					},
					{
						col1: 'player_weapons',
						col2: 'ignore_carryover',
						col3: '<span class="color-r">false</span>',
						col4: 'If <span class="color-g">true</span>, prevents the player keeping weapons when transitioning between levels. Mainly used for custom campaigns.',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'gun_weapons',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can shoot guns. Use <span class="color-r">false</span> if your character has no gun sprites',
						modileHideCol1: false,
					},
					{
						col1: 'player_canuse',
						col2: 'melee_smash',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can melee attack (eg. knife stab). Use <span class="color-r">false</span> if your character has no melee sprites',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'melee_throw',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can throw melee weapons (eg throw hammer). Works with any character that has gun sprites.',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'vent',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can enter and exit vents (only Reaper has the required sprites)',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'cover',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can hide behind cover (some NPCs do not have cover sprites)',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'ladder',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can climb ladders (only Reaper has the required sprites)',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'weapon_pickups',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can pick up weapons (either dropped by enemies or placed in the level)',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'cartrunk',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can swap weapons via the car trunk',
						modileHideCol1: true,
					},
					{
						col1: 'player_canuse',
						col2: 'charon',
						col3: '<span class="color-g">true</span>',
						col4: 'Player can interact with Charon and buy new weapons',
						modileHideCol1: true,
					},
					{
						col1: 'weather',
						col2: 'raining',
						col3: '-1',
						col4: 'If <span class="color-g">true</span>, enables rain. Default (-1) means, enable rain if the player is in hard mode, disable it otherwise',
						modileHideCol1: false,
					},
					{
						col1: 'weather',
						col2: 'snowing',
						col3: '-1',
						col4: 'If <span class="color-g">true</span>, enables snow. Default (-1) means, enable snow if the background is "planes of life"',
						modileHideCol1: true,
					},
					{
						col1: 'weather',
						col2: 'multifactor_rain',
						col3: '-1',
						col4: 'How heavy the rainfall is. The default of -1 means rain heaviness is determined by the player\'s current graphics setting (1-3). The number you specify will also be multipled by the player\'s graphics settings (eg, if you set 2 and the player\'s graphics setting is 3, the rainfall straength in-game will be 6).',
						modileHideCol1: true,
					},
					{
						col1: 'weather',
						col2: 'multifactor_snow',
						col3: '-1',
						col4: 'How heavy the snowfall is. The default of -1 means, on normal mode the heavines is 1, on hard it is 4.',
						modileHideCol1: true,
					},
					{
						col1: 'car_trunk',
						col2: 'NA',
						col3: 'NA',
						col4: 'These settings allow you to access any weapon from the trunk. They will be moved to globalconfig.json in a future version of DCP.',
						modileHideCol1: false,
					},
				],
			}
		}
	}
</script>
