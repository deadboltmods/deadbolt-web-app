<template>
	<div>
		<!-- <p>View the available settings in <a target="_blank" href="https://docs.google.com/spreadsheets/d/1P4ytr90j9rPyBrtg4JEtZhmRXLGukJ8JqWdOkm3F0ck/edit#gid=0">this</a> spreadsheet.</p> -->
		<Table :rows="rows" :columns="columns" />
	</div>
</template>

<script>
	import Table from '@/components/Table.vue'

	export default {
		name: 'SettingsGlobalConfig',
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
						col4: 'The version of DCP',
						modileHideCol1: false,
					},
					{
						col1: 'loadgame',
						col2: 'morestats',
						col3: false,
						col4: 'Show more info on the Load Game screen: deaths and souls count',
						modileHideCol1: false,
					},
					{
						col1: 'screenshots',
						col2: 'fix_timestamp',
						col3: false,
						col4: 'Fix the timestamp for saved screenshots to use the format YYY-MM-DD (instead of D-M-YYYY)',
						modileHideCol1: false,
					},
					{
						col1: 'counter',
						col2: 'deathscounter_use',
						col3: false,
						col4: 'Show a deaths counter in-game, instead of a souls counter',
						modileHideCol1: false,
					},
					{
						col1: 'counter',
						col2: 'soulscounter_hide',
						col3: false,
						col4: 'Hide the souls counter',
						modileHideCol1: false,
					},
					{
						col1: 'tips',
						col2: 'disablemain',
						col3: false,
						col4: 'Disable tip popups in the main game (these show every 10 deaths)',
						modileHideCol1: false,
					},
					{
						col1: 'tips',
						col2: 'disableworkshop',
						col3: false,
						col4: 'Disable tips in custom levels',
						modileHideCol1: false,
					},
					{
						col1: 'indicators: ai',
						col2: 'aimtarget',
						col3: false,
						col4: 'Show where enemies are aiming',
						modileHideCol1: false,
					},
					{
						col1: 'indicators: ai',
						col2: 'hurtdir',
						col3: false,
						col4: 'Show the direction enemies were recently hit',
						modileHideCol1: true,
					},
					{
						col1: 'indicators: ai',
						col2: 'target',
						col3: false,
						col4: 'Show where enemies are searching',
						modileHideCol1: true,
					},
					{
						col1: 'indicators: sound',
						col2: 'enemy_alert',
						col3: false,
						col4: 'Show enemy alert pings',
						modileHideCol1: false,
					},
					{
						col1: 'indicators: sound',
						col2: 'general',
						col3: false,
						col4: 'Show general noises, including your footsteps',
						modileHideCol1: true,
					},
					{
						col1: 'indicators: sound',
						col2: 'weapon_aim',
						col3: false,
						col4: 'Show the sound radius of your weapon\'s shot while aiming (recomended). This is the only indicator that wasn\'t built into the game\'s hidden debug mode',
						modileHideCol1: true,
					},
					{
						col1: 'indicators: sound',
						col2: 'weapon_fired',
						col3: false,
						col4: 'Show the sound radius of fired weapons',
						modileHideCol1: true,
					},
					{
						col1: 'levelend',
						col2: 'quickrestart',
						col3: false,
						col4: 'Press R to quickly restart a completed level',
						modileHideCol1: false,
					},
					{
						col1: 'levelend',
						col2: 'showpartime',
						col3: false,
						col4: 'Show the level par time after completing a level',
						modileHideCol1: true,
					},
					{
						col1: 'customlocal',
						col2: 'debug',
						col3: false,
						col4: 'Enable debug mode for custom levels. Help text in the bottom-right corner lists numpad keys to toggle features',
						modileHideCol1: false,
					},
					{
						col1: 'customlocal',
						col2: 'opentrunk',
						col3: false,
						col4: 'The trunk is always open, even after firing a weapon',
						modileHideCol1: true,
					},
					{
						col1: 'customlocal',
						col2: 'teleport',
						col3: true,
						col4: 'Hold Shift and press MMB to teleport',
						modileHideCol1: true,
					},
					{
						col1: 'pause',
						col2: 'althoversound',
						col3: true,
						col4: 'Use a quieter hover sound for the pause menu',
						modileHideCol1: false,
					},
					{
						col1: 'pause',
						col2: 'showlevelname',
						col3: false,
						col4: 'Show the level name when paused',
						modileHideCol1: true,
					},
					{
						col1: 'pause',
						col2: 'showmissionnumber',
						col3: false,
						col4: 'Show the mission number when paused',
						modileHideCol1: true,
					},
					{
						col1: 'pause',
						col2: 'workshop_menu',
						col3: true,
						col4: 'Add new options to the Workshop pause menu (Restart, Quit to Custom)',
						modileHideCol1: true,
					},
					{
						col1: 'skip',
						col2: 'intro',
						col3: false,
						col4: 'Skip the two intro scenes when the game boots',
						modileHideCol1: false,
					},
					{
						col1: 'skip',
						col2: 'mainmenu',
						col3: false,
						col4: 'Skip the main menu and autoload the active campaign save',
						modileHideCol1: true,
					},
					{
						col1: 'skip',
						col2: 'apartment',
						col3: false,
						col4: 'Skip the apartment and open the mission select menu immediately',
						modileHideCol1: true,
					},
					{
						col1: 'skip',
						col2: 'cutscenes_campaign',
						col3: true,
						col4: 'Skip campaign cutscenes. WARNING: This can cause the game to freeze in some levels, which use cutscenes to progress',
						modileHideCol1: true,
					},
					{
						col1: 'sprites',
						col2: 'pipeblockvalveopen',
						col3: false,
						col4: 'Make open pips valve green',
						modileHideCol1: false,
					},
					{
						col1: 'sprites',
						col2: 'playermines',
						col3: false,
						col4: 'Make mines placed by the player green',
						modileHideCol1: true,
					},
					{
						col1: 'paths',
						col2: 'workshop_id_campaign_stages',
						col3: false,
						col4: 'Used to play custom campaigns. Temporary, will be reworked in a later version of DCP.',
						modileHideCol1: false,
					},
					{
						col1: 'paths',
						col2: 'workshop_id_campaign_dialogue',
						col3: false,
						col4: 'Used to load custom dialogue JSONs from the workshop. Temporary',
						modileHideCol1: true,
					},
					{
						col1: 'paths',
						col2: 'level_filename_prefix',
						col3: false,
						col4: 'Used for custom workshop campaigns. Temporary',
						modileHideCol1: true,
					},
					{
						col1: 'music_index',
						col2: 'credits',
						col3: "DBR0",
						col4: 'Music for the credits',
						modileHideCol1: false,
					},
					{
						col1: 'music_index',
						col2: 'mainmenu',
						col3: "DBX9",
						col4: 'Music for the main menu',
						modileHideCol1: true,
					},
					{
						col1: 'music_index',
						col2: 'apt',
						col3: "DBF1",
						col4: 'Music for the apartment gramaphone',
						modileHideCol1: true,
					},
					{
						col1: 'debuglog',
						col2: 'custom_level_details',
						col3: false,
						col4: 'Log extended info for custom levels',
						modileHideCol1: false,
					},
					{
						col1: 'debuglog',
						col2: 'loadobjects',
						col3: false,
						col4: 'Log objects as they\'re loaded into a level',
						modileHideCol1: true,
					},
					{
						col1: 'debuglog',
						col2: 'fulljson',
						col3: false,
						col4: 'Log full JSON, whenever JSON is loaded by DCP',
						modileHideCol1: true,
					},
					{
						col1: 'debuglog',
						col2: 'cartrunk_items',
						col3: false,
						col4: 'Log all car trunk items',
						modileHideCol1: true,
					},
					{
						col1: 'developer',
						col2: 'force_original_resolution',
						col3: false,
						col4: 'Make the game run in its unscaled, tiny resolution. Used during DCP development to work out spacing',
						modileHideCol1: false,
					},
					{
						col1: 'experimental',
						col2: 'varies',
						col3: 'varies',
						col4: 'Temporary options to preview WIP features',
						modileHideCol1: false,
					},
				],
			}
		}
	}
</script>
