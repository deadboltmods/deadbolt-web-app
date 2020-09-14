<template>
	<div class="character"
		@click="setCharacter( npc )"
		:class="[
			{ 'current' : getCurrentCharacterId === npc.id },
			{ 'unplayable' : !npc.isPlayable },
			'character--group-' + npc.group,
		]">

		<div class="img">
			<img :src="require( `@/assets/sprites/npc/${npc.sprite}.png` )" :alt="npc.name">
			<!-- <h3 class="name font-serif" :class="{ 'name-small' : npc.name.length >= 10 }">{{ npc.name }}</h3> -->
		</div>

		<div class="specs font-sans">
			<div class="spec-row">
				<h3 class="spec-name font-serif" :class="'spec-name--' + npc.group">
					<span :class="{ 'spec-name-small' : npc.name.length >= 10 }">
						{{ npc.name }}
					</span>
				</h3>
			</div>

			<div class="spec-row">
				<div class="spec-weapon" :class="{ 'spec-weapon--hidden' : weaponIsMelee(npc) }">
					<div class="spec-weapon-1">
						{{ getWeaponName( npc, true ) }}
					</div>
					<div v-if="hasSecondWeapon( npc ) && npc.wpn1_index !== hasSecondWeapon( npc )">
						{{ getWeaponName( npc, false ) }}
					</div>
				</div>
			</div>

			<div class="spec-row">
				<div class="spec-col">
					<div>{{ npc.hp }}</div>
					<div>Health</div>
				</div>
				<div class="spec-col">
					<div>{{ npc.run_speed }}</div>
					<div>Speed</div>
				</div>
			</div>
		</div>

		<div class="specs more-specs font-sans" v-if="showExtraData">
			<div class="spec-row" v-for="detail in extraDetails" :key="detail">
				<div class="spec-key">{{ detail }}</div>
				<div class="spec-value">{{ npc[detail] }}</div>
			</div>
		</div>
	</div>

</template>

<script>
	import bloodType from '@/data/bloodType'
	import weapons from '@/data/weapons'

	export default {
		name: 'CharacterCard',
		props: {
			npc: {
				type: Object,
				required: true
			},
			group: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				// npc,
				// weapons,
				// a11ytext: false
				extraDetails: [ 'id', 'sprite', 'wpn1_index', 'wpn2_index', 'blood_type', 'isBoss', 'isPlayable', 'canRagdoll' ]
			}
		},
		computed: {
			getCurrentCharacterId()
			{
				return this.$store.getters.getCharacterId;
			},
			showExtraData()
			{
				return this.getSetting( 'showExtraData' );
			},
		},
		methods: {
			weaponIsMelee( npc )
			{
				return this.getWeaponName( npc, true ) === 'Melee';
			},
			getSetting( key )
			{
				return this.$store.getters.getSetting( key );
			},
			firstWeaponString( npc )
			{
				return ( this.hasSecondWeapon( npc ) ) ? 'Weapons' : 'Weapon';
			},
			weaponAffix( npc )
			{
				if ( npc.wpn1_index === this.hasSecondWeapon( npc ) )
				{
					return ' x2';
				}
				else if ( this.hasSecondWeapon( npc ) )
				{
					return ','
				}

				return '';
			},
			hasSecondWeapon( npc )
			{
				// Returns null if second weapon is punch (4) or "player choice" (-1)
				return ( npc.wpn2_index !== 4 && npc.wpn2_index !== -1 ) ? npc.wpn2_index : null;
			},
			getWeaponName( npc, isFirst )
			{
				let wpnIndex = npc.wpn1_index;

				if ( !isFirst )
				{
					wpnIndex = npc.wpn2_index;
				}

				let wpnString = '';

				switch( wpnIndex )
				{
					case -1:
						wpnString = 'Player Choice';
						break;

					case 4: // Punch
						wpnString = 'Melee';
						break;

					default:
						wpnString = weapons.filter( w => w.index === wpnIndex )[0].name;
				}

				if ( isFirst )
				{
					wpnString += this.weaponAffix( npc )
				}

				return wpnString;
			},
			// @example getBloodStatById( 1, 'name' )
			// @example getBloodStatById( 1, 'baseColor' )
			getBloodStatByIndex( bloodIndex, stat )
			{
				return bloodType[bloodIndex]?.[stat];
			},
			setCharacter( npc )
			{
				// Set character
				this.$store.commit( 'setCharacterId', npc.id );

				// Set weapons
				this.$store.commit( 'setPrimaryWeapon', npc.wpn1_index );
				this.$store.commit( 'setSecondaryWeapon', npc.wpn2_index );
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	.character {
		align-items: center;
		background-color: #222222;
		cursor: pointer;
		padding: 0;
		position: relative;

		&.current {
			animation-duration: 1s;
			animation-iteration-count: 1;
			animation-name: selected-glow-Reaper; // overridden via $groupcolors-map
			animation-timing-function: ease-out;
			background-color: darken($color-g, 40);
			cursor: default;
		}

		&:hover:not(.current) {
			background-color: #2d2d2d;
		}

		&.unplayable {
			animation-duration: 1.5s;
			animation-iteration-count: 1;
			animation-name: item-fade-in;
			animation-timing-function: ease-out;
		}
	}

	@keyframes item-fade-in {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.img {
		margin-right: 20px;
		margin: 0;
		padding: 5px;
		position: relative;

		.unplayable & {
			background-color: darken($color-r, 50);
		}

		img {
			background-color: #616161;
			image-rendering: pixelated;
			display: block;
			margin: 0 auto;
			width: 100%;

			.unplayable & {
				background-color: #5a3636;
			}
		}
	}

	.specs {
		font-size: 1.2rem;
		line-height: 1.1;
		transition: 0.4s;
		width: 100%;

		.spec-row {
			display: flex;
			padding-bottom: 5px;
		}

		.spec-col {
			text-align: center;
			flex: 0 0 50%;
			padding: 5px;
		}

		.spec-name {
			color: inherit;
			font-size: 1.5rem;
			margin-bottom: 5px;
			margin-top: 10px;
			text-align: center;
			width: 100%;

			.name-small {
				font-size: .8em;
				padding-top: 5px;
			}

			.unplayable & {
				color: #885753;
			}
		}

		.spec-weapon {
			background-color: rgba(255, 255, 255, .05);
			padding: 5px;
			text-align: center;
			width: 100%;

			&--hidden {
				background-color: rgba(255, 255, 255, .025);

				.spec-weapon-1 {
					visibility: hidden;
				}
			}
		}
	}

	.more-specs {
		font-size: 1.1rem;
		line-height: 1;
		margin-top: 10px;

		.spec-row {
			&:nth-of-type(even) {
				background-color: transparent;
			}

			&:nth-of-type(odd) {
				background-color: rgba(255, 255, 255, .1);
			}
		}

		.spec-key {
			flex: 0 0 70px;
			margin-right: 5px;
			padding-left: 5px;
		}

		.spec-value {
			flex-grow: 1;
			word-break: break-word;
			padding-right: 5px;
			// text-align: right;
		}
	}


	// Group-based colours
	// ============================================================================

	$groupcolors-map: (
		Reaper: (
			name: #A36929,
			bg:   #4e2418,
		),
		Zombie: (
			name: #5cab2b,
			bg:   darken($color-g, 40),
		),
		Vampire: (
			name: #9b70c3,
			bg:   darken(#9b70c3, 40),
		),
		Skeleton: (
			name: #a5a5a5,
			bg:   darken(#a5a5a5, 40),
		),
		Demon: (
			name: $color-r,
			bg:   darken($color-r, 40),
		),
		Misc: (
			name: $color-b,
			bg:   darken($color-b, 40)
		)
	);

	@each $group, $groupmap in $groupcolors-map {
		.character--group-#{$group} {
			&.current {
				// animation-duration: 1s;
				// animation-iteration-count: 1;
				animation-name: selected-glow-#{$group};
				// animation-timing-function: ease-out;
				// background-color: darken($color-g, 40);
				// cursor: default;
			}

			.spec-name {
				color: map-get( $groupmap, name );
			}

			&.current {
				background-color: map-get( $groupmap, bg );
			}
		}

		$group-glow-color: map-get( $groupmap, name );
		$glow-min: 0px;
		$glow-max: 20px;

		@keyframes selected-glow-#{$group} {
			0% {
				box-shadow: 0 0 $glow-min $group-glow-color;
			}

			50% {
				box-shadow: 0 0 $glow-max $group-glow-color;
			}

			100% {
				box-shadow: 0 0 $glow-min $group-glow-color;
			}
		}
	}

</style>
