<template>
	<div>
		<section class="abilities" v-if="allowedAbilities.length">
			<h2 class="font-serif">{{ currentCharacter.name }} can...</h2>
			<div class="ability" v-for="ability in allowedAbilities" :key="ability.name">
				<div class="star star-can" :style="{ 'background-image' : `url(${require( `@/assets/sprites/gui/sMissionFolderStar_6.png` )})` }"></div>
				<div class="description font-sans">{{ ability.description }}</div>
				<div v-if="showExtraData" class="name font-sans"> {{ ability.name }}</div>
			</div>
		</section>

		<section class="abilities" v-if="disallowedAbilities.length">
			<h2 class="font-serif">{{ currentCharacter.name }} cannot...</h2>
			<div class="ability" v-for="ability in disallowedAbilities" :key="ability.name">
				<div class="star star-cannot" :style="{ 'background-image' : `url(${require( `@/assets/sprites/gui/sMissionFolderStar_4.png` )})` }"></div>
				<div class="description font-sans">{{ ability.description }}</div>
				<div v-if="showExtraData" class="name font-sans"> {{ ability.name }}</div>
			</div>
		</section>
	</div>
</template>

<script>
	import npcs from '@/data/npcs';

	export default {
		name: 'Abilities',
		computed: {
			showExtraData()
			{
				return this.$store.getters.getSetting( 'showExtraData' );
			},
			currentCharacter()
			{
				return npcs.find( n => n.id === this.$store.getters.getCharacterId );
			},
			allowedAbilities()
			{
				return this.abilities.filter( a => a.value === true );
			},
			disallowedAbilities()
			{
				return this.abilities.filter( a => a.value === false );
			},
			abilities()
			{
				return [
					{
						name: 'gun_weapons',
						description: 'Fire Guns',
						value: this.canCharacterDo( 'gun_weapons' ),
					},
					{
						name: 'melee_smash',
						description: 'Melee Attack',
						value: this.canCharacterDo( 'melee_smash' ),
					},
					{
						name: 'melee_throw',
						description: 'Throw Weapons',
						value: this.canCharacterDo( 'melee_throw' ),
					},
					{
						name: 'weapon_pickups',
						description: 'Pick Up Weapons',
						value: this.canCharacterDo( 'weapon_pickups' ),
					},
					{
						name: 'cartrunk',
						description: 'Access Car Trunk',
						value: this.canCharacterDo( 'cartrunk' ),
					},
					{
						name: 'charon',
						description: 'Buy from Charon',
						value: this.canCharacterDo( 'charon' ),
					},
					{
						name: 'cover',
						description: 'Take cover',
						value: this.canCharacterDo( 'cover' ),
					},


					// Exclusive to Reaper
					{
						name: 'vent',
						description: 'Use Vents',
						value: this.canCharacterDo( 'vent' ),
					},
					{
						name: 'ladder',
						description: 'Climb Ladders',
						value: this.canCharacterDo( 'ladder' ),
					},
				]
			},
		},
		methods: {
			canCharacterDo( ability )
			{
				return this.currentCharacter.abilities[ability];
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	.abilities {
		max-width: 340px;

		+ .abilities {
			margin-top: 40px;
		}
	}

	h2 {
		font-size: 1.8rem;
		margin-bottom: 10px;
		flex: 1 0 100%;
	}

	.ability {
		align-items: center;
		display: flex;
		background-color: #1d1c1c;
		padding: 2px 5px;

		&:nth-of-type(odd) {
			background-color: #272727;
		}
	}

	.star {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 20px;
		width: 20px;
		margin-right: 10px;
	}

	.description {
		font-size: 1.4rem;
		line-height: 1;
	}

	.name {
		margin-left: auto;
		color: $color-b;
	}
</style>
