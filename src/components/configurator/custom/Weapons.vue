<template>
	<div class="weapons-view">
		<div>
			<div class="weapons-grid" v-for="group in groups" :key="group">
				<section class="weapon"
					v-for="(weapon, weaponKey) in getWeaponObjectsByGroup( group )" :key="weaponKey"
					@click.left="setPrimaryWeapon( weapon.index )"
					@click.right.prevent="setSecondaryWeapon( weapon.index )"
					:class="[
						{ 'current current-primary' : weapon.index === currentPrimaryIndex },
						{ 'current current-secondary' : weapon.index === currentSecondaryIndex },
						{ 'is-unusable' : !weapon.is_working }
					]">

					<div class="img-container" :class="[ { 'noimg' : !weapon.pickup_str }, { 'noimg-custom' : weapon.id === 'PChoice' } ]">
						<div v-if="weapon.pickup_str" class="img-bg" :style="{ backgroundImage : `url(${getWeaponImageUrl( weapon.pickup_str )})` }"></div>
						<div v-else class="img-bg"></div>
					</div>

					<div class="details">
						<div class="name-container font-serif">
							<h3>{{ weapon.name }}</h3>
						</div>
						<div class="description" v-if="showWeaponDescriptions">
							{{ weapon.description }}
						</div>
					</div>

					<!-- todo: refactor into loop -->
					<div class="details specs" v-if="showWeaponStats">
						<div class="spec-row" :class="{ 'spec-na' : weapon.dmg === 0 }">
							<div class="spec-col">DMG</div>
							<div class="spec-col">{{ weapon.dmg }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : weapon.hs_dmg === weapon.dmg }">
							<div class="spec-col">DMG HS</div>
							<div class="spec-col">{{ weapon.hs_dmg }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : weapon.bullets === 0 }">
							<div class="spec-col">Ammo</div>
							<div class="spec-col">{{ weapon.bullets }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : weapon.alert_range === 0 }">
							<div class="spec-col">Sound</div>
							<div class="spec-col">{{ weapon.alert_range }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : weapon.pierce === 0 }">
							<div class="spec-col">Pierce</div>
							<div class="spec-col">{{ weapon.pierce }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : fireRate( weapon.frames ) === 0  }">
							<div class="spec-col">RoF</div>
							<div class="spec-col">{{ fireRate( weapon.frames ) }}</div>
						</div>

						<div class="spec-row" :class="{ 'spec-na' : weapon.spread === 0 }">
							<div class="spec-col">Spread</div>
							<div class="spec-col">{{ weapon.spread }}</div>
						</div>
						<div class="spec-row" :class="{ 'spec-na' : weapon.recoil === 0 }">
							<div class="spec-col">Recoil</div>
							<div class="spec-col">{{ weapon.recoil }}</div>
						</div>
					</div>

					<div class="details specs more-specs">
						<div v-if="showExtraData && (weapon.index !== 4 && weapon.index !== -1)" class="specs font-sans">
							<div class="spec-row" v-for="([objKey, objVal]) in Object.entries( weapon )" :key="objKey">
								<div class="spec-key" :class="{ 'spec-na' : objVal === -1 }">{{ objKey }}:</div>
								<div class="spec-value" :class="{ 'spec-na' : objVal === -1 }">{{ objVal }}</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div class="weapons-rack">
			<CurrentWeaponsRack :primaryWpn="getWeaponObjectByIndex( currentPrimaryIndex )" :secondaryWpn="getWeaponObjectByIndex( currentSecondaryIndex )"/>
		</div>
	</div>
</template>

<script>
	import weapons from '@/data/weapons';
	import CurrentWeaponsRack from '@/components/CurrentWeaponsRack';

	export default {
		name: 'Weapons',
		components: {
			CurrentWeaponsRack
		},
		data() {
			return {
				weapons,
				groups: [
					'None',
					'Revolver',
					'Pistol',
					'SMG',
					'Shotgun',
					'Rifle',
					'Launcher',
					'Melee',
					'Consumable',
				],
			}
		},
		computed: {
			showExtraData()
			{
				return this.$store.getters.getSetting( 'showExtraData' );
			},
			currentPrimaryIndex()
			{
				return this.$store.getters.getPrimaryWeapon;
			},
			currentSecondaryIndex()
			{
				return this.$store.getters.getSecondaryWeapon;
			},
			showWeaponStats()
			{
				return this.$store.getters.getSetting( 'showWeaponStats' );
			},
			showWeaponDescriptions()
			{
				return this.$store.getters.getSetting( 'showWeaponDescriptions' );
			},
			showUnusableWeapons()
			{
				return this.$store.getters.getSetting( 'showUnusableWeapons' );
			},
		},
		//@TODO: Tidy this up
		methods: {
			filterAvailableWeapons( weaponSet )
			{
				// Filter out templates/broken/unfinished
				if ( this.showUnusableWeapons )
				{
					return weaponSet.filter( w => w.type !== 'bullet' );
				}
				else
				{
					return weaponSet.filter( w => w.is_working && w.type !== 'bullet' );
				}
			},
			getWeaponObjectsByGroup( group )
			{
				return this.filterAvailableWeapons( weapons.filter( w => w.group === group ) );
			},
			getWeaponObjectByIndex( wpnIndex )
			{
				return this.filterAvailableWeapons( weapons.filter( w => w.index === wpnIndex ) )[0];
			},
			getWeaponImageUrl( pickup_str )
			{
				return ( pickup_str && pickup_str !== -1 ) ? require( `@/assets/sprites/weapon/${pickup_str}.png` ) : '';
			},
			setPrimaryWeapon( weaponIndex )
			{
				const newWeaponIndex = ( this.currentPrimaryIndex === weaponIndex ) ? 4 : weaponIndex;

				this.$store.commit( 'setPrimaryWeapon', newWeaponIndex );
			},
			setSecondaryWeapon( weaponIndex )
			{
				const newWeaponIndex = ( this.currentSecondaryIndex === weaponIndex ) ? 4 : weaponIndex;

				this.$store.commit( 'setSecondaryWeapon', newWeaponIndex );
			},
			fireRate( frames )
			{
				if ( !frames || frames === -1 )
				{
					return 0;
				}

				return Math.round( 60 / frames );
			}
		},
	}
</script>


<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	$img-container-height: 70px;

	.weapons-view {
		display: grid;
		grid-template-columns: 3fr 2fr;

		@media (max-width: 1024px)  {
			grid-template-columns: 1fr;

			.weapons-rack {
				display: none;
			}
		}
	}


	// Grid
	// ====================================

	.weapons-grid {
		--grid-cols: 2;
		display: grid;
		grid-column-gap: 15px;
		grid-template-columns: repeat(var(--grid-cols), 1fr);
		grid-template-rows: auto;
		margin-bottom: 20px;
		grid-row-gap: 10px;

		@media (min-width: 500px)  {
			--grid-cols: 3;
		}

		@media (min-width: 700px)  {
			--grid-cols: 4;
		}

		@media (min-width: 960px)  {
			--grid-cols: 5;
		}

		// rack from 1025
		@media (min-width: 1025px) {
			--grid-cols: 4;
		}

		// (sidebar from 1330)

		@media (min-width: 1500px) {
			--grid-cols: 5;
		}

		@media (min-width: 1660px) {
			--grid-cols: 6;
		}

		&:empty {
			display: none;
		}
	}

	// Details
	// ====================================

	.details {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		.name-container {
			color: #fff;
			font-size: 1.4rem;
			min-height: 65px;
			padding: 10px;
			text-align: center;
			font-family: $font-serif;
			display: flex;
			align-content: center;
			justify-content: center;
			flex-direction: column;
		}

		.description {
			background-color: rgba(255, 255, 255, 0.05);
			color: #ccc;
			font-size: 1.15rem;
			line-height: 1;
			padding: 10px;
			flex-grow: 2;
			min-height: 70px;
		}
	}

	// Image
	// ====================================

	.img-container {
		background-color: #383D3F;
		image-rendering: pixelated;
		padding: 20px;
		height: $img-container-height;
	}

	.img-bg {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		filter: drop-shadow(2px 4px 0px rgba(0, 0, 0, 0.2));
		height: 30px;
		margin: 0 auto;
		// width: 100px;
		width: 100%;
		transition: 0.3s;
	}

	// Hover + Active
	// ====================================

	.weapon {
		position: relative;
		cursor: pointer;
		background-color: #222222;
		margin-bottom: 10px;
		transition: 0.15s;

		&:hover {
			background-color: #2d2d2d;

			.img-container {
				background-color: #383D3F;
			}

			.img-bg {
				filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.5));
				transform: translate(-2px, -2px);
			}
		}

		&.current-primary {
			background-color: darken($color-g, 40);

			.img-container {
				background-color: darken($color-g, 30);
			}
		}

		&.current-secondary {
			background-color: darken($color-b, 40);

			.img-container {
				background-color: darken($color-b, 30);
			}
		}

		&.current-primary.current-secondary {
			background-color: darken($color-or, 40);

			.img-container {
				background-color: darken($color-or, 30);
			}
		}

		&.is-unusable {
			animation-duration: .5s;
			animation-iteration-count: 1;
			animation-name: item-fade-in;
			animation-timing-function: ease-out;

			.name-container {
				color: $color-r;
			}

			.img-container {
				background-color: darken($color-r, 40);
			}

			&.current {
				.img-container {
					background-color: rgba(darken($color-r, 40), .8);
				}
			}
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

	// Specs
	// ============================

	.specs {
		.spec-row {
			display: flex;

			&:nth-of-type(even) {
				// background-color: rgba(255, 255, 255, .1);
				background-color: rgba(255, 255, 255, 0.025);
			}
		}

		.spec-col {
			flex: 0 0 70%;
			padding: 2px 10px;
			font-size: 1.2rem;

			&:last-child {
				text-align: right;
				flex-basis: 30%;
			}
		}

		.spec-na {
			color: #797979;
		}
	}

	.more-specs {
		// font-family: $font-sans;
		font-size: .9rem;
		line-height: 1.1;

		.spec-row {
			padding: 5px;

			&:nth-of-type(odd) {
				background-color: rgba(255, 255, 255, .1);
				// background-color: rgba(255, 255, 255, 0.025);
			}
		}

		.spec-key {
			flex: 0 0 80px;
		}

		.spec-value {
			text-align: right;
			flex: 1 1 auto;
		}
	}
</style>
