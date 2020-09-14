<template>
	<div class="output-view centered-content">
		<div class="output-box" :style="{ 'background-image': `url(${ require( '@/assets/sprites/gui/sMissionFolder-blank.png' ) })` }">
			<textarea :value="JSON.stringify(compiledJson, null, 2)" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
		</div>

		<div class="content font-sans">
		<p>To use: Save this as <span class="color-purple">custom.json</span>, and put it inside your <span class="color-teal">Levels</span> folder.</p>
		<p>To publish, upload it in a ZIP file with your level(s).</p>
		</div>
	</div>
</template>

<script>
	import npcs from '@/data/npcs';

	export default {
		name: 'Output',
		data() {
			return {
				dcpVersion: '1.6.0',
			}
		},
		computed: {
			compiledJson()
			{
				const character = npcs.find( n => n.id === this.getCurrentCharacterId );

				return {
					DCP: {
						dcpc_DCP__version: this.dcpVersion
					},
					player_properties: {
						dcpc_player__sprite_base: character.sprite,
						dcpc_player__sprite_removeweaponstring: ( character.id !== 'P' ),
						dcpc_player__run_speed:   character.run_speed,
						dcpc_player__health:      character.hp,
						dcpc_player__blood_type:  character.blood_type,
						dcpc_player__no_ragdoll: !character.canRagdoll
					},
					player_weapons: {
						dcpc_player_weapons__set_primary: this.getPrimary,
						dcpc_player_weapons__set_secondary: this.getSecondary,
						dcpc_player_weapons__ignore_carryover: true
					},
					player_canuse: {
						dcpc_player_canuse__gun_weapons:    character.abilities.gun_weapons,
						dcpc_player_canuse__melee_smash:    character.abilities.melee_smash,
						dcpc_player_canuse__melee_throw:    character.abilities.melee_throw,
						dcpc_player_canuse__vent:           character.abilities.vent,
						dcpc_player_canuse__cover:          character.abilities.cover,
						dcpc_player_canuse__ladder:         character.abilities.ladder,
						dcpc_player_canuse__weapon_pickups: character.abilities.weapon_pickups,
						dcpc_player_canuse__cartrunk:       character.abilities.cartrunk,
						dcpc_player_canuse__charon:         character.abilities.charon,
					},
				}
			},
			getCurrentCharacterId()
			{
				return this.$store.getters.getCharacterId;
			},
			getPrimary()
			{
				return this.$store.getters.getPrimaryWeapon;
			},
			getSecondary()
			{
				return this.$store.getters.getSecondaryWeapon;
			},
		},
	}

</script>

<style lang="scss" scoped>
	// .output-view {}

	.output-box {
		background-image: no-repeat;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 550px;
		margin: 0 auto 40px;
		padding-left: 40px;
		padding-top: 20px;
		// width: 500px;
		position: relative;
		left: 20px;
		max-width: 500px;
		width: 100%;
	}

	textarea {
		background-color: rgba(255, 255, 255, 0.2);
		color: #29231a;
		display: block;
		height: 100%;
		max-height: 480px;
		max-width: 400px;
		border: 3px dashed #635846;
		width: 100%;
	}

	p {
		font-size: 1.1rem;
		margin-bottom: 10px;
		text-align: center;
	}

	@media (max-width: 600px) {
		.output-box {
			background-color: #998A75;
			background-image: none;
			padding: 20px;

			textarea {
				max-height: none;
			}
		}
	}
</style>